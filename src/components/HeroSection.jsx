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
            Your gateway to knowledge and academic excellence. Join our
            community of focused learners.
          </p>
          <button
            className="register-btn"
            onClick={() =>
              window.open("https://docs.google.com/forms/d/e/1FAIpQLSfQI4lSp-O7AHmcs-wR3Oie8uCW4o1y0zI22OLIIfIXOXqbKg/viewform?usp=dialog", "_blank")
            }
          >
            Register Now
          </button>
        </div>
        <div className="hero-image-full">
          <img src={heroImage} alt="Library hero" />
        </div>
      </div>

      <div className="running-banner">
        <div className="banner-text">
          🎉 <strong>15 Days Free Trial</strong> for Every Student
          &nbsp;&nbsp;&nbsp; 💥 <strong >50% OFF</strong> for First 100 Students!
          &nbsp;&nbsp;&nbsp;
           📚{" "}
          <strong className="starts">Starts from 1<sup>st</sup> July</strong>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfQI4lSp-O7AHmcs-wR3Oie8uCW4o1y0zI22OLIIfIXOXqbKg/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-link"
          >
            Register Now!
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
