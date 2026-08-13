import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <div className="logo">
            <span className="leaf-heart">🍃❤️</span>
            <h1>FlipClick</h1>
          </div>
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#tools">Tools</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;