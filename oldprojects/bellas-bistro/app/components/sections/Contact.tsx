"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { restaurantData } from '@/app/lib/data';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';

export default function Contact() {
  const { contact_info } = restaurantData;

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
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
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mb-8" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to experience authentic Italian cuisine? Get in touch with us to make a reservation, 
            plan your special event, or ask about our catering services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border border-amber-200 shadow-xl">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl text-amber-900">
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-amber-800 mb-2 block">
                      Name *
                    </label>
                    <Input 
                      placeholder="Your Name"
                      className="border-amber-200 focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-amber-800 mb-2 block">
                      Phone
                    </label>
                    <Input 
                      placeholder="Your Phone Number"
                      className="border-amber-200 focus:border-amber-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-amber-800 mb-2 block">
                    Email *
                  </label>
                  <Input 
                    type="email"
                    placeholder="your.email@example.com"
                    className="border-amber-200 focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-amber-800 mb-2 block">
                    Service Interest
                  </label>
                  <select className="w-full px-3 py-2 border border-amber-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500">
                    <option value="">Select a service...</option>
                    <option value="reservation">Dinner Reservation</option>
                    <option value="private">Private Event</option>
                    <option value="catering">Catering Services</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-amber-800 mb-2 block">
                    Message *
                  </label>
                  <Textarea 
                    placeholder="Tell us about your reservation needs, event details, or any questions you have..."
                    rows={5}
                    className="border-amber-200 focus:border-amber-500"
                  />
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold py-6 text-lg"
                >
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <Card className="bg-white/80 backdrop-blur-sm border border-amber-200 shadow-xl">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl text-amber-900">
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 flex items-center justify-center text-white">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-1">Phone</h4>
                    <p className="text-gray-700">{contact_info.phone}</p>
                    <p className="text-sm text-gray-600">Call for reservations & inquiries</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 flex items-center justify-center text-white">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-1">Email</h4>
                    <p className="text-gray-700">{contact_info.email}</p>
                    <p className="text-sm text-gray-600">For events & catering inquiries</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 flex items-center justify-center text-white">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-1">Address</h4>
                    <p className="text-gray-700">
                      {contact_info.address.street}<br />
                      {contact_info.address.city}, {contact_info.address.state} {contact_info.address.zip}
                    </p>
                    <p className="text-sm text-gray-600">Heart of downtown</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card className="bg-white/80 backdrop-blur-sm border border-amber-200 shadow-xl">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl text-amber-900 flex items-center gap-3">
                  <Clock className="text-orange-600" size={24} />
                  Operating Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(contact_info.hours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between items-center py-2 border-b border-amber-100 last:border-b-0">
                      <span className="font-medium text-amber-900 capitalize">{day}</span>
                      <span className={`${hours === 'Closed' ? 'text-red-600' : 'text-gray-700'} font-medium`}>
                        {hours}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-white/80 backdrop-blur-sm border border-amber-200 shadow-xl">
              <CardContent className="p-6">
                <h4 className="font-playfair text-xl font-semibold text-amber-900 mb-4">
                  Follow Us
                </h4>
                <div className="flex gap-4">
                  {contact_info.social_media.facebook && (
                    <a
                      href={contact_info.social_media.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                    >
                      <Facebook size={20} />
                    </a>
                  )}
                  {contact_info.social_media.instagram && (
                    <a
                      href={contact_info.social_media.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                    >
                      <Instagram size={20} />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white/80 backdrop-blur-sm border border-amber-200 shadow-xl overflow-hidden">
            <div className="h-96 bg-gradient-to-br from-amber-200 to-orange-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-amber-700 mx-auto mb-4" />
                <h3 className="font-playfair text-2xl font-bold text-amber-900 mb-2">
                  Find Us Downtown
                </h3>
                <p className="text-amber-800">
                  Interactive map would be embedded here<br />
                  showing our location at {contact_info.address.street}
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}