import { Metadata } from "next";

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: "About Roof Solutions Charlotte | 40+ Years Roofing Experience Since 1980",
  description: "Learn about Roof Solutions Charlotte - family-owned roofing company serving Charlotte since 1980. 40+ years experience, 24/7 emergency service, and guaranteed workmanship.",
  keywords: ["roof solutions charlotte about", "charlotte roofer since 1980", "family owned roofing charlotte", "experienced roofer charlotte nc"],
  openGraph: {
    title: "About Roof Solutions Charlotte | 40+ Years Roofing Experience Since 1980",
    description: "Learn about Roof Solutions Charlotte - family-owned roofing company serving Charlotte since 1980. 40+ years experience, 24/7 emergency service, and guaranteed workmanship.",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}