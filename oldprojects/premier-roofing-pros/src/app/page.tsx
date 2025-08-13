import Navbar from "@/components/common/Navbar";
import Hero from "@/components/common/Hero";
import Services from "@/components/common/Services";
import About from "@/components/common/About";
import Portfolio from "@/components/common/Portfolio";
import Testimonials from "@/components/common/Testimonials";
import Contact from "@/components/common/Contact";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
