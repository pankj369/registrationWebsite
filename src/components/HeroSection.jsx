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
        <strong className="starts">
  📢 Starts from 12<sup>st</sup> July
</strong>

          <br></br>
          <button
            className="register-btn"
            onClick={() => {
              const section = document.getElementsByClassName(
                "registration-section"
              )[0];
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
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
          🎉 <strong>15 Days Free Trial</strong> on Pre-registration
          &nbsp;&nbsp;&nbsp; 📚{" "}
          <a href="#registration-section" className="cta-link">
            Register Now!
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
