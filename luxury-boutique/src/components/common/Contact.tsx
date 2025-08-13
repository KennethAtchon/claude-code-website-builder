"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Star, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-luxury-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-black mb-6">
            Contact Our Concierge
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-6"></div>
          <p className="text-xl text-luxury-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience personalized service with our dedicated concierge team. 
            Available 24/7 to assist with appointments, inquiries, and bespoke requests.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="luxury-shadow border-0">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-playfair font-bold text-luxury-black">
                  Schedule Your Private Consultation
                </CardTitle>
                <p className="text-luxury-gray-600">
                  Complete the form below and our team will contact you within 2 hours.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-luxury-gray-700 mb-2">
                      First Name
                    </label>
                    <Input placeholder="Your first name" className="border-luxury-gray-300" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-luxury-gray-700 mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Your last name" className="border-luxury-gray-300" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-luxury-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input type="email" placeholder="your@email.com" className="border-luxury-gray-300" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-luxury-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input type="tel" placeholder="+1 (555) 000-0000" className="border-luxury-gray-300" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-luxury-gray-700 mb-2">
                    Area of Interest
                  </label>
                  <Select>
                    <SelectTrigger className="border-luxury-gray-300">
                      <SelectValue placeholder="Select your interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="jewelry">Fine Jewelry</SelectItem>
                      <SelectItem value="watches">Luxury Watches</SelectItem>
                      <SelectItem value="custom">Custom Design</SelectItem>
                      <SelectItem value="investment">Investment Pieces</SelectItem>
                      <SelectItem value="consultation">General Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-luxury-gray-700 mb-2">
                    Budget Range
                  </label>
                  <Select>
                    <SelectTrigger className="border-luxury-gray-300">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                      <SelectItem value="15k-50k">$15,000 - $50,000</SelectItem>
                      <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                      <SelectItem value="100k+">$100,000+</SelectItem>
                      <SelectItem value="consultation">Just browsing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-luxury-gray-700 mb-2">
                    Preferred Appointment Time
                  </label>
                  <Select>
                    <SelectTrigger className="border-luxury-gray-300">
                      <SelectValue placeholder="Select preferred time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (9AM - 12PM)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
                      <SelectItem value="evening">Evening (5PM - 8PM)</SelectItem>
                      <SelectItem value="weekend">Weekend</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-black font-semibold py-3">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Appointment
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* VIP Contact */}
            <Card className="bg-luxury-black text-white border-0 luxury-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Star className="h-6 w-6 text-luxury-gold mr-3" />
                  <h3 className="text-xl font-playfair font-bold">VIP Concierge</h3>
                </div>
                <p className="text-luxury-gray-300 mb-6">
                  For our most valued clients requiring immediate assistance
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-luxury-gold mr-3" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-luxury-gold mr-3" />
                    <span>vip@elegance-boutique.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location & Hours */}
            <Card className="luxury-shadow border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-playfair font-bold text-luxury-black mb-6">
                  Boutique Location
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-luxury-gold mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-luxury-black">Madison Avenue Flagship</p>
                      <p className="text-luxury-gray-600">
                        789 Madison Avenue<br />
                        New York, NY 10065<br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-luxury-gold mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-luxury-black mb-2">Boutique Hours</p>
                      <div className="text-luxury-gray-600 space-y-1 text-sm">
                        <p>Monday - Thursday: 10:00 AM - 7:00 PM</p>
                        <p>Friday - Saturday: 10:00 AM - 8:00 PM</p>
                        <p>Sunday: 12:00 PM - 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Services */}
            <Card className="luxury-shadow border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-playfair font-bold text-luxury-black mb-6">
                  Additional Services
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-luxury-gold/10 rounded-lg">
                    <Calendar className="h-5 w-5 text-luxury-gold mr-3" />
                    <span className="font-medium">Private After-Hours Appointments</span>
                  </div>
                  <div className="flex items-center p-3 bg-luxury-gold/10 rounded-lg">
                    <Phone className="h-5 w-5 text-luxury-gold mr-3" />
                    <span className="font-medium">24/7 Concierge Support</span>
                  </div>
                  <div className="flex items-center p-3 bg-luxury-gold/10 rounded-lg">
                    <Star className="h-5 w-5 text-luxury-gold mr-3" />
                    <span className="font-medium">White Glove Home Delivery</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="luxury-shadow border-0 overflow-hidden">
            <div className="h-96 bg-luxury-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-luxury-gold mx-auto mb-4" />
                <p className="text-luxury-gray-600 font-medium">
                  Interactive map would be embedded here
                </p>
                <p className="text-sm text-luxury-gray-500 mt-2">
                  789 Madison Avenue, New York, NY 10065
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}