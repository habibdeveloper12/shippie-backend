import React from "react";
import Container from "../../../Layout/Container";
import Heading from "../../../Layout/Heading";
import ButtonP from "../../../Layout/ButtonP";
import Para from "../../../Layout/Para";
import Herojpg from "../../../../../Assect/hero (1).jpg";
import Herosecondjpg from "../../../../../Assect/hero (2).jpg";
import HeroMain from "../../../../../Assect/banner-process.png";
const NewBanner = () => {
  return (
    <div className="bg-primary">
      <div
        className="w-[80%] m-auto bg-primary"
        style={{
          backgroundImage:
            "url(https://img.mybaggage.com/img/world-bg.svg?fit=max&amp;auto=format)",
          backgroundPosition: "center",
          backgroundColor: "",
        }}
      >
        <Container>
          <div className="sm:flex justify-between items-center pt-1 pb-24 sm:pt-0 sm:pb-7 md:pb-0 sm: px-3 sm:px-5">
            <div className="w-[95%] sm:w-2/4 mt-10 mb-6 sm:mb-28 md:mt-16 md:mb-36 lg:mt-20 lg:mb-40">
              <div>
                <Heading
                  className="text-white py-2 sm:py-3 md:py-4 lg:py-7 lg:leading-[64px] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black font-pop"
                  title="Send Your Parcels
                  Door to Door for Low Prices All Around the
                  World"
                />
              </div>

              <Para
                className="text-white text-sm sm:text-base lg:text-lg text-para font-inter pb-1 md:pb-1 lg:pb-3"
                title="We will arrange a collection of your luggage, boxes and sports equipment and deliver them anywhere in the world with full online tracking! "
              />
              <img
                src="https://cdn.trustpilot.net/brand-assets/1.1.0/logo-white.svg"
                width={"30%"}
              ></img>
              <img
                className="mt-4"
                src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.5.svg"
                width={"30%"}
              ></img>
              <div className="flex gap-4 mt-4">
                <ButtonP title="Get Started" />
              </div>
            </div>
            <div
              className="w-[90%] mx-auto sm:w-2/4 md:mt-16 lg:mt-20  relative 
"
            >
              {" "}
              <div className="  bg-no-repeat bg-cover h-48 ml-7"></div>
              <div className="  w-[100%] h-[320px] lg:w-[461px] lg:h-[461px] mx-auto my-auto">
                <img
                  className=" absolute top-10 z-20"
                  src={HeroMain}
                  width={"100%"}
                  alt="banner-image"
                />

                <img
                  className=" absolute top-0 left-5 ml-2 rounded-lg"
                  src={Herojpg}
                  width={"160px"}
                  height={"250px"}
                  alt="banner-image"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NewBanner;
