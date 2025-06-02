import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container1">
        <div className="logo-section">
          <h2 className="brand-name">MargDarshak</h2>
          <p className="tagline">Study with Focus. Grow with Peace.</p>
        </div>
        <div className="btn-section">
          <button
            className="register-btn"
            onClick={() =>
              window.open("https://docs.google.com/forms/d/e/1FAIpQLSfQI4lSp-O7AHmcs-wR3Oie8uCW4o1y0zI22OLIIfIXOXqbKg/viewform?usp=dialog", "_blank")
            }
          >
            Register Now
          </button>
        </div>
      </div>
    </header>
  );
}
export default Header;
