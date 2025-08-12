import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Rodriguez",
    location: "South Austin",
    content: "Exceptional service from start to finish. The team was professional, cleaned up perfectly, and our new roof looks amazing. Highly recommend!",
    rating: 5,
    service: "Roof Replacement",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b987?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "James Wilson",
    location: "Cedar Park",
    content: "Quick response for emergency leak repair during the storm. Fixed the problem immediately and followed up to ensure everything was perfect.",
    rating: 5,
    service: "Emergency Repair",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Lisa Thompson",
    location: "Round Rock",
    content: "Professional team, fair pricing, and quality work. They handled our insurance claim smoothly and kept us informed throughout the process.",
    rating: 5,
    service: "Insurance Claim",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Robert Chen",
    location: "Georgetown",
    content: "Premier Roofing Pros exceeded our expectations. Great communication, arrived on time, and the final result is outstanding. Worth every penny!",
    rating: 5,
    service: "Roof Installation",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Sarah Johnson",
    location: "Pflugerville",
    content: "Had multiple quotes but Premier Roofing Pros stood out with their professionalism and detailed explanation. The work was completed flawlessly.",
    rating: 5,
    service: "Roof Repair",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Michael Davis",
    location: "Leander",
    content: "Storm damaged our roof badly. Premier Roofing Pros responded within hours, provided emergency tarping, and completed repairs quickly. Fantastic service!",
    rating: 5,
    service: "Storm Damage",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  }
];

export default function Testimonials() {
  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from satisfied customers across Austin
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative bg-gradient-to-br from-white to-gray-50 hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              {/* Glass morphism effect */}
              <div className="absolute inset-0 bg-white/40 backdrop-blur-sm border border-white/20"></div>
              
              <CardContent className="relative p-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-12 h-12 text-primary" />
                </div>
                
                {/* Rating */}
                <div className="mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                {/* Content */}
                <blockquote className="text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Customer Info */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                    <p className="text-xs text-primary font-medium">{testimonial.service}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-primary rounded-2xl p-8 text-white text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-blue-100">Average Rating</div>
              <div className="flex justify-center mt-2">
                {renderStars(5)}
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2,500+</div>
              <div className="text-blue-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Would Recommend</div>
            </div>
          </div>
        </div>

        {/* Reviews Platforms */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Find us on major review platforms:</p>
          <div className="flex justify-center space-x-8 text-gray-400">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">A+</div>
              <div className="text-sm">BBB Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4.9★</div>
              <div className="text-sm">Google Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">5.0★</div>
              <div className="text-sm">Angie's List</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4.8★</div>
              <div className="text-sm">Yelp</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}