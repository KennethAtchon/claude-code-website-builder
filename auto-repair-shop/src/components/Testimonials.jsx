import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      review: 'Outstanding service! They fixed my brake issue quickly and at a fair price. The staff was professional and explained everything clearly. I felt completely comfortable trusting them with my car.',
      location: 'Local Customer',
      image: '👩‍💼'
    },
    {
      id: 2,
      name: 'Mike Rodriguez',
      rating: 5,
      review: 'Been coming here for 3 years now. Always honest, reliable, and they never try to sell me services I don\'t need. Their diagnostic work is spot-on and saves me money in the long run.',
      location: 'Returning Customer',
      image: '👨‍🔧'
    },
    {
      id: 3,
      name: 'Emily Chen',
      rating: 5,
      review: 'Amazing experience! My car was making strange noises and they diagnosed the problem in minutes. Fixed it the same day for much less than the dealer quoted. Highly recommend!',
      location: 'First-time Customer',
      image: '👩‍🎓'
    },
    {
      id: 4,
      name: 'David Thompson',
      rating: 5,
      review: 'Professional, fast, and reasonably priced. They took care of my oil change and caught a potential issue before it became expensive. Great preventive service!',
      location: 'Regular Customer',
      image: '👨‍💻'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="testimonials">
      <div className="testimonials-bg-pattern"></div>
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        <p className="section-subtitle">
          Don't just take our word for it - hear from our satisfied customers who trust us with their vehicles
        </p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <div className="customer-avatar">
                  <span className="avatar-emoji">{testimonial.image}</span>
                </div>
                <div className="customer-info">
                  <h4 className="customer-name">{testimonial.name}</h4>
                  <p className="customer-location">{testimonial.location}</p>
                </div>
                <div className="rating">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              
              <div className="testimonial-content">
                <div className="quote-icon">"</div>
                <p className="review-text">{testimonial.review}</p>
              </div>
              
              <div className="testimonial-footer">
                <div className="verified-badge">
                  <span className="check-icon">✓</span>
                  Verified Customer
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="testimonials-stats">
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Happy Customers</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4.9/5</div>
            <div className="stat-label">Average Rating</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">28+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Satisfaction Guarantee</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;