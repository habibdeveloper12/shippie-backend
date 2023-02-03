import React from 'react';
import { GoLocation } from "react-icons/go"
import { FaCarSide } from "react-icons/fa"
const Checkout = () => {
  return (
    <div>
      <div className='bg-background-gray py-16 md:pl-16 md:pr-12 min-h-screen md:min-h-[80vh] '>
        <div className='max-w-5xl mx-auto'>
          <div className='md:grid grid-cols-[68%_32%] gap-x-12 relative'>
            <div>
              <div className='bg-white rounded-xl py-4'>
                <div className='w-[85%] md:w-[75%] lg:w-[65%] mx-auto text-sm '>
                  <p className="font-bold text-2xl text-center">How would you like JustShip to <br /> collect your parcel?</p>
                  <div className='flex flex-wrap my-8 justify-center gap-6 md:gap-8 '>
                    <button className='pill-button button-hover flex justify-center items-center group w-[140px] lg:w-[160px] h-[40px] bg-white text-light-purple hover:bg-dark-purple hover:text-white ' >
                      <FaCarSide width={34} height={24} />
                      <span className="ml-1">Pick Up</span>
                    </button>
                    <button className='pill-button button-hover flex justify-center items-center group w-[140px] lg:w-[160px] h-[40px] bg-white text-light-purple hover:bg-dark-purple hover:text-white '>
                      <GoLocation width={34} height={24} />
                      <span className="ml-1">Drop Up</span>
                    </button>
                    <div>
                      <label className="block font-normal text-subheading-gray text-sm group-focus-within:text-dark-purple" for="contact-person-mobile">Pickup contact's mobile</label>
                      <div className='flex h-10 mt-1 mb-6 relative rounded-xl border focus-within:border-light-purple focus-within:shadow-border-focus border-border-dark-gray shadow-border'>
                        <div className='relative text-gray-4 text-sm'>
                          <select id="country-call-code" name="country-call-code" className="absolute w-full h-full opacity-0 disabled:bg-gray-2 cursor-pointer" tabindex="-1">
                            <option value="" disabled=""></option><option value="AF/+93">Afghanistan +93</option><option value="AL/+355">Albania +355</option><option value="DZ/+213">Algeria +213</option><option value="AS/+1684">American Samoa +1684</option><option value="AD/+376">Andorra +376</option><option value="AO/+244">Angola +244</option><option value="AI/+1264">Anguilla +1264</option><option value="AG/+1268">Antigua &amp; Barbuda +1268</option><option value="AR/+54">Argentina +54</option><option value="AM/+374">Armenia +374</option><option value="AW/+297">Aruba +297</option><option value="AU/+61">Australia +61</option><option value="AT/+43">Austria +43</option><option value="AZ/+994">Azerbaijan +994</option><option value="BS/+1242">Bahamas +1242</option><option value="BH/+973">Bahrain +973</option><option value="BD/+880">Bangladesh +880</option>
                          </select>
                          <div className="h-full flex items-center min-w-[40px] px-3 justify-center" aria-hidden="true">+65</div>
                        </div>
                        <hr className="h-2/3 self-center border-l border-border-gray group-focus-within:border-light-purple"></hr>
                        <input type="tel" id="contact-person-mobile" className="block w-full pl-3 pr-10 py-2.5 text-gray-4 disabled:bg-gray-2 text-sm rounded-xl focus:outline-none" value="43434343"></input>
                      </div>
                    </div>
                    <div className="grid auto-rows-fr gap-y-2 md:grid-cols-3"><p className="text-subtext-gray font-medium w-max">Pick Up Date</p></div>
                    <div className='grid grid-cols-3 gap-x-4'>
                      <button type="button" id="date1" className="form-input h-[50px] leading-snug my-2  bg-light-purple text-white border-transparent ">Mon <br /> 12 Dec</button>
                      <button type="button" id="date2" className="form-input h-[50px] leading-snug my-2 hover:bg-dark-purple hover:text-white hover:border-transparent ">Tue <br />13 Dec</button>
                      <button type="button" id="date3" className="form-input h-[50px] leading-snug my-2 hover:bg-dark-purple hover:text-white hover:border-transparent ">Wed<br />14 Dec</button>
                    </div>
                    <p id="show-more-dates" className="text-light-purple hover:text-dark-purple cursor-pointer h-8 mt-2">Show more dates </p>

                  </div>
                </div>
              </div>
            </div>
            {/* end of left side  */}
            <div>
              <div className='self-start bg-white rounded-xl md:sticky top-32 py-8 px-6 text-subheading-gray text-sm'>
                <p className="font-semibold text-lg">Your Details</p>
                <p id="sender-name">sdsd sdsd</p>
                <p id="mobile-no">+65 43434343</p>
                <hr className="border-border-gray border-t my-8"></hr>
                <p className="font-semibold text-lg">Collection</p>
                <p id="DOPU"></p>
                <p id="collection-time"></p>
                <hr className="border-border-gray border-t my-8"></hr>
                <p className="font-semibold text-lg">Shipments</p>
                <div className="grid grid-cols-[auto_30%] mt-3"><div className="grid grid-cols-[20px_auto] items-center text-gray-600"><svg width="20" height="20" viewBox="0 0 100 100" className="inline-block w-3 h-3 fill-current transition-transform hover:cursor-pointer rotate-90"><polygon points="5.9,88.2 50,11.8 94.1,88.2 "></polygon></svg> <p className="flex pr-2">(NZ) dfdf</p></div> <p className="justify-self-end text-right">SGD 851.89</p></div>
                <hr className='border-border-gray border-t my-8' />
                <div className="grid grid-cols-[50%_50%]"><p className="text-subheading-gray font-bold text-lg">Total</p><p className="text-dark-purple font-bold text-lg whitespace-nowrap text-right">SGD 851.89</p></div>
                <hr className='border-border-gray border-t my-8' />
                <div className="flex flex-col text-left md:mx-auto"><label for="addinfo" className="font-semibold text-lg">Additional Information</label><textarea type="text" id="addinfo" className="form-input rounded-md resize-y disabled:resize-none placeholder:text-placeholder-gray h-24 md:h-20 md:mb-8 p-2" placeholder="Additional information about your packages"></textarea></div>
                <button type="button" id="cart-checkout-button" className="pill-button button-hover bg-light-purple hover:bg-dark-purple text-base text-white w-full h-[45px] mx-auto mt-12 md:mt-0 disabled:cursor-not-allowed disabled:bg-disabled-purple disabled:border-transparent">Proceed to PayNow</button>
                <button className="my-2 block mx-auto underline text-subtext-gray hover:text-light-purple">Pay with Credit Card (+3%)</button>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;