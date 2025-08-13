import Navbar from "@/components/common/Navbar";
import Hero from "@/components/common/Hero";
import FeaturedCollections from "@/components/common/FeaturedCollections";
import BrandStory from "@/components/common/BrandStory";
import Testimonials from "@/components/common/Testimonials";
import Newsletter from "@/components/common/Newsletter";
import Footer from "@/components/common/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent text-black px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>
      
      <Navbar />
      
      <main id="main-content" role="main">
        <Hero />
        <FeaturedCollections />
        <BrandStory />
        <Testimonials />
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
}