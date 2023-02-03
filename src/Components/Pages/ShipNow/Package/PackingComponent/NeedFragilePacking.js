import React from "react";

const NeedFragilePacking = () => {
  return (
    <div className="bg-bg-purple flex flex-col md:flex-row md:mt-0 pt-10 md:pt-6 md:pb-6">
      <div className="md:w-[40%] md:text-[14px] text-center md:text-left mb-4 md:mb-0 px-6">
        <p className="font-semibold">Opted for fragile packing?</p>
        <br />
        <p>
          Note that a bigger box will be needed to fit fragile packing
          materials. This will increase shipping costs.
        </p>
        <br />
        <p>
          The exact padding required depends on the number of fragile items, the
          shape of the items, and how fragile they are.
        </p>
        <div className="hidden md:flex items-center mt-4">
          <div className="flex items-center mt-1 justify-self-end">
            <input
              type="checkbox"
              id="fragile-do-not-show-again"
              className="appearance-none checked:bg-light-purple border-2 border-light-purple checked:border-transparent hover:cursor-pointer w-[13px] h-[13px] mr-2"
            />
            <div className="inline">
              <label
                for="fragile-do-not-show-again"
                className="text-light-purple inline "
              >
                Do not show this again
              </label>
              <div className="inline md:pl-0.5"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[60%] place-self-center hidden md:block">
        <span>
          <span>
            <img
              alt=""
              aria-hidden="true"
              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271164%27%20height=%27513%27/%3e"
            />
          </span>
          <img
            alt="Fragile Packing"
            srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffragile-packing.b39702ed.png&amp;w=1200&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffragile-packing.b39702ed.png&amp;w=3840&amp;q=75 2x"
            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffragile-packing.b39702ed.png&amp;w=3840&amp;q=75"
            decoding="async"
            data-nimg="intrinsic"
          />
        </span>
      </div>
      <div className="place-self-center md:hidden bg-bg-purple px-3">
        <span>
          <span>
            <img
              alt=""
              aria-hidden="true"
              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27666%27%20height=%27314%27/%3e"
            />
          </span>
          <img
            alt="Fragile Packing"
            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            decoding="async"
            data-nimg="intrinsic"
          />
        </span>
      </div>
      <div className="px-6 md:hidden">
        <p className="text-center">
          Account for extra space needed for{" "}
          <span className="text-pink">fragile packing materials.</span>
        </p>
        <div className="text-center mt-6">
          <div className="flex items-center mt-1">
            <input
              type="checkbox"
              id="mobile-fragile-do-not-show-again"
              className="appearance-none checked:bg-light-purple border-2 border-light-purple checked:border-transparent hover:cursor-pointer w-[13px] h-[13px] mr-2"
            />
            <div className="inline">
              <label
                for="mobile-fragile-do-not-show-again"
                className="text-light-purple inline "
              >
                Do not show this again
              </label>
              <div className="inline md:pl-0.5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedFragilePacking;
