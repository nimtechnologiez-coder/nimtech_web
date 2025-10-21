import React from "react";
import "../Styles/Whyus.css";
import image from "../images/r.png";

// Checklist data
const reasons = [
  "Custom strategies and designs specific to your vision",
  "Matching your company’s need with the end-user experience",
  "Expert team of developers with over 5 years of experience",
  "Quality deliverables meeting deadlines way ahead of schedule",
  "Pay only for what we work, no setup fees",
  "Frequent supervision by technical leads to achieving perfection",
  "Project is backed by a 100% money-back guarantee",
  "Project management tools in use for extra transparency",
  "Client service at its best and we’re here to hear you anytime",
];

const Whyus = () => (
  <section className="whyus-wrapper">
    {/* Left Image */}
    <div className="whyus-left">
      <img src={image} alt="Why Nim Technologies" className="whyus-image" />
      <div className="whyus-orange-shape"></div>
    </div>

    {/* Right Checklist */}
    <div className="whyus-right">
      <h2 className="whyus-title">
        Why <span className="whyus-highlight">Nim Technologies?</span>
      </h2>
      <ul className="whyus-list">
        {reasons.map((reason, idx) => (
          <li key={idx} className="whyus-list-item">
            <span className="whyus-check">✓</span>
            <span>{reason}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Whyus;
