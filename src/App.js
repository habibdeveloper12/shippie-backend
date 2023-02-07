import "@fontsource/montserrat";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Pages/Auth/Login";
import Signup from "./Components/Pages/Auth/Signup";
import Checkout from "./Components/Pages/Checkout/Checkout";
import Countries from "./Components/Pages/Countries/Countries";
import Goods from "./Components/Pages/FeaturesPage/Goods/Goods";
import Packing from "./Components/Pages/FeaturesPage/Packing/Packing";
import Relocation from "./Components/Pages/FeaturesPage/Relocation/Relocation";
import TaxRay from "./Components/Pages/FeaturesPage/TaxRay/TaxRay";
import HomePage from "./Components/Pages/HomePage/HomePage";
import FAQ from "./Components/Pages/LearnPage/FAQ/FAQ";
import MyProfile from "./Components/Pages/MyProfile/MyProfile";
import OurPrice from "./Components/Pages/PricesPage/OurPrice/OurPrice";
import RateCalculator from "./Components/Pages/PricesPage/RateCalculator/RateCalculator";
import ShipNow from "./Components/Pages/ShipNow/ShipNow";
import Footer from "./Components/Shared/Footer/Footer";
import Navbar from "./Components/Shared/Navbar/Navbar";
import Track from "./Components/Pages/HomePage/Fedex/Track";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import AddBox from "./Components/Pages/PricesPage/RateCalculator/AddBox";

function App() {

  // var data = JSON.stringify("");

  // var xhr = new XMLHttpRequest();
  // xhr.withCredentials = true;

  // xhr.addEventListener("readystatechange", function () {
  //   if (this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // });

  // xhr.open("POST", "https://apis-sandbox.fedex.com/track/v1/trackingnumbers");
  // xhr.setRequestHeader("Content-Type", "application/json");
  // xhr.setRequestHeader("X-locale", "en_US");
  // xhr.setRequestHeader("Authorization", "Bearer ");
  // xhr.send(data);
  return (
    <div style={{ fontFamily: 'Montserrat, sans-serif' }} >
      <Navbar  ></Navbar>
      <Routes>  
        <Route path="/" element={<HomePage />} />
        <Route path="/countries/:id" element={<Countries />} />
        <Route path="/ourPrices" element={<OurPrice />} />
        <Route path="/rateCalculator" element={<RateCalculator />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/packing" element={<Packing />} />
        <Route path="/taxray" element={<TaxRay />} />
        <Route path="/dangerousgoods" element={<Goods />} />
        <Route path="/relocation" element={<Relocation />} />
        <Route path="/shipnow" element={<ShipNow />} />
        <Route path="/signIn" element={< Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/track" element={<Track />} />
        <Route path="/addbox" element={<AddBox />} />
        <Route path="/get-a-quote" element={<RateCalculator />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;