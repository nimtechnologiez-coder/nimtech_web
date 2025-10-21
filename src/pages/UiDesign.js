import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../Styles/DataScienceTimeline.css";

const UidesignCycle = () => {
  const timelineData = [
    { icon: "bi-pencil-square", title: "Product Definition", desc: "Defining the product scope, requirements, and goals based on user and business needs. This phase clarifies what the design should achieve and identifies the target audience." },
    { icon: "bi-search", title: "Research", desc: "Gather data on users, competitors, and market trends using interviews, surveys, and analysis. Understand user behavior, needs, and pain points. Research ensures the design is grounded in real user insights." },
    { icon: "bi-clipboard-check", title: "Analysis & Planning", desc: "Synthesize research into user personas, journeys, and use cases. Plan the design approach and structure the information architecture. This step ensures the design is purposeful and meets user expectations." },
    { icon: "bi-brush", title: "Design", desc: "Create wireframes, mockups, and visual designs focusing on layout, colors, typography, and brand consistency. The goal is to build aesthetically appealing and functional interfaces. Design translates insights into tangible user experiences." },
    { icon: "bi-kanban", title: "Prototyping", desc: "Develop interactive prototypes to simulate user interactions. Early usability testing with prototypes helps identify design flaws before full development. Prototyping reduces risks and improves efficiency." },
    { icon: "bi-eyeglasses", title: "Testing", desc: "Conduct usability tests with real users to detect issues and gather feedback. Testing validates the design’s effectiveness and identifies areas for improvement. It ensures the final product is intuitive and user-friendly." },
    { icon: "bi-box-arrow-in-up-right", title: "Launch", desc: "Implement the final design into production, collaborating with developers to deliver the product. Ensure that the design functions correctly in real-world scenarios. A successful launch makes the product available to users." },
    { icon: "bi-arrow-repeat", title: "Iteration / Improvement", desc: "Continuously monitor user feedback and analytics post-launch. Make refinements to improve usability, engagement, and satisfaction over time. Iteration ensures the product evolves to meet changing user needs." },
  ];

  return (
    <div className="ds-body">
      {/* ---------- HERO SECTION ---------- */}
      <section className="ds-hero">
        <h1>UI/UX Design Life Cycle</h1>
        <p>Understanding Each Phase from Problem Definition to Monitoring</p>
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

export default UidesignCycle;
