import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "GreenScape Landscaping - Professional Landscaping Services",
  description: "Transform your outdoor space into a beautiful oasis. Professional landscaping services for residential and commercial properties with 25+ years of experience.",
  openGraph: {
    title: "GreenScape Landscaping - Professional Landscaping Services",
    description: "Transform your outdoor space into a beautiful oasis. Professional landscaping services for residential and commercial properties with 25+ years of experience.",
    type: "website",
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
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
