"use client";
import { Home, Wrench, Waves, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      icon: Home,
      name: "Roof Replacement",
      description: "Complete roof replacement using premium materials with industry-leading warranties. Transform your home's protection and curb appeal.",
      features: ["Premium shingles", "25-year warranty", "Free inspection"],
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&auto=format&fit=crop&q=80"
    },
    {
      icon: Wrench,
      name: "Roof Repair",
      description: "Expert repair services for leaks, storm damage, and general wear. Fast response times to protect your property from further damage.",
      features: ["Same-day service", "Emergency repairs", "Insurance claims assistance"],
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop&q=80"
    },
    {
      icon: Waves,
      name: "Gutter Installation",
      description: "Professional gutter installation and replacement to protect your foundation and landscaping from water damage.",
      features: ["Seamless gutters", "Leaf protection", "Proper drainage design"],
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Roofing Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From complete roof replacements to emergency repairs, we provide comprehensive 
            roofing solutions for residential and commercial properties.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              {/* Service Image */}
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                </div>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-900">Contact for Quote</span>
                  <Button variant="outline" size="sm" className="group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need Emergency Roofing Service?</h3>
            <p className="text-blue-100 mb-6">
              Available 24/7 for storm damage and emergency repairs. Don't wait - protect your property now.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Call Emergency Line: (555) 123-ROOF
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}