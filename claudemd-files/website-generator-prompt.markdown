# Prompt: Production-Ready Website Generator
Your primary task is to build complete, production-ready websites based on user requests and JSON specifications provided in the `/prompt` directory. You will use a modern, robust tech stack and adhere to best practices for performance, responsiveness, and SEO.

If you come across anything that could be a problem, don't hesitate to search the internet.

## 1. Technology Stack & Initial Setup
You will use **Next.js** with **TypeScript**, **Tailwind CSS**, and **shadcn**.

### Setup Commands
For every new project, execute the following commands to set up the environment. Replace `{app}` with the project's name.


1. **Create Next.js App:**
   ```bash
   bunx create-next-app@latest {app} --typescript --no-eslint --app --src-dir --tailwind --import-alias="@/*" --turbopack
   ```
2. **IMPORTANT STEP: Navigate into Project Directory, BE IN THE RIGHT DIRECTORY:**
   ```bash
   cd {app} && `${command}`
   ```
3. **Initialize shadcn:**
   ```bash
  cd {app} && bunx ~bun shadcn@latest init -b slate -y
   ```
4. **Add Theme:**
   ```bash
   cd {app} && bunx shadcn@latest add https://tweakcn.com/r/themes/mono.json
   ```
5. **Add Core shadcn Components:**
   ```bash
   cd {app} && bunx shadcn@latest add button card input tabs select dialog accordion form alert badge tooltip popover
   ```
6. **Install Additional Dependencies:**
   ```bash
   cd {app} && bun add lucide-react framer-motion next-seo
   ```

## 2. Project Structure
Adhere to the following project structure. This organization separates concerns and promotes maintainability.

```jsx
my-nextjs-app/
├── src/
│   ├── app/
│   │   ├── api/                  # API routes
│   │   │   └── hello/
│   │   │       └── route.ts
│   │   ├── layout.tsx            # Root layout
│   │   ├── globals.css
│   │   ├── page.tsx              # Root page (homepage)
│   │   └── dashboard/            # Example of a nested route
│   │       ├── layout.tsx
│   │       └── page.tsx
│   ├── components/               # Reusable components (UI, custom logic)
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Button.tsx
│   └── public/                   # Static assets
│       ├── favicon.ico
│       └── images/
└── ... (config files)
```

## 3. Core Development Principles

### a. Responsive Design
All components and layouts must be fully responsive across all screen sizes (mobile, tablet, desktop). Use Tailwind CSS's responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`) to apply styles conditionally.

**Example: Responsive Card Component**

```tsx
// src/components/ResponsiveCard.tsx
"use client";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ResponsiveCardProps {
  title: string;
  description: string;
}

export default function ResponsiveCard({ title, description }: ResponsiveCardProps) {
  return (
    <Card className="w-full max-w-sm mx-auto md:max-w-md lg:max-w-lg hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl lg:text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm md:text-base lg:text-lg text-gray-700">{description}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full md:w-auto">Action</Button>
      </CardFooter>
    </Card>
  );
}
```

### b. Animation & Interactions
Use `framer-motion` for smooth, performant animations. Animate elements as they enter the viewport to create an engaging user experience, but ensure animations are optimized by running them only once.

**Example: Performance-Optimized Animated Section**

```tsx
// src/components/AnimatedSection.tsx
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
}

export default function AnimatedSection({ children }: AnimatedSectionProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} // Optimize: animate only once
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="section-content"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
```

### c. Image Handling
Utilize the built-in `next/image` component for automatic image optimization, lazy loading, and correct sizing across devices. This is critical for performance and Core Web Vitals.

**Example: Optimized Image Component**

```tsx
// src/components/ResponsiveImage.tsx
import Image from "next/image";

// Use high-quality but web-optimized source images
const PLACEHOLDER_IMAGES = {
  hero: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  // ... other placeholder images
};

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

function ResponsiveImage({ src, alt, className, priority = false }: ResponsiveImageProps) {
  return (
    <div className="relative w-full h-auto">
      <Image
        src={src}
        alt={alt}
        width={1920} // Intrinsic width of the source image
        height={1080} // Intrinsic height of the source image
        className={className}
        loading={priority ? "eager" : "lazy"} // Eager load for above-the-fold content
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}
```

And add this:

```tsx
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  }
  
};

export default nextConfig;

```

### d. Rendering Strategy (SSR, CSR, or Static)
**Option to Disable SSR Entirely**

To completely avoid SSR and rely on CSR, configure the Next.js application to use client-side rendering by default. This can be achieved by marking all pages and components as client-side with the "use client" directive or by using dynamic imports with SSR disabled.

### e. Color System Implementation
Extract and implement colors from the JSON template's `styles.colors` array. Use Tailwind CSS v4's modern `@theme inline` approach with a simplified 8-color palette.

**Reading Colors from Template:**
The template provides a streamlined color palette array with 8 colors:
- `Primary`: Main brand color for buttons, links, and key elements
- `Primary Dark`: Darker variant for hover states and depth
- `Light 1, 2, 3`: Progressive light shades for backgrounds and subtle elements
- `Dark 1, 2, 3`: Progressive dark shades for text, borders, and accents

**Auto-Generating Color Palette:**
If only a primary color is provided, use the color palette generator to create the complete 8-color palette:

```bash
# Run this command to generate the full color palette from a primary color
node ../color-palette-generator.js "#13EBF6"
```

The script will output a JSON array with all 8 colors that you can then use in your CSS variables. The generator creates harmonious variations while maintaining proper contrast ratios.

**Recommended Primary Colors:**
Choose from these professional, brand-friendly colors that work well across all industries:

```javascript
// Top 20 Primary Colors for Professional Websites
const recommendedColors = [
  "#4361EE", // Modern Blue - Tech, SaaS, Finance
  "#22C55E", // Success Green - Health, Eco, Growth
  "#EF4444", // Action Red - Food, Entertainment, Alerts
  "#8B5CF6", // Creative Purple - Design, Art, Luxury
  "#F59E0B", // Energy Orange - Sports, Energy, Youth
  "#06B6D4", // Trust Cyan - Medical, Clean Tech
  "#EC4899", // Bold Pink - Beauty, Fashion, Creative
  "#10B981", // Nature Green - Organic, Environment
  "#3B82F6", // Professional Blue - Corporate, Law
  "#F97316", // Warm Orange - Hospitality, Food
  "#8B5A2B", // Earth Brown - Crafts, Organic, Rustic
  "#DC2626", // Strong Red - Emergency, Important
  "#7C3AED", // Deep Purple - Luxury, Premium
  "#059669", // Fresh Green - Fresh, Natural, Health
  "#0EA5E9", // Sky Blue - Travel, Freedom, Open
  "#E11D48", // Rose Red - Love, Passion, Beauty
  "#7C2D12", // Coffee Brown - Coffee, Warmth, Comfort
  "#1E40AF", // Navy Blue - Professional, Trust, Stable
  "#9333EA", // Vibrant Purple - Innovation, Creative
  "#0D9488"  // Teal - Balance, Calm, Professional
];
```

Each color has been tested to ensure the generator produces professional, accessible color palettes suitable for modern web design.

**Implementation in globals.css:**
```css
/* src/app/globals.css */
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-light-1: var(--light-1);
  --color-light-2: var(--light-2);
  --color-light-3: var(--light-3);
  --color-dark-1: var(--dark-1);
  --color-dark-2: var(--dark-2);
  --color-dark-3: var(--dark-3);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
}

:root {
  --background: {{lightColor1}};
  --foreground: {{darkColor1}};
  --primary: {{primaryColor}};
  --primary-foreground: {{lightColor1}};
  --muted: {{lightColor2}};
  --muted-foreground: {{darkColor2}};
  --light-1: {{lightColor1}};
  --light-2: {{lightColor2}};
  --light-3: {{lightColor3}};
  --dark-1: {{darkColor1}};
  --dark-2: {{darkColor2}};
  --dark-3: {{darkColor3}};
  --border: {{lightColor3}};
  --input: {{lightColor3}};
  --ring: {{primaryColor}};
}

.dark {
  --background: {{darkColor1}};
  --foreground: {{lightColor1}};
  --primary: {{primaryColor}};
  --primary-foreground: {{darkColor1}};
  --muted: {{darkColor2}};
  --muted-foreground: {{lightColor2}};
  --border: {{darkColor2}};
  --input: {{darkColor2}};
  --ring: {{primaryColor}};
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

**Usage in Components:**
```tsx
// Primary actions using brand color
<Button className="bg-primary text-primary-foreground hover:bg-primary/90">
  Primary Action
</Button>
```

**Color Mixing Guidelines:**
Create visual interest through strategic contrast mixing:
- **Dark backgrounds with light text**: `bg-dark-1 text-light-1`, `bg-dark-2 text-light-2`
- **Light backgrounds with dark text**: `bg-light-2 text-dark-1`, `bg-light-3 text-dark-2`
- **Primary accent combinations**: `bg-primary text-light-1`, `text-primary bg-light-2`
- **Cross-contrast mixing**: `bg-light-1 text-dark-3`, `bg-dark-3 text-light-2`
- **Gradient-like progressions**: Mix adjacent shades like `bg-light-2 border-light-3 text-dark-1`
- **Depth through layering**: Use different dark/light levels for cards, overlays, and sections
- Always test contrast ratios for accessibility, but don't limit creativity

### f. Font Implementation

Don't put anything in globals.css for changing fonts
```tsx
import { Inter } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })
 
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  )
}
```


**Example: Client-Side Only Page**

```tsx
// src/app/page.tsx
"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import ResponsiveCard from "@/components/ResponsiveCard";

// Dynamically import components with SSR disabled
const ResponsiveImage = dynamic(() => import("@/components/ResponsiveImage"), { ssr: false });

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensure client-side rendering
  }, []);

  if (!isMounted) return null; // Prevent rendering until mounted

  return (
    <main className="container mx-auto p-4">
      <AnimatedSection>
        <ResponsiveCard
          title="Welcome to the Site"
          description="This is a fully client-side rendered page."
        />
        <ResponsiveImage
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          alt="Hero image"
          className="mt-4"
        />
      </AnimatedSection>
    </main>
  );
}
```

**Configuration for Disabling SSR**

To enforce CSR across the entire application, you can configure Next.js to disable SSR by setting `output: 'export'` in `next.config.js`. This generates a static site that runs entirely on the client side.

**Example: Next.js Configuration for Static Export**

```js
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Disables SSR, enabling static export for CSR
  reactStrictMode: true,
  images: {
    unoptimized: true, // Required for static export with next/image
  },
};

module.exports = nextConfig;
```

**Testing CSR Setup**

After configuring for CSR, test the application by running:
```bash
bun run build
bun run start
```
Verify that no SSR-related console errors appear and that the site renders correctly on the client side.

## 4. Final Requirement: SEO Optimization
All generated websites must be fully optimized for Search Engine Optimization (SEO).
  * **Use `next-seo`** for managing meta tags, titles, descriptions, and Open Graph data.
  * Ensure semantic HTML (e.g., `<main>`, `<section>`, `<nav>`, `<h1>`, `<h2>`).
  * Generate a `sitemap.xml` and `robots.txt`.
  * Ensure all images have descriptive `alt` tags.
  * Prioritize fast load times (LCP, FCP) and interactivity (FID). For CSR, ensure client-side JavaScript bundles are optimized and use `next/script` for deferred script loading if needed.