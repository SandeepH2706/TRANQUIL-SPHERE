import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">TRANQUIL SPHERE</h3>
          <p className="footer-description">
            Your sanctuary for mental well-being, providing comprehensive support 
            and resources for a healthier, happier life.
          </p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/resources">Resources</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Support</h4>
          <ul className="footer-links">
            <li><a href="/help">Help Center</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Connect With Us</h4>
          <div className="social-links">
            <a href="mailto:contact@tranquilsphere.com" className="social-link" title="Email">📧</a>
            <a href="tel:+1234567890" className="social-link" title="Phone">📱</a>
            <a href="https://tranquilsphere.com" className="social-link" title="Website">🌐</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Tranquil Sphere. All rights reserved.</p>
        <p>Committed to mental health support and wellness.</p>
      </div>
    </footer>
  );
};

export default Footer;
