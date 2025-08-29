import type { Metadata } from "next";
import { Merriweather, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-heading",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "B.E.T. Plumbing LLC - Professional Plumbing Services Pittsburgh",
  description: "Professional plumbing services you can trust. Brandon Tolkacevic and B.E.T. Plumbing serve Pittsburgh and Allegheny County with 24/7 emergency service, water heater installation, drain cleaning, and more.",
  keywords: ["plumbing", "Pittsburgh", "water heater", "drain cleaning", "emergency plumbing", "Allegheny County", "pipe repair", "bathroom remodel"],
  authors: [{ name: "B.E.T. Plumbing LLC" }],
  openGraph: {
    title: "B.E.T. Plumbing LLC - Professional Plumbing Services Pittsburgh",
    description: "Professional plumbing services you can trust. 24/7 emergency service, water heater installation, drain cleaning, and more in Pittsburgh and Allegheny County.",
    type: "website",
    locale: "en_US",
    siteName: "B.E.T. Plumbing LLC",
  },
  twitter: {
    card: "summary_large_image",
    title: "B.E.T. Plumbing LLC - Professional Plumbing Services Pittsburgh",
    description: "Professional plumbing services you can trust. 24/7 emergency service in Pittsburgh and Allegheny County.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${merriweather.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
