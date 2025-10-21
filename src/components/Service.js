import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Import local images
import WebDevelopmentImg from "../images/webdevelopment.jpg";
import DataAnalysisImg from "../images/DataAnalysis.jpg";
import ProductDevelopmentImg from "../images/secure.jpg";
// import AppDevelopmentImg from "../images/AppDevelopment.jpg";

const serviceData = [

    {
    title: "Data Analysis",
    img: DataAnalysisImg,
    desc: "Unlock actionable insights from your data through advanced analytics, visualization, and machine learning tools. We help transform raw data into strategic intelligence that drives business success.",
    link: "/data-scince-timelinee",
    bg: "linear-gradient(145deg, #ccf3ef, #a8edea)",
  },
  {
    title: "Web Development",
    img: WebDevelopmentImg,
    desc: "We craft modern, responsive, and high-performance websites tailored to your business needs using Django, React, and the latest web technologies. Our focus is on seamless performance and elegant design.",
    link: "/web-development",
    bg: "linear-gradient(145deg, #ccf3ef, #a8edea)",
  },

  {
    title: "Cybersecurity",
    img: ProductDevelopmentImg,
    desc: "We provide comprehensive cybersecurity solutions to protect your digital assets from threats and vulnerabilities. Our services include risk assessment, threat detection, and incident response to ensure your business stays secure.",
    link: "/cyber-security",
     bg: "linear-gradient(145deg, #ccf3ef, #a8edea)",
  },
  // {
  //   title: "App Development",
  //   // img: AppDevelopmentImg,
  //   desc: "We design and develop feature-rich mobile apps for Android and iOS platforms. With intuitive UI, optimized performance, and elegant aesthetics — we make your app stand out in the digital crowd.",
  //   link: "/Appdevelopment",
  //   bg: "linear-gradient(145deg, #ccf3ef, #a8edea)",
  // },
];

const ServicesSection = () => {
  const containerStyle = {
    maxWidth: "1200px",
    margin: "auto",
    padding: "50px 20px",
    fontFamily: "'Poppins', sans-serif",
    
  };


  const titleStyle = {
    textAlign: "center",
    color: "#00796b",
    marginBottom: "40px",
    fontWeight: 700,
    fontSize: "2.2rem",
  };

  const cardBaseStyle = {
    borderRadius: "18px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
    marginBottom: "35px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "row",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    alignItems: "center",
  };

  const cardHoverStyle = {
    transform: "translateY(-6px)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
  };

  const cardTitleStyle = {
    color: "#004d40",
    fontWeight: 600,
    marginBottom: "20px",
    fontSize: "1.8rem",
  };

  const cardDescStyle = {
    color: "#004d40",
    fontSize: "17px",
    lineHeight: 1.7,
  };

  const imageStyle = {
    width: "450px",
    height: "280px",
    objectFit: "contain",
    borderRadius: "12px",
    marginBottom: "15px",
    
  };

  const buttonStyle = {
    backgroundColor: "#00796b",
    color: "#fff",
    padding: "10px 25px",
    borderRadius: "25px",
    border: "none",
    fontWeight: 500,
    textDecoration: "none",
    transition: "all 0.3s ease",
    marginTop: "15px",
    display: "inline-block",
  };

  const buttonHoverStyle = {
    backgroundColor: "#004d40",
    transform: "scale(1.05)",
  };
  
 const bodyy = {
    backgroundColor: "#ffffffff",
    
  };
  return (
   <div style={bodyy}>
    <div style={containerStyle}>
      <h1 style={titleStyle}>Our Services</h1>

      {serviceData.map((item, index) => (
        <div
          key={index}
          className="row flex-column flex-md-row mx-auto"
          style={{ ...cardBaseStyle, background: item.bg }}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, { ...cardBaseStyle, background: item.bg, ...cardHoverStyle })}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, { ...cardBaseStyle, background: item.bg })}
        >
          <div className="col-md-6 text-center p-4">
            <h2 style={cardTitleStyle}>{item.title}</h2>
            <img src={item.img} alt={item.title} style={imageStyle} />
          </div>
          <div className="col-md-6 p-4 d-flex flex-column justify-content-center">
            <p style={cardDescStyle}>{item.desc}</p>
            <div className="text-center mt-3">
              <a
                href={item.link}
                style={buttonStyle}
                onMouseEnter={(e) => Object.assign(e.currentTarget.style, buttonHoverStyle)}
                onMouseLeave={(e) => Object.assign(e.currentTarget.style, buttonStyle)}
              >
                Explore
              </a>
            </div>
          </div>
        </div>
      ))}

      <div className="text-center mt-5">
        <a
          href="/services"
          style={buttonStyle}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, buttonHoverStyle)}
          onMouseLeave={(e) => Object.assign(e.currentTarget.style, buttonStyle)}
        >
          Explore All Services
        </a>
      </div>
    </div>
    </div>
    
  );
};

export default ServicesSection;
