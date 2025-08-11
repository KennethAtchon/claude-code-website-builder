import { useState, useEffect } from 'react'
import './Testimonials.css'

function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'TechStart Solutions',
      role: 'CEO & Founder',
      rating: 5,
      text: 'Working with this team was an absolute game-changer for our business. They didn\'t just build us a website – they created a digital experience that perfectly captures our brand essence and drives real results.',
      image: 'sarah'
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'Innovate Labs',
      role: 'Product Director',
      rating: 5,
      text: 'The attention to detail and creative vision exceeded all our expectations. Our conversion rates increased by 340% within the first month of launching our new site. Truly exceptional work.',
      image: 'michael'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      company: 'Creative Minds Agency',
      role: 'Marketing Lead',
      rating: 5,
      text: 'From concept to completion, the entire process was seamless. They understood our vision immediately and brought it to life with stunning visuals and flawless functionality.',
      image: 'emily'
    },
    {
      id: 4,
      name: 'David Thompson',
      company: 'Growth Ventures',
      role: 'Operations Manager',
      rating: 5,
      text: 'Professional, creative, and incredibly responsive. They transformed our outdated platform into a modern, engaging experience that our customers absolutely love.',
      image: 'david'
    },
    {
      id: 5,
      name: 'Lisa Park',
      company: 'Stellar Designs',
      role: 'Creative Director',
      rating: 5,
      text: 'The team\'s expertise in both design and development is unmatched. They delivered a solution that not only looks amazing but performs flawlessly across all devices.',
      image: 'lisa'
    },
    {
      id: 6,
      name: 'Alex Morgan',
      company: 'Future Tech Inc.',
      role: 'Head of Digital',
      rating: 5,
      text: 'Outstanding results and exceptional service. They took the time to understand our unique challenges and delivered a custom solution that exceeded our wildest expectations.',
      image: 'alex'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <div className="section-badge">Client Reviews</div>
          <h2 className="testimonials-title">
            What Our Clients Say About
            <span className="highlight"> Our Work</span>
          </h2>
          <p className="testimonials-description">
            Don't just take our word for it. Here's what real clients say about 
            their experience working with our creative team.
          </p>
        </div>

        <div className="testimonials-slider">
          <div className="slider-container">
            <div 
              className="slides-wrapper"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="testimonial-slide">
                  <div className="testimonial-card">
                    <div className="card-background"></div>
                    <div className="card-content">
                      <div className="rating">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="star">★</span>
                        ))}
                      </div>
                      
                      <blockquote className="testimonial-text">
                        "{testimonial.text}"
                      </blockquote>
                      
                      <div className="client-info">
                        <div className="client-avatar">
                          <div className="avatar-placeholder">
                            <div className="avatar-icon">
                              {testimonial.name.split(' ').map(n => n[0]).join('')}
                            </div>
                          </div>
                          <div className="avatar-ring"></div>
                        </div>
                        
                        <div className="client-details">
                          <div className="client-name">{testimonial.name}</div>
                          <div className="client-role">{testimonial.role}</div>
                          <div className="client-company">{testimonial.company}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="slider-controls">
            <button className="control-btn prev-btn" onClick={prevSlide}>
              ←
            </button>
            <button className="control-btn next-btn" onClick={nextSlide}>
              →
            </button>
          </div>

          <div className="slider-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>

        <div className="testimonials-stats">
          <div className="stat-item">
            <div className="stat-icon">🏆</div>
            <div className="stat-content">
              <div className="stat-number">4.9/5</div>
              <div className="stat-label">Average Rating</div>
            </div>
          </div>
          
          <div className="stat-item">
            <div className="stat-icon">❤️</div>
            <div className="stat-content">
              <div className="stat-number">98%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
          
          <div className="stat-item">
            <div className="stat-icon">🔄</div>
            <div className="stat-content">
              <div className="stat-number">85%</div>
              <div className="stat-label">Repeat Clients</div>
            </div>
          </div>
          
          <div className="stat-item">
            <div className="stat-icon">📈</div>
            <div className="stat-content">
              <div className="stat-number">150+</div>
              <div className="stat-label">Success Stories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials