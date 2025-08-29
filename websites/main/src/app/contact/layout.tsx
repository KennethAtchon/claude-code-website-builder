import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact B.E.T. Plumbing LLC - Pittsburgh Plumbers | Free Estimates",
  description: "Contact B.E.T. Plumbing LLC for professional plumbing services in Pittsburgh and Allegheny County. Call (412) 733-6355 for 24/7 emergency service or request a free estimate online.",
  keywords: ["contact plumber Pittsburgh", "plumbing estimate", "emergency plumbing Pittsburgh", "(412) 733-6355", "B.E.T. Plumbing contact"],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}