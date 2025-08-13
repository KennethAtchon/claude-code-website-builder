import { Button } from "@/components/ui/button";
import { Shield, Award, Clock } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-blue-600 to-secondary min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Professional{" "}
              <span className="text-accent">Roofing</span>{" "}
              Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Quality workmanship you can trust for over 15 years
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center">
                <Shield className="w-6 h-6 mr-2 text-accent" />
                <span className="text-sm font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center">
                <Award className="w-6 h-6 mr-2 text-accent" />
                <span className="text-sm font-medium">25+ Years Experience</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-6 h-6 mr-2 text-accent" />
                <span className="text-sm font-medium">Lifetime Warranty</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 text-lg" asChild>
                <Link href="#contact">Get Free Estimate</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 text-lg"
                asChild
              >
                <Link href="#emergency">Emergency Service</Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional roofing work"
                className="w-full h-[500px] object-cover"
              />
              {/* Overlay card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Your Roof, Our Promise
                </h3>
                <p className="text-gray-600 mb-4">
                  Trusted roofing experts delivering exceptional craftsmanship and reliable service.
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-primary font-semibold">Available 24/7</span>
                  <span className="text-gray-500">Emergency Response</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
}