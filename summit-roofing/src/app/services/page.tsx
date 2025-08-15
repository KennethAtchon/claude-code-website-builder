"use client";
import { NextSeo } from "next-seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight, Check, Clock, Shield, Award } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Roof Installation",
      description: "Complete new roof installation with premium materials and expert craftsmanship for lasting protection.",
      icon: "🏠",
      features: [
        "Premium shingle selection",
        "Professional installation",
        "Structural assessment",
        "Cleanup included",
        "Warranty protection"
      ],
      startingPrice: "$8,500",
      duration: "2-4 days"
    },
    {
      title: "Roof Repair",
      description: "Quick and reliable repairs to fix leaks, damaged shingles, and structural issues before they worsen.",
      icon: "🔧",
      features: [
        "Leak detection & repair",
        "Shingle replacement",
        "Flashing repair",
        "Gutter maintenance",
        "Emergency patching"
      ],
      startingPrice: "$350",
      duration: "Same day"
    },
    {
      title: "Roof Replacement",
      description: "Full roof replacement services for aging or severely damaged roofing systems with modern materials.",
      icon: "🏗️",
      features: [
        "Complete tear-off",
        "Deck inspection",
        "New underlayment",
        "Premium materials",
        "Extended warranty"
      ],
      startingPrice: "$12,500",
      duration: "3-5 days"
    },
    {
      title: "Emergency Repairs",
      description: "24/7 emergency services for storm damage and urgent roofing issues that can't wait.",
      icon: "🚨",
      features: [
        "24/7 availability",
        "Storm damage response",
        "Temporary weatherproofing",
        "Insurance assistance",
        "Rapid response team"
      ],
      startingPrice: "$450",
      duration: "Within 2 hours"
    },
    {
      title: "Gutter Services",
      description: "Complete gutter installation, repair, and maintenance to protect your home's foundation.",
      icon: "🌧️",
      features: [
        "Gutter installation",
        "Cleaning & maintenance",
        "Downspout repair",
        "Leaf guard installation",
        "Seamless gutters"
      ],
      startingPrice: "$850",
      duration: "1-2 days"
    },
    {
      title: "Roof Inspection",
      description: "Thorough roof inspections to identify potential issues before they become costly problems.",
      icon: "🔍",
      features: [
        "Comprehensive assessment",
        "Detailed report",
        "Photo documentation",
        "Maintenance recommendations",
        "Insurance claim support"
      ],
      startingPrice: "$150",
      duration: "2-3 hours"
    }
  ];

  const roofTypes = [
    {
      name: "Asphalt Shingles",
      description: "Most popular and cost-effective option with excellent durability.",
      warranty: "20-30 years",
      price: "$$"
    },
    {
      name: "Metal Roofing",
      description: "Long-lasting, energy-efficient option with superior weather resistance.",
      warranty: "40-70 years",
      price: "$$$"
    },
    {
      name: "Tile Roofing",
      description: "Premium aesthetic appeal with exceptional longevity and fire resistance.",
      warranty: "50+ years",
      price: "$$$$"
    },
    {
      name: "Slate Roofing",
      description: "Ultimate in durability and elegance for discerning homeowners.",
      warranty: "100+ years",
      price: "$$$$$"
    }
  ];

  return (
    <>
      <NextSeo
        title="Roofing Services - Summit Roofing Solutions"
        description="Comprehensive roofing services including installation, repair, replacement, and emergency services. Licensed and insured professionals serving your community."
        canonical="https://summitroofingsolutions.com/services"
        openGraph={{
          title: "Professional Roofing Services - Summit Roofing Solutions",
          description: "Expert roofing services for residential and commercial properties. From repairs to complete installations.",
          url: "https://summitroofingsolutions.com/services",
          images: [
            {
              url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
              width: 1200,
              height: 630,
              alt: "Professional roofing services",
            },
          ],
        }}
      />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-dark-2 text-white py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Professional Roofing Services
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Comprehensive roofing solutions tailored to your needs and budget. 
                From repairs to complete installations, we've got you covered.
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-light-2 px-8 py-4 text-lg">
                Get Free Estimate <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-1 mb-4">
                Our Complete Service Offerings
              </h2>
              <p className="text-lg text-dark-2 max-w-2xl mx-auto">
                Professional roofing services designed to protect your investment and ensure peace of mind.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <CardTitle className="text-dark-1 text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-dark-2">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-dark-2">Starting at</p>
                        <p className="text-2xl font-bold text-primary">{service.startingPrice}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-dark-2">Timeline</p>
                        <p className="font-semibold text-dark-1">{service.duration}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-dark-1">Includes:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-dark-2">
                            <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Request Quote
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Roof Types Section */}
      <section className="py-20 bg-light-2">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-1 mb-4">
                Roofing Materials We Install
              </h2>
              <p className="text-lg text-dark-2 max-w-2xl mx-auto">
                Choose from our selection of premium roofing materials, each offering unique benefits and aesthetics.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roofTypes.map((roofType, index) => (
              <AnimatedSection key={roofType.name} delay={index * 0.1}>
                <Card className="h-full text-center">
                  <CardHeader>
                    <CardTitle className="text-dark-1">{roofType.name}</CardTitle>
                    <CardDescription className="text-dark-2">
                      {roofType.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Badge variant="outline" className="mb-2">
                        {roofType.warranty} warranty
                      </Badge>
                      <p className="text-2xl font-bold text-primary">{roofType.price}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-dark-1 mb-6">
                  Why Choose Summit Roofing?
                </h2>
                <p className="text-lg text-dark-2 mb-8">
                  With decades of combined experience and a commitment to excellence, 
                  we deliver roofing solutions that protect and enhance your property.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-dark-1 mb-2">Licensed & Insured</h3>
                      <p className="text-dark-2">Fully licensed contractors with comprehensive insurance coverage for your protection.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-dark-1 mb-2">24/7 Emergency Service</h3>
                      <p className="text-dark-2">Round-the-clock availability for urgent repairs and storm damage response.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-dark-1 mb-2">Quality Guarantee</h3>
                      <p className="text-dark-2">We stand behind our work with comprehensive warranties and satisfaction guarantees.</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-dark-1">Ready to Get Started?</CardTitle>
                  <CardDescription>
                    Contact us today for a free consultation and detailed estimate.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center p-6 bg-light-2 rounded-lg">
                    <p className="text-3xl font-bold text-primary mb-2">(555) 123-ROOF</p>
                    <p className="text-dark-2">Call now for immediate assistance</p>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-sm text-dark-2 mb-4">Or request a quote online</p>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Get Free Quote <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="bg-destructive p-4 rounded-lg text-center">
                    <p className="text-destructive-foreground font-semibold">
                      Emergency Repairs Available 24/7
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}