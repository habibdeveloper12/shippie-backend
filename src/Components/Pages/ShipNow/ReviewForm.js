import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FedexAuth from "../../../service/apiService";
import { useLocation } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { prevStep, setRecipient, setCurrent } from "../../../store/formSlice";
import CryptoJS from "crypto-js";
import { daysOfWeek } from "../../../util/countries";
import { toast } from "react-toastify";
import { sendSignInLinkToEmail } from "firebase/auth";

import auth from "../../../firebase.init";
const ReviewForm = () => {
  const location = useLocation();
  let [loading, setLoading] = useState(true);
  const color = useState("#6213CB");
  const [shippingRate, setShippingRate] = useState(0);
  const [country, setCountry] = useState(false);
  const { recipient, sender } = useSelector((state) => state.form);
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
    },
  });
  console.log(shippingRate);
  const { addons } = useSelector((state) => state.form);
  const form = useSelector((state) => state.form);
  console.log(shippingDetails);
  const dispatch = useDispatch();
  const { insurance, taxes_and_duties } = addons;
  const onRadioChange = (e) => {
    setShippingRate(e.target.value);
  };

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await axios.post(
          process.env.NODE_ENV === "production"
            ? "/api/getShippingRate"
            : "http://localhost:5000/api/getShippingRate",
          form
        );

        const data = res?.data?.shippingRate;
        const firstService = data[0];
        const secondService = data[1];

        function formatDate(dateString) {
          const date = new Date(dateString);
          const day = String(date.getDate()).padStart(2, "0");
          const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
          const year = date.getFullYear();
          return `${day}-${month}-${year}`;
        }

        setShippingDetails({
          firstService: {
            serviceName: firstService?.serviceName,
            date: formatDate(firstService?.commit?.dateDetail?.dayFormat),
            cost: Math.abs(
              firstService?.ratedShipmentDetails[0]
                ?.totalNetChargeWithDutiesAndTaxes * 1.75
            ),
          },
          secondService: {
            serviceName: secondService?.serviceName,
            date: formatDate(secondService?.commit?.dateDetail?.dayFormat),
            cost: Math.abs(
              secondService?.ratedShipmentDetails[0]
                ?.totalNetChargeWithDutiesAndTaxes * 1.75
            ),
          },
        });
        const connectPlus = [
          "VN",
          "PH",
          "ID",
          "TW",
          "NZ",
          "TH",
          "MY",
          "JP",
          "CN",
          "AU",
          "KP",
          "KR",
          "HK",
        ];
        if (connectPlus.includes(recipient.country)) {
          // setShippingRate(shippingDetails?.secondService?.cost);
          console.log(connectPlus.includes(recipient.country), "dffffff");
          setCountry(true);
        } else {
          //  setShippingRate(shippingDetails?.firstService?.cost);
          console.log(shippingRate);
          setCountry(false);
        }
        setLoading(false);

        return res?.data;
      } catch (error) {
        toast.error("please try again  your address is wrong");
        dispatch(setCurrent(2));
        // setTimeout(function () {
        //   window.location.href = "/shipnow";
        // }, 5000);

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
  const onSubmit = async () => {
    const data = {
      cust_code: "001098",
      merchant_outlet_id: "01",
      merchant_return_url: "https://shippee.sg/thanks",
      terminal_id: "001",
      // description: form?.packages[0]?.items[0].description,
      description: form?.packages[0]?.items[0].description,
      currency: "SGD",
      amount: (shippingRate * 100).toFixed(3),
      order_id: "uuid_1_uufghfg5ghghierdsd",
      // user_fullname: form.sender.first_name + " " + form.sender.last_name,
      user_fullname: form.sender.first_name,
      user_email: form.sender.email,
    };
    try {
      if (shippingRate > 0) {
        setLoading(true);
        country
          ? setShippingRate(shippingDetails?.secondService?.cost)
          : setShippingRate(shippingDetails?.firstService?.cost);
        if (
          form.sender.email &&
          form.sender.first_name &&
          form?.packages[0]?.items[0].description
        ) {
          const apiUrl =
            process.env.NODE_ENV === "production"
              ? "api/request-payment"
              : "http://localhost:5000/api/request-payment"; // Replace with your actual backend API URL

          axios
            .post(apiUrl, data)
            .then((response) => {
              console.log(response);
              setLoading(false);
              // Handle the API response here (e.g., redirect to the returned checkout URL)
              const checkoutUrl = response.data.data.url;
              window.location.href = checkoutUrl;
              console.log("Checkout URL:", checkoutUrl);
              // Redirect to the checkout URL or use it as needed
            })
            .catch((error) => {
              // Handle any errors that occurred during the API request
              console.error("Error:", error.message);
            });
        }
      } else {
        setLoading(true);
        country
          ? setShippingRate(shippingDetails?.secondService?.cost)
          : setShippingRate(shippingDetails?.firstService?.cost);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
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

      {country ? (
        <div className="flex justify-between items-center bg-white rounded-lg shadow-md px-6 py-4">
          <label className="flex items-center">
            {/* <input
              type="radio"
              name="shipping"
              onBlur={() =>
                setShippingRate(shippingDetails?.secondService?.cost)
              }
              value={shippingDetails?.secondService?.cost}
              onChange={onRadioChange}
            /> */}
            <div>
              <p className="font-bold text-lg text-dark-purple">shipping</p>
              <p className="text-sm text-gray-500">
                Delivery on {shippingDetails?.secondService?.date}
              </p>
            </div>
          </label>
          <div className="flex items-center">
            <p className="font-bold text-lg text-green-500 mr-2">
              {shippingDetails?.secondService?.cost?.toFixed(2)} SGD
            </p>
            <div className="rounded-full bg-green-100 h-8 w-8 flex justify-center items-center">
              <svg
                className="h-4 w-4 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM3.293 7.707a1 1 0 011.414 0L7 9.586l4.293-4.293a1 1 0 011.414 0l.707.707a1 1 0 010 1.414L8.414 11l4.293 4.293a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414 0L10 12.414l-4.293 4.293a1 1 0 01-1.414 0l-.707-.707a1 1 0 010-1.414L8.586 11 3.293 6.707a1 1 0 010-1.414l.707-.707z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center bg-white rounded-lg shadow-md px-6 py-4">
            <label className="flex items-center">
              {/* <input
                type="radio"
                name="shipping"
                onBlur={() =>
                  setShippingRate(shippingDetails?.firstService?.cost)
                }
                value={shippingDetails?.firstService?.cost}
                onChange={onRadioChange}
              /> */}
              <div>
                <p className="font-bold text-lg text-dark-purple">shipping</p>
                <p className="text-sm text-gray-500">
                  Delivery on {shippingDetails?.firstService?.date}
                </p>
              </div>
            </label>
            <div className="flex items-center">
              <p className="font-bold text-lg text-green-500 mr-2">
                {shippingDetails?.firstService?.cost?.toFixed(2)} SGD
              </p>
              <div className="rounded-full bg-green-100 h-8 w-8 flex justify-center items-center">
                <svg
                  className="h-4 w-4 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM3.293 7.707a1 1 0 011.414 0L7 9.586l4.293-4.293a1 1 0 011.414 0l.707.707a1 1 0 010 1.414L8.414 11l4.293 4.293a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414 0L10 12.414l-4.293 4.293a1 1 0 01-1.414 0l-.707-.707a1 1 0 010-1.414L8.586 11 3.293 6.707a1 1 0 010-1.414l.707-.707z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </>
      )}

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
          Go Checkout
        </button>
      </div>
    </div>
  );
};

export default ReviewForm;
