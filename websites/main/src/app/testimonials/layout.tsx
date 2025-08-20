import { Metadata } from "next";

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: "Customer Reviews & Testimonials | Roof Solutions Charlotte",
  description: "Read real customer reviews and testimonials for Roof Solutions Charlotte. See why Charlotte families and businesses trust us for roofing repairs, replacements, and emergency services.",
  keywords: ["roof solutions charlotte reviews", "charlotte roofer testimonials", "roofing customer reviews charlotte", "roof repair reviews charlotte nc"],
  openGraph: {
    title: "Customer Reviews & Testimonials | Roof Solutions Charlotte",
    description: "Read real customer reviews and testimonials for Roof Solutions Charlotte. See why Charlotte families and businesses trust us for roofing services.",
    type: "website",
  },
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}