"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import ParallaxSection from "@/components/ParallaxSection";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight, Shield, Clock, Award, Star, Phone, Mail } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });

  const services = [
    {
      title: "Roof Installation",
      description: "Complete new roof installation with premium materials and expert craftsmanship.",
      icon: "🏠"
    },
    {
      title: "Roof Repair",
      description: "Quick and reliable repairs to fix leaks, damaged shingles, and structural issues.",
      icon: "🔧"
    },
    {
      title: "Roof Replacement",
      description: "Full roof replacement services for aging or severely damaged roofing systems.",
      icon: "🏗️"
    },
    {
      title: "Emergency Repairs",
      description: "24/7 emergency services for storm damage and urgent roofing issues.",
      icon: "🚨"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Excellent work! The team was professional, punctual, and delivered exactly what they promised. Our new roof looks amazing."
    },
    {
      name: "Mike Chen",
      rating: 5,
      text: "Summit Roofing saved the day when storm damage hit our home. Quick response and quality repairs at a fair price."
    },
    {
      name: "Emma Davis",
      rating: 5,
      text: "From quote to completion, the entire process was smooth. Highly recommend for any roofing needs."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <ParallaxSection
        backgroundUrl="https://images.unsplash.com/photo-1558618666-fcd25c85cd64"
        className="h-screen"
      >
        <div className="container mx-auto px-4 text-center text-white">
          <AnimatedSection>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Summit Roofing <span className="text-primary">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Professional roofing services you can trust. Licensed, insured, and committed to excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
                Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-dark-1 px-8 py-4 text-lg">
                Call (555) 123-ROOF
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </ParallaxSection>

      {/* Features Section */}
      <section className="py-20 bg-light-2">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-1 mb-4">
                Why Choose Summit Roofing?
              </h2>
              <p className="text-lg text-dark-2 max-w-2xl mx-auto">
                With years of experience and a commitment to quality, we deliver roofing solutions that last.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="text-center">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-dark-1 mb-2">Licensed & Insured</h3>
                <p className="text-dark-2">Fully licensed and insured for your peace of mind and protection.</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="text-center">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-dark-1 mb-2">24/7 Emergency Service</h3>
                <p className="text-dark-2">Round-the-clock emergency repairs when you need us most.</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="text-center">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-dark-1 mb-2">Quality Guarantee</h3>
                <p className="text-dark-2">We stand behind our work with comprehensive warranties.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ParallaxSection
        backgroundUrl="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Services
              </h2>
              <p className="text-lg text-light-2 max-w-2xl mx-auto">
                Comprehensive roofing solutions for residential and commercial properties.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <Card className="bg-white/95 backdrop-blur border-0 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-2">{service.icon}</div>
                    <CardTitle className="text-dark-1">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-dark-2 text-center">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-1 mb-4">
                What Our Customers Say
              </h2>
              <p className="text-lg text-dark-2 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our satisfied customers have to say.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.name} delay={index * 0.1}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-dark-2 mb-4">"{testimonial.text}"</p>
                    <p className="font-semibold text-dark-1">- {testimonial.name}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-light-2">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-dark-1 mb-6">
                  Get Your Free Quote Today
                </h2>
                <p className="text-lg text-dark-2 mb-8">
                  Ready to get started? Fill out our quick form and we'll provide you with a free, no-obligation quote.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-6 w-6 text-primary" />
                    <span className="text-dark-1 font-medium">(555) 123-ROOF</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-6 w-6 text-primary" />
                    <span className="text-dark-1 font-medium">info@summitroofing.com</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Badge className="bg-destructive text-destructive-foreground mb-2">
                    24/7 Emergency Service
                  </Badge>
                  <p className="text-sm text-dark-2">
                    Storm damage? Don't wait. Call us now for immediate assistance.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-dark-1">Request a Quote</CardTitle>
                  <CardDescription>We'll get back to you within 24 hours</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                    <Input
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                  <Input
                    placeholder="Service Interest"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  />
                  <textarea
                    className="w-full p-3 border border-input rounded-md resize-none"
                    rows={4}
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Submit Quote Request <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
