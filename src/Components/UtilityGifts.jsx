// src/App.jsx
import React, { useState } from "react";
import ImageSlider from "./ImageSlider";
import ContactForm from "./ContactForm";

const UtilityGifts = () => {
  const images = [
    "UtilityGifts/image1.jpg",
    "UtilityGifts/image2.jpg",
    "UtilityGifts/image3.jpg",
    "UtilityGifts/image4.jpg",
  ];

    const [isOpen, setIsOpen] = useState(false);
  
    const openForm = () => setIsOpen(true);
    const closeForm = () => setIsOpen(false);

  return (
    <>
      <h1 class="text-3xl font-serif md:text-5xl font-bold text-center">
        Utility Gifts
      </h1>
      <div className=" h-auto bg-white flex items-center justify-center">
        <ImageSlider images={images} />
      </div>
      <div class="flex justify-center my-8">
        <button className="px-10 py-4 bg-yellow-500 text-white font-semibold rounded-lg 
        shadow-lg hover:bg-yellow-600 transition duration-300 cursor-pointer" onClick={openForm}>
          ENQUIRE NOW
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-10000 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 w-[90%] max-w-3xl max-h-[90vh] overflow-y-auto">
            {/* ❌ Close Button */}
            <button
              onClick={closeForm}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold cursor-pointer"
            >
              ×
            </button>

            {/* 👇 Your Contact Form Component */}
            <ContactForm />
          </div>
        </div>
      )}
    </>
  );
};

export default UtilityGifts;
