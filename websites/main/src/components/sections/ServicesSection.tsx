import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Droplets, Wrench, Hammer, Zap, Home, Pickaxe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/animations/AnimatedSection";

const services = [
  {
    icon: Droplets,
    title: "Water Heater Services",
    description: "Installation, repair, and replacement of all water heater types including tankless systems.",
    image: "/2021-02-01.jpg",
  },
  {
    icon: Wrench,
    title: "Drain Cleaning",
    description: "Professional drain cleaning services using advanced equipment for all types of blockages.",
    image: "/2021-03-02.jpg",
  },
  {
    icon: Hammer,
    title: "Pipe Installation & Repair",
    description: "Expert pipe services from small repairs to complete repiping using quality materials.",
    image: "/2021-03-07.jpg",
  },
  {
    icon: Zap,
    title: "Emergency Plumbing",
    description: "24/7 weekend emergency services with rapid response for urgent plumbing issues.",
    image: "/2021-03-09.jpg",
  },
  {
    icon: Home,
    title: "Bathroom Remodels",
    description: "Complete bathroom renovation services with professional installation and quality fixtures.",
    image: "/2021-03-14.jpg",
  },
  {
    icon: Pickaxe,
    title: "Excavation Work",
    description: "Professional excavation for sewer lines, water lines, and underground plumbing repairs.",
    image: "/2021-09-11.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Complete Plumbing Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From emergency repairs to scheduled installations, we handle it all with professional 
              expertise and fair pricing. Serving Pittsburgh and Allegheny County.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.1}>
              <Card className="group hover:shadow-lg transition-shadow duration-300 h-full">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <Button variant="ghost" className="text-primary hover:text-primary/80 p-0 h-auto">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="text-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/services">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}