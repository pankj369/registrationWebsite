import React from "react";
import "./HeroSection.css";
import heroImage from "../assets/heroimg.png";
function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to MargDarshak Library</h1>
          <p className="hero-subtitle">
            Your gateway to knowledge and academic excellence. Join our community of focused learners.
          </p>
          <button
            className="register-btn"
            onClick={() =>
              window.open("https://forms.gle/BGPyapwXKB9p4Jry6", "_blank")
            }
          >
            Register Now
          </button>
        </div>
        <div className="hero-image-full">
          <img src={heroImage} alt="Library hero" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
