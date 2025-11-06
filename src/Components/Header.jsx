import React, { useState } from "react";
import { RiMailAddLine } from "react-icons/ri";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 py-4">
        {/* ✅ Logo */}
        <h1 className="text-2xl sm:text-3xl font-bold tracking-widest text-amber-400">
          Corporate Gifts
        </h1>

        {/* ✅ Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm lg:text-base">
          <a href="/" className="hover:text-amber-400 transition">
            Home
          </a>
          <a href="/about" className="hover:text-amber-400 transition">
            About
          </a>
          <a href="/privacy-policy" className="hover:text-amber-400 transition">
            Privacy Policy
          </a>
          <a href="/contact" className="hover:text-amber-400 transition">
            Contact
          </a>
        </nav>

        {/* ✅ Right Section (Email Info + Menu Toggle) */}
        <div className="flex items-center gap-3 sm:gap-6">
          {/* Email Info (Hidden on very small screens) */}
          <div className="hidden sm:flex items-center gap-3">
            <span className="text-[20px] bg-amber-400 rounded-full w-10 h-10 flex items-center justify-center text-black">
              <RiMailAddLine />
            </span>
            <span className="text-sm md:text-base text-gray-200">
              Vikram@example.com
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <nav className="flex flex-col items-center py-4 space-y-3 text-base">
            <a
              href="/"
              className="hover:text-amber-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="/about"
              className="hover:text-amber-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="/privacy-policy"
              className="hover:text-amber-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Privacy Policy
            </a>
            <a
              href="/contact"
              className="hover:text-amber-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
