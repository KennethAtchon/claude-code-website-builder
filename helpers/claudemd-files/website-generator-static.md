# Prompt: Production-Ready Static Website Generator
Your primary task is to build complete, production-ready **STATIC** websites based on user requests and JSON specifications provided in the `/prompt` directory. You will use a modern, robust tech stack optimized for static generation and adhere to best practices for performance, responsiveness, and SEO.

## ⚠️ CRITICAL: Everything must be static - no server-side features, no API routes, no dynamic rendering

If you come across anything that could be a problem, don't hesitate to search the internet.

## 1. Technology Stack & Initial Setup
You will use **Next.js** with **TypeScript**, **Tailwind CSS**, and **shadcn** - configured for **STATIC EXPORT ONLY**.

### Setup Commands
For every new project, execute the following commands to set up the environment. Replace `{app}` with the project's name.

1. **Create Next.js App:**
   ```bash
   bunx create-next-app@latest {app} --typescript --no-eslint --app --src-dir --tailwind --import-alias="@/*" --turbopack
   ```
2. **IMPORTANT STEP: Navigate into Project Directory:**
   ```bash
   cd {app}
   ```
3. **Configure for Static Export (CRITICAL - Do this immediately):**
   ```bash
   cd {app} && echo 'import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;' > next.config.ts
   ```
4. **Initialize shadcn:**
   ```bash
   cd {app} && bunx shadcn@latest init -b neutral -y
   ```
5. **Add Core shadcn Components:**
   ```bash
   cd {app} && bunx --bun shadcn@latest add --all
   ```
6. **Install Additional Dependencies:**
   ```bash
   cd {app} && bun add lucide-react framer-motion
   ```

## 2. Static Project Structure
Adhere to the following project structure optimized for static generation. **NO API ROUTES ALLOWED**.

```jsx
my-static-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Root layout (server component)
│   │   ├── globals.css
│   │   ├── page.tsx              # Root page (server component with metadata)
│   │   ├── about/                # Static routes only
│   │   │   └── page.tsx          # Server component with metadata
│   │   ├── services/
│   │   │   └── page.tsx          # Server component with metadata
│   │   └── contact/
│   │       └── page.tsx          # Server component with metadata
│   ├── components/               # Reusable components
│   │   ├── ui/                   # shadcn components
│   │   ├── animations/           # Client components for animations
│   │   │   └── AnimatedSection.tsx
│   │   ├── Header.tsx            # Server component
│   │   ├── Footer.tsx            # Server component
│   │   └── sections/             # Page sections
│   └── public/                   # Static assets
│       ├── favicon.ico
│       ├── images/
│       └── robots.txt
└── netlify.toml                  # Static hosting config
```

## 3. Core Development Principles

### a. Responsive Design
All components and layouts must be fully responsive across all screen sizes (mobile, tablet, desktop). Use Tailwind CSS's responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`) to apply styles conditionally.

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

### d. Static Export Optimization

**MANDATORY Component Architecture:**

**Pages (app/*/page.tsx) - MUST be Server Components:**
```tsx
// ✅ CORRECT - Server Component for SEO
import { Metadata } from "next";

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Page Title",
  description: "Page description"
};

export default function PageName() {
  return <div>Static content with imported client components</div>;
}
```

**Interactive Components - MUST be Client Components:**
```tsx
// ✅ CORRECT - Client Component for interactivity  
"use client";
import { useState } from 'react';

export default function InteractiveComponent() {
  const [state, setState] = useState(0);
  return <button onClick={() => setState(state + 1)}>{state}</button>;
}
```

**Static Generation Rules:**
- Pages = Server components + `force-static` + `metadata`
- Interactive elements = Separate client components
- Import client components into server component pages
- NO API routes or server-side functionality
- ALWAYS test with `bun run build`

### e. Color System Implementation
Extract and implement colors from the JSON template's `styles.colors` array. Use Tailwind CSS v4's modern `@theme inline` approach with a simplified 8-color palette.

**Reading Colors from Template:**
The template provides a streamlined color palette array with 8 colors:
- `Primary`: Main brand color for buttons, links, and key elements
- `Primary Dark`: Darker variant for hover states and depth
- `Light 1, 2, 3`: Progressive light shades for backgrounds and subtle elements
- `Dark 1, 2, 3`: Progressive dark shades for text, borders, and accents

Replace whatevers currently in globals.css vars with the below vars and set the right colors
**Implementation in globals.css:**
```css
/* src/app/globals.css */
var(--light-1);
var(--light-2);
var(--light-3);
var(--dark-1);
var(--dark-2);
var(--dark-3);
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


**Static Generation Architecture**
- Pages are server components for SEO optimization
- Interactive elements are client components
- NO client-side routing dependencies

**Static Export Configuration (Already set in setup)**

```ts
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

**Testing Static Build**

ALWAYS test static generation with:
```bash
bun run build
```
This creates a static `out/` directory ready for deployment to any static host.

## 4. Static SEO Optimization
Use Next.js built-in metadata API for static generation:

```tsx
// Each page.tsx (server component)
import { Metadata } from "next";

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Page Title - Site Name",
  description: "Page description",
  keywords: ["keyword1", "keyword2", "keyword3"],
  authors: [{ name: "Author Name" }],
  openGraph: {
    title: "Page Title - Site Name", 
    description: "Page description",
    type: "website",
    images: ["/images/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Page Title - Site Name",
    description: "Page description",
    images: ["/images/og-image.jpg"],
  },
};

export default function PageName() {
  return (
    <div>
      {/* Page content */}
    </div>
  );
}
```

**Required Static SEO Files:**
- Create `robots.txt` in `/public/`
- Generate static sitemap in `/public/sitemap.xml`
- Descriptive `alt` tags on ALL images

## 5. Static Deployment

**Netlify Configuration**
Create `netlify.toml` in project root:

```toml
[build]
  publish = "out"
  command = "bun run build"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[build.environment]
  NODE_VERSION = "18"
```

**Build Verification**
Before deployment, ALWAYS run:
```bash
bun run build
```
Verify the `out/` directory contains all static files.
