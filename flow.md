Build complete, production-ready websites from user prompts and JSON specifications in `/prompt`




First Nextjs

npx create-next-app@latest {app} --typescript --eslint --app --src-dir --tailwind --no-turbo --import-alias="@/*" --turbopack

cd {app}

npx shadcn@latest init -b neutral -y

npx shadcn@latest add button card input select dialog form alert badge tooltip popover
npm install lucide-react
npm install framer-motion next-seo


my-nextjs-app/
├── src/
│   ├── app/                    
│   │   ├── api/                
│   │   │   └── hello/          
│   │   │       └── route.ts    # TS API route
│   │   ├── layout.tsx          # Root layout
│   │   ├── globals.css          
│   │   ├── page.tsx            # Root page
│   │   └── dashboard/          
│   │       ├── layout.tsx
│   │       └── page.tsx
│   ├── components/             
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Button.tsx
│   └── public/                 
│       ├── favicon.ico
│       └── images/


Responsive please! Example:

```
// src/components/ResponsiveCard.jsx
"use client";

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ResponsiveCard({ title, description }) {
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


At the end, make sure everything SEO optimized

