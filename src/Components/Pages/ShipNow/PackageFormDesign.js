import React from "react";
import boxImg from "../../.././Assect/3x3x3.png";
import AddBox from "../PricesPage/RateCalculator/AddBox";
const PackageForm = () => {
  return (
    <div>
      <div>
        <main>
          <div className="bg-[#F6F6F6] min-h-[100vh]">
            <div className="container max-w-5xl 2xl:max-w-6xl mx-auto sm:px-5 py-8 sm:py-12">
              <div className=" w-full pb-8 ">
                <div className="max-w-4xl mx-auto">
                  <div className="rounded-xl overflow-hidden bg-[#F0E8FE]">
                    <div
                      id="box-start"
                      className="bg-bg-purple pt-4 
                                        md:pt-8 md:mt-0 scroll-mt-[80px]"
                    >
                      <div className="md:mb-4 ">
                        <div className="grid md:grid-cols-2 px-6 md:px-8">
                          <div className="order-last md:order-first place-self-center">
                            <img className="w-48" src={boxImg} />
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
                              Don’t worry about over-declaring, we will refund
                              you the excess if that happens.
                            </p>
                          </div>
                        </div>
                      </div>
                      <hr className="border-border-gray border-t mt-1 mb-0" />
                      <div className="w-full px-8 md:px-16 lg:px-24 pb-2">
                        <div className="flex flex-col md:flex-row md:justify-between md:pt-8 md:pb-8 mt-4 md:mt-0">
                          <div className="flex flex-col mb-3 md:mb-0 relative">
                            <p className="mb-2">Estimate Box Size</p>
                            <div className="relative w-[90%] max-w-[285px] md:max-w-[230px] bg-white rounded-xl">
                              <select
                                id="box-selection-p0"
                                name="box-selection"
                                className="rounded-xl border border-border-gray shadow-border focus:border-light-purple focus:shadow-border-focus focus:outline-none w-full h-[40px] appearance-none bg-transparent pl-3 pr-6"
                              >
                                <option value="-1" selected>
                                  Own Box
                                </option>
                                <option value="0">
                                  Slim 1 kg (23 x 15 x 9)
                                </option>
                                <option value="1">
                                  Slim 1.5 kg (26 x 26 x 9)
                                </option>
                                <option value="2">
                                  Slim 3.5 kg (44 x 39 x 10)
                                </option>
                                <option value="3">
                                  Standard 5 kg (33 x 24 x 31)
                                </option>
                                <option value="4">
                                  Standard 7 kg (42 x 26 x 32)
                                </option>
                                <option value="5">
                                  Standard 12 kg (49 x 35 x 35)
                                </option>
                                <option value="6">
                                  Standard 17 kg (56 x 43 x 35)
                                </option>
                                <option value="7">
                                  Standard 22 kg (43 x 40 x 65)
                                </option>
                                <option value="8">
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
                          <div className="flex flex-col">
                            <p className="md:mb-2">Box Dimensions</p>
                            <div className="flex items-center mb-4 md:mb-0">
                              <input
                                type="text"
                                inputmode="decimal"
                                id="length-p0"
                                className="form-input rounded-xl w-[65px] md:w-[55px] h-[40px] text-center text-dark-purple font-semibold border-transparent shadow-none"
                                value=""
                              />
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 mx-3.5 md:mx-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6 18L18 6M6 6l12 12"
                                ></path>
                              </svg>
                              <input
                                type="text"
                                inputmode="decimal"
                                id="width-p0"
                                className="form-input rounded-xl w-[65px] md:w-[55px] h-[40px] text-center text-dark-purple font-semibold border-transparent"
                                value=""
                              />
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 mx-3.5 md:mx-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6 18L18 6M6 6l12 12"
                                ></path>
                              </svg>
                              <input
                                type="text"
                                inputmode="decimal"
                                id="height-p0"
                                className="form-input rounded-xl w-[65px] md:w-[55px] h-[40px] text-center text-dark-purple font-semibold border-transparent"
                                value=""
                              />
                              <span className="text-light-purple ml-3 md:ml-1">
                                cm
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col mb-6 md:mb-0">
                            <p className="md:mb-2">Weight</p>
                            <div className="flex items-center">
                              <input
                                type="text"
                                inputmode="decimal"
                                id="weight-p0"
                                className="form-input rounded-xl w-full max-w-[285px] md:w-[55px] md:max-w-full h-[40px] text-dark-purple font-semibold text-center mr-2 md:mr-0 border-transparent"
                                value=""
                              />
                              <span className="text-light-purple ml-1">kg</span>
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
                            tabindex="-1"
                          >
                            WhatsApp us
                          </a>
                          for a custom quote.
                        </p>
                      </div>
                    </div>
                    <AddBox />
                  </div>
                  <div className="h-20 mt-2">
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
                          Your package is very heavy/large, please check that
                          your stated dimensions are correct or contact our
                          customer service by
                          <a
                            href="https://wa.me/6591187971"
                            className="text-dark-purple"
                            target="_blank"
                            rel="noopener noreferrer"
                            tabindex="-1"
                          >
                            WhatsApp
                          </a>
                          for a custom quote
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PackageForm;
