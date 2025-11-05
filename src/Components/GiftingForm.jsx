// CorporateGiftingForm.jsx
import React from "react";
import ContactForm from "./ContactForm"; // make sure the path is correct

const CorporateGiftingForm = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://www.shutterstock.com/image-photo/arranged-gifts-boxes-wrapped-black-600nw-1855728574.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Form Container */}
      <div className="relative w-[700px] max-w-3xl h-[700px] bg-white rounded-lg shadow-2xl p-8 sm:p-12 z-10">
        {/* Simply render ContactForm here */}
        <ContactForm />
      </div>
    </div>
  );
};

export default CorporateGiftingForm;
