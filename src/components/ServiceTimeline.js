import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../Styles/ServiceTimeline.css";

const services = [
  {
    icon: "bi-brush",
    title: "Web Development",
    desc: "We design user-centered interfaces that blend creativity with functionality. Intuitive, visually engaging, responsive experiences.",
  },
  {
    icon: "bi-code-slash",
    title: "Planning",
    desc: "Dynamic, secure, high-performing websites with seamless integration, fast load times, and scalable architecture.",
  },
  {
    icon: "bi-cpu",
    title: "Analysis",
    desc: "Empower business with AI & analytics solutions turning raw data into actionable insights, smarter decisions, and automation.",
  },
  {
    icon: "bi-shield-lock",
    title: "Design",
    desc: "Protect digital assets with advanced cybersecurity: risk assessment, penetration testing, and real-time monitoring.",
  },
  {
    icon: "bi-cloud-check",
    title: "Development",
    desc: "Scalable and secure cloud solutions. Migration, integration, and maintenance enhance flexibility, collaboration, and accessibility.",
  },
  {
    icon: "bi-wifi",
    title: "Content Creation",
    desc: "Connect physical and digital worlds with IoT innovations. Smart solutions for automation, monitoring, and efficiency.",
  },
  {
    icon: "bi-diagram-3",
    title: "Testing & Quality Assurance",
    desc: "Reliable IT infrastructures. Design, implementation, and management ensure connectivity and optimized performance.",
  },
  {
    icon: "bi-phone",
    title: "Deployment & Launch",
    desc: "High-performing mobile and web apps tailored to your business, combining functionality with elegant design and smooth usability.",
  },
];

const ServiceTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleService = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="st-body">
      {/* HERO SECTION */}
      <section className="st-hero">
        <h6 className="st-subtitle">
          We Have The Expertise & Experience To Serve You Best
        </h6>
        <h1 className="st-title">360° Technology Solutions</h1>
        <p className="st-desc">To Cover All Your Needs</p>
      </section>

      {/* TIMELINE SECTION */}
      <section className="st-container">
        {services.map((service, index) => (
          <div
            key={index}
            className={`st-item ${index % 2 === 0 ? "left" : "right"} ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => toggleService(index)}
          >
            <i className={`bi ${service.icon}`}></i>
            <div className="st-item-title">{service.title}</div>
            <div className="st-item-content">{service.desc}</div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ServiceTimeline;
