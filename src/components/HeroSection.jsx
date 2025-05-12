import React from "react";
import "./HeroSection.css";
import heroSection from "../assets/hero-section.webp";
import backgroundImg from "../assets/hero-section.webp"; // for background
import heroImage from "../assets/hero-section.webp"; // for main image

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to MargDarshak Library</h1>
          <p className="hero-subtitle">
            Your gateway to knowledge and academic excellence. Join our
            community of focused learners.
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
        <div className="hero-image">
          <img src={heroSection} alt="Library hero" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
