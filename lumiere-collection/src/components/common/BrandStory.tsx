"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  "Ethically sourced materials",
  "Master craftsman heritage",
  "Lifetime warranty",
  "Bespoke design services",
];

export default function BrandStory() {
  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=800&h=1000&fit=crop&crop=center"
                alt="Master craftsman working on jewelry at Lumière Collection atelier"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-l-2 border-t-2 border-accent" />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-r-2 border-b-2 border-accent" />
          </motion.div>

          {/* Content */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="max-w-xl">
              <motion.h2
                className="font-primary text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-8 tracking-wider"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                A Legacy of Excellence
              </motion.h2>
              
              <motion.p
                className="font-secondary text-lg md:text-xl text-muted leading-relaxed mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                For over three decades, Lumière Collection has been at the forefront of luxury jewelry design. Our master artisans combine time-honored techniques with innovative design to create pieces that transcend fashion and become treasured heirlooms.
              </motion.p>

              {/* Highlights */}
              <motion.div
                className="space-y-4 mb-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 + (index * 0.1), ease: "easeOut" }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-secondary text-text font-medium">
                      {highlight}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-text hover:bg-text/90 text-white font-medium px-8 py-4 rounded-none uppercase tracking-wider transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="/heritage">
                    Our Story
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pt-20 border-t border-muted/20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
        >
          {[
            { number: "30+", label: "Years of Excellence" },
            { number: "50+", label: "Master Artisans" },
            { number: "1000+", label: "Unique Pieces" },
            { number: "25+", label: "Countries Served" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 + (index * 0.1), ease: "easeOut" }}
            >
              <div className="font-primary text-3xl md:text-4xl font-bold text-accent mb-2">
                {stat.number}
              </div>
              <div className="font-secondary text-sm md:text-base text-muted uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}