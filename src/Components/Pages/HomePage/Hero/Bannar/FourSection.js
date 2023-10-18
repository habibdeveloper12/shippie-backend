import React from "react";
import Heading from "../../../Layout/Heading";
import Para from "../../../Layout/Para";
import pic1 from "../../../../../Assect/shippie (1).jpg";
import pic2 from "../../../../../Assect/shippie (2).jpg";
import pic3 from "../../../../../Assect/shippie (3).jpg";
import pic4 from "../../../../../Assect/school.webp";
const FourSection = () => {
  return (
    <div>
      <div className="bg-white px-24 py-16">
        <div>
          <Heading
            className="text-primary  py-1 sm:py-3  md:py-1 lg:py-1 lg:leading-[64px] text-xl sm:text-2xl md:text-3xl lg:text-[2.75rem] font-black font-pop"
            title="My Shippie is ideal for:"
          />
          <div className="grid lg:grid-cols-4 gap-1 mt-1 sm:grid-cols-1">
            <div class="col-xs-12 col-sm-6 col-md-3  relative">
              <div class="text-center box-icon flex justify-center mt-12 items-center p-3 flex-col">
                <img
                  class="icon-md md:icon-lg mt-md lazy entered h-[150px] loaded h-[150px] mb-4"
                  width="100%"
                  src={pic1}
                />
                <Heading
                  className="text-primary lg:ml-[-108px]  py-1 sm:py-1 md:py-1 lg:py-1  text-xl sm:text-xl md:text-xl lg:text-xl text-left font-bold font-pop"
                  title="Going Overseas
                 "
                />
                <Para
                  className="text-black text-left text-sm sm:text-base lg:text-lg text-para font-inter pb-1 md:pb-1 lg:pb-3"
                  title="

                  Embark on a seamless global
                  voyage with Shippee. We ensure
                  your cargo reaches distant shores
                  safely, efficiently, and on time.
                  Explore the world with confidence
                  with us. "
                />
              </div>
            </div>{" "}
            <div class="col-xs-12 col-sm-6 col-md-3  relative">
              <div class="text-center box-icon flex justify-center mt-12 items-center p-3 flex-col">
                <img
                  class="icon-md md:icon-lg mt-md lazy entered h-[150px] loaded h-[150px] mb-4"
                  width="100%"
                  src={pic4}
                />
                <Heading
                  className="text-primary lg:ml-[-108px]  py-1 sm:py-1 md:py-1 lg:py-1  text-xl sm:text-xl md:text-xl lg:text-xl text-left font-bold font-pop"
                  title="Going to School
                "
                />
                <Para
                  className="text-black text-left text-sm sm:text-base lg:text-lg text-para font-inter pb-1 md:pb-1 lg:pb-3"
                  title="  Sending your child to school? Trust
                  our shipping company to safely
                  transport their essentials. Shippee
                  specialize in reliable and secure
                  shipping, ensuring peace of mind
                  for parents worldwide. "
                />
              </div>
            </div>{" "}
            <div class="col-xs-12 col-sm-6 col-md-3  relative">
              <div class="text-center box-icon flex justify-center mt-12 items-center p-3 flex-col">
                <img
                  class="icon-md md:icon-lg mt-md lazy entered h-[150px] loaded h-[150px] mb-4"
                  width="100%"
                  src={pic2}
                />
                <Heading
                  className="text-primary lg:ml-[-108px]  py-1 sm:py-1 md:py-1 lg:py-1  text-xl sm:text-xl md:text-xl lg:text-xl text-left font-bold font-pop"
                  title="Online Sellers
                 "
                />
                <Para
                  className="text-black text-left text-sm sm:text-base lg:text-lg text-para font-inter pb-1 md:pb-1 lg:pb-3"
                  title=" Online sellers, maximize your reach
                  with our shipping solutions.
                  Seamlessly ship products to
                  customers worldwide, with our
                  efficient, cost-effective services.
                  Expand your e-commerce business
                  with confidence in our expertise."
                />
              </div>
            </div>{" "}
            <div class="col-xs-12 col-sm-6 col-md-3  relative">
              <div class="text-center box-icon flex justify-center mt-12 items-center p-3 flex-col">
                <img
                  class="icon-md md:icon-lg mt-md lazy entered h-[150px] loaded h-[150px] mb-4"
                  width="100%"
                  src={pic3}
                />
                <Heading
                  className="text-primary lg:ml-[-108px]  py-1 sm:py-1 md:py-1 lg:py-1  text-xl sm:text-xl md:text-xl lg:text-xl text-left font-bold font-pop"
                  title="Sending Gifts
                  "
                />
                <Para
                  className="text-black text-left text-sm sm:text-base lg:text-lg text-para font-inter pb-1 md:pb-1 lg:pb-3"
                  title="Surprise loved ones with heartfelt
                  gifts. Shippee ensures your
                  presents arrive intact and on time,
                  spreading joy and creating
                  unforgettable moments across
                  distances. "
                />
              </div>
            </div>{" "}
          </div>
        </div>

        {/*------------------------------
another section-----------------------------------------------------------------------------------------------------------------------------------------------  */}
      </div>
    </div>
  );
};

export default FourSection;
