import React from "react";
import "../Styles/CentrePage.css";
import heroImg from "../images/centre.jpg";

const Centrepage = () => (
  <div className="hero-section">
    {/* Hero Graphic */}
    <div className="hero-graphic">
      <img src={heroImg} alt="Business Excellence" className="hero-img" />
    </div>

    {/* Hero Content */}
    <div className="hero-contentt">
      <h1>
        NimBooks – Smart accounting, simplified for every business.
      </h1>
      <p>
        NimBooks is more than accounting software—it’s a business growth
        partner. By turning numbers into clear insights, it transforms invoices,
        expenses, and reports into a bigger picture: your business journey. With
        NimBooks, accounting becomes a story of clarity, progress, and smarter
        decisions.
      </p>
      <a href="/product" className="hero-btn">
  Access NimBooks <span className="arrow">→</span>
</a>

    </div>
  </div>
);

export default Centrepage;
