import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>&copy; {new Date().getFullYear()} GetSocial. All rights reserved.</p>
        <nav className="footer__links">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
