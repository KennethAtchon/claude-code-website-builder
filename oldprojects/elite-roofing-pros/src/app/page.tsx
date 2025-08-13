import Navbar from "@/components/common/Navbar";
import Hero from "@/components/common/Hero";
import About from "@/components/common/About";
import Services from "@/components/common/Services";
import Testimonials from "@/components/common/Testimonials";
import Contact from "@/components/common/Contact";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
