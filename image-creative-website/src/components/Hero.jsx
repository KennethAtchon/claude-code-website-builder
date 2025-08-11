import { useState, useEffect } from 'react'
import './Hero.css'

function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section id="home" className={`hero ${isLoaded ? 'loaded' : ''}`}>
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-headline">
              Creative Excellence
              <span className="highlight"> Reimagined</span>
            </h1>
            <p className="hero-tagline">
              Where imagination meets innovation. We craft extraordinary digital experiences 
              that captivate, inspire, and deliver exceptional results for your brand.
            </p>
            <div className="hero-cta-group">
              <a href="#contact" className="hero-cta primary">
                Start Your Project
              </a>
              <a href="#gallery" className="hero-cta secondary">
                View Our Work
              </a>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="image-container">
              <div className="image-placeholder">
                <div className="camera-icon">
                  <div className="lens"></div>
                  <div className="flash"></div>
                </div>
                <span>Creative Showcase</span>
              </div>
              <div className="image-overlay"></div>
            </div>
            <div className="floating-elements">
              <div className="element element-1">✨</div>
              <div className="element element-2">🎨</div>
              <div className="element element-3">💡</div>
            </div>
          </div>
        </div>
        
        <div className="hero-stats">
          <div className="stat">
            <div className="stat-number">500+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat">
            <div className="stat-number">98%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
          <div className="stat">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support Available</div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  )
}

export default Hero