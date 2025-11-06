import React, { useState } from "react";
import ImageSlider from "./ImageSlider";
import ContactForm from "./ContactForm";

const BespokeGifts = () => {
  const images = [
    "BespokeGifts/image1.jpg",
    "BespokeGifts/image2.jpg",
    "BespokeGifts/image3.jpg",
    "BespokeGifts/image4.jpg",
  ];

  const [isOpen, setIsOpen] = useState(false);

  const openForm = () => setIsOpen(true);
  const closeForm = () => setIsOpen(false);

  return (
    <>
      {/* ✅ Title */}
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-center mt-6 sm:mt-8 mb-4 sm:mb-6 text-gray-900">
        Bespoke Gifts
      </h1>

      {/* ✅ Image Slider Section */}
      <div className="mt-2 sm:mt-4 bg-white flex items-center justify-center px-2 sm:px-6 md:px-12">
        <ImageSlider images={images} />
      </div>

      {/* ✅ Enquire Button */}
      <div className="flex justify-center mt-6 sm:mt-8 mb-8">
        <button
          onClick={openForm}
          className="px-6 sm:px-10 py-3 sm:py-4 bg-amber-500 text-white font-semibold rounded-lg 
          shadow-lg hover:bg-amber-600 transition duration-300 transform hover:scale-105 text-sm sm:text-base"
        >
          ENQUIRE NOW
        </button>
      </div>

      {/* ✅ Modal (Contact Form Popup) */}
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 sm:p-6">
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl p-4 sm:p-8 overflow-y-auto max-h-[90vh] animate-fadeIn">
            {/* ❌ Close Button */}
            <button
              onClick={closeForm}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold"
            >
              ×
            </button>

            {/* ✅ Contact Form Component */}
            <ContactForm />
          </div>
        </div>
      )}
    </>
  );
};

export default BespokeGifts;
