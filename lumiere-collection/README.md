# Lumière Collection - Luxury Jewelry Website

A modern, responsive luxury jewelry website built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- **Luxury Design**: Elegant, minimal design with sophisticated typography and animations
- **Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Lazy loading, image optimization, and code splitting
- **Accessible**: WCAG 2.1 AA compliant with proper ARIA labels and keyboard navigation
- **SEO Ready**: Structured data, meta tags, sitemap, and robots.txt
- **Modern Stack**: Next.js 15, TypeScript, Tailwind CSS, Framer Motion

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   ├── globals.css      # Global styles
│   ├── sitemap.ts       # SEO sitemap
│   └── manifest.ts      # PWA manifest
├── components/
│   ├── ui/              # shadcn/ui components
│   └── common/          # Reusable components
├── lib/                 # Utilities
└── types/               # TypeScript types
```

## Components

- **Navbar**: Minimal luxury navigation with scroll effects
- **Hero**: Fullscreen video background with CTAs
- **FeaturedCollections**: Responsive grid of jewelry collections
- **BrandStory**: Split layout with brand information
- **Testimonials**: Carousel with customer reviews
- **Newsletter**: Email subscription with form validation
- **Footer**: Comprehensive footer with links and contact info

## Performance Features

- **Image Optimization**: Next.js Image component with WebP support
- **Lazy Loading**: Below-the-fold components loaded on demand
- **Code Splitting**: Dynamic imports for better bundle size
- **Font Optimization**: Google Fonts with display: swap
- **SEO**: Meta tags, structured data, and sitemap

## Accessibility

- ARIA labels and landmarks
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- High contrast support
- Skip-to-content links

## Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint
- `npm run type-check`: TypeScript type checking

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React

## License

Copyright © 2024 Lumière Collection. All rights reserved.