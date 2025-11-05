import React, { useState } from "react";
import Header from "./Header";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We'll get back to you soon.");
  };

  return (
    <>
      <Header></Header>
      <div className="min-h-120 bg-cover bg-center bg-black/70 flex flex-col items-center justify-center p-8">
        <div className="bg-black/70 w-full max-w-7xl rounded-2xl p-10 grid md:grid-cols-2 gap-12 items-center shadow-2xl">
          {/* ✅ Left Section — Description + Company Info */}
          <div className="space-y-6">
            <h1 className="text-5xl font-serif font-bold text-amber-400">
              Get in Touch
            </h1>
            <p className="text-lg text-white leading-relaxed">
              We'd love to hear from you! Whether it’s about our gifting
              services, collaborations, or custom requirements — our team is
              always ready to help you craft the perfect gifting experience.
            </p>

            {/* Company Details */}
            <div className="mt-6 space-y-2 text-gray-400 text-sm">
              <p>
                📍{" "}
                <span className="text-white text-[24px]">
                  Corporate Gifts Pvt. Ltd.
                </span>
              </p>
              <p className="text-[18px] text-white">
                123 Gift Street, New Delhi, India
              </p>
              <p className="text-[16px] text-white">📞 +91 98765 43210</p>
              <p className="text-[16px] text-white">✉️ contact@yourgifts.com</p>
            </div>
          </div>

          {/* ✅ Right Section — Form */}
          <div className="relative w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-amber-500/20">
            <h2 className="text-3xl font-serif text-amber-400 mb-6 text-center">
              Contact Us
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full placeholder-white p-3 rounded-lg bg-transparent border border-gray-400 focus:border-amber-400 outline-none"
                required
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3  placeholder-white rounded-lg bg-transparent border border-gray-400 focus:border-amber-400 outline-none"
                required
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 placeholder-white rounded-lg bg-transparent border border-gray-400 focus:border-amber-400 outline-none resize-none"
                required
              />
              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-lg transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="w-full bg-black p-4 text-white flex items-center justify-center">
        © 2025 Gift.Co. All Rights Reserved.
      </div>
    </>
  );
};

export default Contact;
