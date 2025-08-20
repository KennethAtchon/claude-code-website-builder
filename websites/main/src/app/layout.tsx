import type { Metadata } from "next";
import { Roboto, Roboto_Slab } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '700', '900'],
});

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: "Roof Solutions Charlotte - 24/7 Emergency Roof Repair | Free Inspections Since 1980",
  description: "Professional roof repair in Charlotte, NC. 24/7 emergency service, free inspections, and guaranteed workmanship since 1980. Licensed & insured roofing contractor serving Charlotte metro. Call (704) 668-0707.",
  keywords: ["roof repair charlotte nc", "emergency roofing charlotte", "charlotte roofer", "roof inspection charlotte"],
  openGraph: {
    title: "Roof Solutions Charlotte - 24/7 Emergency Roof Repair",
    description: "Professional roof repair in Charlotte, NC. 24/7 emergency service, free inspections, and guaranteed workmanship since 1980.",
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
        className={`${roboto.className} ${robotoSlab.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
