import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo-section">
          <h2 className="brand-name">MargDarshak</h2>
          <p className="tagline">Study with Focus. Grow with Peace.</p>
        </div>
        <div className="btn-section">
          <button
            className="register-btn"
            onClick={() =>
              window.open("https://forms.gle/BGPyapwXKB9p4Jry6", "_blank")
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