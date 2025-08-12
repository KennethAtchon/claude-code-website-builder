"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { restaurantData } from '@/app/lib/data';
import { Utensils, Calendar, Truck, Check } from 'lucide-react';

export default function Services() {
  const { services } = restaurantData.website_structure.sections;

  const serviceIcons = [Utensils, Calendar, Truck];

  return (
    <section id="services" className="py-20 bg-white">
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
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mb-8" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From intimate dining experiences to memorable celebrations, we offer a range of services 
            to make every occasion special with authentic Italian cuisine and warm hospitality.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.services_list.map((service, index) => {
            const IconComponent = serviceIcons[index];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gradient-to-br from-white to-amber-50/50 border border-amber-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                  <CardHeader className="text-center pb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent size={32} />
                    </div>
                    <CardTitle className="font-playfair text-2xl font-bold text-amber-900">
                      {service.name}
                    </CardTitle>
                    <div className="text-lg font-semibold text-orange-600">
                      {service.price}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features List */}
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                            <Check size={12} className="text-green-600" />
                          </div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16 bg-gradient-to-r from-amber-800 to-orange-700 rounded-2xl p-12 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Authentic Italian Cuisine?
          </h3>
          <p className="text-xl mb-8 text-amber-100 max-w-2xl mx-auto">
            Join us for an unforgettable dining experience where every dish tells a story of Italian tradition and passion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-amber-800 hover:bg-amber-50 font-semibold py-6 px-8 text-lg"
            >
              View Full Menu
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-amber-800 font-semibold py-6 px-8 text-lg"
            >
              Make Reservation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}