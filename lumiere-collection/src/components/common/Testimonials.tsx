"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Testimonial } from "@/types";

const testimonials: Testimonial[] = [
  {
    quote: "The craftsmanship is absolutely extraordinary. Each piece feels like a work of art.",
    author: "Isabella Chen",
    location: "New York",
    rating: 5,
  },
  {
    quote: "Lumière created the most beautiful custom engagement ring. The attention to detail was phenomenal.",
    author: "Marcus Williams",
    location: "London",
    rating: 5,
  },
  {
    quote: "I've been collecting luxury jewelry for years. Lumière pieces are truly exceptional.",
    author: "Sophie Laurent",
    location: "Paris",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-accent rotate-45" />
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-accent rotate-12" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-accent -rotate-12" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-primary text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6 tracking-wider">
            Cherished by Connoisseurs
          </h2>
          <div className="flex justify-center items-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-accent fill-current" />
            ))}
          </div>
          <p className="font-secondary text-lg text-muted">
            Trusted by discerning clients worldwide
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Card className="glass-card border-0 shadow-2xl">
                  <CardContent className="p-8 md:p-12 text-center">
                    <Quote className="w-12 h-12 text-accent mx-auto mb-8 opacity-60" />
                    
                    <blockquote className="font-secondary text-xl md:text-2xl text-text leading-relaxed mb-8 italic">
                      "{testimonials[currentIndex].quote}"
                    </blockquote>
                    
                    <div className="flex justify-center items-center space-x-1 mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-accent fill-current" />
                      ))}
                    </div>
                    
                    <div>
                      <cite className="font-primary text-lg font-semibold text-text not-italic">
                        {testimonials[currentIndex].author}
                      </cite>
                      <p className="font-secondary text-muted text-sm mt-1">
                        {testimonials[currentIndex].location}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 bg-white/80 hover:bg-white shadow-lg text-text hover:text-accent transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 bg-white/80 hover:bg-white shadow-lg text-text hover:text-accent transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-accent scale-125"
                    : "bg-muted/40 hover:bg-muted/60"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Auto-play indicator */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-sm text-muted hover:text-text transition-colors duration-300 flex items-center space-x-2"
            aria-label={`${isAutoPlaying ? 'Pause' : 'Resume'} auto-play`}
          >
            <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-accent animate-pulse' : 'bg-muted'}`} />
            <span className="font-secondary uppercase tracking-wider">
              {isAutoPlaying ? 'Auto-playing' : 'Paused'}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}