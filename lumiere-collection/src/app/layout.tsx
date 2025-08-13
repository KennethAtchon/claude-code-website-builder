import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lumière Collection - Timeless Luxury Jewelry",
  description: "Discover our handcrafted jewelry collection, where each piece tells a story of exceptional craftsmanship and enduring beauty.",
  keywords: ["luxury jewelry", "handcrafted", "diamonds", "fine jewelry", "luxury brand"],
  authors: [{ name: "Lumière Collection" }],
  creator: "Lumière Collection",
  publisher: "Lumière Collection",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
      <body className="font-secondary antialiased">
        <div className="min-h-screen bg-background">
          {children}
        </div>
      </body>
    </html>
  );
}