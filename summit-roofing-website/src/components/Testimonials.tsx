"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-red-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Don&apos;t just take our word for it - hear from satisfied customers across Denver
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="glass-card border-white/20 text-white">
                <CardContent className="p-8 md:p-12 text-center">
                  <Quote className="h-12 w-12 text-yellow-400 mx-auto mb-6" />
                  
                  <blockquote className="text-xl md:text-2xl leading-relaxed mb-8">
                    &quot;{currentTestimonial.content}&quot;
                  </blockquote>

                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Customer Info */}
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold">{currentTestimonial.name}</h4>
                    <p className="text-blue-100">
                      {currentTestimonial.title} • {currentTestimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="border-white text-white hover:bg-white hover:text-gray-900"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-white scale-110' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="border-white text-white hover:bg-white hover:text-gray-900"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mt-16"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${index === currentIndex ? 'hidden' : ''}`}
            >
              <Card className="glass-card border-white/20 text-white h-full">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-sm leading-relaxed mb-4 line-clamp-4">
                    &quot;{testimonial.content}&quot;
                  </p>

                  <div className="mt-auto">
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-blue-100">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center"
        >
          <div className="text-white">
            <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
            <div className="text-sm text-blue-100">5-Star Reviews</div>
          </div>
          <div className="text-white">
            <div className="text-3xl md:text-4xl font-bold mb-2">A+</div>
            <div className="text-sm text-blue-100">BBB Rating</div>
          </div>
          <div className="text-white">
            <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
            <div className="text-sm text-blue-100">Customer Satisfaction</div>
          </div>
          <div className="text-white">
            <div className="text-3xl md:text-4xl font-bold mb-2">20+</div>
            <div className="text-sm text-blue-100">Years Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}