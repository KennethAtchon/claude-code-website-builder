"use client";
import { useState } from "react";
import { Metadata } from "next";
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
  Home,
  Building2,
  Calendar,
  MapPin,
  ExternalLink,
  Filter
} from "lucide-react";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Modern Suburban Oasis",
      category: "residential",
      type: "Complete Landscape Renovation",
      location: "Green Valley, ST",
      year: "2024",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
      beforeImage: "https://images.unsplash.com/photo-1544085701-f35aa5c1ae2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
      description: "Complete backyard transformation featuring native plantings, stone pathways, and a stunning water feature.",
      features: ["Native Plant Garden", "Stone Pathways", "Water Feature", "Outdoor Lighting"],
      size: "2,500 sq ft"
    },
    {
      id: 2,
      title: "Corporate Headquarters Landscape",
      category: "commercial",
      type: "Commercial Landscaping",
      location: "Downtown District",
      year: "2024",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
      beforeImage: "https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
      description: "Professional landscaping design for a corporate campus emphasizing sustainability and employee wellness.",
      features: ["Sustainable Design", "Employee Wellness Areas", "Storm Water Management", "Seasonal Color"],
      size: "15,000 sq ft"
    },
    {
      id: 3,
      title: "Luxury Estate Garden",
      category: "residential",
      type: "Garden Design & Installation",
      location: "Highland Hills",
      year: "2023",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
      beforeImage: "https://images.unsplash.com/photo-1530841344095-c7b22c197bdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
      description: "Elegant formal garden design with custom hardscaping and year-round seasonal interest.",
      features: ["Formal Garden Design", "Custom Hardscaping", "Irrigation System", "Seasonal Plantings"],
      size: "5,000 sq ft"
    },
    {
      id: 4,
      title: "Shopping Center Renovation",
      category: "commercial",
      type: "Commercial Renovation",
      location: "Retail District",
      year: "2023",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
      beforeImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
      description: "Complete landscape renovation for a busy shopping center, improving aesthetics and foot traffic.",
      features: ["Traffic Flow Design", "Low Maintenance Plants", "Decorative Lighting", "Parking Lot Landscaping"],
      size: "25,000 sq ft"
    },
    {
      id: 5,
      title: "Eco-Friendly Family Garden",
      category: "residential",
      type: "Sustainable Landscaping",
      location: "Meadowbrook",
      year: "2023",
      image: "https://images.unsplash.com/photo-1574482620881-2bc9d0fcfe4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
      beforeImage: "https://images.unsplash.com/photo-1572251188636-0ac5b7e83c3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
      description: "Sustainable family-friendly landscape featuring native plants, rain gardens, and play areas.",
      features: ["Rain Garden", "Native Species", "Children's Play Area", "Composting Zone"],
      size: "3,200 sq ft"
    },
    {
      id: 6,
      title: "Medical Center Healing Garden",
      category: "commercial",
      type: "Therapeutic Landscaping",
      location: "Medical District",
      year: "2022",
      image: "https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
      beforeImage: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
      description: "Therapeutic healing garden designed to provide a calming environment for patients and families.",
      features: ["Therapeutic Plants", "Wheelchair Accessibility", "Quiet Zones", "Sensory Elements"],
      size: "8,000 sq ft"
    }
  ];

  const filters = [
    { id: "all", label: "All Projects", icon: <Filter className="w-4 h-4" /> },
    { id: "residential", label: "Residential", icon: <Home className="w-4 h-4" /> },
    { id: "commercial", label: "Commercial", icon: <Building2 className="w-4 h-4" /> }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <ParallaxSection
        backgroundUrl="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
        speed="medium"
        className="h-96 flex items-center justify-center"
      >
        <AnimatedSection className="text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4">
            Our Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-light-2">
            Showcasing our finest landscaping transformations
          </p>
        </AnimatedSection>
      </ParallaxSection>

      {/* Filter Section */}
      <AnimatedSection className="py-12 bg-light-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center space-x-2 ${
                  activeFilter === filter.id 
                    ? "bg-primary hover:bg-primary/90" 
                    : "border-primary text-primary hover:bg-primary hover:text-white"
                }`}
              >
                {filter.icon}
                <span>{filter.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Projects Grid */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden border-light-3 hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`${
                      project.category === "residential" 
                        ? "bg-primary text-white" 
                        : "bg-dark-1 text-white"
                    }`}>
                      {project.category === "residential" ? "Residential" : "Commercial"}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl font-bold text-dark-1 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-primary font-medium mb-2">{project.type}</p>
                  <p className="text-dark-2 mb-4 text-sm">{project.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-dark-3 mb-4">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-dark-2"><strong>Size:</strong> {project.size}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.features.slice(0, 2).map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {project.features.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.features.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    View Project Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Before & After Showcase */}
      <AnimatedSection className="py-20 bg-light-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark-1 mb-4">
              Before & After Transformations
            </h2>
            <p className="text-lg text-dark-2 max-w-3xl mx-auto">
              See the dramatic transformations we've achieved for our clients.
            </p>
          </div>
          
          <div className="space-y-16">
            {filteredProjects.slice(0, 3).map((project, index) => (
              <div key={project.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm text-dark-3 mb-1">BEFORE</h3>
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <Image
                        src={project.beforeImage}
                        alt={`${project.title} - Before`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm text-dark-3 mb-1">AFTER</h3>
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <Image
                        src={project.image}
                        alt={`${project.title} - After`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Badge className={`${
                    project.category === "residential" 
                      ? "bg-primary text-white" 
                      : "bg-dark-1 text-white"
                  }`}>
                    {project.category === "residential" ? "Residential" : "Commercial"}
                  </Badge>
                  <h3 className="font-playfair text-2xl md:text-3xl font-bold text-dark-1">
                    {project.title}
                  </h3>
                  <p className="text-lg text-dark-2">{project.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-dark-1">Project Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-dark-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-dark-3 pt-4">
                    <span><strong>Location:</strong> {project.location}</span>
                    <span><strong>Year:</strong> {project.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-dark-1 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Ready for Your Transformation?
          </h2>
          <p className="text-xl text-light-2 mb-8 max-w-3xl mx-auto">
            Let us create something beautiful for your property. Contact us today to discuss your project and get a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-dark-1">
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
}