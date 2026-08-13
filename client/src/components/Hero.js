import React from 'react';
import './Hero.css';

function Hero({ stats }) {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <h2 className="hero-title">I Love PDF</h2>
          <p className="hero-subtitle">
            Convert, Edit & Compress Your Files Instantly
          </p>
          <p className="hero-description">
            FlipClick is your one-stop solution for all your PDF, PNG, and JPG conversion needs. 
            High-quality, fast, and secure file transformations at your fingertips.
          </p>
          <button className="cta-button">Get Started</button>
        </div>
        <div className="hero-image">
          <div className="floating-card card-1">
            <span className="icon">📄</span>
            <p>PDF</p>
          </div>
          <div className="floating-card card-2">
            <span className="icon">🖼️</span>
            <p>PNG</p>
          </div>
          <div className="floating-card card-3">
            <span className="icon">📸</span>
            <p>JPG</p>
          </div>
        </div>
      </div>

      <div className="stats-container">
        <div className="stat">
          <h3>{stats.totalVisits.toLocaleString()}</h3>
          <p>Total Visitors</p>
        </div>
        <div className="stat">
          <h3>{stats.totalConversions.toLocaleString()}</h3>
          <p>Files Converted</p>
        </div>
        <div className="stat">
          <h3>{stats.totalDownloads.toLocaleString()}</h3>
          <p>Downloads</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;