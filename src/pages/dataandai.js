import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../Styles/DataScienceTimeline.css";

const DataScienceCycle = () => {
  const timelineData = [
    { icon: "bi-flag", title: "Problem Definition and Business Goal", desc: "Problem Definition is the first and most critical phase of any data analytics or AI project. It involves identifying and understanding the business problem to be solved using data. A well-defined problem guides all further data and modeling efforts." },
    { icon: "bi-database", title: "Data Collection", desc: "Data Collection involves gathering relevant data from sources such as databases, APIs, or surveys. The goal is to obtain quality data required for analysis or model training. It forms the foundation for accurate insights." },
    { icon: "bi-bar-chart-line", title: "Data Understanding", desc: "This phase focuses on exploring and analyzing data to understand patterns and relationships. It helps identify missing values, inconsistencies, or biases. Data understanding prepares for effective cleaning and modeling." },
    { icon: "bi-gear-wide-connected", title: "Data Preparation & Feature Engineering", desc: "Data Preparation transforms raw data into a clean, usable format. Feature Engineering creates new variables to improve model performance. Together, they ensure high-quality input for modeling." },
    { icon: "bi-graph-up", title: "Exploratory Data Analysis (EDA)", desc: "EDA visualizes and summarizes data to uncover patterns and trends. It helps in understanding relationships between variables. EDA shapes modeling strategies and identifies data issues early." },
    { icon: "bi-cpu", title: "Modeling", desc: "Modeling creates mathematical or computational representations of real-world processes. It helps detect patterns and make predictions using data. Models turn insights into actionable decisions." },
    { icon: "bi-cloud-upload", title: "Deployment", desc: "Deployment puts the model or analytical solution into a production environment. It allows users or systems to apply generated insights. This stage makes the data science solution operational." },
    { icon: "bi-shield-check", title: "Monitoring & Maintenance", desc: "Monitoring ensures deployed models remain accurate and effective over time. Regular updates and retraining maintain performance as data evolves. This phase sustains long-term business value." },
  ];

  return (
    <div className="ds-body">
      {/* ---------- HERO SECTION ---------- */}
      <section className="ds-hero">
        <h1>Data Science Life Cycle</h1>
        <p>Understanding Each Phase from Problem Definition to Monitoring</p>
      </section>

      {/* ---------- TIMELINE SECTION ---------- */}
      <section className="ds-timeline">
        {timelineData.map((item, index) => (
          <div key={index} className={`ds-item ${index % 2 === 0 ? "left" : "right"} active`}>
            <i className={`bi ${item.icon}`}></i>
            <div className="ds-title">{item.title}</div>
            <div className="ds-content">{item.desc}</div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default DataScienceCycle;
