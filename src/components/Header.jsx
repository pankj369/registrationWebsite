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
            onClick={() => {
              const section = document.getElementsByClassName(
                "registration-section"
              )[0];
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
              ``;
            }}
          >
            Register Now
          </button>
        </div>
      </div>
    </header>
  );
}
export default Header;
