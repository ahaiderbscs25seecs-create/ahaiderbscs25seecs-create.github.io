import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <span className="footer-brand-name">Aroxe<span className="logo-accent">.</span></span>
          <p className="footer-desc">
            A digital agency for businesses that want real results — not just deliverables. We design, build, test, and market products that people genuinely love to use.
          </p>
          <address>
            <span style={{ display: 'block' }}>Aroxe Solutions</span>
            <span style={{ display: 'block' }}>Pakistan</span>
          </address>
        </div>

        <div className="footer-links">
          <h4>explore</h4>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#why-us">Why Us</a></li>
            <li><a href="#process">Our Process</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#reviews">Reviews</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>get in touch</h4>
          <ul>
            <li><a href="mailto:hello@aroxesolutions.com">aroxesolutions@gmail.com</a></li>
            <li><a href="tel:+923394029967">+92 339 4029967</a></li>
            <li>Monday to Friday, 9:00 – 18:00 PKT</li>
            <li><a href="#contact">Start a project →</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Aroxe Solutions</span>
        <span>transforming ideas into digital reality</span>
      </div>
    </footer>
  );
};

export default Footer;
