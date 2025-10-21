import React from "react";
import "../Styles/Solutionpage.css";
import map from "../images/map.jpg"; // Imported image

const Solutionpage = () => {
  return (
    <div
      className="global-reach"
      style={{
        backgroundImage: `url(${map})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Header Section */}
      <header className="gr-header">
        <p className="content">
          Connecting businesses worldwide through technology and innovation
        </p>
      </header>

      {/* Stats Section */}
      <section className="gr-stats">
        <div className="gr-card">
          <h2>15+</h2>
          <p>Projects Delivered</p>
        </div>
        <div className="gr-card">
          <h2>5+</h2>
          <p>Countries Served</p>
        </div>
      </section>

    
    </div>
  );
};

export default Solutionpage;
