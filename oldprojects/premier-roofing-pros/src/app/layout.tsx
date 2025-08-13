import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Premier Roofing Pros - Austin's Trusted Roofing Contractor | TX",
  description: "Austin's premier roofing contractor since 2008. Expert roof repairs, installations & emergency services. Licensed, insured, and highly rated. Free estimates available.",
  keywords: [
    "Austin roofing contractor",
    "roof repair Austin TX", 
    "roof installation Texas",
    "emergency roof repair",
    "storm damage roofing",
    "licensed roofer Austin"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
