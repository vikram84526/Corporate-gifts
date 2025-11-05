import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import ProductCard from "./Components/ProductCard";
import CTASection from "./Components/CTASection";
import DecorGifts from "./Components/DecorGifts";
import UtilityGifts from "./Components/UtilityGifts";
import BespokeGifts from "./Components/BespokeGifts";
import InfoShowcase from "./Components/InfoShowcase";
import CorporateGiftingForm from "./Components/GiftingForm";
import ContactForm from "./Components/ContactForm";
// import { useEffect } from "react";
// import axios from "axios";

function App() {
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/users")
  //     .then((res) => {
  //       console.log(res.data);
  //       setUsers(res.data); // store fetched data
  //     })
  //     .catch((err) => console.error(err));
  // }, []);
  return (
    <>
      <Header/>
      <HeroSection/>
      <ProductCard/>
      <CTASection/>
      <DecorGifts/>
      <UtilityGifts/>
      <BespokeGifts/>
      <InfoShowcase/>
      <CorporateGiftingForm/>
      <div className="w-full bg-black p-4 text-white flex items-center justify-center">
        © 2025 Gift.Co. All Rights Reserved.
      </div>
    </>
  );
}

export default App;
