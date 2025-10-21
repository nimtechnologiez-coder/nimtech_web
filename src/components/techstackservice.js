import React from "react";
import "../Styles/techstackservice.css";
import image from "../images/techstack.jpg";

const TechnologyStackSection = () => {
  return (
    <section className="techstack-wrapper">
      <div className="techstack-container">
        {/* Left Side - Text */}
        <div className="techstack-content">
          <h2 className="techstack-title">
            <span className="techstack-blue-text">Technology Stack</span> to cover all
          </h2>
          <h3 className="techstack-main-text">your needs</h3>

          <p className="techstack-paragraph">
            Being a leading{" "}
            <a href="#" className="techstack-link">
              web development company
            </a>
            , we cover all advanced technologies to meet the diverse demands of
            customers in minimal time and deliver modern, scalable solutions.
            With a team of expert professionals and top-tier tools, we’ve got
            you covered.
          </p>

          <p className="techstack-paragraph">
            Building your website the right way to boost engagement,
            conversions, and revenue with our technical expertise is what we aim
            to achieve.
          </p>

          <p className="techstack-paragraph">
            As a leading application development company, our team creates
            custom codes tailored to your requirements — delivering
            feature-rich, high-performance solutions. We also have a success
            rate of over <span className="techstack-bold">89%</span> in both{" "}
            <span className="techstack-bold">iOS</span> and{" "}
            <span className="techstack-bold">Android</span> app markets.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="techstack-image-wrap">
          <img
            src={image}
            alt="Technology Stack Team Collaboration"
            className="techstack-image"
          />
        </div>
      </div>
    </section>
  );
};

export default TechnologyStackSection;
