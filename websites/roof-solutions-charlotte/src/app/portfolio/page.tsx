"use client";
import { useState } from "react";
import { Phone, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Residential Roofing", "Commercial Roofing", "Emergency Repairs"];

  const projects = [
    {
      id: 1,
      title: "Complete Roof Replacement - Matthews Home",
      category: "Residential Roofing",
      image: "/2021-11-30.jpg",
      description: "Full asphalt shingle replacement on 2-story home with storm damage restoration.",
      location: "Matthews, NC",
      completionTime: "3 days",
      projectType: "Roof Replacement"
    },
    {
      id: 2,
      title: "Emergency Storm Damage Repair",
      category: "Emergency Repairs",
      image: "/2021-048-11.jpg",
      description: "Emergency tarping and repair service during severe thunderstorm with 24-hour completion.",
      location: "Charlotte, NC",
      completionTime: "24 hours",
      projectType: "Emergency Repair"
    },
    {
      id: 3,
      title: "Commercial Warehouse Roofing",
      category: "Commercial Roofing",
      image: "/25530.jpeg",
      description: "Large-scale commercial roof replacement for 50,000 sq ft warehouse facility.",
      location: "Concord, NC",
      completionTime: "2 weeks",
      projectType: "Commercial Replacement"
    },
    {
      id: 4,
      title: "Luxury Home Roof Installation",
      category: "Residential Roofing",
      image: "/2021-11-025.jpg",
      description: "Premium architectural shingles installation on luxury custom home.",
      location: "Huntersville, NC",
      completionTime: "5 days",
      projectType: "New Construction"
    },
    {
      id: 5,
      title: "Restaurant Leak Emergency Repair",
      category: "Emergency Repairs",
      image: "/719464.jpeg",
      description: "Emergency leak repair during business hours with minimal disruption to operations.",
      location: "Charlotte, NC",
      completionTime: "4 hours",
      projectType: "Emergency Repair"
    },
    {
      id: 6,
      title: "Office Building Roof Maintenance",
      category: "Commercial Roofing",
      image: "/2021-018-11.jpg",
      description: "Comprehensive roof maintenance and repair program for multi-tenant office building.",
      location: "Rock Hill, SC",
      completionTime: "1 week",
      projectType: "Maintenance"
    },
    {
      id: 7,
      title: "Historic Home Restoration",
      category: "Residential Roofing",
      image: "/unnaamed.jpg",
      description: "Careful restoration of 1920s home roof using period-appropriate materials.",
      location: "Charlotte, NC",
      completionTime: "1 week",
      projectType: "Restoration"
    },
    {
      id: 8,
      title: "Hail Damage Insurance Claim",
      category: "Emergency Repairs",
      image: "/unnamed.jpg",
      description: "Complete roof replacement after severe hail storm with full insurance coverage.",
      location: "Mint Hill, NC",
      completionTime: "4 days",
      projectType: "Insurance Claim"
    },
    {
      id: 9,
      title: "Manufacturing Facility Roof",
      category: "Commercial Roofing",
      image: "/25530.jpeg",
      description: "Industrial roofing system installation for manufacturing facility with specialized requirements.",
      location: "Gastonia, NC",
      completionTime: "3 weeks",
      projectType: "Industrial"
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-dark-1 to-dark-2 text-light-1">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Work Portfolio
            </h1>
            <p className="text-xl text-light-2 mb-8">
              See examples of our quality roofing work across Charlotte and surrounding areas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Phone className="w-5 h-5 mr-2" />
                Call (704) 668-0707
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Get Free Quote
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-light-2 sticky top-24 z-30">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-4">
              <Filter className="w-5 h-5 text-dark-2 mt-2" />
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeFilter === category ? "default" : "outline"}
                  onClick={() => setActiveFilter(category)}
                  className={activeFilter === category ? "bg-primary text-primary-foreground" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-light-1">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-dark-1 mb-4">
              Quality Work Across Charlotte
            </h2>
            <p className="text-lg text-dark-2 max-w-2xl mx-auto">
              From emergency repairs to complete replacements, see the quality and craftsmanship that sets us apart
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <AnimatedSection key={project.id}>
                <Card className="h-full hover:shadow-xl transition-shadow overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      {project.projectType}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-dark-1 mb-3">{project.title}</h3>
                    <p className="text-dark-2 mb-4">{project.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-dark-3">Location:</span>
                        <span className="text-dark-1 font-medium">{project.location}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-dark-3">Completion Time:</span>
                        <span className="text-dark-1 font-medium">{project.completionTime}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-dark-3">Category:</span>
                        <span className="text-dark-1 font-medium">{project.category}</span>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      View Project Details
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <AnimatedSection className="text-center py-12">
              <p className="text-lg text-dark-2">No projects found for the selected category.</p>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Track Record</h2>
            <p className="text-xl">
              Four decades of successful projects across Charlotte
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedSection>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
                <div className="text-lg">Projects Completed</div>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
                <div className="text-lg">Customer Satisfaction</div>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
                <div className="text-lg">Emergency Response</div>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">40+</div>
                <div className="text-lg">Years Experience</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dark-1 text-light-1">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Start Your Roofing Project?
            </h2>
            <p className="text-xl mb-8 text-light-2">
              Let us bring the same quality and professionalism to your home or business
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
                Get Free Estimate
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}