"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const categories = ["All", "Residential", "Commercial", "Emergency Repairs", "New Construction"];

const portfolioItems = [
  {
    id: 1,
    title: "Modern Family Home Roof Replacement",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    beforeImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Complete shingle roof replacement with premium materials",
    location: "Austin, TX"
  },
  {
    id: 2,
    title: "Commercial Office Complex",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Large-scale commercial roofing project with EPDM membrane",
    location: "Cedar Park, TX"
  },
  {
    id: 3,
    title: "Emergency Storm Damage Repair",
    category: "Emergency Repairs",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    beforeImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2ac8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Fast emergency response after severe hail damage",
    location: "Round Rock, TX"
  },
  {
    id: 4,
    title: "New Construction - Luxury Home",
    category: "New Construction",
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Custom tile roofing for new luxury construction",
    location: "Georgetown, TX"
  },
  {
    id: 5,
    title: "Historic Home Restoration",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Careful restoration maintaining historical authenticity",
    location: "Austin, TX"
  },
  {
    id: 6,
    title: "Industrial Warehouse Roofing",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Metal roofing installation for industrial facility",
    location: "Pflugerville, TX"
  },
  {
    id: 7,
    title: "Residential Shingle Upgrade",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    beforeImage: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Premium architectural shingle installation",
    location: "Leander, TX"
  },
  {
    id: 8,
    title: "Emergency Leak Repair",
    category: "Emergency Repairs",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "24-hour emergency response for severe leak",
    location: "Austin, TX"
  }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showBeforeAfter, setShowBeforeAfter] = useState<number | null>(null);

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Work Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Explore our recent roofing projects across Austin and surrounding areas
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={showBeforeAfter === item.id && item.beforeImage ? item.beforeImage : item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-gray-900">
                    {item.category}
                  </Badge>
                </div>
                
                {/* Before/After Toggle */}
                {item.beforeImage && (
                  <div className="absolute top-4 right-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/90 hover:bg-white text-xs"
                      onClick={() => setShowBeforeAfter(
                        showBeforeAfter === item.id ? null : item.id
                      )}
                    >
                      {showBeforeAfter === item.id ? "After" : "Before"}
                    </Button>
                  </div>
                )}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-3">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    📍 {item.location}
                  </span>
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-600 mb-6">
            Let us transform your roof with the same quality and care shown in our portfolio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Get Free Estimate
            </Button>
            <Button size="lg" variant="outline">
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}