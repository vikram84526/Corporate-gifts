// src/App.jsx
import React, { useState } from "react";
import ImageSlider from "./ImageSlider";
import ContactForm from "./ContactForm";

const ProductCard = () => {
  const images = [
    "PreferredGifts/image1.jpg",
    "PreferredGifts/image2.jpg",
    "PreferredGifts/image4.jpg",
    "PreferredGifts/image5.jpg",
    "PreferredGifts/image6.jpg",
    "PreferredGifts/image7.jpg",
    "PreferredGifts/image8.jpg",
    "PreferredGifts/image9.jpg",
  ];

  const [isOpen, setIsOpen] = useState(false);

  const openForm = () => setIsOpen(true);
  const closeForm = () => setIsOpen(false);

  return (
    <div className="relative">
      <h1 className="text-3xl font-serif md:text-5xl font-bold text-center mt-8 mb-4">
        Top Preferred Gifts
      </h1>
      <div className="mt-4 h-fit bg-white flex items-center justify-center relative">
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
    </div>
  );
};

export default ProductCard;
