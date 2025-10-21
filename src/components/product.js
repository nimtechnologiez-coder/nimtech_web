import React from "react";
import "../Styles/product.css";
import productimage from "../images/Mac Studio.png";
import desktop from "../images/desktopapp.jpg";
import microsoft from "../images/microsoftlogo.jpg";
import quotes from "../images/quote.jpg";

// Testimonial Section
const TestimonialSection = () => (
  <div className="testimonial-bg">
    <div className="testimonial-container">
      {/* Left Side: Person Info */}
      <div className="testimonial-left">
        <div className="testimonial-person">
          <div className="testimonial-name">Suruthi</div>
          <div className="testimonial-role">CEO & Founder, Nim Books</div>
        </div>
        <h2 className="testimonial-heading">
          Trusted by businesses and<br />accountants worldwide
        </h2>
        <div className="testimonial-quote-box">
          <span className="testimonial-quote-icon">
            <img src={quotes} alt="quote"/>
          </span>
          <p className="testimonial-quote">
            Nim Books streamlined what QuickBooks couldn’t, saving us hours.
            Now we are able to manage our financial structure better.
          </p>
        </div>
        <a className="testimonial-link" href="#">
          Switch to Nim Books <span className="arrow">→</span>
        </a>
      </div>
      <div className="testimonial-right">
        <div className="features-app-card desktop-card">
          <div className="features-app-header">
            <span className="features-app-label desktop-label">DESKTOP APP</span>
            <span className="features-app-arrow">&#8599;</span>
          </div>
          <h2 className="features-app-title desktop-title">
            A simple,<br />
            secure,<br />
            standalone<br />
            desktop solution
          </h2>
          <div className="features-app-media desktop-media">
            <img src={desktop} alt="Desktop banking" className="features-app-img" />
          </div>
          <div className="features-app-buttons desktop-buttons">
            <img src={microsoft} alt="Get it from Microsoft" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Features Section
const FeaturesPage = () => (
  <div className="features-bg">
    <div className="features-container">
      <span className="features-label">USER FAVORITES</span>
      <h1 className="features-title">
        Features that your<br />accounting software must have!
      </h1>
      <div className="features-row">
        <div className="features-card">
          <h2>“Smart Accounting for Smarter Businesses.”</h2>
          <p>
            Nim Books is a modern accounting solution crafted for businesses worldwide. Manage your finances effortlessly with a software.
          </p>
          <div className="payable-list">
            <div className="payable-item">
              <span>Minimal design showcasing</span>
              <span className="item-status overdue">Crafted for business worldwide</span>
            </div>
            <div className="payable-item">
              <span>Futuristic dashboard preview</span>
              <span className="item-status overdue"> Software that grows with you.</span>
            </div>
            <div className="payable-item">
              <span>Abstract financial graphic</span>
              <span className="item-status overdue">Professional global SaaS look</span>
            </div> 
          </div>
        </div>
        <div className="features-card">
          <h2>“Your Business. Your Books. Simplified”</h2>
          <p>
            Stay on top of your payables. Track bills, automate recurring expenses, and include client expenses on invoices.
          </p>
          <div className="payable-list">
            <div className="payable-item">
              <span>The Nim Books Difference</span>
              <span className="item-status overdue">A business growth partner</span>
            </div>
            <div className="payable-item">
              <span> Borderless Accounting</span>
              <span className="item-status overdue">Unified Financial Intelligence</span>
            </div>
            <div className="payable-item">
              <span> Adaptive Automation</span>
              <span className="item-status overdue"> Insightful AI-Powered Analytics</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// NimBooks Audience Section
const NimBooks = () => (
  <div className="nimbooks-rely-bg">
    <div className="nimbooks-rely-container">
      <span className="rely-label">WHO CAN RELY ON NIM BOOKS</span>
      <h1 className="rely-title">
        Designed for Every Business.<br />Perfected for Yours.
      </h1>
      <p className="rely-label">
        No matter your sector, Nim Books adapts to your workflows and scales with your growth — making finance simpler, smarter, and globally compliant.
      </p>
      <div className="rely-cards-row">
        <div className="rely-card">
          <h2>For Product-Based Businesses</h2>
          <ul>
            <li><b>Retailers & Wholesalers</b> – Manage daily sales, track stock, and generate instant GST-ready invoices.</li>
            <li><b>Manufacturers</b> – Simplify purchase orders, production costing, and supplier payments.</li>
            <li><b>Distributors & Dealers</b> – Handle multi-location sales, credit limits, and cash flow tracking effortlessly.</li>
            <li><b>E-commerce & Traders</b> – Sync online orders, manage payments, and track profits in real time.</li>
          </ul>
        </div>
        <div className="rely-card">
          <h2>For Service-Based Businesses</h2>
          <ul>
            <li><b>Consultants & Agencies</b> – Bill clients across geographies with customizable invoices and multi-currency support.</li>
            <li><b>IT & SaaS Companies</b> – Track subscriptions, recurring invoices, and global compliance in one place.</li>
            <li><b>Freelancers & Professionals</b> – Manage projects, expenses, and tax filings with ease.</li>
            <li><b>Healthcare, Education & Hospitality</b> – Automate payments, manage expenses, and maintain transparent financials.</li>
          </ul>
        </div>
      </div>
      <div className="rely-summary-card">
        <h3>Built to Bridge Both Worlds</h3>
        <p>Whether you sell products or deliver services, Nim Books gives you:</p>
        <ul className="rely-list">
          <li>Centralized accounting</li>
          <li>Insightful analytics</li>
          <li>Compliance confidence</li>
          <li>Secure scalability</li>
        </ul>
      </div>
    </div>
  </div>
);

// Main Product Page
function ProductPage() {
  return (
    <>
      <section className="hero--section">
        <div className="hero-content">
          <div className="headline">
            <span className="highlight">Comprehensive</span>
            <br />
            accounting software for <br />
            growing businesses
          </div>
          <div className="description">
            Send invoices, generate 1099 reports, and manage expenses, projects, & inventory.
            Simplify sales tax management with Nim Books.
          </div>
          <div className="button-group">
            <button className="btn get-started">Access Nim Books</button>
            <a href="/contact" className="btn demo">
  Request a demo
</a>

          </div>
          <img
            src={productimage}
            alt="Dashboard"
            className="dashboard-img"
          />
        </div>
      </section>
      <TestimonialSection />
      <FeaturesPage />
      <NimBooks />
    </>
  );
}

export default ProductPage;