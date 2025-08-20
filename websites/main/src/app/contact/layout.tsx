import { Metadata } from "next";

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: "Contact Roof Solutions Charlotte | Call (704) 668-0707 for Free Quote",
  description: "Contact Roof Solutions Charlotte for free roofing quotes, emergency service, or questions. Call (704) 668-0707 or fill out our contact form. Serving Charlotte metro area 24/7.",
  keywords: ["contact roof solutions charlotte", "charlotte roofer phone number", "roof repair quote charlotte", "emergency roofer charlotte nc"],
  openGraph: {
    title: "Contact Roof Solutions Charlotte | Call (704) 668-0707 for Free Quote",
    description: "Contact Roof Solutions Charlotte for free roofing quotes, emergency service, or questions. Available 24/7 for emergencies.",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}