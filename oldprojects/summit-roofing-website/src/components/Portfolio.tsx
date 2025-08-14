"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink } from "lucide-react";
import { PLACEHOLDER_IMAGES } from "@/lib/constants";

const portfolioItems = [
  {
    id: 1,
    title: "Modern Residential Roof",
    category: "Residential Projects",
    image: PLACEHOLDER_IMAGES.portfolio1,
    description: "Complete roof replacement with architectural shingles"
  },
  {
    id: 2,
    title: "Commercial Warehouse",
    category: "Commercial Projects",
    image: PLACEHOLDER_IMAGES.portfolio2,
    description: "Large-scale commercial roofing installation"
  },
  {
    id: 3,
    title: "Storm Damage Repair",
    category: "Storm Damage Repairs",
    image: PLACEHOLDER_IMAGES.portfolio3,
    description: "Hail damage restoration and repair"
  },
  {
    id: 4,
    title: "Historic Home Restoration",
    category: "Residential Projects",
    image: PLACEHOLDER_IMAGES.portfolio1,
    description: "Careful restoration of historic Denver home"
  },
  {
    id: 5,
    title: "Office Complex Roof",
    category: "Commercial Projects",
    image: PLACEHOLDER_IMAGES.portfolio2,
    description: "Multi-building commercial roofing project"
  },
  {
    id: 6,
    title: "Emergency Leak Repair",
    category: "Storm Damage Repairs",
    image: PLACEHOLDER_IMAGES.portfolio3,
    description: "24-hour emergency repair service"
  }
];

const categories = ["All Projects", "Residential Projects", "Commercial Projects", "Storm Damage Repairs"];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
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
            Our Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the quality and craftsmanship that sets Summit Roofing apart
          </p>
        </motion.div>

        {/* Filter Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Badge
              key={category}
              variant="outline"
              className="px-6 py-2 cursor-pointer hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors"
            >
              {category}
            </Badge>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg bg-white">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white w-full">
                    <Badge className="mb-3 bg-blue-600">
                      {item.category}
                    </Badge>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-200 text-sm mb-4">{item.description}</p>
                    <Button size="sm" variant="secondary">
                      View Details
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Card Content (Visible on Mobile) */}
                <div className="p-6 lg:hidden">
                  <Badge className="mb-3 bg-blue-600">
                    {item.category}
                  </Badge>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <Button size="sm" className="w-full">
                    View Details
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Before/After Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Transformation Gallery
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900">Before</h4>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop&crop=entropy&auto=format"
                  alt="Damaged roof before repair"
                  className="w-full h-64 object-cover"
                />
              </div>
              <p className="text-gray-600">Storm-damaged roof with missing shingles and leaks</p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900">After</h4>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={PLACEHOLDER_IMAGES.portfolio1}
                  alt="Beautiful restored roof"
                  className="w-full h-64 object-cover"
                />
              </div>
              <p className="text-gray-600">Completely restored with premium materials and warranty</p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Contact us today for a free estimate on your roofing project
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Get Free Estimate
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}