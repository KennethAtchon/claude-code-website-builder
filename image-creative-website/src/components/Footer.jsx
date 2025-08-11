import './Footer.css'

function Footer() {
  const footerLinks = {
    services: [
      { name: 'Web Design', href: '#services' },
      { name: 'Branding', href: '#services' },
      { name: 'Mobile Apps', href: '#services' },
      { name: 'Digital Marketing', href: '#services' },
      { name: 'Consulting', href: '#services' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#about' },
      { name: 'Portfolio', href: '#gallery' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Contact', href: '#contact' }
    ],
    resources: [
      { name: 'Blog', href: '#' },
      { name: 'Case Studies', href: '#gallery' },
      { name: 'Free Resources', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' }
    ]
  }

  const socialLinks = [
    { name: 'Twitter', icon: '🐦', href: '#' },
    { name: 'Facebook', icon: '📘', href: '#' },
    { name: 'Instagram', icon: '📷', href: '#' },
    { name: 'LinkedIn', icon: '💼', href: '#' },
    { name: 'Dribbble', icon: '🏀', href: '#' }
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="background-pattern"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
      </div>

      <div className="container footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="brand-logo">
              <div className="logo-icon">
                <div className="icon-circle"></div>
                <div className="icon-spark"></div>
              </div>
              <span className="brand-text">CreativeStudio</span>
            </div>
            
            <p className="brand-description">
              We transform ideas into extraordinary digital experiences that 
              captivate audiences and drive meaningful results for businesses worldwide.
            </p>
            
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>hello@creativestudio.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          <div className="footer-links">
            <div className="link-column">
              <h4 className="column-title">Services</h4>
              <ul className="link-list">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="link-column">
              <h4 className="column-title">Company</h4>
              <ul className="link-list">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="link-column">
              <h4 className="column-title">Resources</h4>
              <ul className="link-list">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer-newsletter">
            <h4 className="newsletter-title">Stay Updated</h4>
            <p className="newsletter-description">
              Get the latest design trends, tips, and exclusive insights delivered to your inbox.
            </p>
            
            <form className="newsletter-form">
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-btn">
                  Subscribe
                </button>
              </div>
            </form>
            
            <p className="newsletter-note">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="footer-social">
            <h5 className="social-title">Follow Us</h5>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  className="social-link"
                  aria-label={social.name}
                >
                  <span className="social-icon">{social.icon}</span>
                  <span className="social-name">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-awards">
            <div className="award-item">
              <span className="award-icon">🏆</span>
              <div className="award-info">
                <div className="award-title">Best Design Agency 2024</div>
                <div className="award-org">Creative Awards</div>
              </div>
            </div>
            
            <div className="award-item">
              <span className="award-icon">⭐</span>
              <div className="award-info">
                <div className="award-title">5.0 Rating</div>
                <div className="award-org">Client Reviews</div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <div className="copyright-text">
            <p>&copy; {currentYear} CreativeStudio. All rights reserved.</p>
            <p>Crafted with ❤️ in San Francisco</p>
          </div>
          
          <div className="footer-cta">
            <a href="#contact" className="cta-link">
              Start Your Project
              <span className="cta-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer