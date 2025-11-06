import React from "react";
import Header from "./Header";

const TermsOfService = () => {
  return (
    <>
      <Header></Header>
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
        <div className="max-w-5xl w-full space-y-8">
          <h1 className="text-5xl font-serif font-bold text-amber-400 text-center">
            Terms of Service
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed text-center">
            Welcome to{" "}
            <span className="text-amber-400 font-semibold">Your Gifts</span>. By
            accessing or using our website, you agree to comply with these Terms
            of Service. Please read them carefully before using our platform.
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-amber-400">
              1. Use of Our Website
            </h2>
            <p className="text-gray-400">
              You agree to use our website for lawful purposes only and in a way
              that does not infringe the rights of others or restrict their use
              and enjoyment of the site. Any attempt to compromise site security
              or functionality is strictly prohibited.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-amber-400">
              2. Intellectual Property
            </h2>
            <p className="text-gray-400">
              All content, images, and trademarks displayed on this website are
              owned by <span className="text-amber-400">Your Gifts</span> or its
              partners. You may not copy, reproduce, or redistribute any
              material without written permission.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-amber-400">
              3. Orders and Payments
            </h2>
            <p className="text-gray-400">
              All orders placed are subject to availability and confirmation of
              the total price. We reserve the right to refuse or cancel any
              order in case of pricing errors, fraud suspicion, or stock
              unavailability.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-amber-400">
              4. Limitation of Liability
            </h2>
            <p className="text-gray-400">
              <span className="text-amber-400">Your Gifts</span> shall not be
              liable for any indirect, incidental, or consequential damages
              arising out of your use of the website or products purchased from
              it.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-amber-400">
              5. Changes to These Terms
            </h2>
            <p className="text-gray-400">
              We may update these Terms of Service periodically. Continued use
              of our website after such updates constitutes acceptance of the
              revised terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-amber-400">
              6. Contact
            </h2>
            <p className="text-gray-400">
              For any inquiries related to these Terms, please contact us at{" "}
              <span className="text-amber-400">support@yourgifts.com</span>.
            </p>
          </section>

          <p className="text-gray-500 text-center text-sm">
            Effective Date: November 2025
          </p>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;
