import { useState } from 'react'
import './Gallery.css'

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'web', name: 'Web Design' },
    { id: 'branding', name: 'Branding' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'print', name: 'Print Design' }
  ]

  const portfolioItems = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'Modern shopping experience with seamless checkout',
      image: 'ecommerce',
      tags: ['React', 'Node.js', 'Stripe']
    },
    {
      id: 2,
      title: 'Brand Identity Suite',
      category: 'branding',
      description: 'Complete visual identity for tech startup',
      image: 'branding',
      tags: ['Logo Design', 'Brand Guidelines', 'Typography']
    },
    {
      id: 3,
      title: 'Fitness Tracking App',
      category: 'mobile',
      description: 'iOS and Android app for personal training',
      image: 'mobile',
      tags: ['React Native', 'Firebase', 'Health API']
    },
    {
      id: 4,
      title: 'Corporate Website',
      category: 'web',
      description: 'Professional site for consulting firm',
      image: 'corporate',
      tags: ['WordPress', 'Custom Theme', 'SEO']
    },
    {
      id: 5,
      title: 'Restaurant Identity',
      category: 'branding',
      description: 'Warm and inviting brand for local eatery',
      image: 'restaurant',
      tags: ['Logo', 'Menu Design', 'Signage']
    },
    {
      id: 6,
      title: 'Banking App Interface',
      category: 'mobile',
      description: 'Secure and intuitive financial dashboard',
      image: 'banking',
      tags: ['Flutter', 'Security', 'UX Design']
    },
    {
      id: 7,
      title: 'Event Poster Series',
      category: 'print',
      description: 'Eye-catching posters for music festival',
      image: 'posters',
      tags: ['Print Design', 'Typography', 'Illustration']
    },
    {
      id: 8,
      title: 'Portfolio Website',
      category: 'web',
      description: 'Creative showcase for photographer',
      image: 'portfolio',
      tags: ['Vue.js', 'Gallery', 'Lightbox']
    },
    {
      id: 9,
      title: 'Product Packaging',
      category: 'print',
      description: 'Sustainable packaging for eco-friendly brand',
      image: 'packaging',
      tags: ['Package Design', 'Sustainability', '3D Mockups']
    }
  ]

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory)

  const openModal = (item) => {
    setSelectedImage(item)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="gallery-header">
          <div className="section-badge">Our Portfolio</div>
          <h2 className="gallery-title">
            Creative Work That
            <span className="highlight"> Speaks Volumes</span>
          </h2>
          <p className="gallery-description">
            Explore our diverse portfolio showcasing successful projects across 
            various industries and creative disciplines.
          </p>
        </div>

        <div className="filter-tabs">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-tab ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`gallery-item ${index % 3 === 0 ? 'large' : 'regular'}`}
              onClick={() => openModal(item)}
            >
              <div className="item-image">
                <div className="image-placeholder">
                  <div className="placeholder-icon">
                    {item.category === 'web' && '💻'}
                    {item.category === 'branding' && '🎨'}
                    {item.category === 'mobile' && '📱'}
                    {item.category === 'print' && '🖨️'}
                  </div>
                  <span className="category-label">{item.category.toUpperCase()}</span>
                </div>
                <div className="image-overlay">
                  <div className="overlay-content">
                    <div className="view-icon">👁️</div>
                    <span className="view-text">View Project</span>
                  </div>
                </div>
              </div>
              
              <div className="item-info">
                <h3 className="item-title">{item.title}</h3>
                <p className="item-description">{item.description}</p>
                <div className="item-tags">
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-footer">
          <div className="stats-row">
            <div className="stat">
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">Industries Served</div>
            </div>
            <div className="stat">
              <div className="stat-number">15+</div>
              <div className="stat-label">Awards Won</div>
            </div>
          </div>
          
          <a href="#contact" className="view-more-cta">
            Start Your Project
            <span className="cta-arrow">→</span>
          </a>
        </div>
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            
            <div className="modal-image">
              <div className="modal-placeholder">
                <div className="modal-icon">
                  {selectedImage.category === 'web' && '💻'}
                  {selectedImage.category === 'branding' && '🎨'}
                  {selectedImage.category === 'mobile' && '📱'}
                  {selectedImage.category === 'print' && '🖨️'}
                </div>
                <span className="modal-category">{selectedImage.category.toUpperCase()}</span>
              </div>
            </div>
            
            <div className="modal-info">
              <div className="modal-category-badge">{selectedImage.category}</div>
              <h3 className="modal-title">{selectedImage.title}</h3>
              <p className="modal-description">{selectedImage.description}</p>
              
              <div className="modal-tags">
                {selectedImage.tags.map((tag, index) => (
                  <span key={index} className="modal-tag">{tag}</span>
                ))}
              </div>
              
              <div className="modal-actions">
                <button className="modal-btn primary">View Live Site</button>
                <button className="modal-btn secondary">Case Study</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery