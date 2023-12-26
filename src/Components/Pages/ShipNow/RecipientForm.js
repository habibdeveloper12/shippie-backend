import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { prevStep, setRecipient } from "../../../store/formSlice";
import { COUNTRIES, getCountryTelCode } from "../../../util/countries";
import { toast } from "react-toastify";

const RecipientForm = () => {
  const dispatch = useDispatch();
  const { recipient, sender } = useSelector((state) => state.form);
  let [selectedCountry, setSelectedCountry] = useState();
  let [selectedCountryCode, setSelectedCountryCode] = useState();
  console.log(recipient);
  // console.log(sender);
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: recipient });

  const countryOptions = COUNTRIES.map(({ name, iso2, prefix }) => ({
    label: `${name}`,
    value: iso2,
    code: prefix,
  }));
  console.log(recipient, sender);
  const onCountryChange = (e) => {
    let value = e.target.value;
    let code = getCountryTelCode(value);
    setSelectedCountryCode(code);
    console.log(value);
    setSelectedCountry(value);
  };

  const onCountryCodeChange = (e) => {
    let value = e.target.value;
    setSelectedCountryCode(value);
  };

  const onSubmit = (data) => {
    dispatch(setRecipient(data));
  };

  return (
    <div className="bg-white w-full md:rounded-xl">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-[85%] md:w-[50%] mx-auto pt-6 md:pt-8 pb-3">
          <div className="w-full flex flex-col group">
            <label
              for="recipientName"
              className="font-normal text-black w-max group-focus-within:text-dark-purple"
            >
              Recipient's Name
            </label>
            <div
              id="recipientNamecontainer"
              className={`mt-1 mb-6 relative  flex items-center h-10  border-0 border-b-1 border-primary-focus  focus:border-0 focus:border-b-2 ${
                errors.name && "border-rose-500"
              }`}
            >
              <div className="relative flex items-center h-full z-[2] w-full">
                <input
                  className="focus:outline-none pl-3 w-full h-full  border-0  border-b-2   border-primary-focus  focus:border-0 focus:border-b-2 pr-8 text-black"
                  maxLength="80"
                  id="recipientName"
                  type="text"
                  {...register("name", { required: "Required" })}
                />
              </div>
              {errors.name && (
                <p className="min-h-[1rem] text-xs text-error-red absolute top-10 mt-0.5 ml-0.5 text-rose-500">
                  Required
                </p>
              )}
            </div>
          </div>
          <div className="w-full flex flex-col group">
            <label
              for="recipientEmail"
              className="font-normal text-black w-max group-focus-within:text-dark-purple"
            >
              Recipient's Email
            </label>
            <div
              id="recipientEmailcontainer"
              className="mt-1 mb-6 relative flex items-center h-10 "
            >
              <div className="relative flex items-center h-full z-[2] w-full">
                <input
                  className="focus:outline-none pl-3 w-full h-full border-0  border-b-2   border-primary-focus  focus:border-0 focus:border-b-2 pr-8 text-black text-black"
                  maxLength="80"
                  id="recipientEmail"
                  type="email"
                  {...register("email")}
                />
              </div>
              <p className="min-h-[1rem] text-xs text-error-red absolute top-10 mt-0.5 ml-0.5 hidden"></p>
            </div>
          </div>
          <div className="w-full flex flex-col group">
            <label
              for="recipientCountry"
              className="font-normal text-black w-max group-focus-within:text-dark-purple"
            >
              Country
            </label>
            <div
              id="recipientCountrycontainer"
              className={`mt-1 mb-6 relative  flex items-center h-10 focus-within:border-light-purple focus:shadow-border-focus border-0  border-b-2   border-primary-focus  focus:border-0 focus:border-b-2  ${
                errors.country && "border-rose-500"
              }`}
            >
              {watch("country") && (
                <svg
                  viewBox="0 0 22 22"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[18px] inline-block absolute right-0 mr-2 group-focus-within:invisible stroke-dark-purple z-[2]"
                >
                  <circle
                    r="10"
                    transform="matrix(1 0 0 -1 11 11)"
                    strokeWidth="2"
                  ></circle>
                  <path
                    d="M6 11.9375L9.04348 15L16 8"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                </svg>
              )}
              <div className="absolute h-full w-full flex items-center top-0 z-[1]">
                <select
                  className="focus:outline-none w-full h-full rounded-xl appearance-none bg-transparent hover:cursor-pointer pl-3"
                  tabindex="0"
                  {...register("country", { required: true })}
                  defaultValue={""}
                  onChange={onCountryChange}
                >
                  <option value="" disabled></option>
                  {countryOptions
                    .filter((option) => option.value !== "SG")
                    .map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                </select>
                {errors.country && (
                  <p className="min-h-[1rem] text-xs text-error-red absolute top-10 mt-0.5 ml-0.5 text-rose-500">
                    Required
                  </p>
                )}
              </div>
              <div className="absolute right-0 pr-[1.6rem] h-full flex items-center pointer-events-none z-[2] group-focus-within:invisible">
                <svg
                  width="16px"
                  height="12px"
                  className="w-[14px] h-[9px] mt-1 mr-2.5"
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
                <hr className="h-2/3 self-center border-l border-border-gray group-focus-within:border-light-purple mr-2" />
              </div>
              <p className="min-h-[1rem] text-xs text-error-red absolute top-10 mt-0.5 ml-0.5 hidden"></p>
            </div>
          </div>
          <div className="group">
            <label
              className="block font-normal text-black text-sm group-focus-within:text-dark-purple"
              for="recipientMobileNo"
            >
              Recipient's Mobile
            </label>
            <div
              className={`flex h-10 mt-1 mb-6 relative border-0  border-b-2   border-primary-focus  focus:border-0 focus:border-b-2 ${
                (errors.country_code || errors.mobile) && "border-rose-500"
              }`}
            >
              <div className="relative text-gray-4 text-sm">
                <label for="country-call-code" hidden>
                  country calling code
                </label>
                <select
                  name="country-call-code"
                  className="absolute w-full h-full opacity-0 disabled:bg-gray-2 cursor-pointer"
                  tabindex="-1"
                  defaultValue={""}
                  {...register("country_code")}
                  onChange={onCountryCodeChange}
                >
                  <option value="" disabled></option>
                  {countryOptions
                    .filter((option) => option.value !== "SG")
                    .map((option, index) => (
                      <option key={index} value={option.code}>
                        {option.label} {option.code}
                      </option>
                    ))}
                </select>
                <div
                  className="h-full flex items-center min-w-[40px] px-3 justify-center"
                  aria-hidden="true"
                >
                  {selectedCountryCode}
                </div>
              </div>
              <hr className="h-2/3 self-center  " />
              <input
                type="tel"
                id="recipientMobileNo"
                className="block w-full pl-3 pr-10 py-2.5 text-gray-4 disabled:bg-gray-2 text-sm border-0  border-b-1   border-primary-focus  focus:border-0 focus:border-b-26  focus:outline-none"
                {...register("mobile", {
                  required: "Required",
                  minLength: 8,
                  maxLength: 15,
                })}
              />
              {errors.mobile && (
                <p className="min-h-[1rem] text-xs text-error-red absolute top-10 mt-0.5 ml-0.5 text-rose-500">
                  Mobile Number must be of 8 to 15 digits
                </p>
              )}
              <svg
                viewBox="0 0 22 22"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[18px] inline-block absolute right-0.5 top-[50%] -translate-y-[50%] group-focus-within:invisible mr-2 stroke-dark-purple"
              >
                <circle
                  r="10"
                  transform="matrix(1 0 0 -1 11 11)"
                  strokeWidth="2"
                ></circle>
                <path
                  d="M6 11.9375L9.04348 15L16 8"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
              </svg>
              <p className="min-h-[1rem] text-xs text-error-red absolute top-10"></p>
            </div>
          </div>

          <div className="w-full flex flex-col group">
            <label
              for="recipientAddress"
              className="font-normal text-black w-max group-focus-within:text-dark-purple"
            >
              Address
            </label>
            <div
              id="recipientAddresscontainer"
              className={`mt-1 mb-6 relative  flex items-center h-10 border-0  border-b-2   border-primary-focus  focus:border-0 focus:border-b-2 ${
                errors.address && "border-rose-500"
              }`}
            >
              <div className="relative flex items-center h-full z-[2] w-full">
                <input
                  className="focus:outline-none pl-3 w-full h-full focus:border-0 pr-8 text-black"
                  maxLength="80"
                  id="recipientAddress"
                  type="text"
                  {...register("address", {
                    required: "Required",
                    maxLength: 80,
                  })}
                />
              </div>
              {errors.address && (
                <p className="min-h-[1rem] text-xs text-error-red absolute top-10 mt-0.5 ml-0.5 text-rose-500">
                  Required
                </p>
              )}
              <svg
                viewBox="0 0 22 22"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block absolute right-0 mr-2 w-[18px] group-focus-within:invisible stroke-dark-purple z-[2]"
              >
                <circle
                  r="10"
                  transform="matrix(1 0 0 -1 11 11)"
                  strokeWidth="2"
                ></circle>
                <path
                  d="M6 11.9375L9.04348 15L16 8"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
              </svg>
              <p className="min-h-[1rem] text-xs text-error-red absolute top-10 mt-0.5 ml-0.5 hidden"></p>
            </div>
          </div>
          <div className="w-full flex flex-col group">
            <label
              for="recipientAddress"
              className="font-normal text-black w-max group-focus-within:text-dark-purple"
            >
              Address
            </label>
            <div
              id="recipientAddresscontainer"
              className={`mt-1 mb-6 relative  flex items-center h-10 border-0  border-b-2   border-primary-focus  focus:border-0 focus:border-b-2 ${
                errors.address1 && "border-rose-500"
              }`}
            >
              <div className="relative flex items-center h-full z-[2] w-full">
                <input
                  className="focus:outline-none pl-3 w-full h-full focus:border-0 pr-8 text-black"
                  maxLength="80"
                  id="recipientAddress"
                  type="text"
                  {...register("address1", {})}
                />
              </div>
              {errors.address1 && (
                <p className="min-h-[1rem] text-xs text-error-red absolute top-10 mt-0.5 ml-0.5 text-rose-500">
                  Required
                </p>
              )}
              <svg
                viewBox="0 0 22 22"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block absolute right-0 mr-2 w-[18px] group-focus-within:invisible stroke-dark-purple z-[2]"
              >
                <circle
                  r="10"
                  transform="matrix(1 0 0 -1 11 11)"
                  strokeWidth="2"
                ></circle>
                <path
                  d="M6 11.9375L9.04348 15L16 8"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
              </svg>
              <p className="min-h-[1rem] text-xs text-error-red absolute top-10 mt-0.5 ml-0.5 hidden"></p>
            </div>
          </div>

          <div className="w-full flex flex-col group">
            <label
              for="recipientPostalCode"
              className="font-normal text-black w-max group-focus-within:text-dark-purple"
            >
              Postal Code
            </label>
            <div
              id="recipientPostalCodecontainer"
              className={`mt-1 mb-6 relative  flex items-center h-10 focus-within:border-light-purple focus:shadow-border-focus border-0  border-b-2   border-primary-focus  focus:border-0 focus:border-b-2 ${
                errors.postal_code && "border-rose-500"
              }`}
            >
              <div className="relative flex items-center h-full z-[2] w-full">
                <input
                  className="focus:outline-none focus:border-0 pl-3 w-full h-full rounded-xl pr-8 text-black"
                  maxLength="80"
                  id="recipientPostalCode"
                  type="text"
                  {...register("postal_code", {
                    required: "Required",
                    maxLength: 80,
                  })}
                />
              </div>
              {watch("postal_code") && (
                <svg
                  viewBox="0 0 22 22"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[18px] inline-block 
                absolute right-0 mr-2 group-focus-within:invisible stroke-dark-purple z-[2]"
                >
                  <circle
                    r="10"
                    transform="matrix(1 0 0 -1 11 11)"
                    strokeWidth="2"
                  ></circle>
                  <path
                    d="M6 11.9375L9.04348 15L16 8"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                </svg>
              )}
              <p className="min-h-[1rem] text-xs text-error-red absolute top-10 mt-0.5 ml-0.5 hidden"></p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="w-full flex flex-col group">
                <label
                  for="recipientCity"
                  className="font-normal text-black w-max group-focus-within:text-dark-purple"
                >
                  City
                </label>
                <div
                  id="recipientCitycontainer"
                  className={`mt-1 mb-6 relative  flex items-center h-10 focus-within:border-light-purple border-0  border-b-2   border-primary-focus  focus:border-0 focus:border-b-2 ${
                    errors.city && "border-rose-500"
                  }`}
                >
                  <div className="relative flex items-center h-full z-[2] w-full">
                    <input
                      className="focus:outline-none pl-3 w-full h-full focus:border-0 pr-8 text-black"
                      maxLength="80"
                      id="recipientCity"
                      type="text"
                      {...register("city", {
                        required: "Required",
                        maxLength: 80,
                      })}
                    />
                  </div>
                  <svg
                    viewBox="0 0 22 22"
                    fill="none"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[18px] inline-block absolute right-0 mr-2 group-focus-within:invisible stroke-dark-purple z-[2]"
                  >
                    <circle
                      r="10"
                      transform="matrix(1 0 0 -1 11 11)"
                      strokeWidth="2"
                    ></circle>
                    <path
                      d="M6 11.9375L9.04348 15L16 8"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                  <p className="min-h-[1rem] text-xs text-error-red absolute top-10 mt-0.5 ml-0.5 hidden"></p>
                </div>
              </div>
            </div>
            <div>
              <label
                for="recipientState"
                className="font-normal text-black w-max group-focus-within:text-dark-purple"
              >
                State
              </label>
              <input
                type="text"
                className="disabled:bg-gray-2 rounded-xl w-full h-10 mt-1"
                id="recipientState"
                disabled
              />
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
            className="pill-button button-hover bg-light-purple text-white w-[160px] md:w-[180px] h-[40px] disabled:bg-disabled-purple disabled:cursor-not-allowed disabled:border-transparent rounded-2xl"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecipientForm;
