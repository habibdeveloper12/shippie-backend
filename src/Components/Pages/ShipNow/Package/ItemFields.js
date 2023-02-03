import React from 'react'
import { useFieldArray } from 'react-hook-form';

const ItemFields = ({ packageIndex, control, register }) => {

    const { fields, remove, append, errors } = useFieldArray({
        control,
        name: `packages[${packageIndex}].items`
    });

    return (
        <div className="px-8 md:block">
            <div className="grid grid-cols-[38px_auto_18%_15%_15.5%] gap-x-1.5 mt-8 pl-1">
                <p>Qty</p>
                <p>Item Description </p>
                <p>Category</p>
                <p>Total Value</p>
                <p>Total Weight</p>
            </div>
            {fields.map((item, id) => {
                return (
                    <div className="flex flex-col my-2" key={item.id}>
                        <div className="rounded-xl group border border-border-dark-gray shadow-border grid grid-cols-[38px_auto_18%_15%_15.5%] gap-x-1.5 relative h-[36px] w-full">

                            <div className={`ring-error-red flex items-center relative ring-[1.5px] focus-within:ring-light-purple rounded-xl group`}>
                                <label htmlFor="quantity" hidden>
                                    quantity
                                </label>
                                <input
                                    type="number"
                                    min={1}
                                    inputMode="numeric"
                                    id="quantity-p0i0"
                                    className={`focus:outline-none placeholder:text-placeholder-gray  px-1 h-full rounded-xl w-full`}
                                    placeholder="8"
                                    {...register(
                                        `packages.${packageIndex}.items.${id}.quantity`,
                                        { required: "Required", min: 1, valueAsNumber: true }
                                    )}
                                />
                            </div>

                            <div
                                className={`ring-error-red flex items-center relative ring-[1.5px] focus-within:ring-light-purple rounded-xl group`}
                            >
                                <label htmlFor="description" hidden=" ">
                                    item description
                                </label>
                                <input
                                    type="text"
                                    id="description-p0i0"
                                    className={`focus:outline-none placeholder:text-placeholder-gray  px-1 h-full rounded-xl w-full`}
                                    placeholder="Box of Bengawan Solo Pineapple Tarts"
                                    {...register(
                                        `packages.${packageIndex}.items.${id}.description`,
                                        { required: "Required", maxLength: 30, minLength: 4 }
                                    )}
                                />
                            </div>

                            <div
                                className={`flex flex-wrap items-center rounded-xl ring-[1.5px] focus-within:ring-light-purple relative`}
                            >
                                <select
                                    id="category-p0i0"
                                    className={`focus:outline-none appearance-none bg-transparent w-full h-full rounded-xl mx-0.5 text-placeholder-gray`}
                                    {...register(
                                        `packages.${packageIndex}.items.${id}.category`,
                                        { required: "Required" }
                                    )}
                                    placeholder="category"
                                    defaultValue={"category"}
                                >
                                    <option value="none" className="disabled:bg-none" disabled>
                                        Category
                                    </option>
                                    <option value="mobiles" className="text-black">
                                        Mobiles
                                    </option>
                                    <option value="tablets" className="text-black">
                                        Tablets
                                    </option>
                                    <option value="computers" className="text-black">
                                        Computers
                                    </option>
                                    <option value="cameras" className="text-black">
                                        Cameras
                                    </option>
                                    <option value="accessories" className="text-black">
                                        Accessories
                                    </option>
                                    <option value="accessoriesbattery" className="text-black">
                                        Accessories (Battery)
                                    </option>
                                    <option value="healthbeauty" className="text-black">
                                        Health &amp; Beauty
                                    </option>
                                    <option value="fashion" className="text-black">
                                        Fashion
                                    </option>
                                    <option value="watches" className="text-black">
                                        Watches
                                    </option>
                                    <option value="jewelry" className="text-black">
                                        Jewelry
                                    </option>
                                    <option value="petsaccessories" className="text-black">
                                        Pets Accessories
                                    </option>
                                    <option value="dryfoodsupplements" className="text-black">
                                        Dry Food &amp; Supplements
                                    </option>
                                    <option value="homeappliances" className="text-black">
                                        Home Appliances
                                    </option>
                                    <option value="homedecor" className="text-black">
                                        Home Decor
                                    </option>
                                    <option value="toys" className="text-black">
                                        Toys
                                    </option>
                                    <option value="sports" className="text-black">
                                        Sports
                                    </option>
                                    <option value="handbags" className="text-black">
                                        Handbags
                                    </option>
                                    <option value="audiovideo" className="text-black">
                                        Audio Video
                                    </option>
                                    <option value="documents" className="text-black">
                                        Documents
                                    </option>
                                    <option value="gaming" className="text-black">
                                        Gaming
                                    </option>
                                    <option value="bookscollectibles" className="text-black">
                                        Books &amp; Collectibles
                                    </option>
                                </select>
                                <svg
                                    width="16px"
                                    height="12px"
                                    className="absolute right-3 w-[12px] h-[8px] pointer-events-none"
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

                            <div
                                className={`px-1 flex items-center border-transparent ring-[1.5px] focus-within:ring-light-purple rounded-xl  ring-error-red`}
                            >
                                <label htmlFor="total value" hidden=" ">
                                    item total value
                                </label>
                                <p className="text-dark-purple">S$</p>
                                <input
                                    type="number"
                                    inputMode="decimal"
                                    id="total-value-p0i0"
                                    className="focus:outline-none placeholder:text-placeholder-gray rounded-xl w-full h-full px-1"
                                    placeholder="60"
                                    {...register(
                                        `packages.${packageIndex}.items.${id}.value`,
                                        { required: "Required", min: 1, valueAsNumber: true }
                                    )}
                                />
                            </div>

                            <div
                                className={`flex items-center border-transparent justify-end pr-2 ring-[1.5px] focus-within:ring-light-purple rounded-xl  ring-error-red ${errors?.packages?.[packageIndex]?.items?.[id]
                                    ?.weight && "ring-rose-500"
                                    }`}
                            >
                                <label htmlFor="total weight" hidden=" ">
                                    item total weight
                                </label>
                                <input
                                    type="number"
                                    inputMode="decimal"
                                    id="total-weight-p0i0"
                                    className="focus:outline-none text-right placeholder:text-placeholder-gray rounded-xl w-[60%] h-full px-1 "
                                    placeholder="4.0"
                                    {...register(
                                        `packages.${packageIndex}.items.${id}.weight`,
                                        { required: "Required", min: 1, valueAsNumber: true }
                                    )}
                                />
                                <p className="text-dark-purple">kg</p>
                            </div>

                            {fields.length > 1 && (
                                <div
                                    onClick={() => remove(id)}
                                    className="rounded-full group items-center my-auto border border-transparent bg-dark-purple hover:bg-light-purple w-[24px] h-[24px] hover:cursor-pointer absolute -right-2.5 -top-2.5 group-hover:block hidden"
                                    title="Remove"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 mx-auto w-3/4 stroke-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="white"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M20 12H4"
                                        ></path>
                                    </svg>
                                </div>
                            )}

                        </div>
                        <div className="flex mb-6 pl-12 w-full select-none justify-between">
                            {errors?.packages?.[packageIndex]?.items?.[id]?.description && <p className=" h-1 text-xs text-red-500">
                                Description must be between 4-30 characters long
                            </p>}
                        </div>
                    </div>
                );
            })}

            <div className="mt-4 md:mt-0 px-6 md:px-8">
                <button
                    onClick={() => append({ quantity: 0, description: '', category: '', value: 0, weight: 0 })}
                    type="button"
                    className="pill-button group flex justify-center items-center  hover:bg-disabled-purple font-normal text-sm text-dark-purple w-full h-10 shadow-none rounded-lg  bg-[#c5b3f3]focus:outline-light-purple md:h-9"
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
                    </svg>{" "}
                    Add Item
                </button>
            </div>

            <hr />

            <div className="grid grid-cols-[78%_22%] items-center font-semibold px-8 pb-8">
                <p className="text-dark-purple ">Total declared <br className="md:hidden" /> value for all items</p>
                <p className="md:text-right text-dark-purple md:mr-5">
                    0
                </p>
            </div>

        </div>
    )
}

export default ItemFields