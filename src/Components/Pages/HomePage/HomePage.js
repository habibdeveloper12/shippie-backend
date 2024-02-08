import React from "react";
import Card from "./Card/Card";
import CommonWay from "./CommonWay/CommonWay";
import GetStart from "./GetStart/GetStart";
import Hero from "./Hero/Hero";
import HowToWork from "./HowToWork/HowToWork";
import LoockingFor from "./LoockingFor/LoockingFor";
import Quality from "./Quality/Quality";
import CryptoJS from "crypto-js";
import axios from "axios";
import NewBanner from "./Hero/Bannar/NewBanner";
import SecondSection from "./Hero/Bannar/SecondSection";
import ThirdSection from "./Hero/Bannar/ThirdSection";
import FourSection from "./Hero/Bannar/FourSection";
import RateCalculator from "../PricesPage/RateCalculator/RateCalculator";
import RateCalculatorReal from "../PricesPage/RateCalculator/RateCalculatorReal";

const HomePage = () => {
  const handleCheckout = async ({ _id, sender, recipient }) => {
    const cust_code = "001008";
    const merchant_outlet_id = "01";
    const terminal_id = "001";
    const merchant_return_url = "/thanks";

    // const description = `Shipment by ${sender.first_name} ${sender.last_name} to ${recipient.name}`;
    const description = `Shipment by Habib`;
    const currency = "SGD";
    const amount = 10;
    const order_id = "uuid_1_uuid";
    const user_fullname = "Michael Scott";
    const secret_key = "OGVQ4KW90AMBRR5YA34YPLDI3ZJJANGU";

    const hashString = `${secret_key}${cust_code}${merchant_outlet_id}${terminal_id}${merchant_return_url}${description}${currency}${amount}${order_id}${user_fullname}`;
    const hash = CryptoJS.HmacSHA1(hashString, secret_key);
    const signature = CryptoJS.enc.Hex.stringify(hash);
    const hashed = signature.toUpperCase();

    try {
      const response = await axios.post(
        "https://portalapi.oisbizcraft.com/api/payments",
        {
          order_id: order_id,
          merchant_outlet_id: merchant_outlet_id,
          terminal_id: terminal_id,
          cust_code: cust_code,
          merchant_return_url: merchant_return_url,
          amount: amount,
          currency: currency,
          user_fullname: user_fullname,
          description: description,
          hash: hashed,
        },
        {
          headers: {
            "Content-Type": "application/json",
            // Add additional headers if required
          },
        }
      );
      // Rest of your code...
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <NewBanner></NewBanner>
      <div className="relative">
        <RateCalculator />
      </div>
      <Hero></Hero>
      <SecondSection />
      {/* <ThirdSection /> */}
      <FourSection />
      <Card></Card>
      {/* <CommonWay></CommonWay> */}
      {/* <HowToWork></HowToWork> */}
      {/* <Quality></Quality> */}
      <LoockingFor></LoockingFor>
      <GetStart></GetStart>
    </div>
  );
};

export default HomePage;
