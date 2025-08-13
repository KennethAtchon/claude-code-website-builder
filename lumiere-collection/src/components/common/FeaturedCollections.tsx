"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Collection } from "@/types";

const collections: Collection[] = [
  {
    name: "Étoile",
    description: "Celestial-inspired pieces featuring rare diamonds",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=800&fit=crop&crop=center",
    price_range: "From $2,500",
    link: "/collections/etoile",
  },
  {
    name: "Héritage",
    description: "Vintage-inspired designs with modern refinement",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=800&fit=crop&crop=center",
    price_range: "From $1,800",
    link: "/collections/heritage",
  },
  {
    name: "Moderne",
    description: "Contemporary geometric forms in precious metals",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=800&fit=crop&crop=center",
    price_range: "From $3,200",
    link: "/collections/moderne",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function FeaturedCollections() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-primary text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6 tracking-wider">
            Signature Collections
          </h2>
          <p className="font-secondary text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            Each collection embodies our commitment to exceptional artistry
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {collections.map((collection, index) => (
            <motion.div key={collection.name} variants={itemVariants}>
              <Card className="group overflow-hidden border-0 shadow-none bg-transparent">
                <CardContent className="p-0">
                  <Link href={collection.link} className="block">
                    <div className="relative overflow-hidden bg-gray-100 aspect-[3/4] mb-6">
                      <Image
                        src={collection.image}
                        alt={`${collection.name} collection`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Overlay Content */}
                      <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="text-white">
                          <p className="font-secondary text-sm uppercase tracking-wider mb-2">
                            {collection.price_range}
                          </p>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-white text-white hover:bg-white hover:text-black font-medium uppercase tracking-wider"
                          >
                            Explore
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <h3 className="font-primary text-2xl md:text-3xl font-semibold text-text mb-3 group-hover:text-accent transition-colors duration-300">
                        {collection.name}
                      </h3>
                      <p className="font-secondary text-muted leading-relaxed mb-4">
                        {collection.description}
                      </p>
                      <p className="font-secondary text-sm uppercase tracking-wider text-accent font-medium">
                        {collection.price_range}
                      </p>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Link href="/collections">
            <Button
              variant="outline"
              size="lg"
              className="border-text text-text hover:bg-text hover:text-white font-medium px-8 py-4 rounded-none uppercase tracking-wider transition-all duration-300"
            >
              View All Collections
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}