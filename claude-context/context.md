# Ultimate Website Building Tool

## 🎯 PRIMARY MISSION
**Build complete, production-ready websites from user prompts and JSON specifications in `/prompt` directory.**

## 📋 EXECUTION WORKFLOW

### 1. Prompt Analysis
- **Read JSON prompts**: Analyze files in `/prompt` directory for project specifications
- **Extract requirements**: Business type, sections, styling, tech stack, content needs
- **Identify variables**: Look for `{{business_name}}`, `{{service_type}}`, `{{color_theme}}` placeholders
- **Plan architecture**: Determine optimal project structure and dependencies

### 2. Project Initialization
```bash
# Standard React + Vite + Tailwind setup
npm create vite@latest [project-name] --template react
cd [project-name]
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Optional: shadcn/ui for premium components
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card input select dialog
```

### 3. Required Project Structure
```
website/
├── public/
│   ├── favicon.ico
│   └── images/           # Placeholder images from Unsplash
├── src/
│   ├── components/       # Section components (Hero, About, Services, etc.)
│   │   ├── ui/          # shadcn/ui components (if used)
│   │   └── common/      # Reusable components (Navbar, Footer)
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Helper functions
│   ├── styles/          # Additional CSS files
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── tailwind.config.js
├── vite.config.js
└── package.json
```

### 4. Implementation Standards

#### Component Architecture
```javascript
// Standard component structure
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Component = ({ title, content, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animation or data loading logic
  }, []);

  return (
    <section className={`section-component ${className}`}>
      {/* Component content */}
    </section>
  );
};

Component.propTypes = {
  title: PropTypes.string.required,
  content: PropTypes.string,
  className: PropTypes.string
};

export default Component;
```

#### Required Sections (Based on JSON Prompts)
1. **Navbar**: Sticky navigation with logo and mobile menu
2. **Hero**: Full-width section with CTA and background image
3. **About**: Company story with team/workspace images
4. **Services**: Card-based service offerings grid
5. **Testimonials**: Customer reviews with glassmorphism effects
6. **Gallery**: Image grid showcasing work samples
7. **Contact**: Contact form with embedded map
8. **Footer**: Links, social media, company information

#### Tailwind CSS Implementation
```javascript
// Responsive design patterns
<div className="container mx-auto px-4 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      {/* Card content */}
    </div>
  </div>
</div>

// Mobile-first responsive text
<h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
<p className="text-sm md:text-base lg:text-lg">
```

### 5. Advanced Features Implementation

#### Animation & Interactions
```javascript
// Framer Motion integration
import { motion } from 'framer-motion';

const AnimatedSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="section-content"
  >
    {/* Animated content */}
  </motion.div>
);

// CSS-only hover effects
.card:hover {
  transform: translateY(-4px);
  transition: transform 0.3s ease;
}

// Glassmorphism effect
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

#### Image Handling
```javascript
// Use specified Unsplash placeholders
const PLACEHOLDER_IMAGES = {
  hero: 'https://unsplash.com/photos/J5feaur-y6I/download?w=1920',
  about: 'https://unsplash.com/photos/e080KjvQKGc/download?w=800',
  services: 'https://unsplash.com/photos/J5feaur-y6I/download?w=600',
  gallery: 'https://unsplash.com/photos/e080KjvQKGc/download?w=400'
};

// Responsive image component
const ResponsiveImage = ({ src, alt, className }) => (
  <img 
    src={src} 
    alt={alt} 
    className={`w-full h-auto object-cover ${className}`}
    loading="lazy"
  />
);
```

### 6. Performance Optimization

#### Code Splitting
```javascript
import { lazy, Suspense } from 'react';

const Gallery = lazy(() => import('./components/Gallery'));
const Contact = lazy(() => import('./components/Contact'));

// Wrap in Suspense with loading fallback
<Suspense fallback={<div>Loading...</div>}>
  <Gallery />
</Suspense>
```

#### Vite Configuration
```javascript
// vite.config.js optimization
export default {
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion']
  }
};
```

### 7. Content Management

#### Dynamic Content Integration
```javascript
// JSON-based content management
const content = {
  business_name: "{{business_name}}",
  service_type: "{{service_type}}",
  hero: {
    title: `Professional ${content.service_type} Services`,
    subtitle: `${content.business_name} - Your Trusted Local Partner`
  },
  services: [
    { name: "Service 1", description: "Description", image: PLACEHOLDER_IMAGES.services },
    { name: "Service 2", description: "Description", image: PLACEHOLDER_IMAGES.services }
  ]
};
```

#### Form Handling
```javascript
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', message: ''
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic (local storage or API)
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Form fields */}
    </form>
  );
};
```

### 8. Final Checklist

#### Pre-Launch Requirements
- [ ] All sections implemented per JSON specification
- [ ] Responsive design tested (mobile, tablet, desktop)
- [ ] Placeholder images properly integrated
- [ ] All animations and interactions working
- [ ] Contact form functional
- [ ] SEO meta tags added
- [ ] Performance optimized
- [ ] Cross-browser compatibility tested

#### Development Commands
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Code quality check
```

## 🚀 DEPLOYMENT READY

The website should be production-ready with:
- **Modern Design**: Clean, professional, mobile-first
- **High Performance**: Optimized loading, code splitting
- **User Experience**: Smooth animations, intuitive navigation
- **Business Focus**: Clear value proposition, strong CTAs
- **Technical Excellence**: Clean code, best practices, scalable architecture

Execute this workflow systematically to deliver exceptional websites that convert visitors into customers.