// src/components/SimpleNavbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="simple-navbar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
