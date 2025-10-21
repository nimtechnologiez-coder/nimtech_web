import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../Styles/DataScienceTimeline.css";

const WebhostingCycle = () => {
  const timelineData = [
    {
      icon: "bi-kanban",
      title: "Preparation",
      desc: "Plan the website’s structure, gather all necessary files, and choose a reliable hosting provider. Purchase the required domain and hosting plans while defining technical requirements. This phase ensures a clear roadmap before deployment."
    },
    {
      icon: "bi-globe",
      title: "Set up Domain and DNS",
      desc: "Configure the Domain Name System (DNS) to link your domain name to the hosting server. Proper DNS setup ensures users can access the website via the chosen domain, including A records, CNAMEs, and other entries."
    },
    {
      icon: "bi-upload",
      title: "Upload Website Files",
      desc: "Transfer all website files, including HTML, CSS, JavaScript, images, and media, to the hosting server. Use tools such as FTP, SFTP, or hosting control panels to securely upload files."
    },
    {
      icon: "bi-gear",
      title: "Configure Hosting Environment",
      desc: "Set up server configurations, databases, SSL certificates, and security settings. Ensure the server environment is optimized for performance, supports required technologies, and is secure against vulnerabilities."
    },
    {
      icon: "bi-check-circle",
      title: "Testing",
      desc: "Verify that the website functions correctly on the live server. Test links, forms, scripts, responsiveness across devices, loading speed, and browser compatibility to ensure seamless user experience."
    },
    {
      icon: "bi-box-arrow-in-up-right",
      title: "Go Live and Monitor",
      desc: "Make the website publicly accessible. Continuously monitor uptime, performance, errors, and server health. Quickly resolve any issues or bugs after launch to maintain website reliability."
    },
    {
      icon: "bi-arrow-repeat",
      title: "Regular Maintenance",
      desc: "Keep the website updated with fresh content, security patches, and software updates. Perform regular backups, optimize performance, and ensure compatibility with new technologies or browsers."
    },
  ];

  return (
    <div className="ds-body">
      {/* ---------- HERO SECTION ---------- */}
      <section className="ds-hero">
        <h1>Web Hosting Life Cycle</h1>
        <p>Understanding Each Phase from Preparation to Maintenance</p>
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

export default WebhostingCycle;
