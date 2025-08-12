"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { restaurantData } from '@/app/lib/data';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Testimonials() {
  const { testimonials } = restaurantData.website_structure.sections;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonialsList = testimonials.testimonials_list;

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsList.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonialsList.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsList.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsList.length) % testimonialsList.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-amber-900 via-amber-800 to-orange-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-amber-300 rounded-full" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-orange-300 rounded-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-amber-400 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Guests Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mb-8" />
          <p className="text-xl text-amber-200 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our valued guests have to say about their experiences at Bella's Bistro.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative" onMouseEnter={() => setIsAutoPlaying(false)} onMouseLeave={() => setIsAutoPlaying(true)}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <Card className="bg-white/10 backdrop-blur-md border border-amber-300/30 shadow-2xl">
                  <CardContent className="p-8 md:p-12 text-center">
                    {/* Quote Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 text-amber-900 mb-8">
                      <Quote size={32} />
                    </div>

                    {/* Rating Stars */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonialsList[currentIndex].rating)].map((_, i) => (
                        <Star key={i} size={24} className="text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Testimonial Content */}
                    <blockquote className="text-xl md:text-2xl font-light leading-relaxed mb-8 text-amber-100">
                      "{testimonialsList[currentIndex].content}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="border-t border-amber-300/30 pt-6">
                      <h4 className="font-playfair text-xl font-semibold text-white mb-2">
                        {testimonialsList[currentIndex].name}
                      </h4>
                      <p className="text-amber-300">
                        {testimonialsList[currentIndex].title}
                        {testimonialsList[currentIndex].company && (
                          <span className="text-amber-200"> • {testimonialsList[currentIndex].company}</span>
                        )}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <Button
              onClick={prevTestimonial}
              size="lg"
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-full p-3"
            >
              <ChevronLeft size={24} />
            </Button>
            
            <Button
              onClick={nextTestimonial}
              size="lg"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-full p-3"
            >
              <ChevronRight size={24} />
            </Button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonialsList.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-amber-400 scale-125' 
                    : 'bg-amber-400/40 hover:bg-amber-400/70'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-amber-200">
            Ready to Create Your Own Memorable Experience?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-amber-800 hover:bg-amber-50 font-semibold py-6 px-8 text-lg"
            >
              Make a Reservation
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-amber-800 font-semibold py-6 px-8 text-lg"
            >
              View Our Menu
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}