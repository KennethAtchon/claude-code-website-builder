import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Summit Roofing Solutions - Denver's Premier Roofing Contractor | CO",
  description: "Denver's trusted roofing contractor since 2003. Expert roof repairs, replacements & emergency services. Free estimates, insurance claims assistance. Licensed & insured.",
  keywords: ["Denver roofing contractor", "roof repair Denver", "roof replacement Colorado", "emergency roof repair", "commercial roofing"],
  openGraph: {
    title: "Summit Roofing Solutions - Denver's Premier Roofing Contractor",
    description: "Denver's trusted roofing contractor since 2003. Expert roof repairs, replacements & emergency services.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=630&fit=crop&crop=entropy&auto=format",
        width: 1200,
        height: 630,
        alt: "Summit Roofing Solutions - Professional Roofing Services",
      },
    ],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
