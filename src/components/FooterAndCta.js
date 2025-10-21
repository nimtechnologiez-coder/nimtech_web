import React from "react";
import "../Styles/FooterAndCta.css";
import { FaInstagram, FaLinkedin, FaFacebookF, FaTwitter } from "react-icons/fa";
import startup from "../images/startup.jpeg";
import msme from "../images/msmes.png";

const BlueCtaFooter = () => (
  <div className="cta-footer-page">
    <footer className="footer-wrap">

      {/* Main Column */}
      <div className="footer-main-col">
        <img src={startup} className="footer-logo" alt="Company Logo" />
        <div className="footer-img-clip">
          <img src={msme} alt="Footer visual" />
        </div>
      </div>

      {/* Footer Columns */}
      <div className="footer-columns">
        <div>
          <h4>Services</h4>
          <ul>
            <li>Digital Marketing</li>
            <li>Email Marketing</li>
            <li>Search Engine Marketing</li>
            <li>Search Engine Optimization</li>
            <li>Social Media Marketing</li>
            <li>Digital Transformation</li>
          </ul>
        </div>
        <div>
          <h4>Cloud & DevOps</h4>
          <ul>
            <li>Cloud Hosting</li>
            <li>Cloud Infrastructure</li>
            <li>Cloud Product Development</li>
            <li>Custom Software Development</li>
            <li>Ecommerce Development</li>
            <li>Mobile Application Development</li>
          </ul>
        </div>
        <div>
          <h4>Products</h4>
          <ul>
            <li>Asset Management</li>
            <li>Customer Management</li>
            <li>Task Management</li>
            <li>SME Business Application</li>
            <li>Mail Management</li>
            <li>Dairy Management</li>
          </ul>
        </div>
        <div>
          <h4>Development Services</h4>
          <ul>
            <li>Android App Development</li>
            <li>Business Application Development</li>
            <li>Content Writing</li>
            <li>iOS App Development</li>
            <li>Application Maintenance & Support</li>
            <li>UX/UI Design</li>
          </ul>
        </div>
        <div>
          <h4>Insights</h4>
          <ul>
            <li>Resources</li>
            <li>Blog</li>
            <li>News</li>
          </ul>
          <h4>Sign Up</h4>
          <div className="newsletter-label">Subscribe to our newsletter</div>
          <div className="newsletter-row">
            <input className="newsletter-input" placeholder="Email address" />
            <span className="newsletter-arrow">&#8594;</span>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="footer-social-bottom d-flex gap-3">
        <a href="https://www.instagram.com/nim_technologies_/" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/company/nim-technologies/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
          <FaLinkedin />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
          <FaTwitter />
        </a>
      </div>

    </footer>
  </div>
);

export default BlueCtaFooter;
