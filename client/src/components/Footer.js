import React from 'react';
import './Footer.css';

function Footer({ stats }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>FlipClick 🍃❤️</h3>
          <p>Your trusted file conversion platform</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#tools">Tools</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Features</h4>
          <ul>
            <li><a href="#tools">PNG to JPG</a></li>
            <li><a href="#tools">JPG to PNG</a></li>
            <li><a href="#tools">PDF Editor</a></li>
            <li><a href="#tools">Compressor</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul className="social-links">
            <li><a href="#facebook">Facebook</a></li>
            <li><a href="#twitter">Twitter</a></li>
            <li><a href="#instagram">Instagram</a></li>
            <li><a href="#github">GitHub</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-stats">
        <div className="stat-badge">
          <span className="stat-number">{stats.totalVisits.toLocaleString()}</span>
          <span className="stat-label">Visitors</span>
        </div>
        <div className="stat-badge">
          <span className="stat-number">{stats.totalConversions.toLocaleString()}</span>
          <span className="stat-label">Conversions</span>
        </div>
        <div className="stat-badge">
          <span className="stat-number">{stats.totalDownloads.toLocaleString()}</span>
          <span className="stat-label">Downloads</span>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 FlipClick. All rights reserved. Made with ❤️</p>
      </div>
    </footer>
  );
}

export default Footer;