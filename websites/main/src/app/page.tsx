"use client";
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
  Hammer, 
  Droplets, 
  TreePine, 
  Star, 
  CheckCircle,
  Phone,
  Mail,
  MapPin 
} from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Lawn Care",
      description: "Complete lawn maintenance including mowing, fertilization, weed control, and seasonal cleanup services.",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Garden Design",
      description: "Custom garden design and installation with native plants, color schemes, and seasonal planning.",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Hardscaping",
      description: "Patios, walkways, retaining walls, and outdoor living spaces using quality materials and craftsmanship.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Irrigation Systems",
      description: "Efficient watering systems designed to keep your landscape healthy while conserving water.",
      image: "https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "GreenScape transformed our backyard into a beautiful oasis. Their attention to detail and professionalism exceeded our expectations.",
      project: "Complete backyard renovation"
    },
    {
      name: "Mike Chen",
      rating: 5,
      comment: "Outstanding work on our commercial property. The team was efficient, professional, and delivered exactly what we envisioned.",
      project: "Commercial landscaping"
    },
    {
      name: "Lisa Martinez",
      rating: 5,
      comment: "From design to installation, GreenScape made the entire process seamless. Our new garden is absolutely stunning!",
      project: "Garden design & installation"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <ParallaxSection
        backgroundUrl="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
        speed="medium"
        className="h-screen flex items-center justify-center"
      >
        <AnimatedSection className="text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6">
            Transform Your 
            <span className="text-primary"> Outdoor Space</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-light-2">
            Professional landscaping services for residential and commercial properties. 
            Creating beautiful, sustainable outdoor environments with 25+ years of experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
              <Link href="/contact">Get Free Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-dark-1">
              <Link href="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </AnimatedSection>
      </ParallaxSection>

      {/* Services Section */}
      <AnimatedSection className="py-20 bg-light-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark-1 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-dark-2 max-w-3xl mx-auto">
              Comprehensive landscaping services designed to transform your outdoor space into a beautiful, functional environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white border-light-3 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-primary mb-4">{service.icon}</div>
                  <h3 className="font-semibold text-xl text-dark-1 mb-3">{service.title}</h3>
                  <p className="text-dark-2 mb-4">{service.description}</p>
                  <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    <Link href="/services">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* About Section */}
      <ParallaxSection
        backgroundUrl="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        speed="slow"
        className="py-20"
      >
        <AnimatedSection className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              25+ Years of Excellence
            </h2>
            <p className="text-xl mb-8 text-light-2">
              Founded in 1998, GreenScape Landscaping has been transforming outdoor spaces with professional expertise and environmental consciousness. We pride ourselves on quality workmanship and customer satisfaction.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-6 h-6 text-primary" />
                <span className="text-lg">Licensed & Insured</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-6 h-6 text-primary" />
                <span className="text-lg">100% Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-6 h-6 text-primary" />
                <span className="text-lg">Eco-Friendly Practices</span>
              </div>
            </div>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/about">Our Story</Link>
            </Button>
          </div>
        </AnimatedSection>
      </ParallaxSection>

      {/* Testimonials Section */}
      <AnimatedSection className="py-20 bg-light-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark-1 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-dark-2 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about our work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-light-3">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-dark-2 mb-4 italic">"{testimonial.comment}"</p>
                  <div>
                    <p className="font-semibold text-dark-1">{testimonial.name}</p>
                    <p className="text-sm text-dark-3">{testimonial.project}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection className="py-20 bg-dark-1 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg text-light-2 max-w-3xl mx-auto">
              Contact us today for a free consultation and quote. Let's create the outdoor space of your dreams together.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-semibold">Call Us</p>
                  <p className="text-light-2">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-light-2">info@greenscapelandscaping.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <p className="font-semibold">Visit Us</p>
                  <p className="text-light-2">123 Garden Way<br />Green Valley, ST 12345</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-playfair font-semibold mb-6">Get Your Free Quote</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-dark-2 border border-dark-3 text-white placeholder-light-3 focus:border-primary focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-dark-2 border border-dark-3 text-white placeholder-light-3 focus:border-primary focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg bg-dark-2 border border-dark-3 text-white placeholder-light-3 focus:border-primary focus:outline-none"
                />
                <textarea
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-dark-2 border border-dark-3 text-white placeholder-light-3 focus:border-primary focus:outline-none resize-none"
                />
                <Button className="w-full bg-primary hover:bg-primary/90 py-3">
                  Get Free Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
}
