# Prompt: Production-Ready Website Generator (HeroUI Edition)

Your task: build complete, production-ready websites based on user requests and JSON specs in `/prompt`, using HeroUI’s modern component set and best practices for performance, responsiveness, and SEO.

## 1. Technology Stack & Initial Setup

Use **Next.js (App Router) + TypeScript + HeroUI (NextUI v2)**, **Framer Motion**, and **next-seo**.

### Setup Commands

```bash
# 1) Create Next.js app
npx create-next-app@latest {app} --typescript --eslint --app --src-dir --no-turbo --import-alias="@/*" --turbopack

cd {app}

# 2) Install HeroUI (NextUI v2)
npm i @heroui/react framer-motion

# 3) Install SEO utilities
npm i next-seo
```

## 2. Project Structure

Follow a maintainable, modular layout:

```
my-nextjs-app/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── hello/route.ts
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   └── dashboard/
│   │       ├── layout.tsx
│   │       └── page.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ResponsiveCard.tsx
│   │   ├── AnimatedSection.tsx
│   │   └── ResponsiveImage.tsx
│   ├── theme/
│   │   ├── index.ts
│   │   └── ThemeProvider.tsx
│   └── public/
│       ├── favicon.ico
│       └── images/
└── ...
```

## 3. Core Development Principles

### a) Responsive Design

HeroUI has responsive props and Tailwind-like utility integration built in. You can apply breakpoints directly in `className` or `css`.

**Example: Responsive Card**

```tsx
// src/components/ResponsiveCard.tsx
"use client";

import { Card, CardHeader, CardBody, CardFooter, Button } from "@heroui/react";

interface ResponsiveCardProps {
  title: string;
  description: string;
}

export default function ResponsiveCard({ title, description }: ResponsiveCardProps) {
  return (
    <Card
      className="max-w-sm mx-auto md:max-w-md lg:max-w-lg transition-shadow hover:shadow-lg"
      shadow="sm"
    >
      <CardHeader className="text-lg md:text-xl lg:text-2xl font-bold">
        {title}
      </CardHeader>
      <CardBody>
        <p className="text-sm md:text-base lg:text-lg text-default-500">{description}</p>
      </CardBody>
      <CardFooter>
        <Button fullWidth className="md:w-auto">
          Action
        </Button>
      </CardFooter>
    </Card>
  );
}
```

### b) Animation & Interactions

HeroUI components work seamlessly with **Framer Motion**.

```tsx
// src/components/AnimatedSection.tsx
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps { children: ReactNode; }

export default function AnimatedSection({ children }: AnimatedSectionProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
```

### c) Image Handling

Still use `next/image` for performance.

```tsx
// src/components/ResponsiveImage.tsx
import Image from "next/image";

interface ResponsiveImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}

export default function ResponsiveImage({ src, alt, priority = false, className }: ResponsiveImageProps) {
  return (
    <div className={`relative w-full h-auto ${className || ""}`}>
      <Image
        src={src}
        alt={alt}
        width={1920}
        height={1080}
        loading={priority ? "eager" : "lazy"}
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="rounded-lg"
      />
    </div>
  );
}
```

### d) Theming

HeroUI uses a **theme config** you can extend.

```tsx
// src/theme/index.ts
import { createTheme } from "@heroui/react";

export const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      primary: "#0ea5e9",
      secondary: "#7c3aed",
    },
    radii: { md: "0.75rem" },
  },
});
```

```tsx
// src/theme/ThemeProvider.tsx
"use client";
import { NextUIProvider } from "@heroui/react";
import { lightTheme } from "./index";

export default function AppThemeProvider({ children }: { children: React.ReactNode }) {
  return <NextUIProvider theme={lightTheme}>{children}</NextUIProvider>;
}
```

```tsx
// src/app/layout.tsx
import AppThemeProvider from "@/theme/ThemeProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppThemeProvider>{children}</AppThemeProvider>
      </body>
    </html>
  );
}
```

## 4. SEO Optimization

* Use **`next-seo`** for meta, Open Graph, Twitter cards.
* Semantic HTML: `<main>`, `<section>`, `<nav>`, `<h1>`, etc.
* Generate `sitemap.ts` and `robots.ts`.
* All images must have descriptive `alt` tags.
* Optimize Core Web Vitals (LCP, FCP, CLS).

**Example: SEO config**

```tsx
// src/app/page.tsx
import { NextSeo } from "next-seo";
import { Container, Text } from "@heroui/react";

export default function Page() {
  return (
    <main>
      <NextSeo
        title="Home — Site"
        description="Production-ready Next.js + HeroUI"
        openGraph={{ title: "Home — Site", description: "Production-ready Next.js + HeroUI" }}
      />
      <Container className="py-6">
        <Text h1>Hello, world.</Text>
      </Container>
    </main>
  );
}
```