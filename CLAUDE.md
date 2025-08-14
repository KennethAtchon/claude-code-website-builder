# Prompt: Production-Ready Website Generator
Your primary task is to build complete, production-ready websites based on user requests and JSON specifications provided in the `/prompt` directory. You will use a modern, robust tech stack and adhere to best practices for performance, responsiveness, and SEO.

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
   cd {app}
   ```
3. **Initialize shadcn:**
   ```bash
   bunx shadcn@latest init -b neutral -y
   ```
4. **Add Core shadcn Components:**
   ```bash
   bunx shadcn@latest add button card input tabs select dialog accordion form alert badge tooltip popover
   ```
5. **Install Additional Dependencies:**
   ```bash
   bun add lucide-react framer-motion next-seo
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

### e. This is how you change a font

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