// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import PrivacyPolicy from "./Components/PrivacyPolicy.jsx";
import TermsOfService from "./Components/TermsOfService.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/Terms-Service" element={<TermsOfService />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
