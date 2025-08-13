"use client";

import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const collections = [
  {
    name: "Ethereal Diamonds",
    description: "Exquisite diamond pieces crafted with centuries-old techniques",
    priceRange: "Starting at $15,000",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    exclusivity: "Limited Edition - 50 pieces worldwide"
  },
  {
    name: "Royal Heritage",
    description: "Vintage-inspired jewelry with modern sophistication",
    priceRange: "Starting at $8,500",
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    exclusivity: "Exclusive to VIP Members"
  },
  {
    name: "Modern Classics",
    description: "Contemporary designs for the discerning modern collector",
    priceRange: "Starting at $12,000",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    exclusivity: "Handcrafted to Order"
  }
];

export default function FeaturedCollections() {
  return (
    <section id="collections" className="py-20 bg-luxury-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
            Featured Collections
          </h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Each piece in our collections tells a story of uncompromising craftsmanship, 
            rare materials, and timeless elegance that transcends generations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="group overflow-hidden luxury-shadow hover:shadow-2xl transition-all duration-500 border-0">
                <div className="relative overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Exclusive
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <div className="flex items-center mb-3">
                    <Star className="h-5 w-5 text-yellow-600 mr-2" />
                    <span className="text-sm font-medium text-yellow-600 uppercase tracking-wide">
                      {collection.exclusivity}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{fontFamily: 'Playfair Display, serif'}}>
                    {collection.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {collection.description}
                  </p>
                  
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-lg font-semibold text-gray-900">
                      {collection.priceRange}
                    </span>
                  </div>
                  
                  <Button 
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white group"
                  >
                    <span>View Collection</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button 
            variant="outline" 
            size="lg"
            className="border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white"
          >
            View All Collections
          </Button>
        </motion.div>
      </div>
    </section>
  );
}