"use client";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxSection from "@/components/ParallaxSection";
import { 
  Leaf, 
  TreePine, 
  Hammer, 
  Droplets, 
  CheckCircle,
  Clock,
  Shield,
  Award
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Leaf className="w-12 h-12" />,
      title: "Lawn Care",
      description: "Complete lawn maintenance including mowing, fertilization, weed control, and seasonal cleanup services.",
      features: [
        "Weekly/bi-weekly mowing",
        "Fertilization programs",
        "Weed and pest control", 
        "Seasonal cleanup",
        "Lawn aeration",
        "Overseeding services"
      ],
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
      pricing: "Starting at $75/visit"
    },
    {
      icon: <TreePine className="w-12 h-12" />,
      title: "Garden Design",
      description: "Custom garden design and installation with native plants, color schemes, and seasonal planning.",
      features: [
        "Custom design consultation",
        "Native plant selection",
        "Seasonal color planning",
        "Soil preparation",
        "Plant installation",
        "Maintenance plans"
      ],
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
      pricing: "Starting at $2,500"
    },
    {
      icon: <Hammer className="w-12 h-12" />,
      title: "Hardscaping",
      description: "Patios, walkways, retaining walls, and outdoor living spaces using quality materials and craftsmanship.",
      features: [
        "Patio construction",
        "Walkway installation",
        "Retaining walls",
        "Outdoor kitchens",
        "Fire pits & features",
        "Drainage solutions"
      ],
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
      pricing: "Starting at $5,000"
    },
    {
      icon: <Droplets className="w-12 h-12" />,
      title: "Irrigation Systems",
      description: "Efficient watering systems designed to keep your landscape healthy while conserving water.",
      features: [
        "Sprinkler system design",
        "Smart controller installation",
        "Drip irrigation",
        "System maintenance",
        "Water-efficient solutions",
        "Seasonal adjustments"
      ],
      image: "https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
      pricing: "Starting at $3,000"
    }
  ];

  const processSteps = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Consultation",
      description: "Free on-site consultation to assess your needs and discuss your vision."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Design & Quote",
      description: "Custom design proposal with detailed quote and timeline."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Installation",
      description: "Professional installation by our certified team with quality guarantee."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Maintenance",
      description: "Ongoing maintenance plans to keep your landscape looking its best."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <ParallaxSection
        backgroundUrl="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
        speed="medium"
        className="h-96 flex items-center justify-center"
      >
        <AnimatedSection className="text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-light-2">
            Comprehensive landscaping solutions for every outdoor space
          </p>
        </AnimatedSection>
      </ParallaxSection>

      {/* Services Grid */}
      <AnimatedSection className="py-20 bg-light-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-cols-2" : "lg:grid-cols-2"
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  {index === 0 ? (
                    // Overlapping images for Lawn Care service - matching example style
                    <div className="relative h-96">
                      {/* Main background image */}
                      <div className="absolute top-0 left-0 w-3/5 h-3/5 rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 60vw, 30vw"
                        />
                      </div>
                      {/* Overlapping image - same size */}
                      <div className="absolute bottom-0 right-0 w-3/5 h-3/5 rounded-lg overflow-hidden shadow-xl z-10">
                        <Image
                          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
                          alt="Professional lawn maintenance"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 60vw, 30vw"
                        />
                      </div>
                    </div>
                  ) : (
                    // Single image for other services
                    <div className="relative h-96 rounded-lg overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  )}
                </div>
                
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="text-primary mb-4">{service.icon}</div>
                  <h2 className="font-playfair text-3xl md:text-4xl font-bold text-dark-1 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-dark-2 mb-6">{service.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-dark-2">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-semibold text-primary">{service.pricing}</span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-primary hover:bg-primary/90">
                      <Link href="/contact">Get Quote</Link>
                    </Button>
                    <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                      <Link href="/portfolio">View Examples</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Process Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark-1 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-dark-2 max-w-3xl mx-auto">
              From initial consultation to ongoing maintenance, we ensure a smooth and professional experience every step of the way.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center border-light-3 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-light-2 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary">{step.icon}</div>
                  </div>
                  <h3 className="font-semibold text-xl text-dark-1 mb-3">{step.title}</h3>
                  <p className="text-dark-2">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-dark-1 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-light-2 mb-8 max-w-3xl mx-auto">
            Contact us today for a free consultation and quote. Let our experienced team transform your outdoor space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
              <Link href="/contact">Get Free Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-dark-1 bg-transparent">
              <Link href="tel:5551234567">Call (555) 123-4567</Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
}