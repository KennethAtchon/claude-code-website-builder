"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { restaurantData } from '@/app/lib/data';
import { Award, Heart, Users } from 'lucide-react';

export default function About() {
  const { about } = restaurantData.website_structure.sections;

  const values = [
    {
      icon: Award,
      title: about.values[0],
      description: "Recipes passed down through three generations of Italian family tradition"
    },
    {
      icon: Heart,
      title: about.values[1],
      description: "Sourced daily from local farms and trusted Italian suppliers"
    },
    {
      icon: Users,
      title: about.values[2],
      description: "Warm, welcoming environment where memories are made over great food"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
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
            Our Story
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mb-8" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Story Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="prose prose-lg prose-amber">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {about.story}
              </p>
              <div className="bg-white/60 rounded-lg p-6 border-l-4 border-amber-600">
                <h3 className="font-playfair text-2xl font-semibold text-amber-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 italic">
                  &ldquo;{about.mission}&rdquo;
                </p>
              </div>
            </div>
          </motion.div>

          {/* Story Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Restaurant interior showing warm, traditional Italian atmosphere"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent" />
            </div>
            
            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-4 border border-amber-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-800">70+</div>
                <div className="text-sm text-gray-600">Years of Tradition</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-xl p-4 border border-amber-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-800">1952</div>
                <div className="text-sm text-gray-600">Est.</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="font-playfair text-3xl md:text-4xl font-bold text-center text-amber-900 mb-12">
            What Makes Us Special
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border border-amber-200 hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 text-white mb-6">
                      <value.icon size={32} />
                    </div>
                    <h4 className="font-playfair text-xl font-semibold text-amber-900 mb-4">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
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