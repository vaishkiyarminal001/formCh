import React, { useState } from 'react';
import './Nav.css';
import logo from "../Assets/logo.png"
import { NavLink } from 'react-router-dom'; 

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pages = [
    { title: 'Home', path: '/' },
    { title: 'Join Us', path: '/registrationform' }
  ];

  return (
    <nav className="nav">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo-image" />
        {/* <h1 className="logo-image">चंद्रवंशी एकता परिषद</h1> */}
      </div>

      
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        {pages.map((item, index) => (
          <NavLink
            key={index} // Corrected placement of `key`
            to={item.path} // Properly placed `to` attribute
            className={({ isActive }) => (isActive ? 'active-link' : '')} // Dynamically set active class
            onClick={() => setIsOpen(false)} // Close menu on link click
          >
            {item.title}
          </NavLink>
        ))}
      </div>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};
