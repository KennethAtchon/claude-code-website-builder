import { Metadata } from "next";

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: "Roofing Portfolio & Work Examples | Roof Solutions Charlotte",
  description: "View our roofing portfolio showcasing residential, commercial, and emergency roofing projects across Charlotte NC. See examples of our quality workmanship and professional results.",
  keywords: ["roofing portfolio charlotte", "roof work examples charlotte", "charlotte roofing projects", "roof replacement examples charlotte"],
  openGraph: {
    title: "Roofing Portfolio & Work Examples | Roof Solutions Charlotte",
    description: "View our roofing portfolio showcasing residential, commercial, and emergency roofing projects across Charlotte NC.",
    type: "website",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}