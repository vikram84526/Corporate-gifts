import React from "react";
import { RiMailAddLine } from "react-icons/ri";

const Header = () => {
  return (
    <header className="bg-black! text-white p-6 sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-accent-gold tracking-widest pl-10 ml-10">
          Corporate Gifts
        </h1>

        {/* Navigation Links (Hidden on mobile for simplicity) */}
        <nav className="hidden md:flex space-x-6 text-sm gap-6">
          <a href="/" className="hover:text-accent-gold transition">
            Home
          </a>
          <a href="/about" className="hover:text-accent-gold transition">
            About
          </a>
          <a
            href="/privacy-policy"
            className="hover:text-accent-gold transition"
          >
            Privacy Policy
          </a>
          <a href="/contact" className="hover:text-accent-gold transition">
            Contact
          </a>
        </nav>

        {/* Icons/Actions */}
        <div className="flex space-x-4 text-xl">
          {/* Placeholder for Search and Cart icons */}
          <div className="flex items-center justify-center gap-4 pr-10 mr-10">
            <span
              className="text-[22px] bg-amber-400 rounded-full w-12 h-12 min-h-12 
          flex items-center justify-center"
            >
              <RiMailAddLine />
            </span>
            <span>Vikram@example.com</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
