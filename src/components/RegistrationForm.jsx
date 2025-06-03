import React from "react";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  return (
    <section id="registration-section" className="registration-section">
      <div className="form-container">
        <h2 className="form-title">Register at Margdarshak Library</h2>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfQI4lSp-O7AHmcs-wR3Oie8uCW4o1y0zI22OLIIfIXOXqbKg/viewform?embedded=true"
          title="Registration Form"
          allowFullScreen
        >
          Loading…
        </iframe>
      </div>
    </section>
  );
};

export default RegistrationForm;
