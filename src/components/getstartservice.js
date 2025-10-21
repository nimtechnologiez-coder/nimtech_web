import React from "react";
import "../Styles/getstartservice.css";
import { Link } from "react-router-dom"; // Import Link

const HeroSection = () => {
  return (
    <div className="hero-wrapper">
      <p className="hero-subtext">Ready to get started?</p>
      <h1 className="hero-title">Let's us in on what you're looking for!</h1>
      <Link to="/contact" className="hero-button">
        Get in Touch &rarr;
      </Link>
    </div>
  );
};

export default HeroSection;
