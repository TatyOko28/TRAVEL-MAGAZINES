import React, { useState, useEffect } from 'react';
import './Navbar.scss';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo-container">
        <img src="/path/to/logo.png" alt="Logo" className="logo" />
        <span className="logo-text">侑悦会 TD CLUB</span>
      </div>
      <button className="menu-button" onClick={toggleMenu}>
        ☰ {/* This represents a hamburger menu icon */}
      </button>
      <div className={`menu ${isExpanded ? 'expanded' : ''}`}>
        <ul>
          <li className="menu-item">Home</li>
          <li className="menu-item">About</li>
          <li className="menu-item">Services</li>
          <li className="menu-item">Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
