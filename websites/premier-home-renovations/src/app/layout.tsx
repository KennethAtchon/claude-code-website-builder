import type { Metadata } from "next";
import { Roboto, Playfair_Display } from "next/font/google";
import { DefaultSeo } from "next-seo";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Premier Home Renovations - Quality Home Improvement Services",
  description: "Transform your home with Premier Home Renovations. Professional home improvement services with quality craftsmanship and trusted results.",
  keywords: "home renovation, kitchen remodeling, bathroom renovation, home improvement, construction, New Jersey contractors",
  authors: [{ name: "Premier Home Renovations" }],
  creator: "Premier Home Renovations",
  publisher: "Premier Home Renovations",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Premier Home Renovations - Quality Home Improvement Services",
    description: "Transform your home with Premier Home Renovations. Professional home improvement services with quality craftsmanship and trusted results.",
    url: "https://premierhomerenovations.com",
    siteName: "Premier Home Renovations",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136",
        width: 1200,
        height: 630,
        alt: "Premier Home Renovations - Kitchen Remodeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premier Home Renovations - Quality Home Improvement Services",
    description: "Transform your home with Premier Home Renovations. Professional home improvement services with quality craftsmanship and trusted results.",
    images: ["https://images.unsplash.com/photo-1556909114-f6e7ad7d3136"],
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
        className={`${roboto.variable} ${playfairDisplay.variable} antialiased font-roboto`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
