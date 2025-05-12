import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} MargDarshak Library. All rights reserved. | Made with ❤️ by MargDarshak
        </p>
      </div>
    </footer>
  );
}

export default Footer;
