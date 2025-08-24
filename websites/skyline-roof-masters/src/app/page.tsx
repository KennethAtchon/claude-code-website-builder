import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesGrid from "@/components/sections/ServicesGrid";
import FeaturesSection from "@/components/sections/FeaturesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Skyline Roof Masters - Premium Roofing Solutions",
  description: "Premium roofing specialists delivering exceptional craftsmanship and innovative solutions for residential and commercial properties across the region",
  keywords: ["premium roofing", "residential roofing", "commercial roofing", "roof installation", "roofing contractors", "innovative roofing"],
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <HeroSection
          title="Premium Roofing Solutions Crafted with Precision"
          content="Transform your property with our award-winning expertise and premium materials."
          ctaLabel="Schedule Premium Consultation"
          ctaLink="/consultation"
          imageUrl="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3"
        />

        {/* Premium Services */}
        <ServicesGrid
          title="Premium Services"
          content="Exclusive roofing services including luxury residential roofing, commercial roofing solutions, roof restoration, and custom architectural roofing"
          ctaLabel="Explore Premium Services"
          ctaLink="/services"
          imageUrl="https://images.unsplash.com/photo-1582407947304-fd86f028f716"
        />

        {/* Innovation Showcase */}
        <FeaturesSection
          title="Innovation Showcase"
          content="Cutting-edge materials, advanced installation techniques, energy-efficient solutions, smart roofing technology integration, and sustainable practices"
          ctaLabel="Discover Innovation"
          ctaLink="/technology"
          imageUrl="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
        />

        {/* Client Success Stories */}
        <TestimonialsSection
          title="Client Success Stories"
          content="Premium testimonials from satisfied clients showcasing exceptional craftsmanship and outstanding service delivery"
          ctaLabel="Read More Success Stories"
          ctaLink="/testimonials"
          imageUrl="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
        />

        {/* Premium Consultation CTA */}
        <CTASection
          title="Ready for a Premium Roofing Experience?"
          content="Schedule your exclusive consultation with our master craftsmen"
          ctaLabel="Book Premium Consultation"
          ctaLink="/consultation"
          imageUrl="https://images.unsplash.com/photo-1556156653-e5a7c83a09cb"
        />
      </main>

      <Footer />
    </div>
  );
}
