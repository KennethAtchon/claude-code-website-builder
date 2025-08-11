# Complete Website Development Guide

## Project Structure & Setup

### Modern Web Development Stack
**Recommended Primary Stack:**
- **Frontend**: React/Vue.js/Angular/Vanilla HTML+CSS+JS
- **Build Tool**: Vite (fast development), Webpack (enterprise)
- **Styling**: CSS3, Tailwind CSS, Sass/SCSS, or Styled Components
- **JavaScript**: Modern ES6+ features with TypeScript support
- **Package Manager**: npm, yarn, or pnpm

### Essential Project Files

#### 1. package.json Template
```json
{
  "name": "project-name",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    // Runtime dependencies
  },
  "devDependencies": {
    "vite": "^4.0.0"
    // Development dependencies
  }
}
```

#### 2. Basic HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Website Title</title>
  <link rel="stylesheet" href="./src/style.css">
</head>
<body>
  <div id="app"></div>
  <script type="module" src="./src/main.js"></script>
</body>
</html>
```

## Website Types & Templates

### 1. Static Portfolio Website
**Components Needed:**
- Header with navigation
- Hero section
- About section
- Projects/Portfolio gallery
- Skills section
- Contact form
- Footer

**Key Features:**
- Responsive design
- Smooth scrolling
- Image optimization
- Contact form functionality
- Social media links

### 2. Business Landing Page
**Components Needed:**
- Navigation header
- Hero with CTA
- Services/Features section
- Testimonials
- Pricing (if applicable)
- Contact information
- Footer

**Key Features:**
- Conversion optimization
- Mobile responsiveness
- Fast loading
- SEO optimization
- Analytics integration

### 3. E-commerce Website
**Components Needed:**
- Product catalog
- Shopping cart
- User authentication
- Payment integration (mock)
- Order management
- Search functionality

**Key Features:**
- Product filtering
- Responsive design
- Local storage for cart
- Form validation
- Image galleries

### 4. Blog/Content Website
**Components Needed:**
- Article listing
- Individual post pages
- Categories/tags
- Search functionality
- Comment system (mock)
- Author profiles

**Key Features:**
- Content management
- SEO optimization
- Social sharing
- Responsive typography
- Loading performance

## CSS Frameworks & Styling Options

### Tailwind CSS Setup
```json
// Add to package.json dependencies
"tailwindcss": "^3.0.0",
"autoprefixer": "^10.0.0",
"postcss": "^8.0.0"
```

### CSS Grid & Flexbox Patterns
```css
/* Modern layout patterns */
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### Responsive Design Breakpoints
```css
/* Mobile-first approach */
.responsive {
  /* Mobile styles */
}

@media (min-width: 768px) {
  /* Tablet styles */
}

@media (min-width: 1024px) {
  /* Desktop styles */
}
```

## JavaScript Functionality Patterns

### 1. DOM Manipulation
```javascript
// Modern DOM selection and manipulation
const elements = document.querySelectorAll('.interactive');
elements.forEach(el => {
  el.addEventListener('click', handleClick);
});
```

### 2. API Integration
```javascript
// Fetch API usage
async function fetchData(endpoint) {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API Error:', error);
  }
}
```

### 3. Form Handling
```javascript
// Form validation and submission
function handleFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  
  // Validation logic
  if (validateForm(data)) {
    submitForm(data);
  }
}
```

## React Development Patterns

### Component Structure
```javascript
// Functional component with hooks
import { useState, useEffect } from 'react';

function ComponentName({ props }) {
  const [state, setState] = useState(initialValue);
  
  useEffect(() => {
    // Side effects
  }, [dependencies]);
  
  return (
    <div>
      {/* JSX content */}
    </div>
  );
}
```

### State Management
```javascript
// Context for global state
const AppContext = React.createContext();

// Custom hooks
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) || initialValue;
  });
  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  
  return [value, setValue];
}
```

## Common Website Features Implementation

### 1. Navigation Menu
```javascript
// Mobile-responsive navigation
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="navbar">
      <div className="nav-brand">Logo</div>
      <button onClick={() => setIsOpen(!isOpen)}>
        Menu
      </button>
      <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
```

### 2. Image Gallery
```javascript
// Image gallery with modal
function Gallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);
  
  return (
    <div className="gallery">
      {images.map((img, index) => (
        <img
          key={index}
          src={img.thumbnail}
          alt={img.alt}
          onClick={() => setSelectedImage(img)}
        />
      ))}
      {selectedImage && (
        <Modal onClose={() => setSelectedImage(null)}>
          <img src={selectedImage.full} alt={selectedImage.alt} />
        </Modal>
      )}
    </div>
  );
}
```

### 3. Contact Form
```javascript
// Contact form with validation
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      // Submit form
      console.log('Form submitted:', formData);
    } else {
      setErrors(newErrors);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields with error handling */}
    </form>
  );
}
```

## Performance Optimization

### 1. Image Optimization
```html
<!-- Modern image formats -->
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.jpg" type="image/jpeg">
  <img src="image.jpg" alt="Description" loading="lazy">
</picture>
```

### 2. Code Splitting (React)
```javascript
// Lazy loading components
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
```

### 3. CSS Optimization
```css
/* Critical CSS inlining */
/* Above-the-fold styles */
.hero {
  /* Critical styles */
}

/* Non-critical styles loaded async */
```

## SEO & Accessibility

### Meta Tags Template
```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title | Website Name</title>
  <meta name="description" content="Page description">
  <meta name="keywords" content="relevant, keywords">
  
  <!-- Open Graph -->
  <meta property="og:title" content="Page Title">
  <meta property="og:description" content="Page description">
  <meta property="og:image" content="/og-image.jpg">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
</head>
```

### Accessibility Features
```html
<!-- Semantic HTML -->
<main>
  <section aria-labelledby="section-title">
    <h2 id="section-title">Section Title</h2>
  </section>
</main>

<!-- Keyboard navigation -->
<button aria-label="Close modal" tabindex="0">×</button>

<!-- Screen reader support -->
<img src="image.jpg" alt="Descriptive alt text">
```

## Deployment & Build Process

### Vite Configuration
```javascript
// vite.config.js
export default {
  build: {
    outDir: 'dist',
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    }
  }
};
```

### Production Build Commands
```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Common Issues & Solutions

### Local Development Specific
1. **Dependency conflicts**: Use proper version management and lockfiles
2. **Environment setup**: Use Node Version Manager (nvm) for consistent environments
3. **Database setup**: Use Docker for consistent database environments
4. **Cross-platform issues**: Use consistent path handling and scripts

### Performance Issues
1. **Large bundle sizes**: Implement code splitting and tree shaking
2. **Slow loading**: Optimize images, lazy load, and use CDNs
3. **Poor mobile performance**: Use responsive design and progressive enhancement
4. **Build times**: Optimize webpack/vite configuration and use caching

### Development Workflow
1. **Hot reload issues**: Configure development server properly
2. **Import errors**: Use absolute imports and proper TypeScript configuration
3. **CSS not loading**: Configure CSS loaders and PostCSS properly
4. **Testing issues**: Set up proper test environment configuration