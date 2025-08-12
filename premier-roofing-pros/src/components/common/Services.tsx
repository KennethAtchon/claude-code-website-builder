import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Wrench, Search, Cloud, Check } from "lucide-react";

const services = [
  {
    name: "Roof Installation",
    description: "Complete new roof installations with premium materials and expert craftsmanship",
    features: ["Premium Materials", "Expert Installation", "Warranty Included", "Insurance Assistance"],
    icon: Home,
    starting_price: "$8,500",
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Roof Repair",
    description: "Fast, reliable repairs for leaks, storm damage, and general maintenance",
    features: ["Same-Day Service", "Emergency Response", "Quality Materials", "Guaranteed Work"],
    icon: Wrench,
    starting_price: "$275",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Roof Inspection",
    description: "Comprehensive inspections to identify issues before they become costly problems",
    features: ["Detailed Report", "Photo Documentation", "Maintenance Plan", "Free for Estimates"],
    icon: Search,
    starting_price: "Free",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Storm Damage",
    description: "Specialized storm damage assessment and insurance claim assistance",
    features: ["Insurance Claims", "Emergency Tarping", "Full Documentation", "Direct Billing"],
    icon: Cloud,
    starting_price: "Insurance Covered",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Roofing Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive roofing solutions for residential and commercial properties in Austin, Texas
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-primary rounded-full p-3">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute top-4 right-4 bg-white rounded-lg px-3 py-1">
                    <span className="text-sm font-bold text-primary">
                      Starting at {service.starting_price}
                    </span>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">{service.name}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <Check className="w-4 h-4 text-secondary mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="flex-1">
                      Get Quote
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need Emergency Roofing Service?
          </h3>
          <p className="text-gray-600 mb-6">
            Available 24/7 for emergency repairs and storm damage response
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Call (555) ROOF-PRO
            </Button>
            <Button size="lg" variant="outline">
              Request Emergency Service
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}