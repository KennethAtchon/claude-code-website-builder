import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="gradient-blob gradient-blob-1"></div>
      <div className="gradient-blob gradient-blob-2"></div>
      <div className="gradient-blob gradient-blob-3"></div>
      
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Expert Auto Repairs You Can Trust</h1>
          <p className="hero-tagline">Keeping You on the Road Since 1995</p>
          <p className="hero-description">
            Professional automotive services with honest pricing, quality workmanship, 
            and exceptional customer care. Your trusted neighborhood auto repair shop.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Book Your Repair</a>
            <a href="#services" className="btn btn-secondary">Our Services</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-car-illustration">
            <svg viewBox="0 0 400 200" className="car-svg">
              <defs>
                <linearGradient id="carGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2d3748" />
                  <stop offset="100%" stopColor="#4a5568" />
                </linearGradient>
              </defs>
              
              {/* Car body */}
              <ellipse cx="200" cy="140" rx="120" ry="35" fill="url(#carGradient)" />
              <rect x="80" y="105" width="240" height="35" rx="15" fill="url(#carGradient)" />
              <rect x="120" y="85" width="160" height="25" rx="12" fill="#1a365d" />
              
              {/* Windows */}
              <rect x="130" y="90" width="50" height="15" rx="5" fill="#38b2ac" opacity="0.8" />
              <rect x="220" y="90" width="50" height="15" rx="5" fill="#38b2ac" opacity="0.8" />
              
              {/* Wheels */}
              <circle cx="130" cy="155" r="20" fill="#2d3748" />
              <circle cx="270" cy="155" r="20" fill="#2d3748" />
              <circle cx="130" cy="155" r="12" fill="#4a5568" />
              <circle cx="270" cy="155" r="12" fill="#4a5568" />
              
              {/* Headlights */}
              <circle cx="85" cy="120" r="8" fill="#ffd700" opacity="0.9" />
              <circle cx="315" cy="120" r="8" fill="#ff6b6b" opacity="0.9" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;