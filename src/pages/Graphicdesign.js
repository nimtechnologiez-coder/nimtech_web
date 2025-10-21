import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../Styles/DataScienceTimeline.css";

const GraphicdesignCycle = () => {
  const timelineData = [
    {
      icon: "bi-journal-text",
      title: "Creative Brief",
      desc: "The creative brief is a foundational document that outlines the project’s objectives, target audience, scope, requirements, and constraints. It defines the purpose, expected outcomes, and deliverables of the design project, guiding the team throughout the process."
    },
    {
      icon: "bi-search",
      title: "Research",
      desc: "Market research is conducted to understand competitors, industry trends, audience preferences, and visual styles. This phase gathers inspiration, insights, and context to inform the design direction and ensure relevance and effectiveness."
    },
    {
      icon: "bi-lightbulb",
      title: "Idea Generation / Brainstorming",
      desc: "Multiple design concepts and ideas are generated through brainstorming, sketching, or digital drafts. The goal is to explore a wide range of creative possibilities and innovative solutions, encouraging creativity without limitations."
    },
    {
      icon: "bi-pencil-square",
      title: "Concept Development",
      desc: "Selected ideas are refined into detailed drafts or mockups. Designers focus on layout, visual hierarchy, typography, color schemes, and graphic elements. Early evaluation ensures the chosen direction meets objectives."
    },
    {
      icon: "bi-brush",
      title: "Design Creation",
      desc: "The finalized visual design is created using professional design software. This includes preparing graphics, illustrations, typography, and layouts for digital or print use, ensuring consistency, brand alignment, and usability."
    },
    {
      icon: "bi-pencil",
      title: "Feedback and Revisions",
      desc: "Designs are presented to stakeholders or clients for review. Feedback is collected, analyzed, and incorporated into the design. Multiple iterations refine visual elements, correct errors, and improve clarity, aesthetics, and effectiveness."
    },
    {
      icon: "bi-check2-square",
      title: "Final Delivery",
      desc: "The completed design files are prepared, packaged, and delivered according to technical specifications. This may include print-ready files, web-ready assets, or digital formats, ensuring everything is polished and ready for implementation."
    },
  ];

  return (
    <div className="ds-body">
      {/* ---------- HERO SECTION ---------- */}
      <section className="ds-hero">
        <h1>Graphics Design Life Cycle</h1>
        <p>Understanding Each Phase from Creative Brief to Final Delivery</p>
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

export default GraphicdesignCycle;
