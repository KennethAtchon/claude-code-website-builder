"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxSection from "@/components/ParallaxSection";
import { 
  Wrench, 
  Shield, 
  Clock, 
  Award, 
  Phone, 
  Star,
  CheckCircle 
} from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Engine Repair",
      description: "Complete engine diagnostics and repair services"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Brake Service",
      description: "Professional brake inspection and replacement"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Oil Changes",
      description: "Quick and efficient oil change services"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Transmission",
      description: "Expert transmission repair and maintenance"
    }
  ];

  const features = [
    "ASE Certified Technicians",
    "State-of-the-Art Equipment",
    "Honest Pricing",
    "Quality Parts Guarantee",
    "24-Month Warranty",
    "Free Diagnostics"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <ParallaxSection 
        backgroundUrl="https://images.unsplash.com/photo-1486754735734-325b5831c3ad"
        className="h-screen"
        speed="medium"
      >
        <div className="h-full flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <AnimatedSection>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Premier Auto Works
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                Expert automotive repair services you can trust. 
                Quality work, fair prices, guaranteed satisfaction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <Link href="/contact">Get Free Quote</Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-6 bg-white/10 text-white border-white hover:bg-white hover:text-black"
                  asChild
                >
                  <Link href="/services">View Services</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </ParallaxSection>

      <section className="py-20 bg-light-2">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-1 mb-4">
              Why Choose Premier Auto Works?
            </h2>
            <p className="text-xl text-dark-2 max-w-2xl mx-auto">
              With over 20 years of experience, we're your neighborhood's most trusted auto repair shop.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
            {features.map((feature, index) => (
              <AnimatedSection key={index}>
                <div className="flex items-center gap-2 bg-white p-4 rounded-lg shadow-sm">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-dark-1 font-medium">{feature}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-1 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-dark-2">
              Comprehensive automotive repair and maintenance services
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={index}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="text-primary mb-4 flex justify-center">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-dark-1">
                      {service.title}
                    </h3>
                    <p className="text-dark-2">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <ParallaxSection 
        backgroundUrl="https://images.unsplash.com/photo-1558618666-fcd25c85cd64"
        className="py-20"
        speed="slow"
      >
        <div className="container mx-auto px-4 text-center text-white">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-6">
              Meet Our Expert Team
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our ASE-certified technicians have decades of combined experience 
              working on all makes and models.
            </p>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-black" asChild>
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </AnimatedSection>
        </div>
      </ParallaxSection>

      <section className="py-20 bg-light-2">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-1 mb-4">
              What Our Customers Say
            </h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                rating: 5,
                review: "Excellent service! They diagnosed my car's problem quickly and fixed it at a fair price. Highly recommend!"
              },
              {
                name: "Mike Chen",
                rating: 5,
                review: "The team at Premier Auto Works is honest and professional. They explained everything clearly and completed the work on time."
              },
              {
                name: "Lisa Rodriguez",
                rating: 5,
                review: "I've been coming here for years. They always take great care of my car and never try to sell me unnecessary services."
              }
            ].map((testimonial, index) => (
              <AnimatedSection key={index}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-dark-2 mb-4 italic">
                      "{testimonial.review}"
                    </p>
                    <p className="font-semibold text-dark-1">
                      - {testimonial.name}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today for a free quote or to schedule your appointment. 
              We're here to keep you on the road safely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 bg-white text-primary hover:bg-gray-100"
                asChild
              >
                <Link href="/contact">Get Free Quote</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary"
                asChild
              >
                <Link href="tel:5551234567">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}