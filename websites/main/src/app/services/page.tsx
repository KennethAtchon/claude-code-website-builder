import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesGrid from "@/components/sections/ServicesGrid";

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Premium Roofing Services - Skyline Roof Masters",
  description: "Exclusive roofing services crafted to the highest standards with premium materials and expert craftsmanship",
  keywords: ["luxury residential roofing", "commercial roofing", "roof restoration", "custom architectural roofing"],
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        {/* Services Hero */}
        <HeroSection
          title="Exclusive Roofing Services"
          content="Crafted to the highest standards with premium materials and expert craftsmanship"
          ctaLabel="Request Custom Quote"
          ctaLink="/quote"
          imageUrl="https://images.unsplash.com/photo-1582407947304-fd86f028f716"
        />

        {/* Service Categories */}
        <section className="py-20 bg-light-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Luxury Residential */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                    alt="Luxury Residential Roofing"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-1/60 to-transparent" />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-dark-1 mb-4">Luxury Residential</h2>
                  <p className="text-dark-2 mb-6">Custom luxury roofing solutions, premium material selection, architectural design integration, and exclusive warranty programs</p>
                  <ul className="space-y-2 text-dark-2 mb-6">
                    <li>• Premium material selection</li>
                    <li>• Custom design integration</li>
                    <li>• Exclusive warranty programs</li>
                    <li>• Master craftsman installation</li>
                  </ul>
                  <a
                    href="/consultation"
                    className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Get Luxury Quote
                  </a>
                </div>
              </div>

              {/* Commercial Excellence */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
                    alt="Commercial Roofing"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-1/60 to-transparent" />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-dark-1 mb-4">Commercial Excellence</h2>
                  <p className="text-dark-2 mb-6">Advanced commercial roofing systems, large-scale project management, energy-efficient solutions, and 24/7 maintenance support</p>
                  <ul className="space-y-2 text-dark-2 mb-6">
                    <li>• Large-scale project management</li>
                    <li>• Energy-efficient solutions</li>
                    <li>• 24/7 maintenance support</li>
                    <li>• Advanced roofing systems</li>
                  </ul>
                  <a
                    href="/consultation"
                    className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Commercial Solutions
                  </a>
                </div>
              </div>

              {/* Restoration Mastery */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <img
                    src="https://images.unsplash.com/photo-1593062091239-7d1a90e91c4c"
                    alt="Roof Restoration"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-1/60 to-transparent" />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-dark-1 mb-4">Restoration Mastery</h2>
                  <p className="text-dark-2 mb-6">Historic roof restoration, premium material matching, structural reinforcement, and preservation techniques</p>
                  <ul className="space-y-2 text-dark-2 mb-6">
                    <li>• Historic preservation techniques</li>
                    <li>• Premium material matching</li>
                    <li>• Structural reinforcement</li>
                    <li>• Heritage compliance</li>
                  </ul>
                  <a
                    href="/consultation"
                    className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Restoration Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-to-br from-dark-1 to-dark-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-light-1 mb-6">
                Our Premium Process
              </h2>
              <p className="text-xl text-light-2 max-w-3xl mx-auto">
                From initial consultation to final installation, every step is crafted for excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Consultation", description: "Comprehensive assessment and custom solution design" },
                { step: "02", title: "Design", description: "Detailed planning with premium material selection" },
                { step: "03", title: "Installation", description: "Expert craftsmanship with precision techniques" },
                { step: "04", title: "Quality Assurance", description: "Thorough inspection and lifetime warranty" },
              ].map((item, index) => (
                <div key={item.step} className="text-center">
                  <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-light-1 mb-2">{item.title}</h3>
                  <p className="text-light-2 text-sm">{item.description}</p>
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