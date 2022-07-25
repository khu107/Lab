import React from "react";
import Navbar from "../compononts/Navbar/Navbar.jsx";
import About from "../compononts/About/about.js";
import Home from "../compononts/Home/home.js";
import News from "../compononts/News/news.js";
import Contact from "../compononts/Contact/contact.js";
import Service from "../compononts/Service/service.js";
import { Routes, Route } from "react-router-dom";

export default function Root() {
  return (
    <div className="Root">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
