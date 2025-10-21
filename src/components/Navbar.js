import React, { useState, useRef, useEffect } from "react";
import "../Styles/Navbar.css";
import logo from "../images/nimtecha.png";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);

  // Toggle mobile menu
  const toggleMobileMenu = () => setMenuActive(!menuActive);

  // Toggle mobile dropdown for Services
  const toggleDropdownMobile = () => setDropdownOpen(!dropdownOpen);

  // Show dropdown on hover (desktop)
  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeoutRef.current);
    setDropdownOpen(true);
  };

  // Hide dropdown after delay
  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 300);
  };

  // Close dropdown if clicked outside
  const handleClickOutside = (e) => {
    if (
      !e.target.closest(".nav-services-menu") &&
      !e.target.closest(".nav-services-section")
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="nav-container">
        {/* Logo */}
        <div className="nav-logo-box">
          <a href="/">
            <img src={logo} alt="NIM Tech Logo" className="nav-logo-img" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="nav-menu-toggle" onClick={toggleMobileMenu}>
          ☰
        </div>

        {/* Navbar Links */}
        <ul className={`nav-links-list ${menuActive ? "active" : ""}`}>
          <li><a href="/">Home</a></li>

          <li
            className="nav-services-menu"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={toggleDropdownMobile} 
          >
            <a href="/services">Services</a>
          </li>

          <li><a href="/product">Products</a></li>
          <li><a href="/careers">Careers</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      {/* Dropdown Section */}
      {dropdownOpen && (
        <div
          className="nav-services-section"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="nav-services-container">
            {/* Left Side */}
            <div className="nav-services-left">
              <h2>Our <span>Services</span></h2>
              <p>
                Empowering businesses with digital innovation and scalable
                technology for a smarter future.
              </p>
            </div>

            {/* Right Side */}
            <div className="nav-services-right">
              {/* Technology & Security */}
              <div className="nav-service-block development">
                <h2>Technology & Security</h2>
                <div>
                  <a href="/web-development">Data & AI</a>
                  <a href="/CYBER-SECURITY">Cyber Security</a>
                  <a href="/networking">Networking</a>
                  <a href="/digitalmarketing">Digital Marketing</a>
                </div>
              </div>

              {/* Design & Cloud */}
              <div className="nav-service-block design-cloud">
                <h2>Design & Cloud</h2>
                <div>
                  <a href="/ui-ux">UI / UX Design</a>
                  <a href="/graphicdesign">Graphic Design</a>
                  <a href="/iot">IoT Solutions</a>
                  <a href="/webhosting">Web Hosting</a>
                </div>
              </div>

              {/* Development */}
              <div className="nav-service-block technology-security">
                <h2>Development</h2>
                <div>
                  <a href="/Appdevelopment">Application Development</a>
                  <a href="/productdevelopment">Product Development</a>
                  <a href="/cloudservice">Cloud Services</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/7418855108"
        className="whatsapp-floating-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a>
    </>
  );
};

export default Navbar;
