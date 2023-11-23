import React from "react";
import boxImg from "../../../../Assect/3x3x3.png";
import { useDispatch, useSelector } from "react-redux";
import {
  COUNTRIES,
  convertDate,
  getCountryTelCode,
} from "../../../../util/countries";
import ClipLoader from "react-spinners/ClipLoader";

import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const RateCalculatorReal = () => {
  const dispatch = useDispatch();
  const { packages } = useSelector((state) => state.form);
  const [selectedCountry, setSelectedCountry] = useState();
  const {
    control,
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    watch,
    setValue,
    clearErrors,
  } = useForm({
    defaultValues: {
      packages: packages,
    },
  });
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
  const [shipping, setShipping] = useState();
  const [loading, setLoading] = useState(false);

  const countryOptions = COUNTRIES.map(({ name, iso2, prefix }) => ({
    label: `${name}`,
    value: iso2,
    code: prefix,
  }));

  const onCountryChange = (e) => {
    let value = e.target.value;
    let code = getCountryTelCode(value);

    console.log(value);
    setSelectedCountry(value);
  };
  const onSubmit = async (value) => {
    setLoading(true);
    setShipping(false);

    // dispatch(setPackageAddon(value.packages));
    console.log(value.packages);
    try {
      const res = await axios.post(
        process.env.NODE_ENV === "production"
          ? "/api/getqoute"
          : "http://localhost:5000/api/getqoute",
        {
          packages: value.packages,
          country: selectedCountry,
          postal_code: value.postal_code,
          from_postal_code: value.from_postal_code,
        }
      );
      if (res?.data?.shippingRate) {
        const data = res?.data?.shippingRate;
        console.log(res?.data);
        const firstService = data[0];
        const secondService = data[1];

        function formatDate(dateString) {
          const date = new Date(dateString);
          const day = String(date.getDate()).padStart(2, "0");
          const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
          const year = date.getFullYear();
          return `${day}-${month}-${year}`;
        }
        setLoading(false);
        setShipping(true);
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
      }
    } catch (err) {
      setShipping(false);
      alert(
        "please fillup all field in shipnow corrently this country not available in rateCalculator"
      );
    }
  };
  console.log(packages);
  const navigate = useNavigate();
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-[#F6F6F6] min-h-[60vh]">
          <div className="container max-w-5xl 2xl:max-w-6xl mx-auto sm:px-5 py-8 sm:py-12">
            <div className=" w-full pb-8 ">
              <div className="max-w-4xl mx-auto">
                <div className="rounded-xl overflow-hidden bg-[#F0E8FE]">
                  <div className="bg-white px-6 md:px-8 pb-5 md:pt-12">
                    <div className="flex flex-col">
                      <p className="hidden md:block  font-extrabold text-3xl">
                        Ship from
                      </p>
                      <div className="grid grid-cols-[56px_auto] md:flex items-center gap-y-3 md:gap-y-0 md:gap-x-6 mt-6">
                        <p className="md:hidden font-semibold">From</p>
                        <div>
                          <div className="px-3  bg-[#DDE2E5] rounded-3xl text-gray-600 font-semibold text-left md:text-center w-full max-w-[280px] md:w-[240px] border-2 py-2 bg-gray-2 border-[#7B8794]">
                            <span className="pl-4 md:pl-0">Singapore</span>
                          </div>
                          <div className="mt-3 w-[80%] ml-3 flex flex-col group">
                            <label
                              for="recipientPostalCode"
                              className="font-normal text-black w-max group-focus-within:text-dark-purple"
                            >
                              Postal Code
                            </label>
                            <div
                              id="recipientPostalCodecontainer"
                              className={`mt-1 mb-6 relative border rounded-xl flex items-center h-10 focus-within:border-light-purple focus:shadow-border-focus border-border-dark-gray shadow-border ${
                                errors.postal_code && "border-rose-500"
                              }`}
                            >
                              <div className="relative flex items-center h-full z-[2] w-full">
                                <input
                                  className="focus:outline-none pl-3 w-full h-full rounded-xl pr-8 text-black"
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
                        </div>

                        <p className="font-semibold">to</p>
                        <div className=" md:ml-11">
                          <div className=" pill-button border-2 border-[#844FFA] rounded-full relative flex items-center text-[#9450FA] w-full max-w-[280px] md:w-[240px] hover:cursor-pointer px-3 pl-4 md:pl-3">
                            <select
                              id="recipientCountry"
                              name="country"
                              {...register("country", { required: true })}
                              defaultValue={""}
                              onChange={onCountryChange}
                              className="rounded-xl focus:outline-none w-full h-full py-2 hover:cursor-pointer font-semibold appearance-none bg-transparent text-left md:text-center"
                            >
                              <option value="" disabled></option>
                              {countryOptions
                                .filter((option) => option.value !== "SG")
                                .map((option, index) => (
                                  <option key={0} value={option.value}>
                                    {option.label}
                                  </option>
                                ))}
                            </select>
                            <svg
                              width="16px"
                              height="12px"
                              className="absolute right-3 w-[12px] h-[8px]"
                              viewBox="0 0 16 11"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              preserveAspectRatio="none"
                            >
                              <path
                                d="M1 1L8 9L15 1"
                                stroke="#844FFA"
                                strokeWidth="2"
                                strokeLinecap="round"
                              ></path>
                            </svg>
                          </div>
                          <div className="mt-3 ml-3 w-[80%] flex  flex-col group">
                            <label
                              for="recipientPostalCode"
                              className="font-normal text-black w-max group-focus-within:text-dark-purple"
                            >
                              Postal Code
                            </label>
                            <div
                              id="recipientPostalCodecontainer"
                              className={`mt-1 mb-6 relative border rounded-xl flex items-center h-10 focus-within:border-light-purple focus:shadow-border-focus border-border-dark-gray shadow-border ${
                                errors.postal_code && "border-rose-500"
                              }`}
                            >
                              <div className="relative flex items-center h-full z-[2] w-full">
                                <input
                                  className="focus:outline-none pl-3 w-full h-full rounded-xl pr-8 text-black"
                                  maxLength="80"
                                  id="recipientPostalCode"
                                  type="text"
                                  {...register("from_postal_code", {
                                    required: "Required",
                                    maxLength: 80,
                                  })}
                                />
                              </div>
                              {watch("from_postal_code") && (
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
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="border-border-gray border-t m-0" />
                  <div className="bg-white py-4 md:py-8 px-6 md:px-8">
                    <div className="flex flex-col">
                      <p>Add-on Services</p>
                      <div className="grid grid-cols-2 gap-y-1 w-full md:w-[80%] text-xs md:text-base">
                        <div className="flex items-start mt-4 md:md-2">
                          <input
                            type="checkbox"
                            id="pack-items"
                            className="appearance-none checked:bg-[#844ffa] border-2 border-[#844ffa] checked:border-transparent hover:cursor-pointer w-4 h-4 mt-[2px] mr-1.5"
                          />
                          <div className="inline">
                            <label
                              for="pack-items"
                              className="text-light-purple inline text-true-black leading-snug"
                            >
                              <span>Pack my items</span>
                            </label>
                            <div className="inline md:pl-0.5"></div>
                          </div>
                        </div>
                        <div className="flex items-start mt-4 md:md-2">
                          <input
                            type="checkbox"
                            id="charge-taxes"
                            className="appearance-none checked:bg-[#844ffa] border-2 border-[#844ffa] checked:border-transparent hover:cursor-pointer w-4 h-4 mt-[2px] mr-1.5"
                          />
                          <div className="inline">
                            <label
                              for="charge-taxes"
                              className="text-light-purple inline text-true-black leading-snug"
                            >
                              <span>Pre-pay taxes</span>
                            </label>
                            <div className="inline md:pl-0.5">
                              <div className="relative inline-block">
                                <div className="relative">
                                  <div
                                    id="tooltip"
                                    className="absolute -translate-y-[calc(100%+14px)] -right-[100%] sm:right-auto sm:-translate-x-[calc(50%-14px)] pointer-events-none opacity-0 text-sm transition-opacity duration-300"
                                  >
                                    <div className="font-medium text-white bg-[#495057] rounded-lg shadow-sm relative z-10 py-2 md:px-3">
                                      <p className="max-w-[300px] w-max text-center">
                                        If not charged to sender, amount will be
                                        determined by Customs and charged to the
                                        recipient.
                                      </p>
                                      <div className="absolute hidden md:block w-full h-[30px] opacity-0"></div>
                                    </div>
                                  </div>
                                  <div className="arrow absolute -translate-y-[calc(100%+4px)] left-[50%] -translate-x-[40%] border-t-[10px] border-x-[8px] border-x-transparent border-[#495057] w-0 h-0 pointer-events-none opacity-0 text-sm transition-opacity duration-300"></div>
                                  <svg
                                    className="inline w-4 md:w-5 mb-1 ml-1"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M12 21.9999C17.5228 21.9999 22 17.5228 22 11.9999C22 6.47709 17.5228 1.99994 12 1.99994C6.47715 1.99994 2 6.47709 2 11.9999C2 17.5228 6.47715 21.9999 12 21.9999Z"
                                      stroke="#7B8794"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M12 7.99994V11.9999"
                                      stroke="#7B8794"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <circle
                                      cx="12"
                                      cy="15.9999"
                                      r="1"
                                      fill="#7B8794"
                                    ></circle>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start mt-4 md:md-2">
                          <input
                            type="checkbox"
                            id="fragile-pack"
                            className="appearance-none checked:bg-[#844ffa] border-2 border-[#844ffa] checked:border-transparent hover:cursor-pointer w-4 h-4 mt-[2px] mr-1.5"
                          />
                          <div className="inline">
                            <label
                              for="fragile-pack"
                              className="text-light-purple inline text-true-black leading-snug"
                            >
                              <span>Fragile pack</span>
                            </label>
                            <div className="inline md:pl-0.5"></div>
                          </div>
                        </div>
                        <div className="flex items-start mt-4 md:md-2">
                          <input
                            type="checkbox"
                            id="insure-shipment"
                            className="appearance-none checked:bg-[#844ffa] border-2 border-[#844ffa] checked:border-transparent hover:cursor-pointer w-4 h-4 mt-[2px] mr-1.5"
                          />
                          <div className="inline">
                            <label
                              for="insure-shipment"
                              className="text-light-purple inline text-true-black leading-snug"
                            >
                              <span>Insure Shipment</span>
                            </label>
                            <div className="inline md:pl-0.5">
                              <div className="relative inline-block">
                                <div className="relative">
                                  <div
                                    id="tooltip"
                                    className="absolute -translate-y-[calc(100%+14px)] -right-[100%] sm:right-auto sm:-translate-x-[calc(50%-14px)] pointer-events-none opacity-0 text-sm transition-opacity duration-300"
                                  >
                                    <div className="font-medium text-white bg-[#495057] rounded-lg shadow-sm relative z-10 py-2 md:px-3">
                                      <p className="max-w-[300px] w-max text-center">
                                        <span>
                                          Scope the max. value that FedEx is
                                          liable to pay in the event of shipment
                                          loss/damage resulting from their
                                          failure.
                                          <br />
                                          <br />
                                          You pay 2.4% of this maximum value
                                          <br />
                                          (i.e. your declared value) to scope
                                          FedEx’s liability.
                                          <br />
                                          <br />
                                          See
                                          <a
                                            href="https://www.fedex.com/content/dam/fedex/apac-asia-pacific/downloads/fedex-scc-spac.pdf"
                                            target="_blank"
                                            rel="noreferrer noopener"
                                          >
                                            <span className="text-blue-400 underline underline-offset-1 cursor-pointer">
                                              T&amp;C
                                            </span>
                                          </a>
                                          (Declared Value and Limits of
                                          Liability, pg 10-11)
                                        </span>
                                      </p>
                                      <div className="absolute hidden md:block w-full h-[30px] opacity-0"></div>
                                    </div>
                                  </div>
                                  <div className="arrow absolute -translate-y-[calc(100%+4px)] left-[50%] -translate-x-[40%] border-t-[10px] border-x-[8px] border-x-transparent border-[#495057] w-0 h-0 pointer-events-none opacity-0 text-sm transition-opacity duration-300"></div>
                                  <svg
                                    className="inline w-4 md:w-5 mb-1 ml-1"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M12 21.9999C17.5228 21.9999 22 17.5228 22 11.9999C22 6.47709 17.5228 1.99994 12 1.99994C6.47715 1.99994 2 6.47709 2 11.9999C2 17.5228 6.47715 21.9999 12 21.9999Z"
                                      stroke="#7B8794"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <path
                                      d="M12 7.99994V11.9999"
                                      stroke="#7B8794"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    ></path>
                                    <circle
                                      cx="12"
                                      cy="15.9999"
                                      r="1"
                                      fill="#7B8794"
                                    ></circle>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="box-start"
                    className="bg-bg-purple pt-4 md:pt-8 md:mt-0 scroll-mt-[80px]"
                  >
                    <div className="md:mb-4 ">
                      <div className="grid md:grid-cols-2 px-6 md:px-8">
                        <div className="order-last md:order-first place-self-center">
                          <img className=" w-48" src={boxImg} />
                        </div>
                        <div className="text-sm text-left my-4 mr-4 pb-6 md:pb-0 prose marker:text-subtext-gray hidden md:block">
                          <p className="font-semibold">
                            Don’t want to top-up later?
                          </p>
                          <ul>
                            <li>
                              Measure from the longest cross-section of each
                              side of your box
                            </li>
                            <li>
                              Round up to the nearest 0.5 cm when you measure
                            </li>
                          </ul>
                          <p>
                            Don’t worry about over-declaring, we will refund you
                            the excess if that happens.
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr className="border-border-gray border-t mt-1 mb-0" />
                    <div className="w-full px-8 md:px-16 lg:px-24 pb-2">
                      <div className="flex flex-col md:flex-row md:justify-center gap-x-5 md:pt-8 md:pb-8 mt-4 md:mt-0">
                        {/* <div className="flex flex-col mb-4 md:mb-0 relative">
                        <p className="mb-2">Estimate Box Size</p>
                         <div className="relative grid grid-cols-[auto_30px]">
                          <div className="relative bg-white rounded-xl">
                            <select
                              className="rounded-xl border border-border-gray shadow-border focus:border-light-purple focus:shadow-border-focus focus:outline-none w-full  h-[40px] appearance-none bg-transparent pl-3 pr-6"
                              {...register(`packages.${0}.box.size`, {
                                onChange: handleOptionChange,
                              })}
                              defaultValue="Own Box"
                            >
                              <option value="Own Box">Own Box</option>
                              <option value="Slim 1 kg (23 x 15 x 9)">
                                Slim 1 kg (23 x 15 x 9)
                              </option>
                              <option value="Slim 1.5 kg (26 x 26 x 9)">
                                Slim 1.5 kg (26 x 26 x 9)
                              </option>
                              <option value="Slim 3.5 kg (44 x 39 x 10)">
                                Slim 3.5 kg (44 x 39 x 10)
                              </option>
                              <option value="Standard 5 kg (33 x 24 x 31)">
                                Standard 5 kg (33 x 24 x 31)
                              </option>
                              <option value="Standard 7 kg (42 x 26 x 32)">
                                Standard 7 kg (42 x 26 x 32)
                              </option>
                              <option value="Standard 12 kg (49 x 34 x 36)">
                                Standard 12 kg (49 x 34 x 36)
                              </option>
                              <option value="Standard 17 kg (56 x 43 x 35)">
                                Standard 17 kg (56 x 43 x 35)
                              </option>
                              <option value="Standard 22.5 kg (43 x 40 x 65)">
                                Standard 22.5 kg (43 x 40 x 65)
                              </option>
                              <option value="Standard 62 kg (61 x 120 x 42)">
                                Standard 62 kg (61 x 120 x 42)
                              </option>
                            </select>
                            <svg
                              width="16px"
                              height="12px"
                              className="absolute w-[12px] h-[8px] right-3.5 top-[45%]"
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
                        </div> 
                      </div> */}

                        <div className="flex flex-col">
                          <p className="md:mb-2">Box Dimensions</p>
                          <div className="grid grid-cols-[auto_30px] items-center mb-4 md:mb-0">
                            <div className="flex items-center justify-between">
                              <input
                                type="number"
                                min={1}
                                inputMode="decimal"
                                className={`form-input rounded-xl w-[65px] md:w-[55px] h-[40px] text-center text-dark-purple font-semibold border-error-red shadow-border-error`}
                                {...register(`packages.${0}.box.length`, {
                                  required: "Required",
                                  min: 1,
                                })}
                              />
                              <span className="text-2.5xl font-light text-subtext-gray mt-0">
                                ×
                              </span>
                              <input
                                type="number"
                                inputMode="decimal"
                                className={`form-input rounded-xl w-[65px] md:w-[55px] h-[40px] text-center text-dark-purple font-semibold border-transparent ring-1 ring-gray-20`}
                                {...register(`packages.${0}.box.width`, {
                                  required: "Required",
                                  min: 1,
                                })}
                              />
                              <span className="text-2.5xl font-light text-subtext-gray mt-0">
                                ×
                              </span>
                              <input
                                type="number"
                                inputMode="decimal"
                                className={`form-input rounded-xl w-[65px] md:w-[55px] h-[40px] text-center text-dark-purple font-semibold border-transparent`}
                                {...register(`packages.${0}.box.height`, {
                                  required: "Required",
                                  min: 1,
                                })}
                              />
                            </div>
                            <span className="text-light-purple ml-2 md:ml-1">
                              cm
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col mb-6 md:mb-0 ">
                          <p className="md:mb-2">Weight</p>
                          <div className="grid grid-cols-[auto_30px] items-center mb-4 md:mb-0">
                            <input
                              type="number"
                              inputMode="decimal"
                              className={`ring-1 ring-gray-200 rounded-xl w-[65px] md:w-[55px] h-[40px] text-center text-dark-purple font-semibold border-transparent`}
                              {...register(`packages[${0}].box.weight`, {
                                required: "Required",
                                min: 1,
                                onChange: (e) =>
                                  setValue(
                                    `packages[${0}].box.weight`,
                                    e.target.value
                                  ),
                              })}
                            />
                            <span className="text-light-purple ml-2 md:ml-1">
                              kg
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-subtext-gray">
                        For large fragile items like paintings, speakers,
                        monitors, and bicycles, please
                        <a
                          href="https://wa.me/6591187971"
                          className="text-dark-purple"
                          target="_blank"
                          rel="noopener noreferrer"
                          tab0="-1"
                        >
                          WhatsApp us
                        </a>
                        for a custom quote.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white md:px-12 py-6 relative">
                    <button
                      type="submit"
                      id="get-a-quote-button"
                      className="pill-button button-hover b cursor-pointer select-none flex items-center justify-center focus:outline-purple-200  hover:bg-[#6211cb] bg-[#844ffa]  w-[calc(100%-6rem)] max-w-[280px] md:w-[180px] h-[40px] mx-auto font-bold text-white rounded-full disabled:bg-disabled-purple disabled:border-transparent"
                    >
                      Get A Quote
                    </button>
                  </div>
                </div>
                <div className=" mt-2">
                  <div className="transition-[height] duration-500 ease-in-out pointer-events-none overflow-hidden h-0 invisible">
                    <svg
                      width="5"
                      height="147"
                      className="mx-auto undefined"
                      viewBox="0 0 5 147"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        x1="2.5"
                        y1="2.5"
                        x2="2.49999"
                        y2="144.5"
                        stroke="#6211CB"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeDasharray="3 20"
                      ></line>
                    </svg>
                  </div>
                </div>
                <div
                  id="quote-summary"
                  className="transition-all duration-300 scroll-mb-[500px] scroll-pb-[500px] opacity-0 -translate-y-[20%] invisible"
                >
                  <div className="bg-white rounded-xl">
                    <div className="px-8 pt-6">
                      <p className="px-4 sm:px-8 pb-8 text-center">
                        <svg
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-[24px] inline-block self-center stroke-dark-purple mb-1"
                        >
                          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                          <line x1="12" y1="9" x2="12" y2="13"></line>
                          <line x1="12" y1="17" x2="12.01" y2="17"></line>
                        </svg>
                        <br />
                        Your package is very heavy/large, please check that your
                        stated dimensions are correct or contact our customer
                        service by
                        <a
                          href="https://wa.me/6591187971"
                          className="text-dark-purple"
                          target="_blank"
                          rel="noopener noreferrer"
                          tab0="-1"
                        >
                          WhatsApp
                        </a>
                        for a custom quote
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {shipping ? (
                <>
                  <div class="mt-[-100px] mt-2">
                    <div class="transition-[height] duration-500 ease-in-out pointer-events-none overflow-hidden h-full">
                      <svg
                        width="5"
                        height="147"
                        class="mx-auto undefined"
                        viewBox="0 0 5 147"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="2.5"
                          y1="2.5"
                          x2="2.49999"
                          y2="144.5"
                          stroke="#6211CB"
                          stroke-width="5"
                          stroke-linecap="round"
                          stroke-dasharray="3 20"
                        ></line>
                      </svg>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="bg-white rounded-xl">
                      <div className="md:grid grid-cols-2 divide-x-2 md:divide-light-purple py-6 min-h-[300px]">
                        <div className="grid grid-rows-3 gap-y-1 md:gap-y-0 items-center text-light-purple text-sm md:text-base px-2 md:pt-10">
                          <div className="grid grid-cols-[auto_80%] w-[70%] mx-auto">
                            <div className="flex justify-center">
                              <svg
                                width="35"
                                height="45"
                                className="inline-block w-[24px] md:w-[35px] pb-1 md:pb-0"
                                viewBox="0 0 35 45"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17.5855 39.8865C24.3605 39.8865 29.8527 34.4299 29.8527 27.699C29.8527 20.968 24.3605 15.5115 17.5855 15.5115C10.8106 15.5115 5.31836 20.968 5.31836 27.699C5.31836 34.4299 10.8106 39.8865 17.5855 39.8865Z"
                                  stroke="#844FFA"
                                  stroke-width="2"
                                  stroke-miterlimit="10"
                                ></path>
                                <path
                                  d="M2.54638 11.3977H32.4542C33.2195 11.3977 33.8287 12.0123 33.8287 12.7568V42.4704C33.8287 43.2149 33.2195 43.8295 32.4542 43.8295H2.54638C1.78111 43.8295 1.17188 43.2149 1.17188 42.4704V12.7568C1.17188 12.0123 1.78111 11.3977 2.54638 11.3977Z"
                                  stroke="#844FFA"
                                  stroke-width="2"
                                  stroke-miterlimit="10"
                                ></path>
                                <path
                                  d="M18.9016 27.6137C18.9016 28.3732 18.2801 29 17.4996 29C16.7192 29 16.0977 28.3732 16.0977 27.6137C16.0977 26.8541 16.7192 26.2273 17.4996 26.2273C18.2801 26.2273 18.9016 26.8541 18.9016 27.6137Z"
                                  stroke="#844FFA"
                                  stroke-width="2"
                                  stroke-miterlimit="10"
                                ></path>
                                <path
                                  d="M13.2109 6.64771V10.3977"
                                  stroke="#844FFA"
                                  stroke-width="2"
                                  stroke-miterlimit="10"
                                ></path>
                                <path
                                  d="M21.4453 6.81812V10.5681"
                                  stroke="#844FFA"
                                  stroke-width="2"
                                  stroke-miterlimit="10"
                                ></path>
                                <path
                                  d="M11.8654 5.98397C9.02147 5.40972 5.79494 4.22187 3.56724 1.83325H31.361C30.0699 3.48188 26.5234 6.36553 17.3063 6.48085L17.2995 6.48093L17.2871 6.48112C17.2749 6.48135 17.2641 6.4817 17.2533 6.48213C17.1326 6.48696 14.7737 6.57122 11.8654 5.98397Z"
                                  stroke="#844FFA"
                                  stroke-width="2"
                                  stroke-miterlimit="10"
                                ></path>
                              </svg>
                            </div>
                            <div>
                              <p className="font-semibold">Chargeable Weight</p>
                              {/* <p>{packages.} kg</p> */}
                            </div>
                          </div>

                          <div className="grid grid-cols-[auto_80%] md:grid-cols-[auto_80%] items-center w-[70%] mx-auto">
                            <div className="flex justify-center">
                              <svg
                                width="41"
                                height="41"
                                className="mx-auto w-[25px] md:w-[35px]"
                                viewBox="0 0 41 41"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M19.5 9V21H31.5"
                                  stroke="#844FFA"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                ></path>
                                <circle
                                  cx="20.5"
                                  cy="20.5"
                                  r="19"
                                  stroke="#844FFA"
                                  stroke-width="2"
                                ></circle>
                              </svg>
                            </div>
                            <div>
                              <p className="font-semibold">Delivery Time</p>
                              <span>
                                {shippingDetails?.secondService?.date}*
                              </span>
                            </div>
                          </div>

                          <div className="grid grid-cols-[auto_80%] md:grid-cols-[auto_80%] items-center w-[70%] mx-auto">
                            <div className="flex justify-center">
                              <svg
                                width="71"
                                height="45"
                                className="inline w-[40px] md:w-[55px] -translate-x-2"
                                viewBox="0 0 71 45"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M26 23.6427V2H69V43H26V35.0335"
                                  stroke="#844FFA"
                                  stroke-width="2"
                                  stroke-miterlimit="10"
                                ></path>
                                <path
                                  d="M41 2V13H53V2"
                                  stroke="#844FFA"
                                  stroke-width="2"
                                  stroke-miterlimit="10"
                                ></path>
                                <path
                                  d="M12.9447 11C12.9447 11 12.9447 23.1276 20.5217 24.1892H38V35.677C26.8755 35.677 12.9519 38.5126 5.99372 27.381C5.99372 27.381 0.942368 18.6561 2.20161 11"
                                  stroke="#844FFA"
                                  stroke-width="2.5"
                                  stroke-miterlimit="10"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                                <path
                                  d="M38.0072 24.7338C38.0145 22.9973 42.6498 22.947 43.8158 23.0188C46.5753 23.1838 49.2188 24.7123 49.8562 27.5252C50.7108 31.307 47.6472 36 43.5551 36C41.8386 36 40.1221 36 38.4056 36C38.1811 36 38 35.8206 38 35.5981C38.0072 33.5961 38.0072 24.7482 38.0072 24.7338Z"
                                  stroke="#844FFA"
                                  stroke-width="2"
                                  stroke-miterlimit="10"
                                ></path>
                              </svg>
                            </div>
                            <p className="font-semibold">
                              Free Next Day Pickup
                            </p>
                          </div>

                          <div className="text-xs leading-tight text-subtext-gray hidden md:block mt-4 mb-1 px-3">
                            <p>
                              - complete your order before 9:30pm to secure a
                              next weekday pickup
                            </p>
                            <p>
                              - quote is valid given no change to parcel
                              dimensions
                            </p>
                            <p>- *excludes customs delays</p>
                          </div>
                        </div>
                        <hr className="border-border-gray border-t md:hidden my-2" />
                        <div className="">
                          <div className="px-10 md:w-4/5 mx-auto mt-4 md:mt-8 h-full">
                            <div className="grid auto-grid-fr md:grid-rows-4 gap-y-1 whitespace-nowrap">
                              <div className="flex justify-between">
                                <p className="text-[#7D7E7F]">Shipping</p>
                                <p className="text-light-purple text-right">
                                  SGD{" "}
                                  <span id="shipping-quote">
                                    {" "}
                                    {shippingDetails?.firstService?.cost?.toFixed(
                                      2
                                    )}
                                  </span>
                                </p>
                              </div>
                            </div>
                            <div className="md:hidden flex justify-between mb-4 mt-4">
                              <p className="text-[#7D7E7F] font-semibold">
                                Total
                              </p>
                              <p className="text-dark-purple whitespace-nowrap text-right">
                                <span class="">SGD </span>
                                <span className="font-semibold text-dark-purple">
                                  {shippingDetails?.firstService?.cost?.toFixed(
                                    2
                                  )}
                                </span>
                              </p>
                            </div>
                            <div className="hidden md:flex flex justify-end pt-12">
                              <p className="text-right">
                                <span className="text-[#7D7E7F] text-sm mr-2">
                                  Total
                                </span>
                                <span className="text-dark-purple">SGD</span>{" "}
                                <span className=" text-2xl font-semibold text-dark-purple">
                                  {shippingDetails?.firstService?.cost?.toFixed(
                                    2
                                  )}
                                </span>
                              </p>
                            </div>
                            <div
                              onClick={() => navigate("/shipnow")}
                              id="ship-now-button"
                              className="pill-button button-hover bg-light-purple cursor-pointer select-none flex items-center justify-center text-white w-[calc(100%-6rem)] max-w-[280px] md:w-[180px] h-[40px] mx-auto md:ml-auto md:mr-0 md:translate-x-[20%] mt-10 md:mt-8"
                            >
                              Ship Now
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-xs leading-tight text-subtext-gray md:hidden mt-4 pb-6 px-12">
                        <p>
                          - complete your order before 9:30pm to secure a next
                          weekday pickup
                        </p>
                        <p>
                          - quote is valid given no change to parcel dimensions
                        </p>
                        <p>- *excludes customs delays</p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex justify-center">
                  <ClipLoader
                    color={"#6213CB"}
                    loading={loading}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RateCalculatorReal;
