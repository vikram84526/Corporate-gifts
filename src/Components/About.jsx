import React from "react";
import Header from "./Header";
import CorporateGiftingForm from "./GiftingForm";

const About = () => {
  return (
    <>
      <Header />

      {/* ✅ About Section with background image */}
      <div
        className="min-h-[80vh] bg-cover bg-center bg-no-repeat text-white flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 relative"
        style={{
          backgroundImage:
            "url('https://www.shutterstock.com/image-photo/arranged-gifts-boxes-wrapped-black-600nw-1855728574.jpg')",
        }}
      >
        {/* ✅ Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* ✅ Content */}
        <div className="relative max-w-5xl text-center space-y-4 sm:space-y-6 z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-amber-400 mb-2 sm:mb-4">
            About Us
          </h1>

          <p className="text-gray-200 leading-relaxed text-base sm:text-lg md:text-xl px-2 sm:px-6">
            At{" "}
            <span className="text-amber-400 font-semibold">
              Corporate Gifts
            </span>
            , we believe every gift tells a story. Since 1985, we’ve been
            creating timeless gifting experiences that combine luxury, emotion,
            and artistry. From personalized corporate hampers to elegant event
            souvenirs, our craftsmanship ensures every piece reflects care and
            excellence.
          </p>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg px-2 sm:px-10">
            Trusted by top brands and loved by thousands, we continue to bring
            innovation and creativity to the art of gifting.
          </p>
        </div>
      </div>

      {/* ✅ Gifting Form Section */}
      <div className="px-4 sm:px-8 md:px-16 py-10 bg-white">
        <CorporateGiftingForm />
      </div>

      {/* ✅ Footer */}
      <footer className="w-full bg-black py-4 text-white text-center text-sm sm:text-base">
        © 2025 <span className="text-amber-400 font-semibold">Gift.Co</span>.
        All Rights Reserved.
      </footer>
    </>
  );
};

export default About;
