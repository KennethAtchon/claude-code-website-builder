"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/animations/AnimatedSection";

interface Service {
  title: string;
  description: string;
  image: string;
}

interface ServicesGridProps {
  title: string;
  content: string;
  ctaLabel: string;
  ctaLink: string;
  imageUrl: string;
}

export default function ServicesGrid({ title, content, ctaLabel, ctaLink, imageUrl }: ServicesGridProps) {
  const services: Service[] = [
    {
      title: "Luxury Residential Roofing",
      description: "Custom luxury roofing solutions with premium materials and architectural design integration.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    {
      title: "Commercial Roofing Solutions",
      description: "Advanced commercial roofing systems with large-scale project management and energy efficiency.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    },
    {
      title: "Roof Restoration",
      description: "Historic roof restoration with premium material matching and preservation techniques.",
      image: "https://images.unsplash.com/photo-1593062091239-7d1a90e91c4c",
    },
    {
      title: "Custom Architectural Roofing",
      description: "Bespoke architectural roofing solutions designed to complement your property's unique character.",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716",
    },
  ];

  return (
    <section className="py-20 bg-light-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-1 mb-6">
              {title}
            </h2>
            <p className="text-xl text-dark-2 max-w-3xl mx-auto">
              {content}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-1/60 via-transparent to-transparent" />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-dark-1 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-dark-2 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Link href="/services">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <AnimatedSection>
          <div className="text-center">
            <Link href={ctaLink}>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold"
              >
                {ctaLabel}
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}