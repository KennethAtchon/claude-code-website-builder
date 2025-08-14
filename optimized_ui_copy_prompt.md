# Prompt: Production-Ready Website UI Replication Generator

Your primary task is to **exactly replicate** website UIs based on provided website links, creating pixel-perfect, production-ready websites using modern web technologies.

## 1. Technology Stack & Initial Setup
You will use **Next.js** with **TypeScript**, **Tailwind CSS**, and **shadcn**.

### Setup Commands - FOLLOW THESE EXACTLY
For every new project, execute the following commands to set up the environment. Replace `{app}` with the project's name.

1. **Create Next.js App:**
   ```bash
   npx create-next-app@latest {app} --typescript --no-eslint --app --src-dir --tailwind --no-turbo --import-alias="@/*" --turbopack
   ```
2. **IMPORTANT: Navigate into Project Directory for each command:**
   ```bash
   cd {app} && `${command}`
   ```
3. **Initialize shadcn:**
   ```bash
   cd {app} && npx shadcn@latest init -b neutral -y
   ```
4. **Add Core shadcn Components:**
   ```bash
   cd {app} && npx shadcn@latest add button card input tabs select dialog accordion form alert badge tooltip popover
   ```
5. **Install Additional Dependencies:**
   ```bash
   cd {app} && npm install lucide-react framer-motion next-seo clsx tailwind-merge
   ```

## 2. UI Replication Methodology

### Step 1: Analyze the Target Website
When given a website link, systematically analyze:

1. **Layout Structure**: Header, navigation, main sections, sidebar, footer
2. **Typography**: Font families, sizes, weights, line heights, letter spacing
3. **Color Palette**: Extract exact hex codes for backgrounds, text, accents, borders
4. **Spacing**: Margins, padding, gaps between elements
5. **Component Patterns**: Buttons, cards, forms, modals, navigation patterns
6. **Responsive Behavior**: How elements adapt across screen sizes
7. **Animations/Interactions**: Hover states, transitions, micro-animations
8. **Images/Icons**: Placement, sizing, aspect ratios

### Step 2: Extract Design Tokens
Create a design system based on the target website:

```tsx
// src/lib/design-tokens.ts
export const designTokens = {
  colors: {
    primary: "#EXACT_HEX_COLOR",
    secondary: "#EXACT_HEX_COLOR",
    background: "#EXACT_HEX_COLOR",
    text: "#EXACT_HEX_COLOR",
    // Extract all colors from target site
  },
  fonts: {
    primary: "EXACT_FONT_FAMILY",
    secondary: "EXACT_FONT_FAMILY",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    // Match exact spacing from target site
  },
  borderRadius: {
    // Extract exact border radius values
  }
};
```

### Step 3: Pixel-Perfect Component Recreation
Create components that match the target website exactly:

```tsx
// Example: Recreating a specific button style
"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ReplicatedButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function ReplicatedButton({ 
  children, 
  variant = "primary", 
  size = "md",
  className 
}: ReplicatedButtonProps) {
  return (
    <Button
      className={cn(
        // Base styles matching target website
        "font-semibold transition-all duration-200",
        // Variant styles - match target exactly
        {
          "bg-[#EXACT_COLOR] text-white hover:bg-[#EXACT_HOVER_COLOR]": variant === "primary",
          "bg-transparent border-2 border-[#EXACT_COLOR]": variant === "outline",
        },
        // Size styles - match target exactly
        {
          "px-4 py-2 text-sm": size === "sm",
          "px-6 py-3 text-base": size === "md",
          "px-8 py-4 text-lg": size === "lg",
        },
        className
      )}
    >
      {children}
    </Button>
  );
}
```

## 3. Layout Replication Patterns

### Exact Header Recreation
```tsx
// src/components/ReplicatedHeader.tsx
"use client";
import Image from "next/image";
import Link from "next/link";

export function ReplicatedHeader() {
  return (
    <header className="w-full h-[EXACT_HEIGHT] bg-[EXACT_COLOR] border-b border-[EXACT_BORDER_COLOR]">
      <div className="max-w-[EXACT_MAX_WIDTH] mx-auto px-[EXACT_PADDING] flex items-center justify-between h-full">
        {/* Logo - match exact positioning and sizing */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png" // Use placeholder or extracted logo
            alt="Logo"
            width={EXACT_WIDTH}
            height={EXACT_HEIGHT}
            className="h-[EXACT_HEIGHT] w-auto"
          />
        </Link>

        {/* Navigation - match exact structure */}
        <nav className="hidden lg:flex items-center space-x-[EXACT_SPACING]">
          {/* Replicate exact navigation items */}
        </nav>

        {/* CTA Button - match exact styling */}
        <ReplicatedButton variant="primary" size="md">
          Exact Button Text
        </ReplicatedButton>
      </div>
    </header>
  );
}
```

### Section-by-Section Recreation
Break down the target website into sections and recreate each exactly:

```tsx
// src/components/sections/HeroSection.tsx
"use client";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-[EXACT_HEIGHT] bg-[EXACT_BACKGROUND] flex items-center">
      {/* Background elements - match positioning */}
      <div className="absolute inset-0 bg-gradient-to-r from-[EXACT_COLOR] to-[EXACT_COLOR] opacity-[EXACT_OPACITY]" />
      
      <div className="relative z-10 max-w-[EXACT_MAX_WIDTH] mx-auto px-[EXACT_PADDING] py-[EXACT_PADDING]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[EXACT_GAP] items-center">
          {/* Content column - match exact text styling */}
          <div className="space-y-[EXACT_SPACING]">
            <motion.h1 
              className="text-[EXACT_SIZE] font-[EXACT_WEIGHT] leading-[EXACT_LINE_HEIGHT] text-[EXACT_COLOR]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Exact Headline Text
            </motion.h1>
            
            <motion.p 
              className="text-[EXACT_SIZE] text-[EXACT_COLOR] leading-[EXACT_LINE_HEIGHT]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Exact paragraph text matching the target website
            </motion.p>
          </div>

          {/* Image/Visual column - match exact sizing and positioning */}
          <div className="relative">
            <Image
              src="EXACT_IMAGE_OR_PLACEHOLDER"
              alt="EXACT_ALT_TEXT"
              width={EXACT_WIDTH}
              height={EXACT_HEIGHT}
              className="w-full h-auto object-cover rounded-[EXACT_BORDER_RADIUS]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
```

## 4. Advanced Replication Techniques

### Color Extraction and Matching
```tsx
// src/lib/color-extractor.ts
// Use this approach to ensure exact color matching
export const extractedColors = {
  // Primary palette from target site
  brand: {
    primary: "#EXTRACTED_PRIMARY",
    secondary: "#EXTRACTED_SECONDARY",
    accent: "#EXTRACTED_ACCENT",
  },
  // Neutral palette
  gray: {
    50: "#EXTRACTED_GRAY_50",
    100: "#EXTRACTED_GRAY_100",
    // ... continue with exact grays
  },
  // Semantic colors
  success: "#EXTRACTED_SUCCESS",
  warning: "#EXTRACTED_WARNING",
  error: "#EXTRACTED_ERROR",
};
```

### Typography Matching
```tsx
// tailwind.config.js - Extend with exact fonts and sizes
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'primary': ['EXACT_FONT_NAME', 'fallback'],
        'secondary': ['EXACT_SECONDARY_FONT', 'fallback'],
      },
      fontSize: {
        'hero': ['EXACT_SIZE', { lineHeight: 'EXACT_LINE_HEIGHT' }],
        'subheading': ['EXACT_SIZE', { lineHeight: 'EXACT_LINE_HEIGHT' }],
      },
      letterSpacing: {
        'tight': 'EXACT_LETTER_SPACING',
        'wide': 'EXACT_LETTER_SPACING',
      }
    }
  }
}
```

### Responsive Breakpoint Matching
```tsx
// Match exact responsive behavior
const ResponsiveComponent = () => (
  <div className="
    // Mobile (match target's mobile design exactly)
    w-full p-4 text-sm
    // Tablet (match target's tablet breakpoint)
    md:w-[EXACT_WIDTH] md:p-[EXACT_PADDING] md:text-[EXACT_SIZE]
    // Desktop (match target's desktop layout)
    lg:w-[EXACT_WIDTH] lg:p-[EXACT_PADDING] lg:text-[EXACT_SIZE]
    // Large desktop (if target has this breakpoint)
    xl:w-[EXACT_WIDTH] xl:p-[EXACT_PADDING] xl:text-[EXACT_SIZE]
  ">
    Content matching target layout at each breakpoint
  </div>
);
```

## 5. Animation & Interaction Replication

### Match Exact Animation Timing and Easing
```tsx
"use client";
import { motion } from "framer-motion";

// Replicate exact animations from target site
export function AnimatedElement() {
  return (
    <motion.div
      initial={{ opacity: 0, y: EXACT_Y_OFFSET }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "EXACT_MARGIN" }}
      transition={{ 
        duration: EXACT_DURATION, 
        ease: "EXACT_EASING_FUNCTION",
        delay: EXACT_DELAY 
      }}
      whileHover={{ 
        scale: EXACT_SCALE,
        transition: { duration: EXACT_HOVER_DURATION }
      }}
    >
      Content
    </motion.div>
  );
}
```

## 6. Asset Management for Replication

### Image Placeholder Strategy
When replicating sites, use high-quality placeholder images that match:
- **Aspect ratios** of original images
- **Subject matter** (people, products, landscapes, etc.)
- **Color tones** that complement the design

```tsx
// src/lib/placeholder-images.ts
export const placeholderImages = {
  hero: "https://images.unsplash.com/photo-[ID]?w=1920&h=1080&fit=crop",
  team: "https://images.unsplash.com/photo-[ID]?w=400&h=400&fit=crop&face",
  product: "https://images.unsplash.com/photo-[ID]?w=800&h=600&fit=crop",
  // Match aspect ratios and content themes from target
};
```

## 7. Quality Assurance Checklist

Before considering the replication complete, verify:

- [ ] **Pixel-perfect layout** at all breakpoints (mobile, tablet, desktop)
- [ ] **Exact color matching** using browser dev tools color picker
- [ ] **Typography matching** (font, size, weight, line-height, letter-spacing)
- [ ] **Spacing accuracy** (margins, padding, gaps match exactly)
- [ ] **Animation timing** matches original site's feel
- [ ] **Interactive states** (hover, focus, active) replicate original behavior
- [ ] **Loading performance** meets or exceeds original site
- [ ] **Accessibility** maintains or improves upon original
- [ ] **SEO optimization** is implemented properly

## 8. SEO & Performance Optimization

Despite being a replication, ensure the new site is optimized:

```tsx
// src/app/layout.tsx
import { Metadata } from 'next';
import { DefaultSeo } from 'next-seo';

export const metadata: Metadata = {
  title: 'EXACT_SITE_TITLE',
  description: 'EXACT_META_DESCRIPTION',
  keywords: 'EXTRACTED_KEYWORDS',
  openGraph: {
    title: 'EXACT_OG_TITLE',
    description: 'EXACT_OG_DESCRIPTION',
    images: ['EXACT_OG_IMAGE_URL'],
  },
};
```

## 9. Final Deliverable Requirements

Your replication must include:

1. **Complete source code** with all components and pages
2. **Design token documentation** showing extracted colors, fonts, spacing
3. **Comparison screenshots** (original vs. replica)
4. **Performance audit results** showing Core Web Vitals
5. **Responsive testing results** across all major breakpoints
6. **Setup instructions** for running the replicated site

Remember: The goal is not just inspiration from the target website, but an **exact pixel-perfect replication** that could serve as a replacement or alternative implementation of the original design.