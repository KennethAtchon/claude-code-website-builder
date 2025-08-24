import type { Metadata } from "next";

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Premium Consultation - Skyline Roof Masters", 
  description: "Experience our premium consultation service with master craftsmen who deliver personalized roofing solutions",
  keywords: ["roofing consultation", "premium consultation", "roofing assessment", "master craftsmen", "personalized solutions"],
};

export default function ConsultationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}