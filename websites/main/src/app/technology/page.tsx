import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Roofing Technology & Innovation - Skyline Roof Masters",
  description: "Leading the future of roofing with cutting-edge technology and sustainable innovation",
  keywords: ["smart roofing", "roofing technology", "sustainable roofing", "energy efficient roofing", "IoT roofing"],
};

export default function TechnologyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        {/* Innovation Hero */}
        <HeroSection
          title="Leading the Future of Roofing"
          content="Cutting-edge technology and sustainable innovation"
          ctaLabel="Explore Technology"
          ctaLink="#innovation"
          imageUrl="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
        />

        {/* Advanced Materials */}
        <section className="py-20 bg-light-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-dark-1 mb-6">Advanced Materials</h2>
                <p className="text-xl text-dark-2 mb-8">
                  Premium materials including advanced composites, sustainable options, energy-efficient solutions, and cutting-edge protective coatings
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Advanced Composites",
                    "Sustainable Options", 
                    "Energy-Efficient Solutions",
                    "Protective Coatings"
                  ].map((material) => (
                    <div key={material} className="bg-white p-6 rounded-xl shadow-md">
                      <h3 className="font-semibold text-dark-1 mb-2">{material}</h3>
                      <p className="text-dark-2 text-sm">Premium quality materials engineered for superior performance</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa"
                  alt="Advanced Materials"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Smart Roofing */}
        <FeaturesSection
          title="Smart Roofing Solutions"
          content="IoT integration, weather monitoring systems, energy optimization, and predictive maintenance technology"
          ctaLabel="Smart Solutions"
          ctaLink="#smart"
          imageUrl="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
        />

        {/* Sustainability */}
        <section className="py-20 bg-light-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-dark-1 mb-6">
                Sustainability Commitment
              </h2>
              <p className="text-xl text-dark-2 max-w-3xl mx-auto">
                Eco-friendly materials, energy-efficient installations, waste reduction practices, and LEED certification support
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-xl font-semibold text-dark-1 mb-4">Eco-Friendly Materials</h3>
                <p className="text-dark-2">Sustainable and recyclable materials that reduce environmental impact</p>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-dark-1 mb-4">Energy Efficiency</h3>
                <p className="text-dark-2">Advanced systems that optimize energy consumption and reduce costs</p>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-xl font-semibold text-dark-1 mb-4">LEED Certified</h3>
                <p className="text-dark-2">Supporting LEED certification with sustainable building practices</p>
              </div>
            </div>
          </div>
        </section>

        {/* Innovation Timeline */}
        <section className="py-20 bg-gradient-to-br from-dark-1 to-dark-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-light-1 mb-6">Innovation Timeline</h2>
              <p className="text-xl text-light-2">Our journey in roofing technology advancement</p>
            </div>

            <div className="space-y-8">
              {[
                { year: "2024", title: "AI-Powered Roof Analysis", description: "Advanced drone technology with AI analysis for precise roof assessment" },
                { year: "2023", title: "Smart Weather Integration", description: "IoT sensors providing real-time weather monitoring and alerts" },
                { year: "2022", title: "Energy Optimization Systems", description: "Smart roofing systems that optimize energy consumption" },
                { year: "2021", title: "Sustainable Materials Program", description: "Introduction of eco-friendly and recyclable roofing materials" },
              ].map((item, index) => (
                <div key={item.year} className="flex items-center space-x-8">
                  <div className="flex-shrink-0 w-24 h-24 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{item.year}</span>
                  </div>
                  <div className="flex-grow bg-dark-2/50 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-light-1 mb-2">{item.title}</h3>
                    <p className="text-light-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}