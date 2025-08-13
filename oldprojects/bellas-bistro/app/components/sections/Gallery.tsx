"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Signature Dishes', 'Wine Collection', 'Restaurant Ambiance'];
  
  const galleryItems = [
    {
      id: 1,
      category: 'Signature Dishes',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Osso Buco alla Milanese',
      description: 'Traditional braised veal shanks with risotto'
    },
    {
      id: 2,
      category: 'Wine Collection',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Italian Wine Selection',
      description: 'Curated collection from renowned Italian vineyards'
    },
    {
      id: 3,
      category: 'Restaurant Ambiance',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Dining Room',
      description: 'Warm, intimate atmosphere with Italian décor'
    },
    {
      id: 4,
      category: 'Signature Dishes',
      image: 'https://images.unsplash.com/photo-1572441713132-51c75654db73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Fresh Pasta',
      description: 'House-made pasta with traditional sauces'
    },
    {
      id: 5,
      category: 'Restaurant Ambiance',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Private Dining',
      description: 'Elegant space for special occasions'
    },
    {
      id: 6,
      category: 'Signature Dishes',
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Wood-Fired Pizza',
      description: 'Authentic Neapolitan-style pizza'
    },
    {
      id: 7,
      category: 'Signature Dishes',
      image: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Tiramisu',
      description: 'Classic Italian dessert made fresh daily'
    },
    {
      id: 8,
      category: 'Wine Collection',
      image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Wine Cellar',
      description: 'Over 200 Italian wines in our temperature-controlled cellar'
    }
  ];

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-amber-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mb-8" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Take a visual journey through our culinary creations, wine collection, 
            and the warm atmosphere that makes Bella's Bistro a special place to dine.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`px-6 py-2 transition-all duration-300 ${
                selectedCategory === category 
                  ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white" 
                  : "border-amber-300 text-amber-700 hover:bg-amber-50"
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl shadow-lg bg-white hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h4 className="font-playfair text-xl font-semibold mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-200">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Card Content */}
              <div className="p-4 lg:opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="font-playfair text-lg font-semibold text-amber-900 mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button 
            size="lg"
            className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold px-8 py-6 text-lg"
          >
            View Full Menu & More Photos
          </Button>
        </motion.div>
      </div>
    </section>
  );
}