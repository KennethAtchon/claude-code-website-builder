"use client";

import { motion } from "framer-motion";
import { User, Eye, Palette, Clock, CheckCircle, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: User,
    name: "Personal Shopping",
    description: "One-on-one styling consultation with our experts",
    duration: "2-3 hours",
    price: "Complimentary",
    features: ["Private appointment", "Personalized selection", "Styling advice"],
    gradient: "from-luxury-gold/10 to-luxury-gold/5"
  },
  {
    icon: Eye,
    name: "Private Viewing",
    description: "Exclusive access to new collections before public release",
    duration: "By appointment",
    price: "VIP Members",
    features: ["First access", "Champagne service", "Personal consultant"],
    gradient: "from-luxury-black/10 to-luxury-black/5"
  },
  {
    icon: Palette,
    name: "Custom Orders",
    description: "Bespoke pieces tailored to your specifications",
    duration: "4-8 weeks",
    price: "Starting at $25,000",
    features: ["Unique design", "Premium materials", "White-glove delivery"],
    gradient: "from-luxury-gold/10 to-luxury-gold/5"
  }
];

export default function LuxuryServices() {
  return (
    <section id="services" className="py-20 bg-luxury-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-black mb-6">
            Exclusive Services
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-6"></div>
          <p className="text-xl text-luxury-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience luxury redefined through our personalized services, 
            designed exclusively for discerning clientele who appreciate excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className={`group h-full overflow-hidden luxury-shadow hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br ${service.gradient} hover:scale-105`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-full bg-white shadow-lg">
                      <service.icon className="h-8 w-8 text-luxury-gold" />
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-luxury-gold text-luxury-gold" />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-playfair font-bold text-luxury-black mb-2">
                    {service.name}
                  </CardTitle>
                  <p className="text-luxury-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center mb-2">
                        <Clock className="h-4 w-4 text-luxury-gold mr-2" />
                        <span className="text-sm font-medium text-luxury-gray-700">Duration</span>
                      </div>
                      <p className="text-luxury-black font-semibold">{service.duration}</p>
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <Star className="h-4 w-4 text-luxury-gold mr-2" />
                        <span className="text-sm font-medium text-luxury-gray-700">Price</span>
                      </div>
                      <p className="text-luxury-black font-semibold">{service.price}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-luxury-black mb-3">Included Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-luxury-gold mr-2 flex-shrink-0" />
                          <span className="text-luxury-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    className="w-full bg-luxury-black hover:bg-luxury-gray-800 text-white group-hover:bg-luxury-gold group-hover:text-luxury-black transition-all duration-300"
                  >
                    Book Service
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* VIP Membership CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="bg-luxury-black text-white border-0 luxury-shadow max-w-4xl mx-auto">
            <CardContent className="p-12">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-luxury-gold">
                  <Star className="h-8 w-8 text-luxury-black" />
                </div>
              </div>
              <h3 className="text-3xl font-playfair font-bold mb-4">
                Join Our VIP Membership
              </h3>
              <p className="text-xl text-luxury-gray-300 mb-8 max-w-2xl mx-auto">
                Unlock exclusive access to limited collections, priority appointments, 
                and personalized concierge services available only to our most valued clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-black font-semibold px-8"
                >
                  Learn About VIP Benefits
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black px-8"
                >
                  Apply for Membership
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}