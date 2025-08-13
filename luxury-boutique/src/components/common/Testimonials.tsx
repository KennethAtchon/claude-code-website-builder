"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Victoria Montgomery",
    title: "Art Collector & Philanthropist",
    location: "New York, NY",
    content: "Élégance has been my trusted partner for over a decade. Their attention to detail and understanding of my personal style is unmatched. Each piece they've curated for me has become a treasured part of my collection.",
    rating: 5,
    purchaseHistory: "15+ exclusive pieces",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Alexander Chen",
    title: "Investment Executive",
    location: "London, UK",
    content: "The level of service and expertise at Élégance exceeds all expectations. Their private viewing sessions and personalized recommendations have introduced me to pieces I never would have discovered elsewhere.",
    rating: 5,
    purchaseHistory: "8 custom commissions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Isabella Rodriguez",
    title: "Fashion Designer",
    location: "Milan, Italy",
    content: "Working with Élégance's design team on custom pieces has been an extraordinary journey. Their craftsmanship and attention to detail rivals the greatest ateliers in Europe.",
    rating: 5,
    purchaseHistory: "20+ collaborative pieces",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-black mb-6">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-6"></div>
          <p className="text-xl text-luxury-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover why discerning collectors worldwide choose Élégance for their most precious acquisitions.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="glass-card border-0 luxury-shadow overflow-hidden">
                <CardContent className="p-12">
                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    {/* Client Image */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <img
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover luxury-shadow"
                        />
                        <div className="absolute -top-2 -right-2 bg-luxury-gold rounded-full p-2">
                          <Quote className="h-4 w-4 text-luxury-black" />
                        </div>
                      </div>
                    </div>

                    {/* Testimonial Content */}
                    <div className="flex-1 text-center lg:text-left">
                      {/* Stars */}
                      <div className="flex justify-center lg:justify-start mb-4">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-luxury-gold text-luxury-gold" />
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-xl lg:text-2xl text-luxury-gray-700 italic mb-6 leading-relaxed">
                        "{testimonials[currentIndex].content}"
                      </blockquote>

                      {/* Client Details */}
                      <div className="space-y-2">
                        <h4 className="text-xl font-playfair font-bold text-luxury-black">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-luxury-gray-600 font-medium">
                          {testimonials[currentIndex].title}
                        </p>
                        <p className="text-luxury-gray-500 text-sm">
                          {testimonials[currentIndex].location}
                        </p>
                        <div className="inline-flex items-center px-3 py-1 bg-luxury-gold/10 rounded-full mt-3">
                          <span className="text-sm font-medium text-luxury-gold">
                            {testimonials[currentIndex].purchaseHistory}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-luxury-gold' : 'bg-luxury-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-luxury-gray-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-playfair font-bold text-luxury-black mb-2">98%</div>
              <p className="text-luxury-gray-600">Client Satisfaction Rate</p>
            </div>
            <div>
              <div className="text-3xl font-playfair font-bold text-luxury-black mb-2">5,000+</div>
              <p className="text-luxury-gray-600">Global VIP Members</p>
            </div>
            <div>
              <div className="text-3xl font-playfair font-bold text-luxury-black mb-2">24/7</div>
              <p className="text-luxury-gray-600">Concierge Support</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}