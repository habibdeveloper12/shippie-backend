import React from 'react'
import { useFormContext } from 'react-hook-form';
import NeedFragilePacking from './PackingComponent/NeedFragilePacking';
import NeedPacking from './PackingComponent/NeedPacking';
import NoPacking from './PackingComponent/NoPacking';

const SelectPacking = ({ handlePacking, packageId, selectedPackage}) => {
    const { watch } = useFormContext(); 
    const packing = watch(`packages[${packageId}.packing]`);

    return (
        <>
            <div className="relative flex flex-col md:flex-row md:justify-evenly px-8 md:px-0 mt-4 mb-10 md:mb-6 gap-y-5  text-[15px]">
                <button
                    type="button"
                    className={`form-input w-full md:w-[28%] h-[55px] hover:bg-dark-purple hover:text-white hover:border-transparent ${packing === "No Need Packing" && "bg-light-purple text-white font-semibold border-transparent"}`}
                    onClick={() => handlePacking("No Need Packing")}
                >
                    No Need Packing
                </button>
                <button
                    type="button"
                    className={`form-input w-full md:w-[28%] h-[55px] hover:bg-dark-purple hover:text-white hover:border-transparent ${packing === "Need Packing" && "bg-light-purple text-white font-semibold border-transparent"}`}
                    onClick={() => handlePacking("Need Packing")}
                >
                    Need Packing
                </button>
                <button
                    type="button"
                    className={`form-input w-full md:w-[28%] h-[55px] hover:bg-dark-purple hover:text-white hover:border-transparent ${packing === "Need Fragile Packing" && "bg-light-purple text-white font-semibold border-transparent"}`}
                    onClick={() => handlePacking("Need Fragile Packing")}
                >
                    Need Fragile Packing
                </button>
            </div>
            <div className="md:mb-4">
                {packing === "No Need Packing" && <NoPacking />}
                {packing === "Need Packing" && <NeedPacking />}
                {packing === "Need Fragile Packing" && <NeedFragilePacking />}
            </div>
        </>
    )
}

export default SelectPacking