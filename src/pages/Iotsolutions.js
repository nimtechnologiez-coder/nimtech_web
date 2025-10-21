import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../Styles/DataScienceTimeline.css";

const IotSolutionsCycle = () => {
  const timelineData = [
    {
      icon: "bi-binoculars",
      title: "Identify IoT Objectives and Use Cases",
      desc: "Define the business goals for IoT adoption and identify relevant use cases. This ensures that IoT initiatives are aligned with organizational needs and deliver measurable value."
    },
    {
      icon: "bi-cpu",
      title: "Select IoT Components",
      desc: "Choose the required hardware (sensors, devices), communication protocols (e.g., Wi-Fi, Zigbee), IoT platforms, and data management tools. Proper component selection ensures compatibility and efficiency."
    },
    {
      icon: "bi-gear",
      title: "Design and Planning",
      desc: "Plan the system architecture, data flow, security measures, and integration with existing systems. This phase lays out a roadmap for seamless implementation and reliable operation."
    },
    {
      icon: "bi-brush",
      title: "Development and Integration",
      desc: "Develop device firmware, applications, and integrate IoT devices with cloud or backend systems. This step ensures devices and software work together effectively."
    },
    {
      icon: "bi-check-circle",
      title: "Testing and Validation",
      desc: "Verify system functionality, connectivity, data accuracy, and security. Thorough testing ensures the IoT system performs reliably under real-world conditions."
    },
    {
      icon: "bi-box-arrow-in-up-right",
      title: "Deployment and Operation",
      desc: "Roll out IoT devices in the field, monitor real-time data, and manage operations. Continuous monitoring helps maintain system performance and uptime."
    },
    {
      icon: "bi-bar-chart-line",
      title: "Data Analysis and Optimization",
      desc: "Analyze collected data to extract actionable insights and optimize system performance. Use analytics to refine use cases and enhance decision-making."
    },
    {
      icon: "bi-arrow-repeat",
      title: "Device Lifecycle Management",
      desc: "Manage firmware updates, security patches, and eventually device decommissioning or replacement. Proper lifecycle management ensures long-term reliability and security."
    },
  ];

  return (
    <div className="ds-body">
      {/* ---------- HERO SECTION ---------- */}
      <section className="ds-hero">
        <h1>IoT Implementation Life Cycle</h1>
        <p>Understanding Each Phase from Objectives to Device Management</p>
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

export default IotSolutionsCycle;
