import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Oil Change',
      description: 'Professional oil change service with premium oil and filters to keep your engine running smoothly.',
      icon: (
        <svg viewBox="0 0 100 100" className="service-icon">
          <circle cx="50" cy="50" r="40" fill="#ff6b35" opacity="0.1" />
          <path d="M30 30h40v40H30z" fill="#ff6b35" opacity="0.2" />
          <path d="M35 35h30v5H35zm0 10h25v3H35zm0 8h30v3H35zm0 8h20v3H35z" fill="#1a365d" />
          <circle cx="50" cy="45" r="8" fill="#38b2ac" opacity="0.8" />
          <path d="M46 41h8v8h-8z" fill="#1a365d" />
        </svg>
      ),
      features: ['Full synthetic available', 'Filter replacement', 'Fluid top-off', 'Multi-point inspection']
    },
    {
      id: 2,
      title: 'Brake Repair',
      description: 'Expert brake service and repair to ensure your safety on the road with quality parts and workmanship.',
      icon: (
        <svg viewBox="0 0 100 100" className="service-icon">
          <circle cx="50" cy="50" r="35" fill="#ff6b35" opacity="0.1" />
          <circle cx="50" cy="50" r="25" fill="#1a365d" />
          <circle cx="50" cy="50" r="15" fill="#38b2ac" />
          <circle cx="50" cy="50" r="8" fill="#fff" />
          <path d="M35 35l30 30M65 35L35 65" stroke="#ff6b35" strokeWidth="3" opacity="0.6" />
        </svg>
      ),
      features: ['Brake pad replacement', 'Rotor resurfacing', 'Brake fluid service', 'ABS diagnostics']
    },
    {
      id: 3,
      title: 'Engine Diagnostics',
      description: 'Advanced computer diagnostics to identify and resolve engine issues quickly and accurately.',
      icon: (
        <svg viewBox="0 0 100 100" className="service-icon">
          <rect x="25" y="35" width="50" height="30" rx="5" fill="#1a365d" />
          <rect x="30" y="40" width="40" height="20" rx="3" fill="#38b2ac" opacity="0.8" />
          <circle cx="35" cy="45" r="2" fill="#ff6b35" />
          <circle cx="45" cy="45" r="2" fill="#ff6b35" />
          <circle cx="55" cy="45" r="2" fill="#ff6b35" />
          <circle cx="65" cy="45" r="2" fill="#ff6b35" />
          <path d="M30 55h40v5H30z" fill="#ff6b35" opacity="0.3" />
          <path d="M40 25v10M50 25v10M60 25v10" stroke="#1a365d" strokeWidth="2" />
        </svg>
      ),
      features: ['Computer scanning', 'Error code analysis', 'Performance testing', 'Repair recommendations']
    },
    {
      id: 4,
      title: 'Tire Services',
      description: 'Complete tire services including installation, balancing, rotation, and alignment for optimal performance.',
      icon: (
        <svg viewBox="0 0 100 100" className="service-icon">
          <circle cx="50" cy="50" r="35" fill="#1a365d" />
          <circle cx="50" cy="50" r="25" fill="#38b2ac" opacity="0.8" />
          <circle cx="50" cy="50" r="15" fill="#1a365d" />
          <circle cx="50" cy="50" r="8" fill="#ff6b35" />
          <path d="M30 30l40 40M70 30L30 70M50 15v20M50 65v20M15 50h20M65 50h20" 
                stroke="#fff" strokeWidth="2" opacity="0.6" />
        </svg>
      ),
      features: ['New tire installation', 'Wheel balancing', 'Tire rotation', 'Alignment service']
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Our Expert Services</h2>
        <p className="section-subtitle">
          Professional automotive care with honest pricing and guaranteed quality workmanship
        </p>
        
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index} className="service-feature">
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="service-btn">Learn More</button>
            </div>
          ))}
        </div>
        
        <div className="services-cta">
          <p className="cta-text">Need a service not listed? We handle all automotive repairs!</p>
          <a href="#contact" className="btn">Get a Free Estimate</a>
        </div>
      </div>
    </section>
  );
};

export default Services;