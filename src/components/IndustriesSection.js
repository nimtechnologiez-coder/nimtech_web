import React, { useEffect, useRef, useState } from "react";
import "../Styles/IndustriesSection.css";
import desktop from "../images/desktopapp.jpg";
import twoimgs from "../images/twoimgs.jpg";
import threeimgs from "../images/threeimgs.jpg";

const slidesData = [
  {
    img: desktop,
    alt: "Product screenshot 1",
    title: "Access timely, relevant information",
    desc: "Nim Tech Market Access Insights provides you with comprehensive, relevant, and actionable content so that you can make informed market access decisions.",
  },
  {
    img: twoimgs,
    alt: "Product screenshot 2",
    title: "Advanced Search & Filtering",
    desc: "Find exactly what you need with refined search options and filtering tools tailored for market professionals.",
  },
  {
    img: threeimgs,
    alt: "Product screenshot 3",
    title: "Actionable Decision Support",
    desc: "Unlock critical business insights and support informed decisions for optimal market access strategies.",
  },
];

const IndustriesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoScrollRef = useRef();

  useEffect(() => {
    autoScrollRef.current = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === slidesData.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(autoScrollRef.current);
  }, []);

  const goToSlide = (idx) => {
    setCurrentIndex(idx);
    clearInterval(autoScrollRef.current);
    autoScrollRef.current = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === slidesData.length - 1 ? 0 : prev + 1
      );
    }, 3000);
  };

  return (
    <div className="hero-sectionn">
      {/* Added bg-light-teal class */}
      <div className="carousel-container bg-light-teal">
        <div className="carousel-track-wrapper">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {slidesData.map((slide, idx) => (
              <div className="carousel-slide" key={idx}>
                <div className="carousel-image">
                  <img src={slide.img} alt={slide.alt} />
                </div>
                <div className="carousel-text">
                  <h1>{slide.title}</h1>
                  <p>{slide.desc}</p>
                  <button className="learn-more-btn">LEARN MORE</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="carousel-indicators">
          {slidesData.map((_, idx) => (
            <span
              key={idx}
              className={`indicator-dot${currentIndex === idx ? " active" : ""}`}
              onClick={() => goToSlide(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustriesSection;
