# Ultimate Website Building Tool – **Next.js + Tailwind + shadcn/ui**

## 🎯 PRIMARY MISSION

**Build complete, production-ready websites from user prompts and JSON specifications in `/prompt` directory using Next.js and shadcn/ui. Ensure high quality by incorporating best practices for performance, accessibility, SEO, security, and maintainability.**

---

## 📋 EXECUTION WORKFLOW

### 1. Prompt Analysis

* **Read JSON prompts**: Analyze files in `/prompt` directory for project specifications.
* **Extract requirements**: Business type, sections, styling, tech stack, content needs, accessibility features (e.g., ARIA attributes), SEO keywords, and performance goals.
* **Identify variables**: Look for `{{business_name}}`, `{{service_type}}`, `{{color_theme}}` placeholders and ensure they are sanitized for security.
* **Plan architecture**: Determine optimal project structure, Next.js routing strategy (App Router), dependencies, and scalability. Include plans for error handling, testing, and CI/CD integration.

---

### 2. Project Initialization

```bash
# Next.js + Tailwind setup (use latest stable versions)
npx create-next-app@latest [project-name] --typescript --eslint --app --src-dir
cd [project-name]

# Install Tailwind CSS (v4+ method for optimal performance)
npm add -D tailwindcss postcss autoprefixer

# Initialize Tailwind config
npx tailwindcss init -p

# Install shadcn/ui for premium, accessible components and Lucide icons
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card input select dialog form alert badge tooltip popover
npm install lucide-react clsx tailwind-merge # Additional utils for class management

# Install essential libraries for animations, forms, and optimization
npm install framer-motion react-hook-form @hookform/resolvers zod next-seo
npm add -D @testing-library/react @testing-library/jest-dom jest ts-jest
```

#### **CRITICAL: Tailwind v4 Configuration for Next.js**

**1. Update `tailwind.config.ts` for theme extensions and plugins:**
```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--primary))", // Use CSS variables for theming
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};

export default config;
```

**2. Import Tailwind in `src/app/globals.css`:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**3. Import globals.css and set up RootLayout in `src/app/layout.tsx` with accessibility in mind:**
```tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "{{business_name}} - {{service_type}}",
  description: "High-quality {{service_type}} services from {{business_name}}.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
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
│   ├── robots.txt       # For SEO
│   └── images/           # Optimized images (use WebP format)
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx    # Root layout with global providers
│   │   ├── page.tsx      # Home page
│   │   ├── components/   # Reusable components
│   │   │   ├── ui/       # shadcn/ui components (accessible by default)
│   │   │   └── common/   # Navbar, Footer, ErrorBoundary
│   │   ├── hooks/        # Custom hooks (e.g., useMediaQuery)
│   │   ├── lib/          # Utilities and constants
│   │   ├── types/        # TypeScript interfaces
│   │   └── (routes)/     # Dynamic routes/pages
│   ├── tests/            # Unit and integration tests
├── tailwind.config.ts
├── next.config.mjs
├── tsconfig.json
├── jest.config.js
└── package.json
```

---

### 4. Implementation Standards

#### Component Architecture (with TypeScript, Accessibility, and Error Handling)

```tsx
"use client";
import { useState, useEffect, FC } from "react";
import { Star, Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils"; // Use cn from shadcn for class merging

interface ComponentProps {
  title: string;
  content?: string;
  className?: string;
}

const Component: FC<ComponentProps> = ({ title, content, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      // Animation or data loading logic
      setIsVisible(true);
    } catch (err) {
      setError("Failed to load component");
    }
  }, []);

  if (error) return <div role="alert" className="text-red-500">{error}</div>;

  return (
    <section className={cn("section-component", className)} aria-labelledby="section-title">
      <div className="flex items-center gap-2">
        <Star className="w-5 h-5 text-yellow-500" aria-hidden="true" />
        <h2 id="section-title">{title}</h2>
        <ArrowRight className="w-4 h-4" aria-hidden="true" />
      </div>
      {/* Component content with semantic HTML */}
    </section>
  );
};

export default Component;
```

#### Required Sections (Based on JSON Prompts, with Accessibility and SEO Focus)

1. **Navbar** – Sticky, accessible navigation with logo, mobile menu (hamburger with ARIA), and skip-to-content link.
2. **Hero** – Full-width, optimized gradient/image with CTA button (keyboard-focusable).
3. **About** – Company story with alt-text images and structured headings.
4. **Services** – Responsive card grid with hover/focus states.
5. **Testimonials** – Accessible carousel or grid with glassmorphism.
6. **Gallery** – Lazy-loaded images with captions and lightbox.
7. **Contact** – Validated form (using react-hook-form + Zod) with CAPTCHA integration, embedded map (iframe with title).
8. **Footer** – Links, social icons (with ARIA labels), copyright info.

---

#### Tailwind CSS Implementation (Mobile-First, Responsive)

```tsx
<div className="container mx-auto px-4 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg focus:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-primary">
      {/* Card content */}
    </div>
  </div>
</div>

<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
<p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
```

---

### 5. Advanced Features Implementation

#### Animation & Interactions (Performance-Optimized)

```tsx
"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function AnimatedSection() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} // Optimize: animate only once
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="section-content"
      >
        {/* Animated content */}
      </motion.div>
    </AnimatePresence>
  );
}
```

**Glassmorphism Example (with Fallback for Older Browsers)**

```css
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  @supports not (backdrop-filter: blur(10px)) {
    background: rgba(255, 255, 255, 0.3); /* Fallback */
  }
}
```

#### Image Handling (Optimized with Next.js Image)

```tsx
import Image from "next/image";

const PLACEHOLDER_IMAGES = {
  hero: "https://unsplash.it/1920/1080", // Use optimized sources
  // ... others
};

function ResponsiveImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1920}
      height={1080}
      className={className}
      loading="lazy"
      priority={false} // Use priority for above-the-fold
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
}
```

---

### 6. Performance Optimization

#### Next.js Code Splitting and Caching

```tsx
import dynamic from "next/dynamic";

const Gallery = dynamic(() => import("./components/Gallery"), { ssr: false, loading: () => <div aria-live="polite">Loading Gallery...</div> });
```

#### Next Config Optimizations

```mjs
// next.config.mjs
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "unsplash.it"],
    formats: ["image/avif", "image/webp"], // Modern formats
  },
  experimental: {
    optimizeFonts: true,
  },
  swcMinify: true, // Faster minification
};

export default nextConfig;
```

#### Additional Optimizations
- Use ISR (Incremental Static Regeneration) for static pages: `export const revalidate = 3600;` in page.tsx.
- Implement lazy loading for below-the-fold sections.
- Bundle analysis: Add `npm add -D @next/bundle-analyzer` and run with `ANALYZE=true npm run build`.
- Accessibility testing: Integrate axe-core for automated checks.

---

### 7. Content Management

#### JSON-Based Content (with Validation)

Use Zod for schema validation:

```tsx
import { z } from "zod";

const ContentSchema = z.object({
  business_name: z.string(),
  service_type: z.string(),
  hero: z.object({
    title: z.string(),
    subtitle: z.string(),
  }),
  services: z.array(z.object({
    name: z.string(),
    description: z.string(),
    image: z.string(),
  })),
});

const content = ContentSchema.parse(jsonData); // Validate at runtime
```

---

### 8. Final Checklist

#### Pre-Launch

* [ ] All sections implemented per JSON spec with semantic HTML.
* [ ] Responsive design tested on multiple devices/browsers.
* [ ] Placeholder images optimized and integrated.
* [ ] Animations performant (no jank on mobile).
* [ ] Contact form functional, validated, and secure (e.g., rate limiting).
* [ ] SEO: Meta tags, sitemap.xml, robots.txt added; use next-seo.
* [ ] Performance: Lighthouse score >90 (accessibility, best practices, SEO, performance).
* [ ] Accessibility: WCAG 2.1 AA compliant; test with screen readers.
* [ ] Security: No inline scripts; use CSP headers if needed.
* [ ] Tests: Unit tests for components; integration tests for forms.
* [ ] Error handling: Global error boundary.

#### Dev Commands

```bash
npm run dev     # Development server
npm run build   # Production build
npm run start   # Start production server
npm run lint    # Run ESLint
npm run test    # Run Jest tests
npm run format  # Run Prettier (add husky for pre-commit)
```

---

## 🚀 DEPLOYMENT READY

The website should be:

* **Modern** – Clean, mobile-first, accessible design.
* **Fast** – Optimized assets, Next.js SSR/ISR/SSG, CDN-ready.
* **Interactive** – Smooth animations, intuitive nav with keyboard support.
* **Conversion-focused** – Clear value props, strong CTAs, A/B testable.
* **Secure & Maintainable** – Validated inputs, typed code, automated tests.

---

If you want, I can now **generate the Next.js + Tailwind + shadcn/ui boilerplate code** so you can run this AutoParts project immediately. That way you skip the setup and jump into styling and content.