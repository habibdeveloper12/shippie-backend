import React ,{useState} from 'react';
import axios from 'axios';
import "./banner.css";
const store = require('store');

const Bannar = () => {
    const [trackData , setTrackData] = useState("")
    const [empty , isEmpty] = useState("")
    let token;
    let apiData= {
        grant_type :'client_credentials',
        client_id :process.env.REACT_APP_FEDEX_AUTH_CLIENT_ID,
        client_secret :process.env.REACT_APP_FEDEX_AUTH_CLIENT_SECRET
    }
    axios({
        url:"/oauth/token",
        data:apiData,
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    }).then((res)=>{
        token = res.data.access_token
        })

    function sendTrackData(){
        let trackNumber=document.getElementById("login_input");
        if(trackNumber.value){
            isEmpty(false);

                    let getPackage = {
                        includeDetailedScans: true,
                        trackingInfo: [
                          {
                            trackingNumberInfo: {
                              trackingNumber: trackNumber.value,
                            }
                          }
                        ]
                      }
                      
                    var trackData = JSON.stringify(getPackage);

                    axios({
                        url:"/track/v1/trackingnumbers",
                        data:trackData,
                        method:'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization' : 'Bearer '+token
                        }
                    }).then((res)=>{
                        let obj = res.data.output.completeTrackResults[0].trackResults[0];
                        if(obj.error) {
                            setTrackData(obj.error.message)
                        } else {
                            let data = {
                                packageNumber:obj.trackingNumberInfo.trackingNumber,
                                shippedFrom:obj.shipperInformation.address.city+ ", "+ obj.shipperInformation.address.stateOrProvinceCode + ", "+obj.shipperInformation.address.countryName,
                                serviceDetail:obj.serviceDetail.description,
                                packageAt: obj.latestStatusDetail.description,
                                packageStatus: obj.latestStatusDetail.statusByLocale,
                                packageLocation: obj.latestStatusDetail.scanLocation.city+", "+obj.latestStatusDetail.scanLocation.stateOrProvinceCode+", "+obj.latestStatusDetail.scanLocation.countryName ,
                            }
                            store.set("foo",data)
                            window.location.href='/track'
                        }
                    }).catch((error)=>{
                        console.log(error);
                    })
        } else {
            isEmpty(true)
        }
    }
    return (
        <div>
            <div className="bg-background-dark-gray">
                <div className="relative h-fit overflow-hidden">

                    <div className="absolute inset-0 transition-transform ease-in-out duration-700 z-10">
                        <div
                            style={{ backgroundImage: 'url(https://cdn.sanity.io/images/bm4duuk0/production/369e73a1e57c429eebbe77e211eb97ec107ad46f-1923x1090.svg?fit=max&amp;auto=format)', backgroundPosition: 'center', backgroundColor: '#f6f6f6' }}
                            className="pt-2 md:pt-2 pb-16 md:pb-24 text-center sm:text-left relative bg-cover bg-left sm:bg-center h-fit sm:h-full min-h-[280px] sm:min-h-[75vh] 2xl:min-h-[60vh]"
                        >  <div className='text-center font-bold'>
                        <h3 className='mb-3'>Track Your orders Here</h3>
                        <div className="track_form">
<input  id="login_input" maxlength="16" className="form-control tracking_field" placeholder="Invoice Number" type="text" name="invoice" required=""/>
<input autocomplete="off" type="hidden" name="auth" value="0"/>
<button className="tracking_btn" type="submit" onClick={sendTrackData}>
TRACK NOW
</button>
</div>
                            
                            {empty && <h1>Please enter a track number</h1>}    
                            {trackData && <h1>{trackData}</h1>}    
                            <div className="bg-cover bg-center undefined">
                                <div className="relative h-full max-w-6xl m-auto px-6 sm:px-12">
                              
                                    <div className="w-full sm:max-w-[61.8%] xl:max-w-[50%]">
                                       
                                        </div>
                                        <div className="text-2xl  sm:text-3xl md:text-4xl xl:text-[40px] font-bold leading-snug sm:leading-snug xl:leading-tight whitespace-pre-line">
                                            <h3>
                                                Ship across the world
                                                <br />
                                                from your couch
                                            </h3>
                                        </div>
                                        <div className="hidden sm:block mt-6 space-y-6 sm:leading-snug   
                                        font-normal sm:text-base md:text-xl text-xl ">
                                            <h2>All-in-one hassle-free international shipping. We’ll pick up your items from your doorstep, pack it securely for you and ship it affordably.</h2>
                                            <h1>We offer the cheapest shipping from Singapore to USA (as low as $45), UK, France, Malaysia and worldwide.</h1>
                                        </div>
                                        <div className="mt-8 hidden pb-8 sm:flex flex-wrap gap-4 leading-snug justify-start">
                                            <div className="flex-1 max-w-[256px] ">
                                                <a target="_blank" href="/">
                                                    <button
                                                        className="rounded-full font-bold focus:outline-purple-300 whitespace-nowrap px-12 py-4  hover:bg-[#6211cb] bg-[#844ffa] text-white w-full"
                                                        rel="noopener noreferrer"
                                                        _key="1ddb8ad1b9ac"
                                                        _type="callToAction"
                                                        title="Ship Now"
                                                        url="/create-shipment"
                                                    >
                                                        Ship Now
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-cover bg-center sm:hidden h-full py-10 text-center" style={{ backgroundColor: '#f6f6f6' }}>
                            <div className="relative h-full max-w-6xl m-auto px-6 sm:px-12">
                                <div className="leading-snug space-y-6 prose prose-headings:font-normal prose-headings:text-base">
                                    <h2>All-in-one hassle-free international shipping. We’ll pick up your items from your doorstep, pack it securely for you and ship it affordably.</h2>
                                    <h1>We offer the cheapest shipping from Singapore to USA (as low as $45), UK, France, Malaysia and worldwide.</h1>
                                </div>
                                <div className="mt-8">
                                    <a target="_blank" href="/create-shipment">
                                        <button className="rounded-full font-bold whitespace-nowrap px-12 py-4 focus:outline-purple-200  hover:bg-[#6211cb] bg-[#844ffa]  disabled:bg-disabled-purple text-white" rel="noopener noreferrer">
                                            Ship Now
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute inset-0 transition-transform ease-in-out duration-700 translate-x-full">
                        <div
                            style={{ backgroundImage: 'url(https://cdn.sanity.io/images/bm4duuk0/production/56b637d4b3cfc999c825a52c502dc8844017531e-1923x1014.svg?fit=max&amp;auto=format)', backgroundPosition: 'center', backgroundColor: '#f6f6f6' }}
                            className="pt-12 md:pt-16 pb-16 md:pb-24 text-center sm:text-left relative bg-cover bg-left sm:bg-center h-fit sm:h-full min-h-[280px] sm:min-h-[75vh] 2xl:min-h-[60vh]"
                        >
                            <div className="bg-cover bg-center undefined">
                                <div className="relative h-full max-w-6xl m-auto px-6 sm:px-12">
                                    <div className="w-full sm:max-w-[61.8%] xl:max-w-[50%]">
                                        <div className="text-2xl sm:text-3xl md:text-4xl xl:text-4.5xl font-semibold leading-snug sm:leading-snug xl:leading-tight whitespace-pre-line">
                                            <h3>Kick off your plan before the sun sets</h3>
                                        </div>
                                        <div className="hidden sm:block mt-6 space-y-6 sm:leading-snug prose prose-headings:font-normal prose-headings:sm:text-base prose-headings:md:text-lg prose-headings:2xl:text-xl">
                                            <h2>Prep work takes less than an hour when you JustShip. Book a free next day pick-up now.</h2>
                                            <h1>Get your parcel shipped in 2-5 days with the cheapest shipping from Singapore to USA and worldwide.</h1>
                                        </div>
                                        <div className="mt-8 hidden pb-8 sm:flex flex-wrap gap-4 leading-snug justify-start">
                                            <div className="flex-1 max-w-[256px]">
                                                <a target="_blank" href="/create-shipment">
                                                    <button
                                                        className="rounded-full font-bold focus:outline-light-purple whitespace-nowrap px-12 py-4 bg-light-purple hover:bg-dark-purple disabled:bg-disabled-purple text-white w-full"
                                                        rel="noopener noreferrer"
                                                        _key="265c88a94812"
                                                        _type="callToAction"
                                                        title="Ship Now"
                                                        url="/create-shipment"
                                                    >
                                                        Ship Now
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-cover bg-center sm:hidden h-full py-10 text-center" style={{ backgroundColor: '#f6f6f6' }}>
                            <div className="relative h-full max-w-6xl m-auto px-6 sm:px-12">
                                <div className="leading-snug space-y-6 prose prose-headings:font-normal prose-headings:text-base">
                                    <h2>Prep work takes less than an hour when you JustShip. Book a free next day pick-up now.</h2>
                                    <h1>Get your parcel shipped in 2-5 days with the cheapest shipping from Singapore to USA and worldwide.</h1>
                                </div>
                                <div className="mt-8">
                                    <a target="_blank" href="/create-shipment">
                                        <button className="rounded-full font-bold focus:outline-light-purple whitespace-nowrap px-12 py-4 bg-light-purple hover:bg-dark-purple disabled:bg-disabled-purple text-white" rel="noopener noreferrer">
                                            Ship Now
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-0 transition-transform ease-in-out duration-700 translate-x-full hidden">
                        <div
                            style={{ backgroundImage: 'url(https://cdn.sanity.io/images/bm4duuk0/production/fb248acb706c87c540982976ae1689deef0ef6d6-1923x1014.svg?fit=max&amp;auto=format)', backgroundPosition: 'center', backgroundColor: '#6211cb' }}
                            className="pt-12 md:pt-16 pb-16 md:pb-24 text-center sm:text-left relative bg-cover bg-left sm:bg-center h-fit sm:h-full min-h-[280px] sm:min-h-[75vh] 2xl:min-h-[60vh]"
                        >
                            <div className="bg-cover bg-center undefined">
                                <div className="relative h-full max-w-6xl m-auto px-6 sm:px-12">
                                    <div className="w-full sm:max-w-[61.8%] xl:max-w-[50%]">
                                        <div className="text-2xl sm:text-3xl md:text-4xl xl:text-4.5xl font-semibold leading-snug sm:leading-snug xl:leading-tight whitespace-pre-line">
                                            <h3>
                                                <span className=' text-white'>Dive into deep savings with protected shipping</span>
                                            </h3>
                                        </div>
                                        <div className="hidden sm:block mt-6 space-y-6 sm:leading-snug prose prose-headings:font-normal prose-headings:sm:text-base prose-headings:md:text-lg prose-headings:2xl:text-xl">
                                            <h2>
                                                <span className=' text-white'>Avoid parcel loss and damage when you get access to protective packing, insurance and parcel tracking.</span>
                                            </h2>
                                            <h1>
                                                <span className=' text-white'>Cheapest international shipping that protects your parcel for even more savings.</span>
                                            </h1>
                                        </div>
                                        <div className="mt-8 hidden pb-8 sm:flex flex-wrap gap-4 leading-snug justify-start">
                                            <div className="flex-1 max-w-[256px]">
                                                <a target="_blank" href="/create-shipment">
                                                    <button
                                                        className="rounded-full font-bold focus:outline-light-purple whitespace-nowrap px-12 py-4 bg-light-purple hover:bg-dark-purple disabled:bg-disabled-purple text-white w-full"
                                                        rel="noopener noreferrer"
                                                        _key="cb3b75174511"
                                                        _type="callToAction"
                                                        title="Ship Now"
                                                        url="/create-shipment"
                                                    >
                                                        Ship Now
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-cover bg-center sm:hidden h-full py-10 text-center" style={{ backgroundColor: '#6211cb' }}>
                            <div className="relative h-full max-w-6xl m-auto px-6 sm:px-12">
                                <div className="leading-snug space-y-6 prose prose-headings:font-normal prose-headings:text-base">
                                    <h2>
                                        <span className=' text-white'>Avoid parcel loss and damage when you get access to protective packing, insurance and parcel tracking.</span>
                                    </h2>
                                    <h1>
                                        <span className=' text-white'>Cheapest international shipping that protects your parcel for even more savings.</span>
                                    </h1>
                                </div>
                                <div className="mt-8">
                                    <a target="_blank" href="/create-shipment">
                                        <button className="rounded-full font-bold focus:outline-light-purple whitespace-nowrap px-12 py-4 bg-light-purple hover:bg-dark-purple disabled:bg-disabled-purple text-white" rel="noopener noreferrer">
                                            Ship Now
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-0 transition-transform ease-in-out duration-700 -translate-x-full">
                        <div
                            style={{ backgroundImage: 'url(https://cdn.sanity.io/images/bm4duuk0/production/aca45ceb7c5749d0f586c29c0f42484a0cd013a5-1923x1014.svg?fit=max&amp;auto=format', backgroundPosition: 'center', backgroundColor: '#6211cb' }}
                            className="pt-12 md:pt-16 pb-16 md:pb-24 text-center sm:text-left relative bg-cover bg-left sm:bg-center h-fit sm:h-full min-h-[280px] sm:min-h-[75vh] 2xl:min-h-[60vh]"
                        >
                            <div className="bg-cover bg-center undefined">
                                <div className="relative h-full max-w-6xl m-auto px-6 sm:px-12">
                                    <div className="w-full sm:max-w-[61.8%] xl:max-w-[50%]">
                                        <div className="text-2xl sm:text-3xl md:text-4xl xl:text-4.5xl font-semibold leading-snug sm:leading-snug xl:leading-tight whitespace-pre-line">
                                            <h3>
                                                <span className=' text-white'>Sleep worry-free at night</span>
                                            </h3>
                                        </div>
                                        <div className="hidden sm:block mt-6 space-y-6 sm:leading-snug prose prose-headings:font-normal prose-headings:sm:text-base prose-headings:md:text-lg prose-headings:2xl:text-xl">
                                            <h2>
                                                <span className=' text-white'>Enjoy VIP add-ons like Tax-Ray Vision and Expert Review for free. Say goodbye to hidden charges and customs mishaps.</span>
                                            </h2>
                                            <h1>
                                                <span className=' text-white'>Get transparent prices for the real cheapest shipping from Singapore to UK and worldwide.</span>
                                            </h1>
                                        </div>
                                        <div className="mt-8 hidden pb-8 sm:flex flex-wrap gap-4 leading-snug justify-start">
                                            <div className="flex-1 max-w-[256px]">
                                                <a target="_blank" href="/create-shipment">
                                                    <button
                                                        className="rounded-full font-bold focus:outline-light-purple whitespace-nowrap px-12 py-4 bg-light-purple hover:bg-dark-purple disabled:bg-disabled-purple text-white w-full"
                                                        rel="noopener noreferrer"
                                                        _key="10833ffa670a"
                                                        _type="callToAction"
                                                        title="Ship Now"
                                                        url="/create-shipment"
                                                    >
                                                        Ship Now
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-cover bg-center sm:hidden h-full py-10 text-center" style={{ backgroundColor: '#6211cb' }}>
                            <div className="relative h-full max-w-6xl m-auto px-6 sm:px-12">
                                <div className="leading-snug space-y-6 prose prose-headings:font-normal prose-headings:text-base">
                                    <h2>
                                        <span className=' text-white'>Enjoy VIP add-ons like Tax-Ray Vision and Expert Review for free. Say goodbye to hidden charges and customs mishaps.</span>
                                    </h2>
                                    <h1>
                                        <span className=' text-white'>Get transparent prices for the real cheapest shipping from Singapore to UK and worldwide.</span>
                                    </h1>
                                </div>
                                <div className="mt-8">
                                    <a target="_blank" href="/create-shipment">
                                        <button className="rounded-full font-bold focus:outline-light-purple whitespace-nowrap px-12 py-4 bg-light-purple hover:bg-dark-purple disabled:bg-disabled-purple text-white" rel="noopener noreferrer">
                                            Ship Now
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="invisible">
                        <div
                            style={{ backgroundImage: 'url(https://cdn.sanity.io/images/bm4duuk0/production/aca45ceb7c5749d0f586c29c0f42484a0cd013a5-1923x1014.svg?fit=max&amp;auto=format)', backgroundPosition: 'center', backgroundColor: '#6211cb' }}
                            className="pt-12 md:pt-16 pb-16 md:pb-24 text-center sm:text-left relative bg-cover bg-left sm:bg-center h-fit sm:h-full min-h-[280px] sm:min-h-[75vh] 2xl:min-h-[60vh]"
                        >
                            <div className="bg-cover bg-center undefined">
                                <div className="relative h-full max-w-6xl m-auto px-6 sm:px-12">
                                    <div className="w-full sm:max-w-[61.8%] xl:max-w-[50%]">
                                        <div className="text-2xl sm:text-3xl md:text-4xl xl:text-4.5xl font-semibold leading-snug sm:leading-snug xl:leading-tight whitespace-pre-line">
                                            <h3>
                                                <span className=' text-white'>Sleep worry-free at night</span>
                                            </h3>
                                        </div>
                                        <div className="hidden sm:block mt-6 space-y-6 sm:leading-snug prose prose-headings:font-normal prose-headings:sm:text-base prose-headings:md:text-lg prose-headings:2xl:text-xl">
                                            <h2>
                                                <span className=' text-white'>Enjoy VIP add-ons like Tax-Ray Vision and Expert Review for free. Say goodbye to hidden charges and customs mishaps.</span>
                                            </h2>
                                            <h1>
                                                <span className=' text-white'>Get transparent prices for the real cheapest shipping from Singapore to UK and worldwide.</span>
                                            </h1>
                                        </div>
                                        <div className="mt-8 hidden pb-8 sm:flex flex-wrap gap-4 leading-snug justify-start">
                                            <div className="flex-1 max-w-[256px]">
                                                <a target="_blank" href="/create-shipment">
                                                    <button
                                                        className="rounded-full font-bold focus:outline-light-purple whitespace-nowrap px-12 py-4 bg-light-purple hover:bg-dark-purple disabled:bg-disabled-purple text-white w-full"
                                                        rel="noopener noreferrer"
                                                        _key="10833ffa670a"
                                                        _type="callToAction"
                                                        title="Ship Now"
                                                        url="/create-shipment"
                                                    >
                                                        Ship Now
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-cover bg-center sm:hidden h-full py-10 text-center" style={{ backgroundColor: '#6211cb' }}>
                            <div className="relative h-full max-w-6xl m-auto px-6 sm:px-12">
                                <div className="leading-snug space-y-6 prose prose-headings:font-normal prose-headings:text-base">
                                    <h2>
                                        <span className=' text-white'>Enjoy VIP add-ons like Tax-Ray Vision and Expert Review for free. Say goodbye to hidden charges and customs mishaps.</span>
                                    </h2>
                                    <h1>
                                        <span className=' text-white'>Get transparent prices for the real cheapest shipping from Singapore to UK and worldwide.</span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Bannar;