import React from 'react'
import Navbar from '../compononts/Navbar/Navbar'
import About from '../compononts/About/about'
import Home from '../compononts/Home'
import News from '../compononts/News'
import Contact from '../compononts/Contact'
import Service from '../compononts/Service/index'
import { Routes, Route } from 'react-router-dom'
import User from '../compononts/User'
import { useLocation } from 'react-router-dom'

export default function Root() {
  const location = useLocation()


  return (
    <div className="Root">
      {!['/user', '/login'].includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  )
}
