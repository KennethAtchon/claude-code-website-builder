Here’s your doc refactored to **Next.js + Tailwind + shadcn/ui** while keeping the same concepts and structure.
I also adapted the file tree, commands, and optimization notes to match Next.js conventions.

---

# Ultimate Website Building Tool – **Next.js + Tailwind + shadcn/ui**

## 🎯 PRIMARY MISSION

**Build complete, production-ready websites from user prompts and JSON specifications in `/prompt` directory using Next.js and shadcn/ui.**

---

## 📋 EXECUTION WORKFLOW

### 1. Prompt Analysis

* **Read JSON prompts**: Analyze files in `/prompt` directory for project specifications
* **Extract requirements**: Business type, sections, styling, tech stack, content needs
* **Identify variables**: Look for `{{business_name}}`, `{{service_type}}`, `{{color_theme}}` placeholders
* **Plan architecture**: Determine optimal project structure, Next.js routing strategy, and dependencies

---

### 2. Project Initialization

```bash
# Next.js + Tailwind setup
npx create-next-app@latest [project-name] --typescript --eslint
cd [project-name]

# Install Tailwind CSS (v4 method)
npm add -D tailwindcss @tailwindcss/postcss

# Install shadcn/ui for premium components
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card input select dialog
```

#### **CRITICAL: Tailwind v4 Configuration for Next.js**

**1. Add PostCSS plugin to `postcss.config.mjs`:**
```js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

**2. Import Tailwind in `app/globals.css`:**
```css
@import 'tailwindcss';
```

**3. Import globals.css in `app/layout.tsx`:**
```tsx
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

---

### 3. Required Project Structure

```
website/
├── public/
│   ├── favicon.ico
│   └── images/           # Placeholder images from Unsplash
├── app/                  # Next.js 13+ App Router
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   ├── components/       # Section components (Hero, About, Services, etc.)
│   │   ├── ui/           # shadcn/ui components
│   │   └── common/       # Navbar, Footer, shared UI
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Helper functions
│   ├── styles/           # Additional CSS files
│   └── (routes)/         # Additional pages
├── tailwind.config.js
├── next.config.js
└── package.json
```

---

### 4. Implementation Standards

#### Component Architecture

```tsx
"use client";
import { useState, useEffect } from "react";

interface ComponentProps {
  title: string;
  content?: string;
  className?: string;
}

export default function Component({ title, content, className = "" }: ComponentProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animation or data loading logic
  }, []);

  return (
    <section className={`section-component ${className}`}>
      {/* Component content */}
    </section>
  );
}
```

---

#### Required Sections (Based on JSON Prompts)

1. **Navbar** – Sticky navigation with logo and mobile menu
2. **Hero** – Full-width gradient/image with CTA
3. **About** – Company story with images
4. **Services** – Card-based offerings grid
5. **Testimonials** – Glassmorphism reviews
6. **Gallery** – Image showcase
7. **Contact** – Form + embedded map
8. **Footer** – Links, social icons, info

---

#### Tailwind CSS Implementation

```tsx
<div className="container mx-auto px-4 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      {/* Card content */}
    </div>
  </div>
</div>

<h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
<p className="text-sm md:text-base lg:text-lg">
```

---

### 5. Advanced Features Implementation

#### Animation & Interactions

```tsx
"use client";
import { motion } from "framer-motion";

export default function AnimatedSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="section-content"
    >
      {/* Animated content */}
    </motion.div>
  );
}
```

**Glassmorphism Example**

```css
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

---

#### Image Handling

```tsx
const PLACEHOLDER_IMAGES = {
  hero: "https://unsplash.com/photos/J5feaur-y6I/download?w=1920",
  about: "https://unsplash.com/photos/e080KjvQKGc/download?w=800",
  services: "https://unsplash.com/photos/J5feaur-y6I/download?w=600",
  gallery: "https://unsplash.com/photos/e080KjvQKGc/download?w=400"
};

function ResponsiveImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <img src={src} alt={alt} className={`w-full h-auto object-cover ${className}`} loading="lazy" />
  );
}
```

---

### 6. Performance Optimization

#### Next.js Code Splitting

```tsx
import dynamic from "next/dynamic";

const Gallery = dynamic(() => import("./components/Gallery"), { ssr: false, loading: () => <div>Loading...</div> });
```

#### Next Config Optimizations

```js
// next.config.js
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"]
  }
};
```

---

### 7. Content Management

#### JSON-Based Content

```tsx
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

---

### 8. Final Checklist

#### Pre-Launch

* [ ] All sections implemented per JSON spec
* [ ] Responsive design tested
* [ ] Placeholder images integrated
* [ ] Animations working
* [ ] Contact form functional
* [ ] SEO meta tags added
* [ ] Performance optimized

#### Dev Commands

```bash
npm run dev
npm run build
npm run start
npm run lint
```

---

## 🚀 DEPLOYMENT READY

The website should be:

* **Modern** – clean, mobile-first
* **Fast** – optimized assets, Next.js SSR/ISR
* **Interactive** – smooth animations, intuitive nav
* **Conversion-focused** – clear value, strong CTAs

---

If you want, I can now **generate the Next.js + Tailwind + shadcn/ui boilerplate code** so you can run this AutoParts project immediately. That way you skip the setup and jump into styling and content.
