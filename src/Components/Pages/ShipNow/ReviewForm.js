import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import FedexAuth from '../../../service/apiService';
import ClipLoader from "react-spinners/ClipLoader";
import { prevStep } from '../../../store/formSlice';

const ReviewForm = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#6213CB");
  const [authToken, setAuthToken] = useState(null);
  const [shippingRate, setShippingRate] = useState(null);

  const [shippingCost, setShippingCost] = useState(0);

  const { addons } = useSelector(state => state.form);
  const form = useSelector(state => state.form);
  const dispatch = useDispatch();
  const { insurance, taxes_and_duties } = addons;

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.post("http://localhost:8300/getShippingRate", form);
        console.log(res);
        setShippingRate(res.data.shippingRate);
        setLoading(false)
        return res.data;
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  if (loading) {
    return <ClipLoader
      color={color}
      loading={loading}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  }

  return (
    <div>
      <div className="bg-white text-center w-full md:rounded-xl py-8">
        <h2 className="text-base underline underline-offset-4">Shipment for
          <span className="font-bold"> {form.recipient.name}</span>
        </h2>
        <p className="mt-4">Destination Country:</p>
        <p className="font-bold text-dark-purple">{form.recipient.country}</p>
        <p className="mt-6">Package Details:</p>
        <table className="mt-2 md:w-[30%] mx-auto">
          <tbody>
            {
              form.packages.map((pkg, index) => {
                return (
                  <tr className="whitespace-nowrap" key={index}>
                    <td className="px-4">Package {index + 1}</td>
                    <td className="px-4 text-light-purple text-left">{pkg.box.weight} kg</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <div className="mt-8 mb-1.5">
          <p className="whitespace-pre-line">Quote (TBC at warehouse):</p>
        </div>
        <div className="flex justify-center items-center gap-3">
          <p className="font-bold text-dark-purple">SGD {' '}
            <span id="total">
              {
                Number(insurance.value) + Number(taxes_and_duties.value) + Number(shippingRate)
              }
            </span>
          </p>
          <svg width="16px" height="12px" className="w-[14px] h-[8px] transition-transform duration-300 ease-in-out -rotate-180" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M1 1L8 9L15 1" stroke="#373F41" strokeWidth="2" strokeLinecap="round"></path>
          </svg>
        </div>
        <div className="block mt-4">
          <div className="grid md:grid-cols-2 md:auto-rows-auto justify-center md:w-[60%] mx-auto gap-x-16 gap-y-2">
            <div className="grid grid-cols-2 md:grid-cols-[70%_30%] text-left gap-x-20 md:gap-x-0">
              <p className="">Shipping</p>
              <p className=" text-[#6E41E2] whitespace-nowrap">SGD {" "}
                <span id="total-shipping-cost">
                  {
                    shippingRate
                  }
                </span></p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-[70%_30%] text-left gap-x-20 md:gap-x-0">
              <p className="">Taxes</p>
              <p className=" text-[#6E41E2] whitespace-nowrap">SGD <span id="total-taxes">{
                taxes_and_duties.value}</span></p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-[70%_30%] text-left gap-x-20 md:gap-x-0">
              <p className="">Insurance</p>
              <p className=" text-[#6E41E2] whitespace-nowrap">SGD <span id="insurance">{
                insurance.value}</span></p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mx-auto py-8 justify-center gap-4 md:gap-10">
        <button type="button" onClick={() => dispatch(prevStep())} className="pill-button button-hover border-[#844FFA] border-2   text-[#844FFA] font-bold hover:text-white hover:bg-[#844FFA] w-[160px] md:w-[180px] h-[40px] disabled:bg-disabled-purple disabled:cursor-not-allowed disabled:border-transparent rounded-2xl">Back</button>

        <button type="submit" className="pill-button button-hover bg-light-purple text-white w-[160px] md:w-[180px] h-[40px] disabled:bg-disabled-purple disabled:cursor-not-allowed disabled:border-transparent rounded-2xl">Next</button>
      </div>
    </div>
  )
}

export default ReviewForm