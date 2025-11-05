import React from "react";
import Header from "./Header";

const PrivacyPolicy = () => {
  return (
    <>
      <Header></Header>
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
        <div className="max-w-5xl w-full space-y-8">
          <h1 className="text-5xl font-serif font-bold text-amber-400 text-center">
            Privacy Policy
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed text-center">
            Your privacy is important to us. This Privacy Policy explains how{" "}
            <span className="text-amber-400 font-semibold">
              Corporate Gifts
            </span>{" "}
            collects, uses, and safeguards your information when you visit our
            website or use our services.
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-amber-400">
              1. Information We Collect
            </h2>
            <p className="text-gray-400">
              We may collect personal details such as your name, email, phone
              number, address, and payment information when you make a purchase
              or fill out forms on our website. We also collect non-personal
              data such as browser type, device information, and usage patterns
              for analytics and improvement.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-amber-400">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-400">
              We use your information to process orders, personalize
              experiences, send updates about our products, and improve our
              services. We never sell or trade your personal data to third
              parties.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-amber-400">
              3. Data Security
            </h2>
            <p className="text-gray-400">
              We employ modern encryption and secure-server practices to protect
              your personal data from unauthorized access, alteration, or
              disclosure. However, no online platform can guarantee absolute
              security.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-amber-400">
              4. Cookies & Tracking
            </h2>
            <p className="text-gray-400">
              Our site uses cookies to enhance your browsing experience and
              analyze site traffic. You can modify your browser settings to
              refuse cookies, but some features may not work as intended.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-amber-400">
              5. Contact Us
            </h2>
            <p className="text-gray-400">
              For any questions about our Privacy Policy, please reach out to us
              at{" "}
              <span className="text-amber-400">contact@CorporateGifts.com</span>
              .
            </p>
          </section>

          <p className="text-gray-500 text-center text-sm">
            Last updated: November 2025
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
