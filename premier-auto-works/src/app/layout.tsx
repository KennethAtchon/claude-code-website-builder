import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Premier Auto Works - Professional Car Repair Services",
  description: "Expert automotive repair services in your area. Quality repairs, honest pricing, and reliable service you can trust.",
  openGraph: {
    title: "Premier Auto Works - Professional Car Repair Services",
    description: "Expert automotive repair services in your area. Quality repairs, honest pricing, and reliable service you can trust.",
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
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
