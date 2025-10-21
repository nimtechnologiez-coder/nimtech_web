import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../Styles/DataScienceTimeline.css";

const CybersecurityCycle = () => {
  const timelineData = [
    {
      icon: "bi-clipboard-check",
      title: "Identify",
      desc: "Catalog and understand the organization’s assets, systems, and risks. Conduct risk assessments, define security policies, and prioritize critical resources. This phase ensures a clear understanding of what needs protection."
    },
    {
      icon: "bi-shield-lock",
      title: "Protect",
      desc: "Implement safeguards and controls to defend systems and data. This includes access management, firewalls, encryption, and cybersecurity training for employees. The goal is to prevent potential threats from impacting the organization."
    },
    {
      icon: "bi-binoculars",
      title: "Detect",
      desc: "Continuously monitor systems to identify cybersecurity events or anomalies quickly. Utilize logging, alerts, and monitoring tools to detect threats in real time. Early detection helps minimize potential damage."
    },
    {
      icon: "bi-lightning-charge",
      title: "Respond",
      desc: "Take immediate action to contain and mitigate the impact of security incidents. Follow incident response plans, communicate effectively, and apply mitigation measures. This phase limits the effects of breaches and ensures organized handling."
    },
    {
      icon: "bi-arrow-repeat",
      title: "Recover",
      desc: "Restore systems and operations to normal after an incident. Apply lessons learned to improve security posture, update policies, and communicate recovery status internally and externally. Recovery ensures business continuity and resilience."
    },
  ];

  return (
    <div className="ds-body">
      {/* ---------- HERO SECTION ---------- */}
      <section className="ds-hero">
        <h1>Cybersecurity Life Cycle</h1>
        <p>Understanding Each Phase from Identify to Recover</p>
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

export default CybersecurityCycle;
