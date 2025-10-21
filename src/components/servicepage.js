import React from "react";
import "../Styles/servicespage.css";

const services = [
  {
    icon: "bi-cpu",
    title: "DATA AND AI",
    desc: "Empower your business with AI and analytics solutions that turn raw data into actionable insights, smarter decisions, and automation.",
    link: "/data-scince-timelinee",
  },
  
  {
    icon: "bi-shield-lock",
    title: "CYBER SECURITY",
    desc: "Protect your digital assets with advanced cybersecurity services including risk assessment, penetration testing, and real-time monitoring.",
    link: "/cyber-security",
  },
  {
    icon: "bi-cloud-check",
    title: "CLOUD SERVICES",
    desc: "Leverage scalable and secure cloud solutions. Cloud migration, integration, and maintenance services for flexibility and collaboration.",
    link: "/cloudservice",
  },
  {
    icon: "bi-wifi",
    title: "IOT SOLUTIONS",
    desc: "Connect the physical and digital worlds with IoT innovations. Smart solutions for automation, monitoring, and efficiency across industries.",
    link: "/iot",
  },
  {
    icon: "bi-diagram-3",
    title: "NETWORKING",
    desc: "Reliable IT infrastructures. Design, implementation, and management of networks for uninterrupted connectivity and optimized performance.",
    link: "/networking",
  },
  {
    icon: "bi-phone",
    title: "APPLICATION DEVELOPMENT",
    desc: "High-performing mobile and web applications tailored to your business needs, combining functionality with elegant design and smooth usability.",
    link: "/appdevelopment",
  },
  {
    icon: "bi-box-seam",
    title: "PRODUCT DEVELOPMENT",
    desc: "Full-cycle product development from research, prototyping to deployment and scaling. Innovation, reliability, and market readiness guaranteed.",
    link: "/productdevelopment",
  },
  {
    icon: "bi-brush",
    title: "UI / UX DESIGN",
    desc: "We design user-centered interfaces that blend creativity with functionality. Intuitive, visually engaging, and responsive experiences.",
    link: "/ui-ux",
  },
  {
    icon: "bi-code-slash",
    title: "WEB DEVELOPMENT",
    desc: "Dynamic, secure, high-performing websites with seamless integration, fast load times, and scalable architecture.",
    link: "/web-development",
  },
  {
    icon: "bi-server",
    title: "WEB HOSTING",
    desc: "Fast, reliable, secure hosting solutions with optimized uptime, robust security, and 24/7 support to keep your digital presence always online.",
    link: "/webhosting",
  },
];

const ServicesPage = () => {
  const handleClick = (link) => {
    // Navigate to the link
    window.location.href = link;
  };

  return (
    <div className="services-page">
      {/* ===== HERO ===== */}
      <section className="hero">
        <h1>Nim Technologies Services</h1>
        <p>
          Providing end-to-end digital, development, and IT solutions that transform your business.
        </p>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="services-section">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-item"
            onClick={() => handleClick(service.link)}
          >
            <i className={`bi ${service.icon}`}></i>
            <h4>{service.title}</h4>
            <p>{service.desc}</p>
          </div>
        ))}
      </section>
      
    </div>
  );
};

export default ServicesPage;
