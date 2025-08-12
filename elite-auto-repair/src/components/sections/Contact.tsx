"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock, Mail, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["123 Auto Repair Lane", "Your City, ST 12345"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["(555) 123-4567", "Call us today!"]
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 8AM-6PM", "Sat: 8AM-4PM, Sun: Closed"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@eliteautorepair.com", "Quick response guaranteed"]
    }
  ];

  return (
    <section id="contact" className="py-16 bg-white relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=1920")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Get In <span className="text-[#F97316]">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Schedule your service or get a free estimate today
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white rounded-t-lg">
                <CardTitle className="text-2xl">Schedule Your Service</CardTitle>
                <p className="text-blue-100">
                  Fill out the form below and we&apos;ll get back to you within 24 hours
                </p>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="border-gray-300 focus:border-[#1E3A8A]"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 123-4567"
                        className="border-gray-300 focus:border-[#1E3A8A]"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="border-gray-300 focus:border-[#1E3A8A]"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#1E3A8A] focus:border-[#1E3A8A]"
                    >
                      <option value="">Select a service...</option>
                      <option value="oil-change">Oil Change</option>
                      <option value="brake-repair">Brake Repair</option>
                      <option value="engine-diagnostics">Engine Diagnostics</option>
                      <option value="transmission-service">Transmission Service</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe the issue or service you need..."
                      rows={4}
                      className="border-gray-300 focus:border-[#1E3A8A]"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-[#F97316] hover:bg-[#ea580c] text-white text-lg py-3"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="hover-lift border-0 shadow-md h-full">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-[#1E3A8A] rounded-full flex items-center justify-center mx-auto mb-4">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 text-sm">
                          {detail}
                        </p>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Embedded Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="overflow-hidden shadow-xl border-0">
                <div className="h-64 bg-gray-200 relative">
                  {/* Placeholder for embedded map */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6]">
                    <div className="text-center text-white">
                      <MapPin className="w-12 h-12 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Find Us Here</h3>
                      <p className="text-blue-100">
                        123 Auto Repair Lane<br />
                        Your City, ST 12345
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Emergency Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="bg-[#F97316] text-white border-0 shadow-xl">
                <CardContent className="p-6 text-center">
                  <Phone className="w-8 h-8 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Need Emergency Service?
                  </h3>
                  <p className="mb-4 text-orange-100">
                    Call us now for urgent automotive issues
                  </p>
                  <a
                    href="tel:+1234567890"
                    className="inline-flex items-center px-6 py-3 bg-white text-[#F97316] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    (555) 123-4567
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}