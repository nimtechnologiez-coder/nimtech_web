import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../Styles/DataScienceTimeline.css";

const DigitalmarketingCycle = () => {
  const timelineData = [
    {
      icon: "bi-search",
      title: "Market Research & Audience Understanding",
      desc: "Conduct research to identify target audiences, understand their preferences, behavior, and pain points. Analyze competitors and market trends to find opportunities for engagement and differentiation."
    },
    {
      icon: "bi-flag",
      title: "Set Goals & Define KPIs",
      desc: "Establish clear, measurable objectives aligned with overall business goals. Define Key Performance Indicators (KPIs) to track campaign success, monitor progress, and guide decision-making."
    },
    {
      icon: "bi-clipboard-check",
      title: "Strategy & Planning",
      desc: "Develop a comprehensive digital marketing plan outlining the channels, content strategy, budgeting, timelines, and campaign structure. Planning ensures all activities are coordinated and goal-oriented."
    },
    {
      icon: "bi-pencil-square",
      title: "Content Creation",
      desc: "Produce high-quality, relevant, and engaging content such as blog posts, videos, infographics, and social media posts. Content should resonate with the target audience and support campaign goals."
    },
    {
      icon: "bi-megaphone",
      title: "Promotion & Implementation",
      desc: "Execute marketing campaigns across selected digital channels including SEO, social media, email marketing, paid ads, and affiliate marketing. Ensure campaigns reach the right audience at the right time."
    },
    {
      icon: "bi-graph-up",
      title: "Monitoring & Analytics",
      desc: "Continuously track campaign performance using analytics tools. Monitor metrics such as traffic, engagement, conversions, and ROI to evaluate effectiveness."
    },
    {
      icon: "bi-arrow-repeat",
      title: "Optimization & Improvement",
      desc: "Use data and insights to refine strategies, improve campaigns, and maximize performance. Adjust content, targeting, channels, and budget allocations for better outcomes."
    },
    {
      icon: "bi-people",
      title: "Audience Engagement",
      desc: "Interact with users through comments, messages, and social platforms to build relationships and loyalty. Engaged audiences are more likely to convert and advocate for the brand."
    },
    {
      icon: "bi-file-earmark-text",
      title: "Reporting",
      desc: "Document campaign results and share insights with stakeholders. Reports include performance metrics, successes, challenges, and recommendations for future campaigns."
    },
    {
      icon: "bi-lightbulb",
      title: "Continuous Learning & Innovation",
      desc: "Stay updated with industry trends, emerging tools, and technologies. Apply new strategies, creative ideas, and marketing innovations to maintain competitiveness and achieve sustainable growth."
    },
  ];

  return (
    <div className="ds-body">
      {/* ---------- HERO SECTION ---------- */}
      <section className="ds-hero">
        <h1>Digital Marketing Life Cycle</h1>
        <p>Understanding Each Phase from Market Research to Continuous Innovation</p>
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

export default DigitalmarketingCycle;
