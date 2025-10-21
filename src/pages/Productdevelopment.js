import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../Styles/DataScienceTimeline.css";

const ProductDevelopment = () => {
  const timelineData = [
    {
      icon: "bi-lightbulb",
      title: "Ideation",
      desc: "This phase involves generating new product ideas through brainstorming, market research, customer feedback, and competitive analysis. The goal is to identify potential opportunities that align with business objectives."
    },
    {
      icon: "bi-filter-circle",
      title: "Idea Screening",
      desc: "All generated ideas are evaluated and filtered based on feasibility, alignment with business goals, market potential, and resource requirements. Only the most promising ideas move forward."
    },
    {
      icon: "bi-pencil-square",
      title: "Concept Development and Testing",
      desc: "Detailed product concepts are created, including descriptions, features, and benefits. Concepts are tested with target customers to validate ideas and refine the concept before development."
    },
    {
      icon: "bi-bar-chart-line",
      title: "Business Analysis",
      desc: "Market and financial analysis is conducted to assess product viability. This includes competition analysis, cost estimation, pricing strategy, projected revenue, and profitability assessment."
    },
    {
      icon: "bi-brush",
      title: "Product Design",
      desc: "The product’s design specifications, features, and user experience are developed. This includes technical design, visual aesthetics, usability, and functionality. Prototypes or mockups may be created."
    },
    {
      icon: "bi-code-slash",
      title: "Product Development / Build",
      desc: "The actual creation of the product takes place. For software, this involves coding and integration; for physical products, manufacturing. The build follows design specifications to ensure quality and functionality."
    },
    {
      icon: "bi-check-circle",
      title: "Testing",
      desc: "Rigorous quality assurance and usability testing are conducted to identify defects, functionality issues, or design gaps. Issues found are addressed to ensure the product meets expected standards."
    },
    {
      icon: "bi-box-arrow-in-up-right",
      title: "Launch",
      desc: "The product is released to the market with supporting marketing campaigns, sales strategies, and distribution plans. Launch activities aim to generate awareness, attract customers, and achieve initial adoption."
    },
    {
      icon: "bi-arrow-repeat",
      title: "Post-Launch Maintenance and Improvement",
      desc: "The product’s performance is continuously monitored. Customer feedback is collected, and updates or improvements are implemented to sustain success and competitiveness."
    },
  ];

  return (
    <div className="ds-body">
      {/* ---------- HERO SECTION ---------- */}
      <section className="ds-hero">
        <h1>Product Development Life Cycle</h1>
        <p>Understanding Each Phase from Ideation to Post-Launch Maintenance</p>
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

export default ProductDevelopment;
