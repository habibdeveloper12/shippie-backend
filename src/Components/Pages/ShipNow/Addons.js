import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { nextStep, prevStep, updateInsurance, updateTaxAndDuties } from '../../../store/formSlice';

const Addons = () => {

    const { insurance, taxes_and_duties } = useSelector(state => state.form.addons);

    const dispatch = useDispatch();

    return (
        <div>
            <div className="flex w-full max-w-3xl justify-center text-gray-4 text-sm">
                <div className="flex flex-col text-center w-full md:rounded-xl">
                    <div className="flex flex-col bg-white md:rounded-xl pb-6 px-2">
                        <p className="text-dark-purple font-semibold text-xl my-4">Would you like to insure this shipment?</p>
                        <p className="text-center text-error-red mb-4 hidden">Please select an option</p>
                        <div className="w-full sm:w-4/5 lg:w-3/4 px-8 mx-auto">
                            <div className="flex flex-col md:flex-row gap-y-4 md:space-x-12 justify-between">
                                <div className="basis-1/2">
                                    <button type="button" id="noInsurance" className={`form-input w-full h-[60px] border-transparent ${insurance.insured !== true &&
                                        "bg-light-purple text-white font-semibold border-transparent"
                                        }`} onClick={() => dispatch(updateInsurance({ insured: false, value: 0 }))}>No insurance</button>
                                </div>
                                <div className="basis-1/2">
                                    <button type="button" id="addInsurance" className={`form-input w-full h-[60px] hover:bg-dark-purple group hover:text-white hover:border-transparent ${insurance.insured === true &&
                                        "bg-light-purple text-white font-semibold border-transparent"
                                        }`} onClick={() => dispatch(updateInsurance({ insured: true, value: 7.12 }))}>Add insurance<br />
                                        <span className={`font-semibold text-dark-purple group-hover:text-white ${insurance.insured === true &&
                                            " text-white"
                                            }`}>(+ SGD$ 7.12)</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col bg-white md:rounded-xl mt-6 pb-6 px-2">
                        <p className="text-dark-purple font-semibold text-xl my-4">Who will pay for taxes and duties?</p>
                        <p className="text-center text-error-red mb-4 hidden">Please select an option</p>
                        <div className="w-full sm:w-4/5 lg:w-3/4 px-8 mx-auto">
                            <div className="flex flex-col md:flex-row gap-y-4 md:space-x-12 justify-between">
                                <div className="flex flex-col justify-center basis-1/2">
                                    <button type="button" id="receiverPayTax" className={`form-input w-full h-[60px] place-self-center border-transparent ${taxes_and_duties.payer === "receiver" &&
                                        "bg-light-purple text-white font-semibold border-transparent"
                                        }`} onClick={() => dispatch(updateTaxAndDuties({ payer: "receiver", value: 0 }))}>Post-paid, Receiver</button>
                                </div>
                                <div className="basis-1/2">
                                    <button type="button" id="senderPayTax" className={`form-input w-full h-[60px] disabled:bg-disabled-purple disabled:text-white disabled:border-transparent hover:bg-dark-purple hover:text-white group hover:border-transparent ${taxes_and_duties.payer === "sender" &&
                                        "bg-light-purple text-white font-semibold border-transparent"
                                        }`} onClick={() => dispatch(updateTaxAndDuties({ payer: "sender", value: 67.00 }))}>Pre-paid, Sender<br />
                                        <span className={`font-semibold text-dark-purple group-hover:text-white ${taxes_and_duties.payer === "sender" && " text-white"}`}>(+SGD $67.27)</span>
                                    </button>
                                </div>
                            </div>
                            <p className="mt-6 text-center text-xs font-semibold text-subtext-gray">Amount will be determined by the Customs and charged to the recipient.</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex mx-auto py-8 justify-center gap-4 md:gap-10">
                <button type="button" onClick={() => dispatch(prevStep())} className="pill-button button-hover border-[#844FFA] border-2   text-[#844FFA] font-bold hover:text-white hover:bg-[#844FFA] w-[160px] md:w-[180px] h-[40px] disabled:bg-disabled-purple disabled:cursor-not-allowed disabled:border-transparent rounded-2xl">Back</button>

                <button type="button" onClick={() => dispatch(nextStep())} className="pill-button button-hover bg-light-purple text-white w-[160px] md:w-[180px] h-[40px] disabled:bg-disabled-purple disabled:cursor-not-allowed disabled:border-transparent rounded-2xl">Next</button>
            </div>
        </div>
    )
}

export default Addons