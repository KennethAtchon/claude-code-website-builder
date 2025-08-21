"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight, Check, DollarSign, Clock, Users } from "lucide-react";

export default function Services() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const services = [
    {
      title: "Kitchen Remodeling",
      description: "Transform your kitchen into the heart of your home with modern designs, quality materials, and expert craftsmanship.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136",
      features: [
        "Custom cabinet design and installation",
        "Countertop installation (granite, quartz, marble)",
        "Modern appliance integration", 
        "Flooring and tile work",
        "Electrical and plumbing updates"
      ],
      priceRange: "$15,000 - $50,000",
      duration: "2-6 weeks",
      icon: "🏠"
    },
    {
      title: "Bathroom Renovation",
      description: "Create a luxurious spa-like retreat with our comprehensive bathroom renovation services.",
      image: "https://images.unsplash.com/photo-1620626011761-996317b8d101",
      features: [
        "Walk-in shower and tub installations",
        "Vanity and storage solutions",
        "Tile and flooring work",
        "Modern fixture installation",
        "Ventilation and lighting upgrades"
      ],
      priceRange: "$8,000 - $25,000",
      duration: "1-3 weeks",
      icon: "🛁"
    },
    {
      title: "Home Additions",
      description: "Expand your living space with seamless additions that blend perfectly with your existing home.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      features: [
        "Room additions and extensions",
        "Second story additions",
        "Sunroom and porch construction",
        "In-law suite development",
        "Garage conversions"
      ],
      priceRange: "$25,000 - $100,000",
      duration: "4-12 weeks",
      icon: "🔨"
    },
    {
      title: "Flooring Installation",
      description: "Beautiful, durable flooring solutions that enhance every room in your home.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
      features: [
        "Hardwood flooring installation",
        "Luxury vinyl plank (LVP)",
        "Ceramic and porcelain tile",
        "Carpet installation",
        "Floor refinishing services"
      ],
      priceRange: "$3,000 - $15,000",
      duration: "1-2 weeks",
      icon: "🏡"
    },
    {
      title: "Exterior Renovations", 
      description: "Enhance your home's curb appeal and protect your investment with exterior improvements.",
      image: "https://images.unsplash.com/photo-1448630360428-65456885c650",
      features: [
        "Siding replacement and repair",
        "Roofing services",
        "Window and door installation",
        "Deck and patio construction",
        "Landscaping and hardscaping"
      ],
      priceRange: "$10,000 - $40,000",
      duration: "1-4 weeks",
      icon: "🏘️"
    },
    {
      title: "Whole Home Renovation",
      description: "Complete home transformations that reimagine your entire living space from top to bottom.",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
      features: [
        "Complete design consultation",
        "Structural modifications",
        "Full electrical and plumbing updates",
        "HVAC system improvements",
        "Interior and exterior finishing"
      ],
      priceRange: "$75,000 - $300,000",
      duration: "8-20 weeks",
      icon: "🏠"
    }
  ];

  if (!isMounted) return null;

  return (
    <div className="pt-8">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <Badge className="mb-4 bg-accent text-accent-foreground">
              Professional Services
            </Badge>
            <h1 className="font-playfair text-4xl md:text-6xl font-semibold text-primary mb-6">
              Our Services
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From kitchen remodels to complete home renovations, we offer comprehensive services 
              to transform every space in your home with quality craftsmanship and attention to detail.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <AnimatedSection key={service.title}>
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-64">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full">
                      <span className="text-2xl">{service.icon}</span>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="font-playfair text-2xl text-primary">
                      {service.title}
                    </CardTitle>
                    <p className="text-gray-600">{service.description}</p>
                  </CardHeader>

                  <CardContent>
                    {/* Service Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                      <div className="text-center">
                        <DollarSign className="h-6 w-6 text-accent mx-auto mb-1" />
                        <p className="text-sm font-medium">{service.priceRange}</p>
                        <p className="text-xs text-gray-500">Price Range</p>
                      </div>
                      <div className="text-center">
                        <Clock className="h-6 w-6 text-accent mx-auto mb-1" />
                        <p className="text-sm font-medium">{service.duration}</p>
                        <p className="text-xs text-gray-500">Timeline</p>
                      </div>
                      <div className="text-center">
                        <Users className="h-6 w-6 text-accent mx-auto mb-1" />
                        <p className="text-sm font-medium">Expert Team</p>
                        <p className="text-xs text-gray-500">Certified Pros</p>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-primary mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <Check className="h-4 w-4 text-accent mr-2 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Get Free Estimate
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-playfair text-3xl md:text-5xl font-semibold text-primary mb-6">
                Why Choose Premier Home Renovations?
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Licensed & Insured",
                description: "Fully licensed contractors with comprehensive insurance coverage for your peace of mind.",
                icon: "🏆"
              },
              {
                title: "15+ Years Experience",
                description: "Over a decade of experience transforming homes throughout the region with quality craftsmanship.",
                icon: "⭐"
              },
              {
                title: "Satisfaction Guarantee",
                description: "We stand behind our work with a comprehensive warranty and 100% satisfaction guarantee.",
                icon: "✅"
              }
            ].map((benefit, index) => (
              <AnimatedSection key={benefit.title}>
                <Card className="text-center h-full">
                  <CardContent className="p-8">
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="font-semibold text-xl mb-3 text-primary">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="text-white">
              <h2 className="font-playfair text-3xl md:text-5xl font-semibold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
                Contact us today for a free consultation and detailed estimate for your renovation project.
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}