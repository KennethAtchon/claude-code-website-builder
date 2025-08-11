import { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#testimonials', label: 'Reviews' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="nav-brand">
          <div className="brand-icon">
            <div className="icon-circle"></div>
            <div className="icon-spark"></div>
          </div>
          <span className="brand-text">CreativeStudio</span>
        </div>
        
        <button 
          className={`nav-toggle ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href} className="nav-item">
              <a 
                href={link.href} 
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="nav-item cta-item">
            <a href="#contact" className="nav-cta" onClick={() => setIsOpen(false)}>
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar