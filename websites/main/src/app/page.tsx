"use client";
import Image from "next/image";
import Link from "next/link";
import { Phone, Clock, ShieldCheck, Calendar, Gift, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  const trustIndicators = [
    { icon: Calendar, text: "40+ Years Experience", description: "Family-owned business serving Charlotte since 1980" },
    { icon: Clock, text: "24/7 Emergency Response", description: "Available around the clock for roof emergencies" },
    { icon: Gift, text: "Free Inspections", description: "No-cost, no-obligation roof inspections" },
    { icon: ShieldCheck, text: "Satisfaction Guarantee", description: "Free labor on additional repairs if needed" }
  ];

  const featuredServices = [
    {
      name: "Emergency Roof Repair",
      description: "24/7 emergency service to prevent costly damage",
      price: "Free Emergency Inspection",
      icon: Zap,
      badge: "EMERGENCY SERVICE"
    },
    {
      name: "Free Roof Inspections", 
      description: "Comprehensive inspections with detailed reports",
      price: "100% FREE",
      icon: ShieldCheck,
      badge: "FREE SERVICE"
    },
    {
      name: "Complete Roof Replacement",
      description: "Full replacement using premium materials",
      price: "Free Quote & Consultation",
      icon: Calendar,
      badge: "PREMIUM SERVICE"
    }
  ];

  const serviceAreas = [
    "Charlotte", "Matthews", "Mint Hill", "Concord", "Huntersville", 
    "Cornelius", "Davidson", "Pineville", "Gastonia", "Rock Hill"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `linear-gradient(rgba(75, 22, 22, 0.7), rgba(75, 22, 22, 0.7)), url('/2021-018-11.jpg')`
          }}
        />
        <AnimatedSection className="relative z-10 text-center text-light-1 px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Emergedwadcy <spad classdame="bg-gradient-to-r from-primary to-red-600 bg-clip-text text-transparent">Roof Repair</span> in Charlotte
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-light-2">
            24/7 Professional Service • Free Inspections • 4-Hour Response Time
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Get Free Emergency Inspection
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-light-1 text-primary hover:bg-light-1 hover:text-dark-1 text-lg px-8 py-4"
              asChild
            >
              <a href="tel:7046680707">Call (704) 668-0707 Now</a>
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>Serving Charlotte Since 1980</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>Satisfaction Guaranteed</span>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-light-2">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-dark-1 mb-4">
              Why Charlotte Trusts Roof Solutions
            </h2>
            <p className="text-lg text-dark-2 max-w-2xl mx-auto">
              Four decades of experience, emergency response, and customer satisfaction
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustIndicators.map((indicator, index) => (
              <AnimatedSection key={index}>
                <Card className="text-center h-full border-light-3 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <indicator.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-dark-1 mb-2">{indicator.text}</h3>
                    <p className="text-dark-2 text-sm">{indicator.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-16 bg-light-1">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-dark-1 mb-4">
              Our Professional Roofing Services
            </h2>
            <p className="text-lg text-dark-2 max-w-2xl mx-auto">
              Emergency repairs, free inspections, and complete roof solutions
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <AnimatedSection key={index}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <service.icon className="w-10 h-10 text-primary" />
                      <Badge className="bg-primary text-primary-foreground">{service.badge}</Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-dark-1 mb-2">{service.name}</h3>
                    <p className="text-dark-2 mb-4">{service.description}</p>
                    <div className="text-lg font-semibold text-primary mb-4">{service.price}</div>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection className="text-center mt-12">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
              <Link href="/services">View All Services</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 bg-dark-1 text-light-1">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Serving Greater Charlotte Area</h2>
            <p className="text-lg text-light-2 max-w-2xl mx-auto">
              Professional roofing services throughout Charlotte metro and surrounding communities
            </p>
          </AnimatedSection>
          
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
              {serviceAreas.map((area) => (
                <div key={area} className="bg-dark-2 p-4 rounded-lg">
                  <span className="font-medium">{area}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
          
          <AnimatedSection className="text-center mt-12">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
              <a href="tel:7046680707" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call for Service in Your Area
              </a>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-light-2">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-dark-1 mb-4">
              What Charlotte Homeowners Are Saying
            </h2>
            <p className="text-lg text-dark-2 max-w-2xl mx-auto">
              Real stories from families we've helped protect their homes
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[1,2,3,4,5].map((star) => (
                      <span key={star} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-dark-2 mb-4 italic">
                    "Called them at 2 AM during a storm when water was pouring into our living room. They had someone here within 3 hours and got us covered up. Incredible emergency service!"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-dark-1">Sarah M.</p>
                    <p className="text-dark-2 text-sm">Matthews, NC</p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[1,2,3,4,5].map((star) => (
                      <span key={star} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-dark-2 mb-4 italic">
                    "45 years in business and it shows. They found damage our insurance adjuster missed and handled everything professionally. Fair pricing and quality work."
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-dark-1">Robert K.</p>
                    <p className="text-dark-2 text-sm">Huntersville, NC</p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[1,2,3,4,5].map((star) => (
                      <span key={star} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-dark-2 mb-4 italic">
                    "Free inspection revealed issues we had no idea about. They explained everything clearly and their repair work has held up perfectly through multiple storms."
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-dark-1">Jennifer L.</p>
                    <p className="text-dark-2 text-sm">Charlotte, NC</p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
          
          <AnimatedSection className="text-center mt-12">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
              <Link href="/testimonials">Read More Reviews</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
