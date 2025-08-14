"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight, CheckCircle, Star, Quote } from "lucide-react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const heroSlides = [
    {
      before: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
      after: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136",
      title: "Kitchen Transformation"
    },
    {
      before: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      after: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
      title: "Bathroom Renovation"
    }
  ];

  const services = [
    {
      title: "Kitchen Remodeling",
      description: "Complete kitchen transformations with modern designs and quality materials",
      icon: "🏠"
    },
    {
      title: "Bathroom Renovation", 
      description: "Luxurious bathroom upgrades that add value and comfort to your home",
      icon: "🛁"
    },
    {
      title: "Home Additions",
      description: "Expand your living space with seamless additions and extensions",
      icon: "🔨"
    },
    {
      title: "Flooring Installation",
      description: "Beautiful flooring solutions from hardwood to tile installation",
      icon: "🏡"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      content: "Premier Home Renovations transformed our outdated kitchen into a modern masterpiece. The quality of work exceeded our expectations!",
      rating: 5,
      project: "Kitchen Remodel"
    },
    {
      name: "Mike Davis", 
      content: "Professional, reliable, and excellent craftsmanship. Our bathroom renovation was completed on time and within budget.",
      rating: 5,
      project: "Bathroom Renovation"
    },
    {
      name: "Lisa Chen",
      content: "The team was amazing! They listened to our needs and delivered a beautiful home addition that perfectly matches our style.",
      rating: 5,
      project: "Home Addition"
    }
  ];

  if (!isMounted) return null;

  return (
    <div>
      {/* Hero Section with Before/After Slider */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <Badge className="mb-4 bg-accent text-accent-foreground">
                  Trusted Since 2008
                </Badge>
                <h1 className="font-playfair text-4xl md:text-6xl font-semibold text-primary mb-6">
                  Transform Your Home with Quality Craftsmanship
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  From kitchen remodels to complete home renovations, we bring your vision to life 
                  with professional expertise and attention to detail.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Get Free Estimate
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg">
                    View Portfolio
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="relative">
                <Card className="overflow-hidden shadow-2xl">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-2">
                      <div className="relative">
                        <Image
                          src={heroSlides[currentSlide].before}
                          alt="Before renovation"
                          width={400}
                          height={300}
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Before
                        </div>
                      </div>
                      <div className="relative">
                        <Image
                          src={heroSlides[currentSlide].after}
                          alt="After renovation"
                          width={400}
                          height={300}
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          After
                        </div>
                      </div>
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="font-semibold text-lg">{heroSlides[currentSlide].title}</h3>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-playfair text-3xl md:text-5xl font-semibold text-primary mb-4">
                Our Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We offer comprehensive home renovation services to transform every space in your home
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title}>
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="font-semibold text-xl mb-3 text-primary">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-playfair text-3xl md:text-5xl font-semibold text-primary mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-gray-600">
                Don't just take our word for it - hear from our satisfied customers
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.name}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-accent mb-4" />
                    <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                    <div className="flex items-center mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <div>
                      <p className="font-semibold text-primary">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.project}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="text-white">
              <h2 className="font-playfair text-3xl md:text-5xl font-semibold mb-6">
                Ready to Transform Your Home?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
                Get started with a free consultation and estimate. Our expert team is ready to bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <div className="flex items-center text-primary-foreground/90">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  No obligation • Free estimates
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
