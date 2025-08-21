import type { Metadata } from "next";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '600', '700'],
})

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
        className={`${montserrat.className} ${sourceSans3.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
