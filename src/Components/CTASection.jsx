import React, { useState } from "react";
import ContactForm from "./ContactForm";

const CTASection = () => {

    const [isOpen, setIsOpen] = useState(false);
  
    const openForm = () => setIsOpen(true);
    const closeForm = () => setIsOpen(false);

  return (
    <section className="w-full min-h-[80vh] bg-linear-to-r from-gray-500 via-gray-400 to-yellow-500 flex items-center justify-center">
      <div className="text-center px-4 md:px-8 lg:px-16 max-w-5xl">
        {/* Heading */}
        <h3 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
          Corporate Gifts <br /> Rs 1000 to Rs 5 Lac
        </h3>

        {/* Subtext */}
        <p className="text-white/90 text-lg md:text-xl mb-10">
          Whatever budget you have, we have the solution for you! We offer
          bespoke branding options to personalize your gifts, reflecting your
          company's identity and prestige.
        </p>

        {/* Button */}
        <div className="flex items-center justify-center gap-5 ">
          <button
            className="px-10 py-4 bg-black text-white font-semi-bold text-xl rounded-lg shadow-lg 
                     hover:bg-yellow-400 hover:text-black transition duration-300 cursor-pointer" 
                     onClick={openForm}
          >
            Explore Now
          </button>
          <button
            className="px-10 py-4 bg-black text-white font-semi-bold text-xl rounded-lg shadow-lg 
                     hover:bg-yellow-400 hover:text-black transition duration-300 cursor-pointer"
                     onClick={openForm}
          >
            Request Catalogue
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
    </section>
  );
};

export default CTASection;
