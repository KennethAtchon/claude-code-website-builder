import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, Star, Clock } from "lucide-react";

const stats = [
  { number: "2,500+", label: "Satisfied Customers", icon: Users },
  { number: "15+", label: "Years Experience", icon: Calendar },
  { number: "98%", label: "Customer Satisfaction", icon: Star },
  { number: "24/7", label: "Emergency Service", icon: Clock }
];

const certifications = [
  "GAF Master Elite",
  "CertainTeed SELECT", 
  "OSHA Certified",
  "BBB A+ Rating"
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Premier Roofing Pros
            </h2>
            
            <div className="prose prose-lg text-gray-600 mb-8">
              <p className="mb-6">
                Founded by Master Roofer David Martinez, Premier Roofing Pros has been Austin's trusted roofing partner since 2008. What started as a commitment to honest work and quality craftsmanship has grown into a team of certified professionals dedicated to protecting Texas homes and businesses.
              </p>
              
              <div className="bg-primary/5 border-l-4 border-primary p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-700 italic">
                  To provide exceptional roofing services with integrity, quality, and customer satisfaction at the heart of everything we do.
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Certifications & Awards</h3>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Roofing team at work"
                className="rounded-lg shadow-lg"
              />
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Quality roofing materials"
                  className="rounded-lg shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Professional roofing inspection"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-2xl p-6 max-w-xs">
              <h4 className="font-bold text-gray-900 mb-2">Licensed & Insured</h4>
              <p className="text-sm text-gray-600">
                Fully licensed and insured for your protection and peace of mind.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="mb-4">
                      <IconComponent className="w-8 h-8 text-primary mx-auto" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}