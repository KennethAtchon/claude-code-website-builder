"use client";

import { motion } from "framer-motion";
import { Award, Users, Clock, Gem } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const awards = [
  "International Luxury Brand of the Year 2023",
  "Excellence in Craftsmanship Award 2022", 
  "Heritage & Innovation Prize 2021"
];

const stats = [
  { icon: Clock, value: "150+", label: "Years of Heritage" },
  { icon: Gem, value: "10K+", label: "Unique Pieces Created" },
  { icon: Users, value: "5K+", label: "Distinguished Clients" },
  { icon: Award, value: "25+", label: "International Awards" }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
              A Legacy of 
              <span className="text-yellow-600 font-script text-5xl md:text-6xl block">
                Excellence
              </span>
            </h2>
            
            <div className="w-24 h-1 bg-yellow-600 mb-8"></div>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                For over a century and a half, Élégance has been synonymous with uncompromising 
                quality and timeless sophistication. Founded in 1870 by master craftsman 
                Henri Dubois, our maison has passed down the sacred art of luxury creation 
                through five generations of artisans.
              </p>
              
              <p className="text-lg">
                Each piece that bears our name is a testament to centuries of refined techniques, 
                rare materials sourced from the world's most exclusive locations, and an 
                unwavering commitment to perfection that has earned us recognition among 
                the world's most discerning collectors.
              </p>
              
              <p className="text-lg">
                Our philosophy remains unchanged: to create not just objects of beauty, 
                but heirlooms that tell stories and preserve memories for generations to come.
              </p>
            </div>

            {/* Awards */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
                Recognition & Awards
              </h3>
              <div className="space-y-3">
                {awards.map((award, index) => (
                  <motion.div
                    key={award}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <Award className="h-5 w-5 text-yellow-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{award}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg luxury-shadow">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Master craftsman at work"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg luxury-shadow max-w-sm"
            >
              <p className="text-gray-700 italic mb-3">
                "True luxury is not about price, but about the soul that goes into every creation."
              </p>
              <p className="text-gray-900 font-semibold">
                — Henri Dubois, Founder
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 pt-16 border-t border-luxury-gray-200"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="border-0 shadow-none">
                  <CardContent className="p-6">
                    <stat.icon className="h-8 w-8 text-yellow-600 mx-auto mb-4" />
                    <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2" style={{fontFamily: 'Playfair Display, serif'}}>
                      {stat.value}
                    </div>
                    <p className="text-gray-600 font-medium">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}