// src/components/DropdownNavbar.js
import React, { useState } from 'react';
import './Navbar.css';

const Navbar2 = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="dropdown-navbar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li className="dropdown">
          <a href="#" onClick={toggleDropdown}>Services</a>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li><a href="/service1">Service 1</a></li>
              <li><a href="/service2">Service 2</a></li>
              <li><a href="/service3">Service 3</a></li>
            </ul>
          )}
        </li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar2;
