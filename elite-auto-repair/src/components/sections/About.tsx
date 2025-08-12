"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Clock, Shield } from "lucide-react";

export default function About() {
  const stats = [
    { icon: Clock, value: "20+", label: "Years Experience" },
    { icon: Users, value: "5000+", label: "Happy Customers" },
    { icon: Award, value: "50+", label: "Certifications" },
    { icon: Shield, value: "100%", label: "Satisfaction Rate" },
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            About <span className="text-[#F97316]">Elite Auto Repair</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Your trusted automotive partner for over two decades
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=600"
                alt="Elite Auto Repair team and workspace"
                className="w-full h-96 object-cover image-hover-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/20 to-[#F97316]/20"></div>
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-xl border border-gray-200"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1E3A8A] mb-2">20+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900">
              Serving Our Community Since 2004
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              At Elite Auto Repair, we&apos;ve been proudly serving our local community for over 20 years. 
              Our team of certified mechanics combines decades of experience with the latest diagnostic 
              equipment to provide reliable, honest automotive services.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              From routine maintenance to complex repairs, we treat every vehicle with the same care 
              and attention we&apos;d give our own. Our commitment to quality workmanship and exceptional 
              customer service has made us the trusted choice for thousands of satisfied customers.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center bg-[#1E3A8A]/10 px-4 py-2 rounded-full">
                <Shield className="w-5 h-5 text-[#1E3A8A] mr-2" />
                <span className="text-sm font-medium text-[#1E3A8A]">Licensed & Insured</span>
              </div>
              <div className="flex items-center bg-[#F97316]/10 px-4 py-2 rounded-full">
                <Award className="w-5 h-5 text-[#F97316] mr-2" />
                <span className="text-sm font-medium text-[#F97316]">ASE Certified</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="text-center hover-lift border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-[#1E3A8A] rounded-full flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-[#1E3A8A] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}