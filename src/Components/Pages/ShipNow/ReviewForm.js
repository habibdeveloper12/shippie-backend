import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FedexAuth from "../../../service/apiService";
import { useLocation } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import { prevStep } from "../../../store/formSlice";
import CryptoJS from "crypto-js";
import { daysOfWeek } from "../../../util/countries";
import { toast } from "react-toastify";
const ReviewForm = () => {
  const location = useLocation();
  let [loading, setLoading] = useState(true);
  const color = useState("#6213CB");
  const [shippingRate, setShippingRate] = useState(20);

  const [shippingDetails, setShippingDetails] = useState({
    firstService: {
      serviceName: "",
      date: "",
      cost: "",
    },
    secondService: {
      serviceName: "",
      date: "",
      cost: "",
    }
  });
  const { addons } = useSelector((state) => state.form);
  const form = useSelector((state) => state.form);

  const dispatch = useDispatch();
  const { insurance, taxes_and_duties } = addons;
  const onRadioChange = (e) => {
    setShippingRate(e.target.value);
  };


  const onSubmit = async () => {
    try {
      const response = await axios.post(
        process.env.NODE_ENV === "production"
          ? "/api/shippings"
          : "http://localhost:5000/api/shippings",
        form
      );
      if (response.status === 201) {
        handleCheckout(form);
        console.log(response.data)
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheckout = async ({ _id, sender, recipient }) => {
    const cust_code = "001098";
    const merchant_outlet_id = "01";
    const terminal_id = "001";
    const merchant_return_url =
      process.env.NODE_ENV === "production"
        ? "/thanks"
        : "http://localhost:3001/thanks";
    const description = `Shipment by ${sender.first_name} ${sender.last_name} to ${recipient.name}  `;
    const currency = "SGD";
    const amount = shippingRate * 100;
    const order_id = _id;
    const user_fullname = `${sender.first_name} ${sender.last_name}`;

    var hash = CryptoJS.HmacSHA1(
      `${cust_code}${merchant_outlet_id}${terminal_id}${merchant_return_url}${description}${currency}${amount}${order_id}${user_fullname}`,
      "OGVQ4KW90AMBRR5YA34YPLDI3ZJJANGU"
    );
    var signature = CryptoJS.enc.Hex.stringify(hash);
    const hashed = signature.toUpperCase();

    try {
      const response = await axios.post(
        "https://portalapi.oisbizcraft.com/api/payments",
        {
          order_id: order_id,
          merchant_outlet_id: merchant_outlet_id,
          terminal_id: terminal_id,
          cust_code: cust_code,
          merchant_return_url: merchant_return_url,
          amount: amount,
          currency: currency,
          user_fullname: user_fullname,
          description: description,
          hash: hashed,
        }
      );

      if (response.status === 200) {
        try {
          const res = await axios.put(
            (process.env.NODE_ENV === "production"
              ? "/api/shippings/"
              : "http://localhost:5000/api/shippings/") + _id,
            { link: response.data.data.url }
          );
          if (res.status === 201) {
            window.location.href = res.data.paymentLink;
          }
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  // console.log("shipping Details", shippingDetails)
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.post(
          process.env.NODE_ENV === "production"
            ? "/api/getShippingRate"
            : "http://localhost:5000/api/getShippingRate",
          form
        );
        console.log(res.data.shippingRate)
        const data = res.data.shippingRate;
        const firstService = data[0];
        const secondService = data[1];

        const formatServiceDate = (service) => {
          const commitDate = service.commit?.dateDetail
          if (!commitDate) {
            return "";
          }
          const transformDate = new Date(commitDate.dayFormat)
          const formattedDate = `${commitDate.dayOfWeek}, ${transformDate.getDate()} ${daysOfWeek[transformDate.getMonth()]} ${transformDate.getFullYear()}`
          return formattedDate;
        };

        setShippingDetails({
          firstService: {
            serviceName: firstService.serviceName,
            date: formatServiceDate(firstService),
            cost: firstService.ratedShipmentDetails[0].totalNetChargeWithDutiesAndTaxes,
          },
          secondService: {
            serviceName: secondService.serviceName,
            date: formatServiceDate(secondService),
            cost: secondService.ratedShipmentDetails[0].totalNetChargeWithDutiesAndTaxes,
          },
        });
        setLoading(false);
        return res.data;
      } catch (error) {
        toast.error("Something went wrong, please try again later")
        window.location.href = "/"
        console.error(error);
      }
    })();
  }, []);

  if (loading) {
    return (
      <ClipLoader
        color={color}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  }
  // console.log("shipping Details ", shippingDetails)
  return (
    <div>
      <div className="bg-white text-center w-full md:rounded-xl py-8">
        <h2 className="text-base underline underline-offset-4">
          Shipment for
          <span className="font-bold"> {form.recipient.name}</span>
        </h2>
        <p className="mt-4">Destination Country:</p>
        <p className="font-bold text-dark-purple">{form.recipient.country}</p>
        <p className="mt-6">Package Details:</p>
        <table className="mt-2 md:w-[30%] mx-auto">
          <tbody>
            {form.packages.map((pkg, index) => {
              return (
                <tr className="whitespace-nowrap" key={index}>
                  <td className="px-4">Package {index + 1}</td>
                  <td className="px-4 text-light-purple text-left">
                    {pkg.box.weight} kg
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>


      <div className="flex justify-between items-center bg-white rounded-lg shadow-md px-6 py-4">
        <label className="flex items-center">
          <input type="radio" name="shipping" value="standard" onChange={onRadioChange} />
          <div>
            <p className="font-bold text-lg text-dark-purple">{shippingDetails?.firstService?.serviceName}</p>
            <p className="text-sm text-gray-500">Delivery on {shippingDetails?.firstService?.date}</p>
          </div>
        </label>
        <div className="flex items-center">
          <p className="font-bold text-lg text-green-500 mr-2">{shippingDetails?.firstService?.cost}</p>
          <div className="rounded-full bg-green-100 h-8 w-8 flex justify-center items-center">
            <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM3.293 7.707a1 1 0 011.414 0L7 9.586l4.293-4.293a1 1 0 011.414 0l.707.707a1 1 0 010 1.414L8.414 11l4.293 4.293a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414 0L10 12.414l-4.293 4.293a1 1 0 01-1.414 0l-.707-.707a1 1 0 010-1.414L8.586 11 3.293 6.707a1 1 0 010-1.414l.707-.707z"
                clipRule="evenodd"
              />
            </svg>
          </div>

        </div>
      </div>
      <div className="flex justify-between items-center bg-white rounded-lg shadow-md px-6 py-4">
        <label className="flex items-center">
          <input type="radio" name="shipping" value="not standar" onChange={onRadioChange} />
          <div>
            <p className="font-bold text-lg text-dark-purple">{shippingDetails?.secondService?.serviceName}</p>
            <p className="text-sm text-gray-500">Delivery on {shippingDetails?.secondService?.date}</p>
          </div>
        </label>
        <div className="flex items-center">
          <p className="font-bold text-lg text-green-500 mr-2">{shippingDetails?.secondService?.cost}</p>
          <div className="rounded-full bg-green-100 h-8 w-8 flex justify-center items-center">
            <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM3.293 7.707a1 1 0 011.414 0L7 9.586l4.293-4.293a1 1 0 011.414 0l.707.707a1 1 0 010 1.414L8.414 11l4.293 4.293a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414 0L10 12.414l-4.293 4.293a1 1 0 01-1.414 0l-.707-.707a1 1 0 010-1.414L8.586 11 3.293 6.707a1 1 0 010-1.414l.707-.707z"
                clipRule="evenodd"
              />
            </svg>
          </div>

        </div>
      </div>

      <div className="flex mx-auto py-8 justify-center gap-4 md:gap-10">
        <button
          type="button"
          onClick={() => dispatch(prevStep())}
          className="pill-button button-hover border-[#844FFA] border-2   text-[#844FFA] font-bold hover:text-white hover:bg-[#844FFA] w-[160px] md:w-[180px] h-[40px] disabled:bg-disabled-purple disabled:cursor-not-allowed disabled:border-transparent rounded-2xl"
        >
          Back
        </button>

        <button
          type="submit"
          onClick={() => onSubmit(form)}
          className="pill-button button-hover bg-light-purple text-white w-[160px] md:w-[180px] h-[40px] disabled:bg-disabled-purple disabled:cursor-not-allowed disabled:border-transparent rounded-2xl"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ReviewForm;