import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    giftingFor: "",
    budget: "",
    quantity: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleSubmit = async () => {
    // Send all form fields including giftingFor, budget, quantity
    const dataToSend = { ...formData };

    try {
      const response = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      const result = await response.json();

      if (response.ok) {
        setPopupMessage("🎉 Thank you! Your submission was successful.");
        setShowPopup(true);
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          city: "",
          giftingFor: "",
          budget: "",
          quantity: "",
          additionalInfo: "",
        });
      } else {
        setPopupMessage(
          result.error || "Something went wrong. Please try again."
        );
        setShowPopup(true);
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  const giftingOptions = [
    "Corporate Events",
    "Employee Recognition",
    "Client Appreciation",
    "Festival Gifting",
    "Other",
  ];

  const budgetOptions = [
    "Under ₹1,000",
    "₹1,000 - ₹5,000",
    "₹5,000 - ₹10,000",
    "₹10,000 - ₹25,000",
    "Above ₹25,000",
  ];

  const quantityOptions = ["1-10", "11-50", "51-100", "101-500", "500+"];

  return (
    <>
      <div className="flex items-center justify-center bg-white">
        <div className="w-full rounded-lg p-2 sm:p-4">
          <h1 className="text-3xl sm:text-4xl font-serif text-gray-800 text-center mb-4 mt-0">
            Talk to Our Corporate Gifting Experts
          </h1>

          <div className="space-y-6">
            {/* Full Name */}
            <div>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter Your Full Name *"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Phone and Email Row */}
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter Your Phone Number *"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Business Email Address"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
              />
            </div>

            {/* City and Gifting For Row */}
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter Your City *"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
              />
              <select
                name="giftingFor"
                value={formData.giftingFor}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-gray-700 bg-white"
              >
                <option value="" disabled>
                  Gifting For *
                </option>
                {giftingOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* Budget and Quantity Row */}
            <div className="grid sm:grid-cols-2 gap-4">
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-gray-700 bg-white"
              >
                <option value="" disabled>
                  Budget Per Gift *
                </option>
                {budgetOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <select
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-gray-700 bg-white"
              >
                <option value="" disabled>
                  Quantity Required *
                </option>
                {quantityOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* Additional Information */}
            <div>
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                placeholder="Additional Information"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-4 rounded-md transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
            >
              GET QUOTE
            </button>

            {/* Privacy Notice */}
            <p className="text-center text-sm text-gray-600">
              This site is protected by reCAPTCHA and the Google{" "}
              <a
                href="/privacy-policy"
                className="text-amber-600 hover:text-amber-700 underline cursor-pointer"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                href="/Terms-Service"
                className="text-amber-600 hover:text-amber-700 underline cursor-pointer"
              >
                Terms of Service
              </a>{" "}
              apply.
            </p>
          </div>
        </div>
      </div>
      {/* Thank You Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm text-center animate-fadeIn scale-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Thank You!
            </h2>
            <p className="text-gray-600 mb-6">{popupMessage}</p>
            <button
              onClick={() => setShowPopup(false)}
              className="px-6 py-2 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600 transition-transform transform hover:scale-105"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;
