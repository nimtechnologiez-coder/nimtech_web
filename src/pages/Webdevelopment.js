import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../Styles/DataScienceTimeline.css";

const Webdevelopmentcycle = () => {
  const timelineData = [
    { icon: "bi-kanban", title: "Planning / Strategy", desc: "This phase involves defining the project goals, target audience, and website objectives. It establishes a roadmap for the project, outlining the requirements, features, and overall structure. Effective planning ensures that the website aligns with business goals and user expectations." },
    { icon: "bi-search", title: "Analysis", desc: "During analysis, detailed information about user needs, competitors, and technical feasibility is gathered. User personas, site maps, and wireframes are created to guide development. This ensures the website meets functional requirements and provides a smooth user experience." },
    { icon: "bi-brush", title: "Design", desc: "Design focuses on creating the visual appearance and user interface of the website. UI/UX design, layout, branding, and responsive design are developed to ensure usability across devices. The goal is to create an engaging and intuitive experience for users." },
    { icon: "bi-code-slash", title: "Development / Coding", desc: "This phase involves building the website using front-end and back-end technologies. HTML, CSS, JavaScript, server-side code, database integration, and CMS setup are implemented. It turns design and functionality plans into a working website." },
    { icon: "bi-file-earmark-text", title: "Content Creation", desc: "Content creation involves developing text, images, videos, and other media for the website. It ensures that the website communicates the intended message effectively. Well-structured content engages users and improves SEO performance." },
    { icon: "bi-clipboard-check", title: "Testing and Quality Assurance", desc: "All website features are tested for functionality, compatibility, performance, and security. Bugs and errors are fixed to ensure smooth operation across browsers and devices. QA ensures the website delivers a reliable and consistent user experience." },
    { icon: "bi-box-arrow-in-up-right", title: "Deployment and Launch", desc: "The website is made live on a web server, making it accessible to users. Deployment involves final checks, server setup, and domain configuration. A successful launch ensures the website operates correctly in a live environment." },
    { icon: "bi-arrow-repeat", title: "Iteration / Maintenance", desc: "After launch, continuous monitoring, updates, and improvements are performed based on user feedback and analytics. Iteration ensures the website remains functional, engaging, and aligned with business goals." },
  ];

  return (
    <div className="ds-body">
      {/* ---------- HERO SECTION ---------- */}
      <section className="ds-hero">
        <h1>Web Development Life Cycle</h1>
        <p>Understanding Each Phase from Planning to Launch & Maintenance</p>
      </section>

      {/* ---------- TIMELINE SECTION ---------- */}
      <section className="ds-timeline">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`ds-item ${index % 2 === 0 ? "left" : "right"} active`}
          >
            <i className={`bi ${item.icon}`}></i>
            <div className="ds-title">{item.title}</div>
            <div className="ds-content">{item.desc}</div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Webdevelopmentcycle;
