import React from "react";
import "../Styles/HomePage.css";
import { FaWhatsapp } from "react-icons/fa";
import heroLogo from "../images/centre.jpg"; // ✅ Import the image

const HomePage = () => {
  return (
    <div className="homepage" id="home">
      {/* Left Side Content */}
      <div className="main-content">
        <h5>DRIVING INNOVATIONS</h5>
        <h1>
          Providing your <span className="accent">business</span>
          <br />
          with the best of digital
          <br />
          <span className="accent">solutions.</span><br/>
          
          The Knights, Code Of Service
 
        </h1>

        {/* Scroll Button */}
        <a href="/services" className="scroll-btn">
          Explore Services 
        </a>
      </div>

      {/* Right Side Logo */}
      <div className="side-logo">
        <img src={heroLogo} alt="Digital Solutions" className="hero-logo" />
      </div>

   
    </div>
  );
};

export default HomePage;
