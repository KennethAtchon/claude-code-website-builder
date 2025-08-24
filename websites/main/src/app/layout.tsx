import type { Metadata } from "next";
import { Montserrat, Merriweather } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Skyline Roof Masters - Premium Roofing Solutions",
  description: "Premium roofing specialists delivering exceptional craftsmanship and innovative solutions for residential and commercial properties across the region",
  keywords: ["roofing", "premium roofing", "residential roofing", "commercial roofing", "roof installation", "roof repair", "roofing contractors"],
  authors: [{ name: "Skyline Roof Masters" }],
  openGraph: {
    title: "Skyline Roof Masters - Premium Roofing Solutions",
    description: "Premium roofing specialists delivering exceptional craftsmanship and innovative solutions for residential and commercial properties across the region",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skyline Roof Masters - Premium Roofing Solutions",
    description: "Premium roofing specialists delivering exceptional craftsmanship and innovative solutions for residential and commercial properties across the region",
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
        className={`${montserrat.variable} ${merriweather.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
