"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import AnimatedSection from "@/components/animations/AnimatedSection";

interface TestimonialsProps {
  title: string;
  content: string;
  ctaLabel: string;
  ctaLink: string;
  imageUrl: string;
}

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

export default function TestimonialsSection({ title, content, ctaLabel, ctaLink, imageUrl }: TestimonialsProps) {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Mitchell",
      role: "Property Manager",
      company: "Premier Properties",
      content: "Skyline Roof Masters transformed our commercial building with their innovative roofing solution. The attention to detail and premium materials exceeded our expectations. Truly exceptional craftsmanship.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b9e3",
    },
    {
      name: "David Chen",
      role: "Homeowner",
      company: "Luxury Residence",
      content: "After working with several roofing contractors, Skyline stands apart. Their premium service, cutting-edge technology, and master craftsmen delivered a roof that's both beautiful and incredibly durable.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    },
    {
      name: "Maria Rodriguez",
      role: "Facilities Director",
      company: "Metro Hospital",
      content: "The smart roofing system they installed has reduced our energy costs by 30%. Their professional approach and innovative solutions make them our go-to roofing specialists for all our properties.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-light-2">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 h-full flex flex-col">
                  {/* Quote icon */}
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  
                  {/* Rating */}
                  <div className="flex space-x-1 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Content */}
                  <blockquote className="text-dark-2 mb-6 flex-grow leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-dark-1">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-dark-2">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
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