import React from "react";
import Heading from "../../../Layout/Heading";
import Para from "../../../Layout/Para";

const ThirdSection = () => {
  return (
    <div className="bg-[#F5F5F5] p-24">
      <div className="flex justify-center items-center lg:flex-row sm:flex-col">
        <Heading
          className="text-primary  py-2 sm:py-3  md:py-4 lg:py-7 lg:leading-[64px] text-xl sm:text-2xl md:text-3xl lg:text-[2.75rem] font-black font-pop"
          title="My Shippie are experts at Shipping Luggage, Boxes and Sports Equipment around the World."
        />
        <Para
          className="text-black text-sm sm:text-base lg:text-lg text-para font-inter pb-1 md:pb-1 lg:pb-3"
          title="We make worldwide luggage shipping convenient for People Moving Abroad, Students, Expats, Holidaymakers, and Sports Teams.  "
        />
      </div>
      <div>
        <Heading
          className="text-primary  py-1 sm:py-3  md:py-4 lg:py-4 lg:leading-[64px] text-xl sm:text-2xl md:text-3xl lg:text-[2.75rem] font-black font-pop"
          title="What we ship"
        />
        <div className="grid lg:grid-cols-5 gap-1 mt-5  sm:grid-cols-1">
          <div class="col-xs-12 col-sm-6 col-md-3 bg-[#F5F5F5] relative">
            <div class="text-center box-icon flex justify-center mt-12 items-center p-7 flex-col">
              <img
                class="icon-md md:icon-lg mt-md lazy entered loaded h-[70px] mb-4"
                width="80"
                src="https://img.mybaggage.com/img/icon-ship-boxes.svg"
              />
              <p class="mt-sm font-semibold">Boxes</p>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-3 bg-[#F5F5F5] relative">
            <div class="text-center box-icon flex justify-center mt-12 items-center p-7 flex-col">
              <img
                class="icon-md md:icon-lg mt-md lazy entered loaded h-[70px] mb-4"
                width="80"
                height="50"
                src="https://img.mybaggage.com/img/icon-ship-luggage.svg"
              />
              <p class="mt-sm font-semibold">Luggage</p>
            </div>
          </div>{" "}
          <div class="col-xs-12 col-sm-6 col-md-3 bg-[#F5F5F5] relative">
            <div class="text-center box-icon flex justify-center mt-12 items-center p-7 flex-col">
              <img
                class="icon-md md:icon-lg mt-md lazy entered loaded h-[70px] mb-4"
                width="80"
                height="80"
                src="https://img.mybaggage.com/img/icon-ship-bikes.svg"
              />
              <p class="mt-sm font-semibold">Bikes</p>
            </div>
          </div>{" "}
          <div class="col-xs-12 col-sm-6 col-md-3 bg-[#F5F5F5] relative">
            <div class="text-center box-icon flex justify-center mt-12 items-center p-7 mb-5 flex-col">
              <img
                class="icon-md md:icon-lg mt-md lazy entered loaded h-[70px] mb-4"
                width="80"
                height="80"
                src="https://img.mybaggage.com/img/icon-ship-instruments.svg"
              />
              <p class="mt-sm font-semibold">Musical Instruments</p>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-3 bg-[#F5F5F5] relative">
            <div class="text-center box-icon flex justify-center mt-12 items-center p-7 mb-5 flex-col">
              <img
                class="icon-md md:icon-lg mt-md lazy entered loaded h-[70px] mb-4"
                width="80"
                height="80"
                src="https://img.mybaggage.com/img/icon-ship-sports-equipment.svg"
              />
              <p class="mt-sm font-semibold">Sports Equipment</p>
            </div>
          </div>
        </div>
      </div>

      {/*------------------------------
another section-----------------------------------------------------------------------------------------------------------------------------------------------  */}
    </div>
  );
};

export default ThirdSection;
