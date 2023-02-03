import React from 'react'

const AddPackage = ({ append }) => {

    const items = [{ quantity: "", description: "", category: "", totalValue: "", totalWeight: "" }]
    const box = { size: "Own Box", length: "", width: "", height: "", weight: "", items: items }

    const shipmentPackage = {
        packing: "No Need Packing",
        box: box
    };

    return (
        <div className="mx-8 md:mx-0">
            <button
                onClick={() => append(shipmentPackage)}
                type="button"
                className="pill-button group flex justify-center items-center bg-bg-purple border-transparent hover:bg-disabled-purple font-normal text-sm text-dark-purple w-full h-10 shadow-none focus:outline-light-purple"
            >
                <svg
                    width="19"
                    height="19"
                    className="group-hover:stroke-white stroke-[#844FFA] mx-2 "
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="14"
                        cy="14"
                        r="13"
                        stroke="currentColor"
                        strokeWidth="2"
                    ></circle>
                    <line
                        x1="7.22266"
                        y1="13.1353"
                        x2="20.44"
                        y2="13.1353"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    ></line>
                    <line
                        x1="14.3574"
                        y1="7.22217"
                        x2="14.3574"
                        y2="20.4396"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    ></line>
                </svg>
                Add New Package
            </button>
        </div>
    )
}

export default AddPackage