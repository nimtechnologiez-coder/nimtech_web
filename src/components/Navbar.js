import React, { useState, useRef, useEffect } from "react";
import "../Styles/Navbar.css";
import logo from "../images/nimtecha.png";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);

  const toggleMobileMenu = () => setMenuActive(!menuActive);
  const toggleDropdownMobile = () => setDropdownOpen(!dropdownOpen);

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 300);
  };

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
      <nav className="nav-container">
        <div className="nav-logo-box">
          <a href="/">
            <img src={logo} alt="NIM Tech Logo" className="nav-logo-img" />
          </a>
        </div>

        <div className="nav-menu-toggle" onClick={toggleMobileMenu}>
          ☰
        </div>

        <ul className={`nav-links-list ${menuActive ? "active" : ""}`}>
          <li><a href="/">Home</a></li>

          <li
            className={`nav-services-menu ${dropdownOpen ? "dropdown-open" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={toggleDropdownMobile} 
          >
            <a href="/services">
              Services <span className="mobile-arrow">▼</span>
            </a>
          </li>

          <li><a href="/product">Products</a></li>
          <li><a href="/careers">Careers</a></li>

          <li>
            <a href="/contact" className="contact-btn">Contact Us</a>
          </li>
        </ul>
      </nav>

      {dropdownOpen && (
        <div
          className="nav-services-section"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="nav-services-container">
            <div className="nav-services-left">
              <h2>Our <span>Services</span></h2>
              <p>
                Empowering businesses with digital innovation and scalable
                technology for a smarter future.
              </p>
            </div>
            <div className="nav-services-right">
              <div className="nav-service-block development">
                <h2>Technology & Security</h2>
                <div>
                  <a href="/web-development">Data & AI</a>
                  <a href="/CYBER-SECURITY">Cyber Security</a>
                  <a href="/networking">Networking</a>
                  <a href="/digitalmarketing">Digital Marketing</a>
                </div>
              </div>
              <div className="nav-service-block design-cloud">
                <h2>Design & Cloud</h2>
                <div>
                  <a href="/ui-ux">UI / UX Design</a>
                  <a href="/graphicdesign">Graphic Design</a>
                  <a href="/iot">IoT Solutions</a>
                  <a href="/webhosting">Web Hosting</a>
                </div>
              </div>
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
