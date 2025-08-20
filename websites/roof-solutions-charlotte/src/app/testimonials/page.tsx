"use client";
import { Star, Quote, ShieldCheck, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Homeowner",
      company: "South Charlotte",
      location: "Charlotte, NC",
      content: "Roof Solutions saved our home! During last month's severe storm, they responded within 2 hours and had our major leak completely fixed the same day. The team was professional, cleaned up everything, and the price was very fair. I can't recommend them enough!",
      rating: 5,
      service: "Emergency Roof Repair",
      verified: true
    },
    {
      name: "Mike Chen",
      title: "Property Manager", 
      company: "Crown Property Management",
      location: "Matthews, NC",
      content: "We manage over 50 commercial properties and Roof Solutions is our exclusive roofing contractor. Their 24/7 availability, quality workmanship, and fair pricing make them invaluable. They've never let us down in 3 years of partnership.",
      rating: 5,
      service: "Commercial Roofing",
      verified: true
    },
    {
      name: "Jennifer Martinez",
      title: "Restaurant Owner",
      company: "La Cocina Mexican Grill",
      location: "Concord, NC",
      content: "Had a major leak during lunch rush that was damaging our kitchen equipment. Roof Solutions had someone here in 90 minutes and fixed it without disrupting our service. Saved us thousands in equipment damage!",
      rating: 5,
      service: "Emergency Commercial Repair",
      verified: true
    },
    {
      name: "Robert & Linda Williams",
      title: "Homeowners",
      company: "Retired",
      location: "Huntersville, NC",
      content: "After 35 years, our roof needed complete replacement. Roof Solutions handled everything - insurance claims, permits, and installation. The crew was respectful, professional, and completed the job in 3 days. Beautiful work!",
      rating: 5,
      service: "Roof Replacement",
      verified: true
    },
    {
      name: "David Park",
      title: "IT Director",
      company: "Tech Solutions Inc",
      location: "Rock Hill, SC",
      content: "Free inspection identified problems we didn't even know we had. They could have charged us thousands but only recommended the repairs we actually needed. Honest, reliable service - exactly what you want in a contractor.",
      rating: 5,
      service: "Free Inspection",
      verified: true
    },
    {
      name: "Ashley Thompson",
      title: "Single Mom",
      company: "Teacher",
      location: "Mint Hill, NC",
      content: "Storm damage had me panicked about costs, but Roof Solutions worked directly with my insurance company and made the process stress-free. They even helped me understand what was covered. Above and beyond service!",
      rating: 5,
      service: "Insurance Claims",
      verified: true
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Customers" },
    { number: "40+", label: "Years Experience" },
    { number: "24/7", label: "Emergency Service" },
    { number: "100%", label: "Satisfaction Rate" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-dark-1 to-dark-2 text-light-1">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Customer Testimonials
            </h1>
            <p className="text-xl text-light-2 mb-8">
              See what Charlotte families and businesses say about our roofing services
            </p>
            <div className="flex items-center justify-center gap-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-2xl font-bold ml-4">5.0 Average Rating</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={index}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-lg">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-light-1">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-dark-1 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-dark-2 max-w-2xl mx-auto">
              Real stories from real customers who trust Roof Solutions Charlotte
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <Quote className="w-8 h-8 text-primary" />
                      {testimonial.verified && (
                        <Badge className="bg-green-500 text-white">
                          <ShieldCheck className="w-3 h-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    {/* Content */}
                    <p className="text-dark-2 mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    
                    {/* Service */}
                    <Badge className="bg-light-3 text-dark-2 mb-4">
                      {testimonial.service}
                    </Badge>
                    
                    {/* Author Info */}
                    <div className="border-t pt-4">
                      <div className="font-semibold text-dark-1">{testimonial.name}</div>
                      <div className="text-sm text-dark-2">
                        {testimonial.title}
                        {testimonial.company && ` • ${testimonial.company}`}
                      </div>
                      <div className="text-sm text-dark-3">{testimonial.location}</div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-light-2">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-dark-1 mb-4">
              Why Customers Choose Us
            </h2>
            <p className="text-lg text-dark-2 max-w-2xl mx-auto">
              Trusted by Charlotte families and businesses for four decades
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection>
              <Card className="text-center h-full">
                <CardContent className="p-6">
                  <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-dark-1 mb-2">Licensed & Insured</h3>
                  <p className="text-dark-2 text-sm">Fully licensed and insured for your peace of mind</p>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection>
              <Card className="text-center h-full">
                <CardContent className="p-6">
                  <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-dark-1 mb-2">BBB Accredited</h3>
                  <p className="text-dark-2 text-sm">Better Business Bureau accredited business</p>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection>
              <Card className="text-center h-full">
                <CardContent className="p-6">
                  <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-dark-1 mb-2">Family Owned</h3>
                  <p className="text-dark-2 text-sm">Local family-owned business since 1980</p>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection>
              <Card className="text-center h-full">
                <CardContent className="p-6">
                  <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-dark-1 mb-2">Satisfaction Guarantee</h3>
                  <p className="text-dark-2 text-sm">100% satisfaction guarantee on all work</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dark-1 text-light-1">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Join Our Satisfied Customers?
            </h2>
            <p className="text-xl mb-8 text-light-2">
              Experience the quality service and customer care that has made us Charlotte's most trusted roofers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90"
                asChild
              >
                <a href="tel:7046680707" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call (704) 668-0707
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Get Free Inspection
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}