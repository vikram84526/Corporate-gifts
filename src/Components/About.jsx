import React from "react";
import Header from "./Header";
import CorporateGiftingForm from "./GiftingForm";

const About = () => {
  return (
    <>
      <Header />

      {/* ✅ About Section with background image */}
      <div
        className="min-h-[80vh] bg-cover bg-center bg-no-repeat text-white flex flex-col items-center justify-center p-8 relative"
        style={{
          backgroundImage:
            "url('https://www.shutterstock.com/image-photo/arranged-gifts-boxes-wrapped-black-600nw-1855728574.jpg')",
        }}
      >
        {/* ✅ Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* ✅ Content */}
        <div className="relative max-w-4xl text-center space-y-6 z-10">
          <h1 className="text-5xl font-serif font-bold text-amber-400 mb-4">
            About Us
          </h1>
          <p className="text-gray-200 leading-relaxed text-lg">
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
          <p className="text-gray-300 text-md">
            Trusted by top brands and loved by thousands, we continue to bring
            innovation and creativity to the art of gifting.
          </p>
        </div>
      </div>

      <CorporateGiftingForm />
      <div className="w-full bg-black p-4 text-white flex items-center justify-center">
        © 2025 Gift.Co. All Rights Reserved.
      </div>
    </>
  );
};

export default About;
