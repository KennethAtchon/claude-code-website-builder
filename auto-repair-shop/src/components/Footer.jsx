import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section footer-brand">
              <div className="brand-logo">
                <svg viewBox="0 0 60 40" className="logo-svg">
                  <circle cx="30" cy="20" r="15" fill="#38b2ac" opacity="0.8" />
                  <rect x="15" y="10" width="30" height="20" rx="3" fill="#1a365d" />
                  <circle cx="20" cy="30" r="5" fill="#ff6b35" />
                  <circle cx="40" cy="30" r="5" fill="#ff6b35" />
                  <rect x="20" y="12" width="8" height="6" rx="1" fill="#38b2ac" />
                  <rect x="32" y="12" width="8" height="6" rx="1" fill="#38b2ac" />
                </svg>
                <span className="brand-name">AutoCare Pro</span>
              </div>
              <p className="brand-description">
                Your trusted neighborhood auto repair shop since 1995. 
                Professional service, honest pricing, and quality workmanship you can count on.
              </p>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="Google">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="Yelp">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.271 17.814c1.026 0 1.595.67 1.595 1.371 0 .627-.569 1.314-1.595 1.314-.627 0-1.595-.627-1.595-1.314 0-.701.569-1.371 1.595-1.371zm0-15.814c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.327 11.965c.091.44-.241.83-.703.83h-9.248c-.462 0-.794-.39-.703-.83l1.177-5.669c.071-.342.401-.582.761-.582h7.776c.36 0 .69.24.761.582l1.179 5.669z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-section">
              <h4 className="footer-title">Services</h4>
              <ul className="footer-links">
                <li><a href="#services">Oil Change</a></li>
                <li><a href="#services">Brake Repair</a></li>
                <li><a href="#services">Engine Diagnostics</a></li>
                <li><a href="#services">Tire Services</a></li>
                <li><a href="#services">Transmission Repair</a></li>
                <li><a href="#services">Air Conditioning</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#services">About Us</a></li>
                <li><a href="#services">Our Team</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#services">Book Appointment</a></li>
                <li><a href="#services">Emergency Service</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-title">Contact Info</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <p>123 Main Street</p>
                    <p>Anytown, ST 12345</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div>
                    <p>(555) 123-4567</p>
                    <p>Emergency: (555) 987-6543</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div>
                    <p><strong>Mon-Fri:</strong> 8:00 AM - 6:00 PM</p>
                    <p><strong>Saturday:</strong> 8:00 AM - 4:00 PM</p>
                    <p><strong>Sunday:</strong> Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} AutoCare Pro. All rights reserved.
            </p>
            <div className="footer-legal">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#warranty">Warranty Info</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;