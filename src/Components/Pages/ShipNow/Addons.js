import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  nextStep,
  prevStep,
  updateInsurance,
  updateTaxAndDuties,
} from "../../../store/formSlice";

const Addons = () => {
  const [checked, setChecked] = useState(false);
  const [anChecked, setAnChecked] = useState(false);
  const { insurance, taxes_and_duties } = useSelector(
    (state) => state.form.addons
  );
  const dispatch = useDispatch();

  const nextFunction = () => {
    if (checked && anChecked) {
      dispatch(nextStep());
    } else {
      alert("please checked both ");
    }
  };
  return (
    <div>
      <div className="flex w-full max-w-3xl justify-center text-gray-4 text-sm">
        <div className="flex flex-col text-center w-full md:rounded-xl">
          <div className="flex flex-col bg-white md:rounded-xl pb-6 px-2">
            <p className="text-dark-purple font-semibold text-xl my-4">
              Would you like to insure this shipment?
            </p>
            <p className="text-center text-error-red mb-4 hidden">
              Please select an option
            </p>
            <div className="w-full sm:w-4/5 lg:w-3/4 px-8 mx-auto">
              <div className="flex flex-col md:flex-row gap-y-4 md:space-x-12 justify-between">
                <div className="basis-1/2">
                  <button
                    type="button"
                    id="noInsurance"
                    className={`form-input w-full h-[60px] border-transparent ${
                      insurance.insured !== true &&
                      "bg-light-purple text-white font-semibold border-transparent"
                    }`}
                    onClick={() =>
                      dispatch(updateInsurance({ insured: false, value: 0 }))
                    }
                  >
                    No insurance
                  </button>
                </div>
                <div className="basis-1/2">
                  <button
                    type="button"
                    id="addInsurance"
                    className={`form-input w-full h-[60px] hover:bg-dark-purple group hover:text-white hover:border-transparent ${
                      insurance.insured === true &&
                      "bg-light-purple text-white font-semibold border-transparent"
                    }`}
                    onClick={() =>
                      dispatch(updateInsurance({ insured: true, value: 7.12 }))
                    }
                  >
                    Add insurance
                    <br />
                    <span
                      className={`font-semibold text-dark-purple group-hover:text-white ${
                        insurance.insured === true && " text-white"
                      }`}
                    >
                      (+ SGD$ 7.12)
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-white md:rounded-xl mt-6 pb-6 px-2">
            <p className="text-dark-purple font-semibold text-xl my-4"></p>
            <p className="text-center text-error-red mb-4 hidden">
              Please select an option
            </p>
            <div className="w-full sm:w-4/5 lg:w-3/4 px-8 mx-auto">
              {/* <div className="flex flex-col md:flex-row gap-y-4 md:space-x-12 justify-between">
               
                <div className="flex flex-col justify-center basis-1/2">
                  <button
                    type="button"
                    id="receiverPayTax"
                    className={`form-input w-full h-[60px] place-self-center border-transparent ${
                      taxes_and_duties.payer === "receiver" &&
                      "bg-light-purple text-white font-semibold border-transparent"
                    }`}
                    onClick={() =>
                      dispatch(
                        updateTaxAndDuties({ payer: "receiver", value: 0 })
                      )
                    }
                  >
                    Post-paid, Receiver
                  </button>
                </div>
                <div className="basis-1/2">
                  <button
                    type="button"
                    id="senderPayTax"
                    className={`form-input w-full h-[60px] disabled:bg-disabled-purple disabled:text-white disabled:border-transparent hover:bg-dark-purple hover:text-white group hover:border-transparent ${
                      taxes_and_duties.payer === "sender" &&
                      "bg-light-purple text-white font-semibold border-transparent"
                    }`}
                    onClick={() =>
                      dispatch(
                        updateTaxAndDuties({ payer: "sender", value: 67.0 })
                      )
                    }
                  >
                    Pre-paid, Sender
                    <br />
                    <span
                      className={`font-semibold text-dark-purple group-hover:text-white ${
                        taxes_and_duties.payer === "sender" && " text-white"
                      }`}
                    >
                      (+SGD $67.27)
                    </span>
                  </button>
                </div>
              </div> */}{" "}
              <div class="form-control">
                <label class="label cursor-pointer">
                  <input
                    onClick={() => setChecked(!checked)}
                    type="checkbox"
                    class="checkbox checkbox-primary"
                  />
                  <span
                    class="label-text text-primary"
                    // onClick={() =>
                    //   dispatch(
                    //     updateTaxAndDuties({ payer: "receiver", value: 0 })
                    //   )
                    // }
                  >
                    I agree to pay aditional charges if the courier assessed
                    weights or size differ from those i have entered.
                  </span>
                </label>
              </div>
              <div class="form-control">
                <label class="label cursor-pointer">
                  <input
                    onClick={() => setAnChecked(!anChecked)}
                    type="checkbox"
                    class="checkbox checkbox-primary"
                  />
                  <span
                    class="label-text text-primary"

                    // onClick={() =>
                    //   dispatch(
                    //     updateTaxAndDuties({ payer: "sender", value: 67.0 })
                    //   )
                    // }
                  >
                    I understand that the price shown do not include any local
                    charges such as duties and taxes if incurred
                  </span>
                </label>
              </div>
              <p className="mt-6 text-center text-xs font-semibold text-subtext-gray">
                Amount will be determined by the Customs and charged to the
                recipient.
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
          type="button"
          onClick={nextFunction}
          className="pill-button button-hover bg-light-purple text-white w-[160px] md:w-[180px] h-[40px] disabled:bg-disabled-purple disabled:cursor-not-allowed disabled:border-transparent rounded-2xl"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Addons;
