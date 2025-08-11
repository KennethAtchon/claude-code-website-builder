import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <div className="image-wrapper">
              <div className="team-photo">
                <div className="photo-placeholder">
                  <div className="team-icons">
                    <div className="person-icon">
                      <div className="head"></div>
                      <div className="body"></div>
                    </div>
                    <div className="person-icon">
                      <div className="head"></div>
                      <div className="body"></div>
                    </div>
                    <div className="person-icon">
                      <div className="head"></div>
                      <div className="body"></div>
                    </div>
                  </div>
                  <span className="photo-label">Our Creative Team</span>
                </div>
                <div className="image-frame"></div>
              </div>
              <div className="decorative-elements">
                <div className="element element-circle"></div>
                <div className="element element-square"></div>
                <div className="element element-triangle"></div>
              </div>
            </div>
          </div>
          
          <div className="about-text">
            <div className="section-badge">About Us</div>
            <h2 className="about-title">
              Crafting Digital Experiences That 
              <span className="highlight"> Inspire & Engage</span>
            </h2>
            <p className="about-description">
              We are a passionate team of creative professionals dedicated to transforming 
              ideas into extraordinary digital experiences. With over a decade of combined 
              expertise, we blend artistry with technology to deliver results that exceed 
              expectations.
            </p>
            
            <div className="story-points">
              <div className="story-point">
                <div className="point-icon">🚀</div>
                <div className="point-content">
                  <h4>Innovation First</h4>
                  <p>We stay ahead of trends, constantly exploring new technologies and creative approaches to deliver cutting-edge solutions.</p>
                </div>
              </div>
              
              <div className="story-point">
                <div className="point-icon">🎯</div>
                <div className="point-content">
                  <h4>Results Driven</h4>
                  <p>Every project is approached with clear goals and measurable outcomes, ensuring your investment delivers real business value.</p>
                </div>
              </div>
              
              <div className="story-point">
                <div className="point-icon">💎</div>
                <div className="point-content">
                  <h4>Quality Obsessed</h4>
                  <p>We believe in doing things right the first time, with meticulous attention to detail in every pixel and interaction.</p>
                </div>
              </div>
            </div>
            
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">150+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
            </div>
            
            <a href="#contact" className="about-cta">
              Work With Us
              <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About