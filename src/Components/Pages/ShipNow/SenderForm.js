import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { COUNTRIES, getCountryTelCode } from "../../../util/countries";
import { setSender } from "../../../store/formSlice";

const SenderForm = () => {
  const dispatch = useDispatch();
  const { sender } = useSelector((state) => state.form);
  let [selectedCountry, setSelectedCountry] = useState("+65");
  const {
    register,
    watch,
    formState: { errors },
    setValue,
    clearErrors,
    handleSubmit,
  } = useForm({ defaultValues: sender });
  const [purpose, setPurpose] = useState(null);

  useEffect(() => {
    register("purpose", { required: "Please pick a purpose" });
  }, [register, setValue]);

  const handlePurpose = (purpose) => {
    setValue("purpose", purpose);
    setPurpose(purpose);
    clearErrors("purpose");
  };

  const countryOptions = COUNTRIES.map(({ name, prefix }) => ({
    label: `${name} ${prefix}`,
    value: prefix,
  }));

  const onCountryChange = (e) => {
    let value = e.target.value;
    setSelectedCountry(value);
  };

  const onSubmit = (data) => {
    dispatch(setSender(data));
    console.log(data);
  };
  const [selectedValue, setSelectedValue] = useState("Gift"); // Set the initial value to 'Gift'

  // Step 3: Define the event handler to update the selected value
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    handlePurpose(selectedValue);
  };
  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        onClick={() => handlePurpose(selectedValue)}
      >
        <div className=" ">
          <div className="bg-white w-full md:rounded-xl">
            <div className="w-[85%] md:w-[70%] mx-auto pt-6 pb-10 md:pt-8">
              <div className="relative">
                <div className="grid grid-cols-2">
                  <p>Sender Full Name</p>
                  <p></p>
                </div>
                {/* text-sm  border-gray-400 outline-none opacity-50 focus:border-blue-400 */}
                <div
                  className={`mt-1 relative flex items-center h-10  ${
                    errors.first_name && "border-rose-500"
                  }`}
                >
                  <input
                    type="text"
                    id="senderFirstName"
                    className=" border-0 border-b-2 border-primary-focus  focus:border-0 focus:border-b-2 w-full h-full focus:outline-none pl-3"
                    placeholder=""
                    {...register("first_name", { required: "Required" })}
                  />

                  <hr className="h-2/3 md:ml-2  self-center border-l border-border-gray group-focus-within:border-light-purple" />

                  <input
                    type="text"
                    id="senderLastName"
                    className="md:ml-4 border-0 border-b-2 border-primary-focus  focus:border-0 focus:border-b-2 w-full h-full focus:outline-none pl-3"
                    placeholder=""
                    {...register("last_name")}
                  />
                </div>
                <p className="min-h-[1rem] text-xs text-subtext-gray mt-0.5 ml-0.5 mb-3"></p>
              </div>
              <div className="w-full flex flex-col group">
                <label
                  for="senderEmail"
                  className="font-normal text-black w-max group-focus-within:text-dark-purple"
                >
                  Sender's Email
                </label>
                <div
                  id="senderEmailcontainer"
                  className="mt-1 mb-6 relative  flex items-center h-10  "
                >
                  <div className="relative flex items-center h-full z-[2] w-full">
                    <input
                      className="focus:outline-none pl-3 w-full h-full border-0 border-b-2 border-primary-focus  focus:border-0 focus:border-b-2 pr-8 text-black"
                      maxlength="80"
                      id="senderEmail"
                      type="email"
                      {...register("email")}
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
                      onChange={onCountryChange}
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
                      {selectedCountry}
                    </div>
                  </div>
                  <hr className="h-2/3 self-center  " />
                  <input
                    type="tel"
                    id="recipientMobileNo"
                    className="block w-full pl-3 pr-10 py-2.5 text-gray-4 disabled:bg-gray-2 text-sm border-0  border-b-1   border-primary-focus  focus:border-0 focus:border-b-26  focus:outline-none"
                    {...register("mobile", {
                      required: "Required",
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
              <label for="shipping-from" className="font-normal text-black">
                Shipping From
              </label>
              <input
                defaultValue={"Singapore"}
                readOnly
                disabled
                type="text"
                id="shipping-from"
                className="mt-1 mb-6 relative  border-0 border-b-2 border-primary-focus  focus:border-0 focus:border-b-2  flex group w-full h-10 pl-3 disabled:bg-gray-2 disabled:text-subtext-gray"
                // value={getValues("shipping_from")}
                {...register("shipping_from", setValue("country", "SG"))}
              />
              <div className="w-full flex flex-col group">
                <label
                  for="recipientAddress"
                  className="font-normal text-black w-max group-focus-within:text-dark-purple"
                >
                  Address
                </label>
                <div
                  id="recipientAddresscontainer"
                  className={`mt-1 mb-6 relative  flex items-center h-10 focus-within:border-light-purple focus:shadow-border-focus border-border-dark-gray shadow-border ${
                    errors.address && "border-rose-500"
                  }`}
                >
                  <div className="relative flex items-center h-full z-[2] w-full">
                    <input
                      className="focus:outline-none pl-3 w-full h-full  border-0 border-b-2 border-primary-focus  focus:border-0 focus:border-b-2 pr-8 text-black"
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
                  className="font-normal text-black w-max "
                >
                  Address
                </label>
                <div
                  id="recipientAddresscontainer"
                  className={`mt-1 mb-6 relative  border-0 border-b-2 border-primary-focus   flex items-center h-10  ${
                    errors.address1 && "border-rose-500"
                  }`}
                >
                  <div className="relative flex items-center h-full z-[2] w-full">
                    <input
                      className="focus:outline-none pl-3 w-full h-full  pr-8 text-black  focus:border-0 focus:border-b-1 "
                      maxLength="80"
                      id="recipientAddress"
                      type="text"
                      {...register("address1", {})}
                    />
                  </div>

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
                  className={`mt-1 mb-6 relative   flex items-center h-10  border-0 border-b-2 border-primary-focus   ${
                    errors.postal_code && "border-rose-500"
                  }`}
                >
                  <div className="relative flex items-center h-full z-[2] w-full">
                    <input
                      className="focus:outline-none pl-3 w-full h-full  border-0  border-primary-focus  focus:border-0 focus:border-b-1 pr-8 text-black"
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
                      className={`mt-1 mb-6 relative  flex items-center h-10  border-0 border-b-2 border-primary-focus  focus:border-0 focus:border-b-1 ${
                        errors.city && "border-rose-500"
                      }`}
                    >
                      <div className="relative flex items-center h-full z-[2] w-full">
                        <input
                          className="focus:outline-none pl-3 w-full h-full  border-0  border-primary-focus  focus:border-0 focus:border-b-1 pr-8 text-black"
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
          </div>
          <div className="mt-6 bg-white flex flex-col text-center w-full md:rounded-xl">
            <div className="flex flex-col bg-white md:rounded-xl py-6">
              <p className="text-dark-purple font-semibold text-xl spacing-xs">
                What's your purpose &nbsp;
                <br className="md:hidden" />
                of shipping?
              </p>
              {errors.purpose && (
                <p className="text-rose-500">{errors.purpose?.message}</p>
              )}
              <p className="text-error-red mt-2 mb-4 h-4"></p>
              <div className="w-[85%] md:w-full md:px-8 mx-auto">
                {/* <div className="grid md:grid-cols-3 md:grid-rows-2 gap-4 lg:gap-x-6 place-items-center">
                  <button
                    type="button"
                    id="SOLD"
                    className={`form-input w-full h-[60px]  hover:bg-dark-purple hover:text-white hover:border-transparent rounded-2xl ${
                      watch("purpose") === "Commercial B2B items" &&
                      "bg-light-purple text-white"
                    }`}
                    onClick={() => handlePurpose("Commercial B2B items")}
                  >
                    <p className="">Commercial</p>
                    <p className="">B2B items</p>
                  </button>
                  <button
                    type="button"
                    id="GIFT"
                    className={`form-input w-full h-[60px]  hover:bg-dark-purple hover:text-white hover:border-transparent rounded-2xl ${
                      watch("purpose") === "Gift" &&
                      "bg-light-purple text-white"
                    }`}
                    onClick={() => handlePurpose("Gift")}
                  >
                    <p className="">Gift</p>
                  </button>
                  <button
                    type="button"
                    id="SAMPLE"
                    className={`form-input w-full h-[60px]  hover:bg-dark-purple hover:text-white hover:border-transparent ${
                      watch("purpose") === "Samples for a prospect" &&
                      "bg-light-purple text-white"
                    }`}
                    onClick={() => handlePurpose("Samples for a prospect")}
                  >
                    <p className="">Samples</p>
                    <p className="">for a prospect</p>
                  </button>
                  <button
                    type="button"
                    id="REPAIR_AND_RETURN"
                    className={`form-input w-full h-[60px]  hover:bg-dark-purple hover:text-white hover:border-transparent ${
                      watch("purpose") ===
                        "Defective items for repair &amp; return" &&
                      "bg-light-purple text-white"
                    }`}
                    onClick={() =>
                      handlePurpose("Defective items for repair &amp; return")
                    }
                  >
                    <p className="">Defective items</p>
                    <p className="">for repair &amp; return</p>
                  </button>
                  <button
                    type="button"
                    id="NOT_SOLD"
                    className={`form-input w-full h-[60px]  hover:bg-dark-purple hover:text-white hover:border-transparent ${
                      watch("purpose") === "New goods for individual's use" &&
                      "bg-light-purple text-white"
                    }`}
                    onClick={() =>
                      handlePurpose("New goods for individual's use")
                    }
                  >
                    <p className="">New goods</p>
                    <p className="">for individual's use</p>
                  </button>
                  <button
                    type="button"
                    id="PERSONAL_EFFECTS"
                    className={`form-input w-full h-[60px]  hover:bg-dark-purple hover:text-white hover:border-transparent ${
                      purpose === "Used Belongings" &&
                      "bg-light-purple text-white"
                    }`}
                    onClick={() => handlePurpose("Used Belongings")}
                  >
                    <p className="">Used Belongings</p>
                  </button>
                </div> */}
                <select
                  className={`form-input  select w-[75%]  h-[30px]   hover:text-light-purple hover:border-transparent rounded-2xl ${"bg-white text-black"}`}
                  value={selectedValue}
                  onChange={handleSelectChange}
                >
                  <option selected>Gift</option>
                  <option>Commercial</option>
                  <option>Sample</option>
                  <option> Repair and return </option>
                  <option> Personal effects</option>
                  <option>Personal use</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mx-auto py-8 justify-center gap-4 md:gap-10">
          <button
            type="submit"
            id="next-button"
            className="pill-button button-hover bg-light-purple text-white w-[160px] md:w-[180px] h-[40px] disabled:bg-disabled-purple disabled:cursor-not-allowed disabled:border-transparent rounded-2xl"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default SenderForm;
