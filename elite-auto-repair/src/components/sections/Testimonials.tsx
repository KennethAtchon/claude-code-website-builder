"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Local Customer",
      rating: 5,
      text: "Elite Auto Repair saved me hundreds! Their honest diagnosis and fair pricing make them my go-to shop. The team really cares about their customers.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b9e3?w=150&h=150&fit=crop&crop=face",
      service: "Brake Repair"
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      location: "Local Customer", 
      rating: 5,
      text: "Fast, reliable service every time. They explain everything clearly and never try to sell you something you don't need. Highly recommend!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      service: "Oil Change"
    },
    {
      id: 3,
      name: "Jennifer Lee",
      location: "Local Customer",
      rating: 5,
      text: "Excellent customer service and quality work. They got my car running like new and finished ahead of schedule. Will definitely be back!",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
      service: "Engine Diagnostics"
    },
    {
      id: 4,
      name: "David Thompson",
      location: "Local Customer",
      rating: 5,
      text: "20+ years of exceptional service! Elite Auto Repair has kept my family's vehicles running smoothly. Trustworthy and professional every time.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      service: "Transmission Service"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-gradient-to-br from-[#1E3A8A] via-[#1D4ED8] to-[#3B82F6] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-white rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            What Our <span className="text-[#F97316]">Customers</span> Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Don&apos;t just take our word for it - see what our satisfied customers have to say
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              {/* Glassmorphism Card */}
              <div className="glass-card rounded-xl p-6 hover-lift h-full flex flex-col">
                {/* Rating Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F97316] text-[#F97316]" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-white/90 text-sm leading-relaxed mb-6 flex-1">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>

                {/* Service Tag */}
                <div className="mb-4">
                  <span className="inline-block bg-[#F97316]/20 text-[#F97316] px-3 py-1 rounded-full text-xs font-medium">
                    {testimonial.service}
                  </span>
                </div>

                {/* Customer Info */}
                <div className="flex items-center">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-white text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-blue-200 text-xs">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="glass-card rounded-xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#F97316] mb-2">
                  5000+
                </div>
                <div className="text-white/80 text-sm">
                  Satisfied Customers
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#F97316] mb-2">
                  4.9/5
                </div>
                <div className="text-white/80 text-sm">
                  Average Rating
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#F97316] mb-2">
                  98%
                </div>
                <div className="text-white/80 text-sm">
                  Recommend Us
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-blue-100 text-lg mb-6">
            Ready to experience the Elite Auto Repair difference?
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-[#F97316] hover:bg-[#ea580c] text-white font-semibold rounded-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule Your Service Today
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}