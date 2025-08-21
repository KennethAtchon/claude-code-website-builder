"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/AnimatedSection";
import { Filter, ArrowRight } from "lucide-react";

export default function Portfolio() {
  const [isMounted, setIsMounted] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const filters = ["All", "Kitchen", "Bathroom", "Living Room", "Bedroom", "Exterior"];

  const projects = [
    {
      title: "Modern Kitchen Transformation",
      category: "Kitchen",
      before: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
      after: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136",
      description: "Complete kitchen remodel featuring custom cabinetry, quartz countertops, and modern appliances.",
      location: "Westfield, NJ",
      timeline: "4 weeks",
      budget: "$35,000"
    },
    {
      title: "Spa-Like Master Bathroom",
      category: "Bathroom", 
      before: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      after: "https://images.unsplash.com/photo-1620626011761-996317b8d101",
      description: "Luxurious bathroom renovation with walk-in shower, double vanity, and heated floors.",
      location: "Summit, NJ",
      timeline: "3 weeks",
      budget: "$18,500"
    },
    {
      title: "Open Concept Living Space",
      category: "Living Room",
      before: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
      after: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      description: "Wall removal and redesign to create an open, modern living space with custom built-ins.",
      location: "Millburn, NJ", 
      timeline: "6 weeks",
      budget: "$25,000"
    },
    {
      title: "Master Bedroom Suite",
      category: "Bedroom",
      before: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
      after: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      description: "Complete bedroom renovation with custom closet organization and lighting updates.",
      location: "Chatham, NJ",
      timeline: "2 weeks", 
      budget: "$12,000"
    },
    {
      title: "Victorian Home Exterior",
      category: "Exterior",
      before: "https://images.unsplash.com/photo-1448630360428-65456885c650",
      after: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      description: "Full exterior restoration including new siding, windows, and landscaping.",
      location: "Madison, NJ",
      timeline: "8 weeks",
      budget: "$45,000"
    },
    {
      title: "Contemporary Kitchen Remodel",
      category: "Kitchen",
      before: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
      after: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136", 
      description: "Sleek modern kitchen with waterfall island, subway tile backsplash, and smart appliances.",
      location: "Short Hills, NJ",
      timeline: "5 weeks",
      budget: "$42,000"
    },
    {
      title: "Guest Bathroom Refresh",
      category: "Bathroom",
      before: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      after: "https://images.unsplash.com/photo-1620626011761-996317b8d101",
      description: "Small bathroom makeover with space-saving solutions and modern fixtures.",
      location: "New Providence, NJ",
      timeline: "2 weeks",
      budget: "$8,500"
    },
    {
      title: "Family Room Addition", 
      category: "Living Room",
      before: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
      after: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      description: "New family room addition with vaulted ceilings and panoramic windows.",
      location: "Berkeley Heights, NJ",
      timeline: "10 weeks",
      budget: "$55,000"
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  if (!isMounted) return null;

  return (
    <div className="pt-8">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <Badge className="mb-4 bg-accent text-accent-foreground">
              Our Work
            </Badge>
            <h1 className="font-playfair text-4xl md:text-6xl font-semibold text-primary mb-6">
              Project Portfolio
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our gallery of completed projects and see how we've transformed homes 
              throughout New Jersey with quality craftsmanship and innovative design.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center justify-center">
              <div className="flex flex-wrap justify-center gap-2">
                {filters.map((filter) => (
                  <Button
                    key={filter}
                    variant={activeFilter === filter ? "default" : "outline"}
                    onClick={() => setActiveFilter(filter)}
                    className={`${
                      activeFilter === filter 
                        ? "bg-primary hover:bg-primary/90" 
                        : "hover:bg-primary hover:text-white"
                    }`}
                  >
                    <Filter className="w-4 h-4 mr-2" />
                    {filter}
                  </Button>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <AnimatedSection key={project.title}>
                <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    {/* Before/After Images */}
                    <div className="grid grid-cols-2">
                      <div className="relative">
                        <Image
                          src={project.before}
                          alt={`${project.title} - Before`}
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
                          src={project.after}
                          alt={`${project.title} - After`}
                          width={400}
                          height={300}
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          After
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {project.category}
                        </Badge>
                        <span className="text-sm text-gray-500">{project.location}</span>
                      </div>
                      
                      <h3 className="font-playfair text-xl font-semibold text-primary mb-3">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4">
                        {project.description}
                      </p>

                      {/* Project Stats */}
                      <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                        <div>
                          <p className="text-sm text-gray-500">Timeline</p>
                          <p className="font-medium text-primary">{project.timeline}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Investment</p>
                          <p className="font-medium text-primary">{project.budget}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          {/* Load More Button */}
          <AnimatedSection>
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                View More Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-playfair text-3xl md:text-5xl font-semibold text-primary mb-6">
                Our Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From initial consultation to final walkthrough, we ensure a smooth and transparent renovation experience.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Free in-home consultation to discuss your vision, needs, and budget."
              },
              {
                step: "02", 
                title: "Design & Planning",
                description: "Detailed design plans and project timeline with transparent pricing."
              },
              {
                step: "03",
                title: "Construction",
                description: "Professional construction with regular updates and quality control."
              },
              {
                step: "04",
                title: "Final Walkthrough",
                description: "Complete inspection and walkthrough to ensure your satisfaction."
              }
            ].map((process, index) => (
              <AnimatedSection key={process.step}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="font-semibold text-lg text-primary mb-2">{process.title}</h3>
                  <p className="text-gray-600 text-sm">{process.description}</p>
                </div>
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
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
                Let's discuss how we can transform your space. Schedule a free consultation today.
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