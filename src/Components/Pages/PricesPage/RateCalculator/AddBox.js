import React from "react";

const AddBox = () => {
  return (
    <div>
      <div className="px-8 hidden pointer-events-none md:block md:pointer-events-auto">
        <div className="grid grid-cols-[38px_auto_18%_15%_15.5%] gap-x-1.5 mt-8 pl-1">
          <p>Qty</p>
          <p>Item Description </p>
          <p>Category</p>
          <p>Total Value</p>
          <p>Total Weight</p>
        </div>
        <div className="flex flex-col my-2">
          <div className="rounded-xl group border border-border-dark-gray shadow-border grid grid-cols-[38px_auto_18%_15%_15.5%] gap-x-1.5 relative h-[36px] w-full">
            <label for="quantity" hidden=" ">
              quantity
            </label>
            <input
              type="text"
              inputmode="numeric"
              id="quantity-p0i0"
              className="focus:outline-none px-1 border-2 border-transparent placeholder:text-placeholder-gray ring-[1.5px] focus:ring-light-purple rounded-xl  ring-error-red"
              placeholder="8"
              value=""
            />
            <div className="  ring-error-red flex items-center relative ring-[1.5px] focus-within:ring-light-purple rounded-xl group">
              <label for="description" hidden=" ">
                item description
              </label>
              <input
                type="text"
                id="description-p0i0"
                className="focus:outline-none placeholder:text-placeholder-gray  px-1 h-full rounded-xl w-full"
                placeholder="Box of Bengawan Solo Pineapple Tarts"
                value=""
              />
            </div>
            <div className="flex flex-wrap items-center rounded-xl  ring-[1.5px] focus-within:ring-light-purple relative ring-transparent">
              <select
                id="category-p0i0"
                className="focus:outline-none appearance-none bg-transparent w-full h-full rounded-xl mx-0.5 text-placeholder-gray"
              >
                <option
                  value="none"
                  className="disabled:bg-none"
                  disabled=""
                  selected=""
                >
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
            <label for="total value" hidden=" ">
              item total value
            </label>
            <div className=" px-1 flex items-center border-transparent ring-[1.5px] focus-within:ring-light-purple rounded-xl  ring-error-red ">
              <p className="text-dark-purple">S$</p>
              <input
                type="text"
                inputmode="decimal"
                id="total-value-p0i0"
                className="focus:outline-none placeholder:text-placeholder-gray rounded-xl w-full h-full px-1"
                placeholder="60"
                value=""
              />
            </div>
            <label for="total weight" hidden=" ">
              item total weight
            </label>
            <div className=" flex items-center border-transparent   justify-end pr-2 ring-[1.5px] focus-within:ring-light-purple rounded-xl  ring-error-red">
              <input
                type="text"
                inputmode="decimal"
                id="total-weight-p0i0"
                className="focus:outline-none text-right placeholder:text-placeholder-gray rounded-xl w-[60%] h-full px-1 "
                placeholder="4.0"
                value=""
              />
              <p className="text-dark-purple">kg</p>
            </div>
          </div>
          <div className="flex mb-6 pl-12 w-full select-none justify-between">
            <p className=" h-1 text-xs text-red-500">
              Description must be between 4-30 characters long
            </p>
          </div>
        </div>
      </div>

      {/* buttn  */}
      <div className="mt-4 md:mt-0 px-6 md:px-8">
        <button
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
      <hr className="border-border-gray border-t my-8"></hr>

      <div className="grid grid-cols-[78%_22%] items-center font-semibold px-8 pb-8">
        <p className="text-dark-purple ">
          Total declared <br className="md:hidden" /> value for all items
        </p>
        <p className="md:text-right text-dark-purple md:mr-5">$0.00</p>
      </div>

      <div className="mx-8 md:mx-0">
        <button
          type="button"
          className="pill-button group flex justify-center items-center border-transparent hover:bg-disabled-purple font-normal text-sm text-dark-purple w-full h-10 shadow-none rounded-lg  bg-[#c5b3f3] focus:outline-light-purple"
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
          Add New Package
        </button>
      </div>
    </div>
  );
};

export default AddBox;
