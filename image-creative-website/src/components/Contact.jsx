import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.service) newErrors.service = 'Please select a service'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true)
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      setIsSubmitted(true)
      setIsSubmitting(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        budget: '',
        message: ''
      })
    } else {
      setErrors(newErrors)
    }
  }

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email Us',
      value: 'hello@creativestudio.com',
      description: 'Send us an email anytime'
    },
    {
      icon: '📞',
      title: 'Call Us',
      value: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 6pm'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      value: '123 Creative Street, Design District',
      description: 'San Francisco, CA 94102'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      value: 'Available 24/7',
      description: 'Instant support when you need it'
    }
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-header">
          <div className="section-badge">Get In Touch</div>
          <h2 className="contact-title">
            Let's Create Something
            <span className="highlight"> Amazing Together</span>
          </h2>
          <p className="contact-description">
            Ready to bring your vision to life? We'd love to hear about your project 
            and discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-cards">
              {contactInfo.map((info, index) => (
                <div key={index} className="info-card">
                  <div className="card-icon">{info.icon}</div>
                  <div className="card-content">
                    <h4 className="card-title">{info.title}</h4>
                    <div className="card-value">{info.value}</div>
                    <p className="card-description">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="map-container">
              <div className="map-placeholder">
                <div className="map-content">
                  <div className="location-pin">📍</div>
                  <div className="map-info">
                    <h4>Our Location</h4>
                    <p>San Francisco Design District</p>
                    <p>Creative Hub & Innovation Center</p>
                  </div>
                </div>
                <div className="map-overlay">
                  <span>Interactive Map</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            {!isSubmitted ? (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? 'error' : ''}
                      placeholder="John Doe"
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? 'error' : ''}
                      placeholder="john@example.com"
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Service Needed *</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={errors.service ? 'error' : ''}
                    >
                      <option value="">Select a service</option>
                      <option value="web-design">Web Design</option>
                      <option value="branding">Branding</option>
                      <option value="mobile-app">Mobile App</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="consulting">Consulting</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.service && <span className="error-message">{errors.service}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="budget">Project Budget</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="">Select budget range</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                    rows="6"
                  />
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>

                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <span className="send-icon">→</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="success-message">
                <div className="success-icon">✅</div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. We'll get back to you within 24 hours to discuss your project.</p>
                <button 
                  className="new-message-btn"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact