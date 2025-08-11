import './Services.css'

function Services() {
  const services = [
    {
      id: 1,
      icon: '🎨',
      title: 'Brand Design',
      description: 'Complete visual identity creation including logos, color palettes, and brand guidelines that make your business unforgettable.',
      features: ['Logo Design', 'Brand Guidelines', 'Color Palettes', 'Typography'],
      image: 'design'
    },
    {
      id: 2,
      icon: '💻',
      title: 'Web Development',
      description: 'Modern, responsive websites built with the latest technologies for optimal performance and user experience.',
      features: ['Responsive Design', 'Modern Frameworks', 'SEO Optimization', 'Fast Loading'],
      image: 'web'
    },
    {
      id: 3,
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that engage users and drive business growth.',
      features: ['iOS & Android', 'Cross-Platform', 'User-Friendly', 'App Store Ready'],
      image: 'mobile'
    },
    {
      id: 4,
      icon: '📈',
      title: 'Digital Marketing',
      description: 'Strategic digital marketing campaigns that increase visibility and drive meaningful conversions.',
      features: ['Social Media', 'Content Strategy', 'SEO/SEM', 'Analytics'],
      image: 'marketing'
    },
    {
      id: 5,
      icon: '🛡️',
      title: 'Consulting',
      description: 'Expert consultation on technology strategy, user experience, and digital transformation initiatives.',
      features: ['Strategy Planning', 'UX Research', 'Tech Audits', 'Growth Planning'],
      image: 'consulting'
    },
    {
      id: 6,
      icon: '⚡',
      title: 'Performance',
      description: 'Speed optimization and performance tuning to ensure your digital assets run at peak efficiency.',
      features: ['Speed Optimization', 'Code Review', 'Performance Monitoring', 'Scalability'],
      image: 'performance'
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header">
          <div className="section-badge">Our Services</div>
          <h2 className="services-title">
            Comprehensive Solutions for 
            <span className="highlight"> Your Digital Success</span>
          </h2>
          <p className="services-description">
            From concept to completion, we provide end-to-end digital services 
            that transform your vision into reality and drive measurable results.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="card-image">
                <div className="image-placeholder">
                  <div className="service-icon">{service.icon}</div>
                  <div className="image-overlay"></div>
                </div>
                <div className="hover-overlay">
                  <span className="view-details">View Details</span>
                </div>
              </div>
              
              <div className="card-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="card-footer">
                  <a href="#contact" className="service-cta">
                    Get Started
                    <span className="arrow">→</span>
                  </a>
                  <div className="service-price">Starting at $999</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="services-footer">
          <div className="custom-service">
            <h3>Need Something Custom?</h3>
            <p>Every business is unique. Let's discuss your specific requirements and create a tailored solution that fits your needs perfectly.</p>
            <a href="#contact" className="custom-cta">
              Discuss Your Project
              <span className="spark">✨</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services