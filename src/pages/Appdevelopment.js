import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../Styles/DataScienceTimeline.css";

const AppDevelopment = () => {
  const timelineData = [
    {
      icon: "bi-lightbulb",
      title: "Ideation and Planning",
      desc: "This phase involves gathering detailed requirements from stakeholders, understanding the business objectives, and analyzing project feasibility. It defines the app’s purpose, scope, and expected outcomes. A clear roadmap is created to guide subsequent phases."
    },
    {
      icon: "bi-pencil-square",
      title: "Wireframing",
      desc: "Wireframing is the process of creating visual blueprints or skeletal layouts of the app. It helps in visualizing the structure, navigation flow, and placement of elements on screens. Wireframes allow early feedback and adjustments without significant resource investment."
    },
    {
      icon: "bi-server",
      title: "Technical Feasibility & Back-End Assessment",
      desc: "During this phase, the technical viability of the app is evaluated. Developers assess back-end architecture, database requirements, server needs, and third-party integrations. Risks are identified and mitigated early."
    },
    {
      icon: "bi-gear-wide-connected",
      title: "Prototyping",
      desc: "Prototyping involves creating an interactive version of the app to simulate user experience and interface interactions. It allows stakeholders and users to visualize functionality and provide feedback before full-scale development."
    },
    {
      icon: "bi-brush",
      title: "Design (UI/UX)",
      desc: "UI/UX design focuses on creating intuitive, visually appealing, and user-friendly interfaces. Designers work on layout, colors, typography, branding, and responsiveness. Accessibility and usability principles are incorporated to enhance user satisfaction."
    },
    {
      icon: "bi-code-slash",
      title: "Development",
      desc: "This phase involves actual coding and implementation of the app according to the design and specifications. Front-end and back-end development, database setup, APIs, and integrations are built while ensuring performance, security, and functionality."
    },
    {
      icon: "bi-check-circle",
      title: "Testing",
      desc: "Comprehensive testing is conducted to ensure the app functions correctly and meets quality standards. Includes unit testing, integration testing, system testing, and user acceptance testing across devices and platforms."
    },
    {
      icon: "bi-box-arrow-in-up-right",
      title: "Deployment",
      desc: "The app is launched to the target environment or app stores for end-users. Deployment includes installation, configuration, and ensuring the app operates smoothly in a live environment."
    },
    {
      icon: "bi-arrow-repeat",
      title: "Maintenance and Updates",
      desc: "Post-launch, the app is continuously monitored for performance, security, and user feedback. Updates are made to fix bugs, improve features, optimize performance, and adapt to changing requirements."
    },
  ];

  return (
    <div className="ds-body">
      {/* ---------- HERO SECTION ---------- */}
      <section className="ds-hero">
        <h1>App Development Life Cycle</h1>
        <p>Understanding Each Phase from Ideation to Maintenance</p>
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

export default AppDevelopment;
