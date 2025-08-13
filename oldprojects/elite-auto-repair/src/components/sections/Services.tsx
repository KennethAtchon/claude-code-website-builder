"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Settings, Zap, Cog } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Oil Changes",
      description: "Quick and professional oil change service using premium oil and filters to keep your engine running smoothly.",
      icon: Settings,
      image: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=400",
      price: "From $29.99",
      features: ["Premium Oil", "New Filter", "Multi-Point Check"]
    },
    {
      id: 2,
      title: "Brake Repair",
      description: "Complete brake system inspection and repair services to ensure your safety on the road.",
      icon: Wrench,
      image: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=400",
      price: "From $89.99",
      features: ["Brake Pads", "Rotor Service", "Fluid Check"]
    },
    {
      id: 3,
      title: "Engine Diagnostics",
      description: "Advanced computer diagnostics to identify and resolve engine performance issues quickly.",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=400",
      price: "From $49.99",
      features: ["Computer Scan", "Error Codes", "Performance Test"]
    },
    {
      id: 4,
      title: "Transmission Service",
      description: "Complete transmission maintenance and repair services for both automatic and manual transmissions.",
      icon: Cog,
      image: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=400",
      price: "From $149.99",
      features: ["Fluid Change", "Filter Service", "System Check"]
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Our <span className="text-[#F97316]">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive automotive services to keep your vehicle running at its best
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group hover-lift border-0 shadow-lg overflow-hidden h-full">
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover image-hover-zoom"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Service Icon */}
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-[#F97316] rounded-full flex items-center justify-center shadow-lg">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-[#1E3A8A]">
                      {service.price}
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-xl text-gray-900 group-hover:text-[#1E3A8A] transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <p className="text-gray-600 mb-4 flex-1">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Includes:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-[#F97316] rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    className="w-full bg-[#1E3A8A] hover:bg-[#1E3A8A]/90 text-white group-hover:bg-[#F97316] group-hover:hover:bg-[#ea580c] transition-all duration-300"
                    asChild
                  >
                    <motion.a
                      href="#contact"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Schedule Service
                    </motion.a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Services CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Something Else?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We offer a complete range of automotive services. Can&apos;t find what you&apos;re looking for? 
              Contact us and we&apos;ll be happy to help with your specific needs.
            </p>
            <Button 
              variant="outline"
              size="lg"
              className="border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white"
              asChild
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Custom Quote
              </motion.a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}