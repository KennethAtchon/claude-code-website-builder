Got it — here’s your prompt rewritten to use **Material UI (MUI v5)** instead of Tailwind + shadcn. Tight, opinionated, and production-ready.

---

# Prompt: Production-Ready Website Generator (Material UI Edition)

Your primary task is to build complete, production-ready websites based on user requests and JSON specs in `/prompt`. Use a modern stack and best practices for performance, responsiveness, and SEO.

## 1. Technology Stack & Initial Setup

Use **Next.js (App Router) + TypeScript + Material UI (MUI v5)**, **Framer Motion**, and **next-seo**.

### Setup Commands

For each new project, run (replace `{app}` with the project name):

1. **Create Next.js app**

```bash
npx create-next-app@latest {app} --typescript --eslint --app --src-dir --no-turbo --import-alias="@/*" --turbopack --no-tailwind
```

2. **Enter directory**

```bash
cd {app}
```

3. **Install Material UI + deps**

```bash
npm i @mui/material @mui/icons-material @emotion/react @emotion/styled @mui/lab
```

4. **Install utilities**

```bash
npm i framer-motion next-seo
```

5. **(Optional) Fonts via next/font**

```bash
npm i @fontsource/roboto
```

## 2. Project Structure

Keep concerns clean and components reusable.

```
my-nextjs-app/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── hello/route.ts
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── robots.ts               # SEO robots
│   │   ├── sitemap.ts              # SEO sitemap
│   │   └── dashboard/
│   │       ├── layout.tsx
│   │       └── page.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ResponsiveCard.tsx
│   │   └── AnimatedSection.tsx
│   ├── theme/
│   │   ├── index.ts                # createTheme + responsiveFontSizes
│   │   └── ThemeProvider.tsx       # App-level provider
│   └── public/
│       ├── favicon.ico
│       └── images/
└── ...
```

## 3. Core Development Principles

### a) Responsive Design (MUI-native)

Use **MUI breakpoints** and the `sx` prop. Prefer semantic components (`Container`, `Box`, `Grid`, `Typography`, `Button`, `Card`).

**Example: Responsive Card**

```tsx
// src/components/ResponsiveCard.tsx
"use client";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface ResponsiveCardProps {
  title: string;
  description: string;
}

export default function ResponsiveCard({ title, description }: ResponsiveCardProps) {
  return (
    <Card
      elevation={3}
      sx={{
        mx: "auto",
        width: "100%",
        maxWidth: { xs: 360, md: 600, lg: 720 },
        transition: "box-shadow .2s",
        "&:hover": { boxShadow: 8 },
      }}
    >
      <CardHeader
        titleTypographyProps={{ variant: { xs: "h6", md: "h5", lg: "h4" } as any }}
        title={title}
      />
      <CardContent>
        <Typography variant="body2" sx={{ fontSize: { xs: 14, md: 16, lg: 18 }, color: "text.secondary" }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 2 }}>
        <Button fullWidth variant="contained" sx={{ width: { md: "auto" } }}>
          Action
        </Button>
      </CardActions>
    </Card>
  );
}
```

### b) Animation & Interactions

Use **Framer Motion** with MUI’s `Box`. Animate once on enter for perf.

```tsx
// src/components/AnimatedSection.tsx
"use client";
import { motion, AnimatePresence } from "framer-motion";
import Box from "@mui/material/Box";
import { ReactNode } from "react";

interface AnimatedSectionProps { children: ReactNode; }

export default function AnimatedSection({ children }: AnimatedSectionProps) {
  return (
    <AnimatePresence>
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </Box>
    </AnimatePresence>
  );
}
```

### c) Image Handling

Continue using `next/image` for optimization, lazy loading, and sizing.

```tsx
// src/components/ResponsiveImage.tsx
import Image from "next/image";

interface ResponsiveImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  style?: React.CSSProperties;
}

export default function ResponsiveImage({ src, alt, priority = false, style }: ResponsiveImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1920}
      height={1080}
      loading={priority ? "eager" : "lazy"}
      priority={priority}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      style={{ width: "100%", height: "auto", ...style }}
    />
  );
}
```

### d) Theming (Global, Dark Mode-ready)

Centralize theme for consistent spacing, palette, and typography.

```tsx
// src/theme/index.ts
"use client";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#0ea5e9" }, // opinionated, accessible default
    secondary: { main: "#7c3aed" },
  },
  shape: { borderRadius: 16 },
  typography: { fontFamily: ["Roboto", "system-ui", "Arial"].join(",") },
});
theme = responsiveFontSizes(theme);

export default theme;
```

```tsx
// src/theme/ThemeProvider.tsx
"use client";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./index";

export default function AppThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
```

```tsx
// src/app/layout.tsx
import AppThemeProvider from "@/theme/ThemeProvider";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "App", description: "Production-ready site" };

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

## 4. Final Requirement: SEO Optimization

* Use **`next-seo`** for titles, descriptions, Open Graph.
* Semantic HTML: `<main>`, `<section>`, `<nav>`, proper headings.
* Generate **`sitemap.ts`** and **`robots.ts`** in `app/` (App Router).
* Descriptive `alt` on all images.
* Hit Core Web Vitals: fast LCP/FCP, low CLS, responsive hydration.

**Example: next-seo config**

```tsx
// src/app/page.tsx
import { NextSeo } from "next-seo";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Page() {
  return (
    <main>
      <NextSeo
        title="Home — Site"
        description="Production-ready Next.js + MUI"
        openGraph={{ title: "Home — Site", description: "Production-ready Next.js + MUI" }}
      />
      <Container sx={{ py: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Hello, world.
        </Typography>
      </Container>
    </main>
  );
}
```
