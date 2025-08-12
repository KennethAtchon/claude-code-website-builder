"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Award, Target } from "lucide-react";
import { PLACEHOLDER_IMAGES } from "@/lib/constants";

const values = [
  {
    icon: CheckCircle,
    title: "Quality Craftsmanship",
    description: "Every project meets the highest standards of excellence with attention to detail."
  },
  {
    icon: Users,
    title: "Honest & Transparent Pricing",
    description: "No hidden fees or surprise costs. We provide clear, upfront pricing on all services."
  },
  {
    icon: Target,
    title: "Customer-First Service",
    description: "Your satisfaction is our priority. We go above and beyond to exceed expectations."
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Summit Roofing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Denver&apos;s most trusted roofing contractor since 2003
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Story
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded in 2003 by master roofer Mike Johnson, Summit Roofing Solutions has built a reputation as Denver&apos;s most trusted roofing contractor. Starting as a small family business, we&apos;ve grown to become the region&apos;s leading roofing specialists while maintaining our commitment to quality craftsmanship and personal service.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our team of certified professionals brings over 200 years of combined experience to every project. From residential repairs to large commercial installations, we approach each job with the same dedication to excellence that has made us Colorado&apos;s premier roofing company.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-blue-600">20+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-blue-600">5000+</div>
                <div className="text-gray-600">Roofs Completed</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-gray-600">Emergency Service</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={PLACEHOLDER_IMAGES.about}
                alt="Summit Roofing team at work"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
              <Award className="h-8 w-8 mb-2" />
              <div className="font-bold">Licensed & Insured</div>
              <div className="text-sm text-blue-100">Colorado State License</div>
            </div>
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 bg-white p-8 rounded-2xl shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            To protect Colorado homes and businesses with superior roofing solutions, honest pricing, 
            and unmatched customer service that builds lasting relationships.
          </p>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Values
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-8 text-center">
                      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Icon className="h-8 w-8 text-blue-600" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">
                        {value.title}
                      </h4>
                      <p className="text-gray-600">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}