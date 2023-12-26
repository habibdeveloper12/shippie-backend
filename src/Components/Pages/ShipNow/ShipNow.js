import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import RecipientForm from "./RecipientForm";
import SenderForm from "./SenderForm";
import "./ShipNow.css";
import PackageForm from "./Package";
import { useDispatch, useSelector } from "react-redux";
import { setForm } from "../../../store/formSlice";
import Addons from "./Addons";
import ReviewForm from "./ReviewForm";
import { useNavigate } from "react-router-dom";

const ShipNow = () => {
  const navigate = useNavigate();
  // const [currentStep, setFormStep] = useState(1);
  const { currentStep } = useSelector((state) => state.form);

  const methods = useForm({ mode: "all" });
  const {
    trigger,
    formState: { isValid },
    watch,
  } = methods;
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(setForm(data));
    navigate("/checkout");
  };

  return (
    <div>
      <div className="bg-white z-0 min-h-screen">
        <div className="max-w-3xl mx-auto pt-8 pb-6 md:pt-10 md:pb-7">
          <div className="flex items-center justify-between w-[92%] sm:w-[80%] lg:w-[70%] mx-auto relative">
            <div className="flex flex-col place-items-center w-max">
              <div className="flex items-center justify-center rounded-full bg-background-gray w-[32px] h-[32px] md:w-[40px] md:h-[40px] z-[1] border border-dark-purple shadow-border-focus">
                <div
                  className={`flex items-center justify-center rounded-full  w-[26px] h-[26px] md:w-[30px] md:h-[30px] ${
                    currentStep === 1
                      ? "bg-dark-purple"
                      : currentStep >= 2
                      ? "bg-gray-3"
                      : "bg-dark-purple"
                  }`}
                >
                  {currentStep === 1 ? (
                    <span className="text-sm md:text-base font-semibold text-white">
                      1
                    </span>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  )}
                </div>
              </div>
              <p
                className={`mt-2 text-xs md:text-sm ${
                  currentStep === 1 ? "text-light-purple" : "text-black"
                }`}
              >
                Sender
              </p>
            </div>
            <div className="flex flex-col place-items-center w-max">
              <div
                className={`flex items-center justify-center rounded-full w-[32px] h-[32px] md:w-[40px] md:h-[40px] z-[1] ${
                  currentStep === 2 ? "bg-dark-purple" : " bg-gray-3"
                }`}
              >
                {currentStep === 2 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                ) : (
                  <span className="text-sm md:text-base font-semibold rounded-lg text-white">
                    2
                  </span>
                )}
              </div>
              <p
                className={`mt-2 text-xs md:text-sm ${
                  currentStep === 2 ? "text-light-purple" : "text-black"
                }`}
              >
                Recipient
              </p>
            </div>
            <div className="flex flex-col place-items-center w-max">
              <div
                className={`flex items-center justify-center rounded-full  w-[32px] h-[32px] md:w-[40px] md:h-[40px] z-[1] ${
                  currentStep === 3 ? "bg-dark-purple" : " bg-gray-3"
                }`}
              >
                {currentStep === 3 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                ) : (
                  <span className="text-sm md:text-base font-semibold rounded-lg text-white">
                    3
                  </span>
                )}
              </div>
              <p
                className={`mt-2 text-xs md:text-sm ${
                  currentStep === 3 ? "text-light-purple" : "text-black"
                }`}
              >
                Package
              </p>
            </div>
            <div className="flex flex-col place-items-center w-max">
              <div
                className={`flex items-center justify-center rounded-full  w-[32px] h-[32px] md:w-[40px] md:h-[40px] z-[1] ${
                  currentStep === 4 ? "bg-dark-purple" : " bg-gray-3"
                }`}
              >
                {currentStep === 4 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                ) : (
                  <span className="text-sm md:text-base font-semibold">4</span>
                )}
              </div>
              <p
                className={`mt-2 text-xs md:text-sm ${
                  currentStep === 4 ? "text-light-purple" : "text-black"
                }`}
              >
                Add-ons
              </p>
            </div>
            <div className="flex flex-col place-items-center w-max">
              <div
                className={`flex items-center justify-center rounded-full  w-[32px] h-[32px] md:w-[40px] md:h-[40px] z-[1] ${
                  currentStep === 5 ? "bg-dark-purple" : " bg-gray-3"
                }`}
              >
                {currentStep === 5 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                ) : (
                  <span className="text-sm md:text-base font-semibold">5</span>
                )}
              </div>
              <p
                className={`mt-2 text-xs md:text-sm ${
                  currentStep === 5 ? "text-light-purple" : "text-black"
                }`}
              >
                Review
              </p>
            </div>
            <hr className="absolute border-gray-3 w-[90%] top-[16px] md:top-[20px] left-0 right-0 mx-auto" />
          </div>
        </div>
        <div className="text-center mb-4 md:mb-6">
          <p id="step-header" className="text-2xl md:text-3xl font-bold">
            {currentStep === 1 && " Sender’s Particulars"}
            {currentStep === 2 && "Recipient’s Particular"}
            {currentStep === 3 && " Package Details "}
            {currentStep === 4 && ""}
            {currentStep === 5 && "Payment "}
          </p>
          <p className="text-sm"></p>
        </div>
        <div className="md:w-[80%] mx-auto flex justify-center">
          <div className="flex w-full max-w-3xl justify-center text-gray-4 text-sm">
            {currentStep === 1 && <SenderForm />}
            {currentStep === 2 && <RecipientForm />}
            {currentStep === 3 && <PackageForm />}
            {currentStep === 4 && <Addons />}
            {currentStep === 5 && <ReviewForm watch={watch} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipNow;
