"use client";
import { Zap, Search, Home, CloudRain, Building, Settings, Phone, Clock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

export default function ServicesPage() {
  const services = [
    {
      name: "Emergency Roof Repair",
      description: "24/7 emergency roof repair service to prevent costly ceiling damage, structural problems, electrical issues, and black mold. Our certified professionals respond within 4 hours with emergency tarping and immediate leak repair.",
      price: "Free Emergency Inspection",
      icon: Zap,
      image: "/2021-048-11.jpg",
      features: ["24/7/365 Availability", "4-Hour Response Time", "Emergency Tarping", "Immediate Leak Repair", "Storm Damage Assessment"],
      badge: "EMERGENCY SERVICE"
    },
    {
      name: "Free Roof Inspections", 
      description: "Comprehensive roof inspections with detailed photo documentation and written reports. We identify potential problems before they become major costly issues, helping you maintain your roof's integrity.",
      price: "100% FREE",
      icon: Search,
      image: "/719464.jpeg",
      features: ["Detailed Written Report", "Photo Documentation", "Repair Recommendations", "Insurance Claim Support", "No Hidden Fees"],
      badge: "FREE SERVICE"
    },
    {
      name: "Complete Roof Replacement",
      description: "Full roof replacement using premium materials with certified installation by trained professionals. All work comes with comprehensive warranties and our satisfaction guarantee.",
      price: "Free Quote & Consultation",
      icon: Home,
      image: "/2021-11-30.jpg",
      features: ["Licensed & Insured", "Premium Materials", "Workmanship Guarantee", "Free Labor Warranty", "Insurance Assistance"],
      badge: "PREMIUM SERVICE"
    },
    {
      name: "Storm Damage Repair",
      description: "Specialized storm damage assessment and repair services. We work directly with insurance companies to ensure full coverage and proper restoration of your roof.",
      price: "Insurance Claim Assistance",
      icon: CloudRain,
      image: "/unnaamed.jpg",
      features: ["Insurance Claims Assistance", "Emergency Board-Up", "Hail Damage Repair", "Wind Damage Assessment", "Full Documentation"],
      badge: "INSURANCE WORK"
    },
    {
      name: "Commercial Roofing",
      description: "Professional commercial roofing services for businesses, warehouses, and industrial facilities. Minimal disruption to your operations with flexible scheduling.",
      price: "Commercial Quote Available",
      icon: Building,
      image: "/25530.jpeg",
      features: ["Flexible Scheduling", "Minimal Disruption", "Commercial Materials", "Large Project Experience", "Maintenance Programs"],
      badge: "COMMERCIAL"
    },
    {
      name: "Roof Maintenance",
      description: "Preventive maintenance programs to extend your roof's lifespan and prevent costly repairs. Regular inspections and minor repairs keep your roof in optimal condition.",
      price: "Maintenance Plans Available",
      icon: Settings,
      image: "/unnamed.jpg",
      features: ["Preventive Maintenance", "Regular Inspections", "Gutter Cleaning", "Minor Repairs", "Annual Programs"],
      badge: "PREVENTIVE"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-dark-1 to-dark-2 text-light-1">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Professional Roofing Services
            </h1>
            <p className="text-xl text-light-2 mb-8">
              Emergency repairs, free inspections, and complete roof solutions for Charlotte area homes and businesses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Phone className="w-5 h-5 mr-2" />
                Call (704) 668-0707
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Get Free Inspection
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-light-1">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-dark-1 mb-4">
              Complete Roofing Solutions
            </h2>
            <p className="text-lg text-dark-2 max-w-2xl mx-auto">
              From emergency repairs to full replacements, we handle all your roofing needs with professional expertise
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index}>
                <Card className="h-full hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="md:flex h-full">
                    <div className="md:w-1/3 h-48 md:h-auto relative">
                      <img 
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                        {service.badge}
                      </Badge>
                    </div>
                    <CardContent className="md:w-2/3 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between mb-4">
                          <service.icon className="w-10 h-10 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-dark-1 mb-3">{service.name}</h3>
                        <p className="text-dark-2 mb-4">{service.description}</p>
                        <div className="text-lg font-semibold text-primary mb-4">{service.price}</div>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold text-dark-1 mb-2">Features Include:</h4>
                          <ul className="space-y-1">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center gap-2 text-sm text-dark-2">
                                <ShieldCheck className="w-4 h-4 text-primary" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <Button className="flex-1 bg-primary hover:bg-primary/90">
                          Get Quote
                        </Button>
                        <Button variant="outline" className="flex-1">
                          Learn More
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Response Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center">
            <div className="max-w-4xl mx-auto">
              <Zap className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-4">
                24/7 Emergency Roof Repair
              </h2>
              <p className="text-xl mb-8">
                Roof emergency? Don't wait! We respond within 4 hours to prevent costly damage to your home or business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-light-1 text-primary hover:bg-light-2"
                  asChild
                >
                  <a href="tel:7046680707" className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Call Emergency Line: (704) 668-0707
                  </a>
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <Clock className="w-12 h-12 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">4-Hour Response</h3>
                  <p className="text-sm opacity-90">We respond to emergencies within 4 hours, day or night</p>
                </div>
                <div className="text-center">
                  <ShieldCheck className="w-12 h-12 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Emergency Tarping</h3>
                  <p className="text-sm opacity-90">Immediate protection to prevent further damage</p>
                </div>
                <div className="text-center">
                  <Settings className="w-12 h-12 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Professional Repairs</h3>
                  <p className="text-sm opacity-90">Certified professionals with guaranteed workmanship</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-light-2">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-dark-1 mb-4">
              Why Choose Roof Solutions Charlotte?
            </h2>
            <p className="text-lg text-dark-2 max-w-2xl mx-auto">
              Four decades of experience serving Charlotte with emergency response and customer satisfaction
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection>
              <Card className="text-center h-full">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">40+</div>
                  <h3 className="font-semibold text-dark-1 mb-2">Years Experience</h3>
                  <p className="text-dark-2">Family-owned business serving Charlotte since 1980</p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection>
              <Card className="text-center h-full">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <h3 className="font-semibold text-dark-1 mb-2">Emergency Service</h3>
                  <p className="text-dark-2">Available around the clock for roof emergencies</p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection>
              <Card className="text-center h-full">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <h3 className="font-semibold text-dark-1 mb-2">Satisfaction Guarantee</h3>
                  <p className="text-dark-2">Free labor on additional repairs if needed</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}