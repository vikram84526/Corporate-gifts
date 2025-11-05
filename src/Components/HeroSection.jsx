// src/components/HeroSection.jsx
import React, { useState } from "react";
import ContactForm from "./ContactForm";

const HeroSection = () => {
  // Access image directly from the public folder
  const HeroImage = "/bannerimage1.jpg";

  const [isOpen, setIsOpen] = useState(false);

  const openForm = () => setIsOpen(true);
  const closeForm = () => setIsOpen(false);

  return (
    <>
      <div
        className="relative w-full h-[700px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroImage})`, backgroundColor: "#000" }}
      >
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <h2 className="text-5xl md:text-7xl font-light leading-tight text-white mb-4">
            Premium <br />
            Corporate Gifts
          </h2>
          <p className="text-lg text-gray-300 max-w-lg mb-6">
            Exquisite collections for your esteemed clients and employees.
          </p>
          <button
            className="px-8 py-3 bg-transparent cursor-pointer border-2 border-yellow-400 text-yellow-400 text-lg 
                       hover:bg-yellow-400 hover:text-black transition duration-300"
            onClick={openForm}
          >
            Explore Collection
          </button>
        </div>
      </div>

      {/* Modal Portal - Moved outside to prevent z-index conflicts */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 w-[90%] max-w-3xl max-h-[90vh] overflow-y-auto">
            {/* ❌ Close Button */}
            <button
              onClick={closeForm}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold cursor-pointer"
              aria-label="Close"
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

export default HeroSection;