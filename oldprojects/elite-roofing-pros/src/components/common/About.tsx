"use client";
import { CheckCircle, Award, Users, Clock } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: CheckCircle,
      title: "Quality Craftsmanship",
      description: "Every project completed with attention to detail and premium materials"
    },
    {
      icon: Award,
      title: "Honest Pricing",
      description: "Transparent, competitive pricing with no hidden fees or surprises"
    },
    {
      icon: Users,
      title: "Customer Satisfaction",
      description: "Your satisfaction is our priority - we stand behind every job"
    }
  ];

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "100%", label: "Satisfaction Rate" },
    { number: "25", label: "Year Warranty" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Elite Roofing Pros
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Elite Roofing Pros has been serving Springfield and surrounding areas for over 15 years. 
              Founded by master roofer Mike Thompson, we've built our reputation on quality workmanship, 
              honest pricing, and standing behind every job we complete.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              To provide exceptional roofing services that protect your most important investment - 
              your home or business - with integrity, craftsmanship, and reliability you can trust.
            </p>

            {/* Values */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <value.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats & Image */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-lg mb-8">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=80"
                alt="Elite Roofing Pros team"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}