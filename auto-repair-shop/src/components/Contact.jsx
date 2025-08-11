import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a server
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Ready to get your vehicle serviced? Contact us today for a free estimate or to schedule an appointment
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">
                <svg viewBox="0 0 100 100" className="icon">
                  <circle cx="50" cy="40" r="8" fill="#ff6b35" />
                  <path d="M50 20c-11 0-20 9-20 20 0 15 20 35 20 35s20-20 20-35c0-11-9-20-20-20z" 
                        fill="#38b2ac" opacity="0.8" />
                </svg>
              </div>
              <h3>Visit Our Shop</h3>
              <p>123 Main Street<br />Anytown, ST 12345</p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <svg viewBox="0 0 100 100" className="icon">
                  <rect x="25" y="30" width="50" height="35" rx="5" fill="#38b2ac" opacity="0.8" />
                  <path d="M25 35l25 15 25-15" stroke="#ff6b35" strokeWidth="3" fill="none" />
                </svg>
              </div>
              <h3>Email Us</h3>
              <p>info@autorepairshop.com<br />service@autorepairshop.com</p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <svg viewBox="0 0 100 100" className="icon">
                  <rect x="35" y="25" width="30" height="50" rx="8" fill="#38b2ac" opacity="0.8" />
                  <rect x="40" y="30" width="20" height="25" rx="2" fill="#fff" />
                  <circle cx="50" cy="65" r="3" fill="#ff6b35" />
                </svg>
              </div>
              <h3>Call Us</h3>
              <p>(555) 123-4567<br />Emergency: (555) 987-6543</p>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <svg viewBox="0 0 100 100" className="icon">
                  <circle cx="50" cy="50" r="25" fill="#38b2ac" opacity="0.8" />
                  <path d="M35 50h30M50 35v30" stroke="#ff6b35" strokeWidth="4" />
                  <circle cx="50" cy="50" r="3" fill="#ff6b35" />
                </svg>
              </div>
              <h3>Business Hours</h3>
              <p>Mon-Fri: 8:00 AM - 6:00 PM<br />Sat: 8:00 AM - 4:00 PM<br />Sun: Closed</p>
            </div>
          </div>
          
          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="service">Service Needed</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service</option>
                  <option value="oil-change">Oil Change</option>
                  <option value="brake-repair">Brake Repair</option>
                  <option value="engine-diagnostics">Engine Diagnostics</option>
                  <option value="tire-services">Tire Services</option>
                  <option value="general-repair">General Repair</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Please describe your vehicle's issue or the service you need..."
                ></textarea>
              </div>
              
              <button type="submit" className="btn submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <div className="map-section">
          <h3 className="map-title">Find Us</h3>
          <div className="map-container">
            <div className="map-placeholder">
              <div className="map-icon">
                <svg viewBox="0 0 100 100">
                  <circle cx="50" cy="40" r="8" fill="#ff6b35" />
                  <path d="M50 20c-11 0-20 9-20 20 0 15 20 35 20 35s20-20 20-35c0-11-9-20-20-20z" 
                        fill="#38b2ac" opacity="0.9" />
                </svg>
              </div>
              <p>Interactive Map</p>
              <small>123 Main Street, Anytown, ST 12345</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;