import React from "react";
import "../Styles/AboutStatsSection.css";

const AboutStatsSection = () => (
  <div className="about-stats-section">
    
    {/* ---------- ABOUT SECTION ---------- */}
    <section className="about-row">
      <div className="about-left">
        <div className="about-label">About Us</div>
        <h2 className="about-headline">
          Our values make us who we are and why we stand{" "}
          <span>successful in business</span> for over five years now.
        </h2>
      </div>

      <div className="about-right">
        {/* Optional image */}
        {/* <img src={aboutImg} alt="Team" className="about-image" /> */}
      </div>
    </section>

    {/* ---------- STATS SECTION ---------- */}
    <section className="stats-row">
      <div className="stat-card">
        <span className="stats-number">100+</span>
        <div className="stats-label">Successful Projects</div>
      </div>
      <div className="stat-card">
        <span className="stats-number">100+</span>
        <div className="stats-label">Custom Applications</div>
      </div>
      <div className="stat-card">
        <span className="stats-number">20+</span>
        <div className="stats-label">Business Partnerships</div>
      </div>
    </section>

    {/* ---------- NIM ACADEMY SECTION ---------- */}
    <section className="academy-row">
      <div className="academy-content">
        <div className="academy-label">Nim Academy</div>
        <h2 className="academy-headline">
          Master IT Skills, Build Your Future With <span>Nim Academy</span>
        </h2>
        <p>
          Nim Academy is your gateway to mastering IT skills and building a successful future.
          We provide comprehensive, hands-on training in programming, web and app development,
          and modern technologies guided by industry experts. Our courses are designed to equip
          you with practical knowledge, real-world experience, and certifications that make you
          career-ready. Whether you're starting fresh or looking to upskill, Nim Academy empowers
          you to unlock opportunities, excel in the tech industry, and achieve your professional goals.
        </p>

        <div className="rely-summary-card">
          <h3>Built to Bridge Both Worlds</h3>
          <p>Whether you sell products or deliver services, Nim Books gives you:</p>
          <ul className="rely-list">
            <li>Hands-On Learning</li>
            <li>Expert Mentorship</li>
            <li>Career-Ready Skills</li>
            <li>Certification Pathways"</li>
          </ul>
        </div>

        <a
          href="https://www.nimacademy.in/"
          className="demo-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Demo
        </a>
      </div>
    </section>
  </div>
);

export default AboutStatsSection;
