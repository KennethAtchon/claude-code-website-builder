import Navbar from "@/components/common/Navbar";
import Hero from "@/components/common/Hero";
import FeaturedCollections from "@/components/common/FeaturedCollections";
import About from "@/components/common/About";
import LuxuryServices from "@/components/common/LuxuryServices";
import Testimonials from "@/components/common/Testimonials";
import Contact from "@/components/common/Contact";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedCollections />
      <About />
      <LuxuryServices />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
