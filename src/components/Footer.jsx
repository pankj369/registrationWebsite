import React from "react";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} MargDarshak Library. All rights reserved.
        </p>
        <a 
          href="https://www.instagram.com/margdarshak_library/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="instagram-link"
        >
          <FaInstagram className="instagram-icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;