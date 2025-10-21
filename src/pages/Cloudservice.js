import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../Styles/DataScienceTimeline.css";

const CloudServiceCycle = () => {
  const timelineData = [
    {
      icon: "bi-clipboard-check",
      title: "Assessment and Planning",
      desc: "Analyze the existing IT infrastructure, workflows, applications, and business requirements. Define clear cloud objectives, choose the appropriate cloud model (public, private, hybrid), and develop a detailed migration strategy. This phase ensures a structured and risk-aware approach to cloud adoption."
    },
    {
      icon: "bi-lightbulb",
      title: "Proof of Concept (PoC)",
      desc: "Pilot the cloud solution with a limited workload to test performance, identify potential risks, and validate the suitability of the cloud environment. PoC ensures the planned migration approach works effectively before full-scale implementation."
    },
    {
      icon: "bi-server",
      title: "Infrastructure Setup",
      desc: "Select cloud service providers such as AWS, Azure, or Google Cloud. Provision resources, configure networks and security, and implement access controls and monitoring systems to build a secure and scalable cloud environment."
    },
    {
      icon: "bi-cloud-arrow-up",
      title: "Data and Application Migration",
      desc: "Move data and applications to the cloud using strategies like rehosting ('lift and shift') or refactoring for cloud-native features. This phase ensures smooth transfer with minimal disruption to operations while leveraging cloud benefits."
    },
    {
      icon: "bi-check-circle",
      title: "Testing and Validation",
      desc: "Verify that the cloud environment functions correctly and meets performance, security, and compliance requirements. Conduct thorough testing using appropriate tools and techniques to ensure reliability before going live."
    },
    {
      icon: "bi-box-arrow-in-up-right",
      title: "Deployment and Go-Live",
      desc: "Launch the cloud solution into production while minimizing disruption to business operations. Ensure proper monitoring, access management, and communication during the transition to maintain continuity."
    },
    {
      icon: "bi-gear",
      title: "Post-Deployment Optimization and Maintenance",
      desc: "Continuously monitor cloud usage, optimize performance, manage costs, update security measures, and scale resources as needed. This phase ensures the cloud solution remains efficient, secure, and aligned with evolving business needs."
    },
  ];

  return (
    <div className="ds-body">
      {/* ---------- HERO SECTION ---------- */}
      <section className="ds-hero">
        <h1>Cloud Computing / Migration Life Cycle</h1>
        <p>Understanding Each Phase from Assessment to Post-Deployment</p>
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

export default CloudServiceCycle;
