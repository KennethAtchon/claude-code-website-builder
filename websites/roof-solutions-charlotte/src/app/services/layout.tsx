import { Metadata } from "next";

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: "Professional Roofing Services Charlotte NC | Roof Solutions Charlotte",
  description: "Complete roofing services in Charlotte NC including emergency repairs, free inspections, roof replacements, storm damage repair, and commercial roofing. Licensed & insured since 1980.",
  keywords: ["roofing services charlotte nc", "roof repair charlotte", "emergency roofing charlotte", "commercial roofing charlotte", "roof replacement charlotte"],
  openGraph: {
    title: "Professional Roofing Services Charlotte NC | Roof Solutions Charlotte",
    description: "Complete roofing services in Charlotte NC including emergency repairs, free inspections, roof replacements, storm damage repair, and commercial roofing.",
    type: "website",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}