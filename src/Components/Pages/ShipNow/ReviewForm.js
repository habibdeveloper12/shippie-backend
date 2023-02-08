import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FedexAuth from "../../../service/apiService";
import ClipLoader from "react-spinners/ClipLoader";
import { prevStep } from "../../../store/formSlice";
import CryptoJS from "crypto-js";

const ReviewForm = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#6213CB");
  const [authToken, setAuthToken] = useState(null);
  const [shippingRate, setShippingRate] = useState(null);
  const [shippingCost, setShippingCost] = useState(0);

  const { addons } = useSelector((state) => state.form);
  const form = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const { insurance, taxes_and_duties } = addons;
  console.log(form);

  const onSubmit = async () => {
    try {
      const response = await axios.post(
        process.env.NODE_ENV === "production"
          ? "/api/shippings"
          : "http://localhost:5000/api/shippings",
        form
      );
      if (response.status === 201) {
        handleCheckout(response.data);
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
    const description = `Shipment by ${sender.first_name} ${sender.last_name} to ${recipient.name}`;
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

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.post(
          process.env.NODE_ENV === "production"
            ? "/api/getShippingRate"
            : "http://localhost:5000/api/getShippingRate",
          form
        );
        console.log(res);
        setShippingRate(res.data.shippingRate);
        setLoading(false);
        return res.data;
      } catch (error) {
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
        <div className="mt-8 mb-1.5">
          <p className="whitespace-pre-line">Quote (TBC at warehouse):</p>
        </div>
        <div className="flex justify-center items-center gap-3">
          <p className="font-bold text-dark-purple">
            SGD{" "}
            <span id="total">
              {Number(insurance.value) +
                Number(taxes_and_duties.value) +
                Number(shippingRate)}
            </span>
          </p>
          <svg
            width="16px"
            height="12px"
            className="w-[14px] h-[8px] transition-transform duration-300 ease-in-out -rotate-180"
            viewBox="0 0 16 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M1 1L8 9L15 1"
              stroke="#373F41"
              strokeWidth="2"
              strokeLinecap="round"
            ></path>
          </svg>
        </div>
        <div className="block mt-4">
          <div className="grid md:grid-cols-2 md:auto-rows-auto justify-center md:w-[60%] mx-auto gap-x-16 gap-y-2">
            <div className="grid grid-cols-2 md:grid-cols-[70%_30%] text-left gap-x-20 md:gap-x-0">
              <p className="">Shipping</p>
              <p className=" text-[#6E41E2] whitespace-nowrap">
                SGD <span id="total-shipping-cost">{shippingRate}</span>
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-[70%_30%] text-left gap-x-20 md:gap-x-0">
              <p className="">Taxes</p>
              <p className=" text-[#6E41E2] whitespace-nowrap">
                SGD <span id="total-taxes">{taxes_and_duties.value}</span>
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-[70%_30%] text-left gap-x-20 md:gap-x-0">
              <p className="">Insurance</p>
              <p className=" text-[#6E41E2] whitespace-nowrap">
                SGD <span id="insurance">{insurance.value}</span>
              </p>
            </div>
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
