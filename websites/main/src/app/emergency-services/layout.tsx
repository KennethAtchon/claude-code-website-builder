import { Metadata } from "next";

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: "24/7 Emergency Roof Repair Charlotte | 4-Hour Response Time Guaranteed",
  description: "Emergency roof repair in Charlotte NC available 24/7. We respond within 4 hours for immediate leak repair, storm damage, and emergency tarping. Call (704) 668-0707 now!",
  keywords: ["emergency roof repair charlotte", "24 hour roofer charlotte", "emergency roofing charlotte nc", "roof leak repair charlotte", "storm damage repair charlotte"],
  openGraph: {
    title: "24/7 Emergency Roof Repair Charlotte | 4-Hour Response Time Guaranteed",
    description: "Emergency roof repair in Charlotte NC available 24/7. We respond within 4 hours for immediate leak repair, storm damage, and emergency tarping.",
    type: "website",
  },
};

export default function EmergencyServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}