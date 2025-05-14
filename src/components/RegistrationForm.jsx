import React from "react";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  return (
    <section className="registration-section">
      <div className="form-container">
        <h2 className="form-title">Register at Margdarshak Library</h2>
        <div className="iframe-wrapper">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSesvHqmlDEovvff222bLvKXKB8tFhfqEfrqBfPKUH9Xk5KCLg/viewform?embedded=true"
            width="640"
            height="1097"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
