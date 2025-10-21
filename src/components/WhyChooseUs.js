import React from "react";
import "../Styles/WhyChooseUs.css";

// ===== Testimonial Section =====
export const TestimonialSection = () => (
  <section className="testimonial-section">
    <h2 className="testimonial-title">What Our Clients Are Saying</h2>
    <div className="testimonial-quotes">
      <span className="testimonial-quote-mark left">&ldquo;</span>
      <div className="testimonial-text">
        "Working with Nim Technologies has transformed our digital presence. Their innovative solutions and data-driven strategies helped us double our leads within 6 months. Truly a game-changer for our business."
      </div>
      <span className="testimonial-quote-mark right">&rdquo;</span>
    </div>
    <div className="testimonial-author">
      <b>Emma Johnson</b>
      <div className="testimonial-role">CEO, BrightWave Solutions</div>
      <div className="testimonial-hr">
        <div className="hr-orange"></div>
      </div>
    </div>
  </section>
);

// ===== Why Choose Us Section =====
export const WhyChooseUs = () => {
  const features = [
    {
      title: "Result-Oriented Approach",
      desc: "We focus on measurable outcomes to ensure every digital initiative contributes to tangible business growth."
    },
    {
      title: "Cutting-Edge Innovation",
      desc: "Our team leverages the latest technologies to create forward-thinking solutions tailored for your brand."
    },
    {
      title: "AI-Powered Strategies",
      desc: "Artificial Intelligence helps us analyze data faster and optimize your campaigns for maximum efficiency."
    },
    {
      title: "Real-Time Analytics",
      desc: "Monitor performance with up-to-the-minute data insights to make informed business decisions instantly."
    },
    {
      title: "End-to-End Support",
      desc: "From planning to execution, we provide full support across development, marketing, and post-launch optimization."
    },
    {
      title: "Proven Industry Expertise",
      desc: "Our team has years of experience delivering scalable solutions across multiple B2B and B2C industries."
    },
    {
      title: "Dedicated Customer Success",
      desc: "Your goals become ours. We ensure continuous guidance, training, and assistance for seamless operations."
    },
    {
      title: "Comprehensive Digital Solutions",
      desc: "We combine strategy, technology, and creativity to offer holistic solutions for all your digital needs."
    },
    {
      title: "Sustainable Growth Focus",
      desc: "Every project is designed with long-term impact in mind, helping businesses scale sustainably and profitably."
    },
  ];

  return (
    <section className="choose-section">
      <div className="choose-content">
        <span className="choose-label">Why Choose Us?</span>
        <h1 className="choose-headline">
          We empower your business through innovative digital solutions and measurable growth strategies
        </h1>

        <div className="choose-features">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-block ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="feature-num">{`0${index + 1}`}</div>
              <div className="feature-title">{feature.title}</div>
              <div className="feature-desc">{feature.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUsAndTestimonial = () => (
  <>
    <WhyChooseUs />
    <TestimonialSection />
  </>
);

export default WhyChooseUsAndTestimonial;
