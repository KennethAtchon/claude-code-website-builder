import { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "B.E.T. Plumbing LLC - Professional Plumbing Services Pittsburgh",
  description: "Professional plumbing services you can trust. Brandon Tolkacevic and the B.E.T. Plumbing team serve Pittsburgh and Allegheny County with fast, reliable repairs and installations. Available 24/7 on weekends.",
};

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
