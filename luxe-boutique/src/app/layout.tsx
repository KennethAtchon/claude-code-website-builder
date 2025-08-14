import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Luxe Boutique - Elevate Your Style | Luxury Fashion & Accessories",
  description: "Discover curated luxury collections for the discerning individual. Authentic luxury pieces with exceptional customer service. Shop handbags, jewelry, and designer apparel.",
  keywords: "luxury fashion, designer handbags, premium jewelry, luxury boutique, Madison Avenue, authentic designer pieces",
  authors: [{ name: "Luxe Boutique" }],
  openGraph: {
    title: "Luxe Boutique - Elevate Your Style",
    description: "Discover curated luxury collections for the discerning individual",
    url: "https://luxeboutique.com",
    siteName: "Luxe Boutique",
    images: [
      {
        url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Luxe Boutique - Luxury Fashion Collections",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxe Boutique - Elevate Your Style",
    description: "Discover curated luxury collections for the discerning individual",
    images: ["https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
