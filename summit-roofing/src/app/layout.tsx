import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import { DefaultSeo } from "next-seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Summit Roofing Solutions - Professional Roofing Services",
  description: "Professional roofing solutions for residential and commercial properties. Licensed, insured, and committed to quality workmanship.",
  keywords: "roofing, roof repair, roof installation, roof replacement, emergency roofing, commercial roofing, residential roofing",
  authors: [{ name: "Summit Roofing Solutions" }],
  openGraph: {
    title: "Summit Roofing Solutions - Professional Roofing Services",
    description: "Professional roofing solutions for residential and commercial properties. Licensed, insured, and committed to quality workmanship.",
    url: "https://summitroofingsolutions.com",
    siteName: "Summit Roofing Solutions",
    images: [
      {
        url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64",
        width: 1200,
        height: 630,
        alt: "Professional roofing services by Summit Roofing Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Summit Roofing Solutions - Professional Roofing Services",
    description: "Professional roofing solutions for residential and commercial properties. Licensed, insured, and committed to quality workmanship.",
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64"],
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
        className={`${inter.variable} ${roboto.variable} antialiased`}
        style={{ fontFamily: "var(--font-inter)" }}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
