import React from "react";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  return (
    <section className="registration-section">
      <div className="form-container">
        <h2 className="form-title">Register at Margdarshak Library</h2>
        <div className="iframe-wrapper">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdgcjlhV0vnXoKfcKARLxOnfUPetMWxcu6lAWEBeEgmcRM1_w/viewform?embedded=true"
            title="Margdarshak Library Registration"
            allowFullScreen
            loading="lazy"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
