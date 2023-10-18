import React from "react";
import Heading from "../../../Layout/Heading";
import Para from "../../../Layout/Para";

const SecondSection = () => {
  return (
    <div className="bg-white p-24">
      <Heading
        className="text-primary py-2 sm:py-3 md:py-4 lg:py-7 lg:leading-[64px] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-black font-pop"
        title="How it works"
      />
      <Para
        className="text-black text-sm sm:text-base lg:text-lg text-para font-inter pb-1 md:pb-1 lg:pb-3"
        title="We make the process as smooth and seamless as possible so you can relax and enjoy your new destination without worrying about transporting your items. "
      />
      <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-4 mt-5">
        <div class="col-xs-12 col-sm-6 col-md-3 bg-[#F5F5F5] relative">
          <div class="rounded-full bg-primary pl-4 pr-4 py-2 top-[-20px] right-[43%]  absolute">
            1
          </div>
          <div class="text-center box-icon flex justify-center mt-12 items-center p-7 flex-col">
            <img
              class="icon-md md:icon-lg mt-md lazy entered loaded"
              width="80"
              height="80"
              src="https://img.mybaggage.com/img/icon-computer-check.svg"
            />
            <p class="mt-sm font-semibold">Book a collection online</p>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-3 bg-[#F5F5F5] relative">
          <div class="rounded-full bg-primary pl-4 pr-4 py-2 top-[-20px] right-[43%]  absolute">
            2
          </div>
          <div class="text-center box-icon flex justify-center mt-12 items-center p-7 flex-col">
            <img
              class="icon-md md:icon-lg mt-md lazy entered loaded"
              width="80"
              height="80"
              src="https://img.mybaggage.com/img/icon-printer.svg"
            />
            <p class="mt-sm font-semibold">Book a collection online</p>
          </div>
        </div>{" "}
        <div class="col-xs-12 col-sm-6 col-md-3 bg-[#F5F5F5] relative">
          <div class="rounded-full bg-primary pl-4 pr-4 py-2 top-[-20px] right-[43%]  absolute">
            3
          </div>
          <div class="text-center box-icon flex justify-center mt-12 items-center p-7 flex-col">
            <img
              class="icon-md md:icon-lg mt-md lazy entered loaded"
              width="80"
              height="80"
              src="https://img.mybaggage.com/img/icon-delivery-man.svg"
            />
            <p class="mt-sm font-semibold">Book a collection online</p>
          </div>
        </div>{" "}
        <div class="col-xs-12 col-sm-6 col-md-3 bg-[#F5F5F5] relative">
          <div class="rounded-full bg-primary pl-4 pr-4 py-2 top-[-20px] right-[43%]  absolute">
            4
          </div>
          <div class="text-center box-icon flex justify-center mt-12 items-center p-7 mb-5 flex-col">
            <img
              class="icon-md md:icon-lg mt-md lazy entered loaded"
              width="80"
              height="80"
              src="https://img.mybaggage.com/img/icon-globe-van.svg"
            />
            <p class="mt-sm font-semibold">Book a collection online</p>
          </div>
        </div>
      </div>

      {/*------------------------------
  another section-----------------------------------------------------------------------------------------------------------------------------------------------  */}
    </div>
  );
};

export default SecondSection;
