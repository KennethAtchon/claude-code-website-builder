import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Premium Project Portfolio - Skyline Roof Masters",
  description: "Showcasing our premium craftsmanship through exceptional roofing projects and architectural transformations",
  keywords: ["roofing portfolio", "luxury roofing projects", "commercial roofing showcase", "award-winning roofing"],
};

export default function PortfolioPage() {
  const projects = [
    {
      title: "Luxury Mountain Estate",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      description: "Custom slate and copper roofing system for a 12,000 sq ft mountain estate",
      details: ["Premium Welsh slate", "Hand-soldered copper details", "Solar integration", "Smart monitoring system"]
    },
    {
      title: "Corporate Headquarters",
      category: "Commercial", 
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      description: "Large-scale commercial roofing with energy-efficient EPDM system",
      details: ["50,000 sq ft coverage", "Energy-efficient EPDM", "Green roof sections", "25-year warranty"]
    },
    {
      title: "Historic Downtown Restoration",
      category: "Restoration",
      image: "https://images.unsplash.com/photo-1593062091239-7d1a90e91c4c",
      description: "Heritage building restoration with period-accurate materials",
      details: ["Clay tile restoration", "Heritage compliance", "Structural reinforcement", "Weather sealing"]
    },
    {
      title: "Modern Architectural Marvel",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716",
      description: "Contemporary home featuring innovative roofing design",
      details: ["Standing seam metal", "Geometric design", "Integrated lighting", "Smart ventilation"]
    },
    {
      title: "Industrial Complex",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
      description: "Multi-building industrial roofing system with advanced drainage",
      details: ["TPO membrane system", "Advanced drainage", "Fall protection", "Maintenance access"]
    },
    {
      title: "Eco-Luxury Residence",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1556156653-e5a7c83a09cb",
      description: "Sustainable luxury home with integrated solar and living roof",
      details: ["Living roof system", "Integrated solar", "Rainwater harvesting", "LEED Platinum"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        {/* Portfolio Hero */}
        <HeroSection
          title="Premium Craftsmanship Portfolio"
          content="Showcasing exceptional roofing projects and architectural transformations"
          ctaLabel="View Complete Portfolio"
          ctaLink="#gallery"
          imageUrl="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3"
        />

        {/* Portfolio Gallery */}
        <section className="py-20 bg-light-1" id="gallery">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-dark-1 mb-6">Featured Projects</h2>
              <p className="text-xl text-dark-2 max-w-3xl mx-auto">
                Each project represents our commitment to excellence, innovation, and premium craftsmanship
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={project.title} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-1/60 via-transparent to-transparent" />
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-dark-1 mb-3">{project.title}</h3>
                    <p className="text-dark-2 mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {project.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center text-sm text-dark-2">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                          {detail}
                        </div>
                      ))}
                    </div>
                    
                    <button className="w-full bg-light-2 hover:bg-primary hover:text-primary-foreground text-dark-1 font-semibold py-3 px-6 rounded-lg transition-colors">
                      View Project Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-20 bg-gradient-to-br from-dark-1 to-dark-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-light-1 mb-6">Awards & Recognition</h2>
              <p className="text-xl text-light-2">Our projects have received industry recognition for excellence</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🏆</span>
                </div>
                <h3 className="text-xl font-semibold text-light-1 mb-2">Best Commercial Project 2024</h3>
                <p className="text-light-2">National Roofing Contractors Association</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-silver-500 rounded-full flex items-center justify-center mx-auto mb-6 bg-gray-400">
                  <span className="text-3xl">🥈</span>
                </div>
                <h3 className="text-xl font-semibold text-light-1 mb-2">Innovation Award 2023</h3>
                <p className="text-light-2">Roofing Technology Institute</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-bronze-500 rounded-full flex items-center justify-center mx-auto mb-6 bg-amber-600">
                  <span className="text-3xl">🥉</span>
                </div>
                <h3 className="text-xl font-semibold text-light-1 mb-2">Sustainability Excellence 2023</h3>
                <p className="text-light-2">Green Building Council</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Create Your Premium Project?</h2>
            <p className="text-xl text-white/90 mb-8">Join our portfolio of exceptional roofing transformations</p>
            <a
              href="/consultation"
              className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold text-lg rounded-lg hover:bg-white/90 transition-colors"
            >
              Start Your Project
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}