import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../Styles/DataScienceTimeline.css";

const NetworkingCycle = () => {
  const timelineData = [
    {
      icon: "bi-pencil-square",
      title: "Planning and Requirement Analysis",
      desc: "Analyze business needs, user requirements, and existing infrastructure to determine the network’s goals. Define network scope, performance, security, and scalability requirements. This ensures the network design aligns with organizational objectives."
    },
    {
      icon: "bi-diagram-3",
      title: "Network Design",
      desc: "Create the network topology, select hardware and software components, and define protocols and IP addressing schemes. Design includes security measures, redundancy, and scalability for reliable performance."
    },
    {
      icon: "bi-box-arrow-in-down-right",
      title: "Implementation / Deployment",
      desc: "Install and configure network devices such as routers, switches, firewalls, and wireless access points. Implement cabling, configure IP addresses, and set up security policies to make the network operational."
    },
    {
      icon: "bi-check-circle",
      title: "Testing and Validation",
      desc: "Test connectivity, performance, security, and failover mechanisms. Identify and resolve issues to ensure the network meets performance and reliability standards."
    },
    {
      icon: "bi-bar-chart-line",
      title: "Monitoring and Maintenance",
      desc: "Continuously monitor network performance, traffic, and security. Apply updates, patches, and optimizations, and troubleshoot problems to ensure consistent and secure operation."
    },
  ];

  return (
    <div className="ds-body">
      {/* ---------- HERO SECTION ---------- */}
      <section className="ds-hero">
        <h1>Networking Life Cycle</h1>
        <p>Understanding Each Phase from Planning to Maintenance</p>
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

export default NetworkingCycle;
