import React from "react";
import heroArrowImage from "../images/discover.jpg"; // Arrow image
import "../Styles/Discover.css"; // Combined CSS

// Technology Logos

import reactLogo from "../images/physics.png";
// import djangoLogo from "../images/django.png";
import pythonLogo from "../images/python.png";
import mysqlLogo from "../images/mysql.png";
import AdobeXD from "../images/xd.png";
import Figma from "../images/figma.png";
import spyder from "../images/spyder.png";
import nodejs from "../images/nodejs.png";
import sql from "../images/sql.png";
import TensorFlow from "../images/tensorflow.png"
import githubLogo from "../images/github.png";
import django from "../images/django.png"
import bootstrapp from "../images/bootstrap.png"
import mongodb from "../images/mongodb.png"
import aws from "../images/amazon.png"
import postman from "../images/postman.png"

const Discover = () => {
  // Full page redirect handler
  const handleClick = (link) => {
    window.location.href = link;
  };

  return (
    <div className="discover-container">
      {/* ---------- DISCOVER SECTION ---------- */}
      <section className="discover-wrapper">
        <div className="discover-headline">
          <span className="discover-title">Discover your </span>
          <span className="discover-business">Business</span>
          <img src={heroArrowImage} alt="Arrow" className="discover-arrow" />
        </div>

        <div className="discover-potential">potential</div>
        <div className="discover-subtext">
          Growth is uncomfortable — but with the right investments and expert people on board,
          you can transform challenges into lasting success.
        </div>
      </section>

      {/* ---------- OUR TECHNOLOGIES SECTION ---------- */}
      <section className="technologies-section">
        <h2 className="tech-title">Our Technologies</h2>
        <p className="tech-subtitle">
          We build reliable, scalable, and modern web solutions using the latest technologies.
        </p>

        <div className="tech-logos">
           
          <div className="tech-card">
            <img src={pythonLogo} alt="Python" />
           
          </div>
           <div className="tech-card">
            <img src={django} alt="Django" />
            
          </div>
            <div className="tech-card">
            <img src={reactLogo} alt="React" />
           
          </div>
             <div className="tech-card">
            <img src={bootstrapp} alt="Bootstrap" />  
          </div>
            <div className="tech-card">
            <img src={nodejs} alt="Node.js" />
            
          </div>
          
          <div className="tech-card">
            <img src={mysqlLogo} alt="MySQL" />
            
          </div>
           <div className="tech-card">
            <img src={sql} alt="SQL" />

          </div>
            <div className="tech-card">
            <img src={mongodb} alt="MongoDBf" />  
          </div>
          <div className="tech-card">
            <img src={Figma} alt="Figma" />
            
          </div>
        
          <div className="tech-card">
            <img src={AdobeXD} alt="Django" />
         
          </div>
          <div className="tech-card">
            <img src={spyder} alt="Python" />
            
          </div>
        
         
           <div className="tech-card">
            <img src={TensorFlow} alt="TensorFlow" />

          </div>
          <div className="tech-card">
            <img src={githubLogo} alt="GitHub" />
            
          </div>
           
        

         

          <div className="tech-card">
            <img src={aws} alt="AWS" />  
          </div>
           <div className="tech-card">
            <img src={postman} alt="Postman" />  
          </div>
        </div>
      </section>

      {/* ---------- HERO SECTION ---------- */}
      <section className="hero-wrapper">
        <p className="hero-subtext">Ready to get started?</p>
        <h1 className="hero-title">Let us in on what you're looking for!</h1>
        <button className="hero-button" onClick={() => handleClick("/contact")}>
          Get in Touch <span className="arrow">→</span>
        </button>
      </section>
    </div>
  );
};

export default Discover;
