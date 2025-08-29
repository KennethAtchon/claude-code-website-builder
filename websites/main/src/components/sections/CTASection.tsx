import React from "react";
import Link from "next/link";
import { Phone, Clock, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/animations/AnimatedSection";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-yellow-400 mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-white font-medium">5.0 Stars • 76+ Reviews</span>
              </div>

              <h2 className="text-4xl font-bold leading-tight">
                Ready to Solve Your Plumbing Problems?
              </h2>
              
              <p className="text-xl text-white/90 leading-relaxed">
                Contact Brandon at B.E.T. Plumbing LLC today for fast, professional service. 
                Located at 121 Ingram Ave, Pittsburgh, we serve all of Allegheny County.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-yellow-400" />
                  <div>
                    <p className="font-semibold">Business Hours</p>
                    <p className="text-white/90">Monday-Friday 7AM-5PM</p>
                    <p className="text-sm text-yellow-400">24-hour weekend emergency services available</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-yellow-400" />
                  <div>
                    <p className="font-semibold">Service Area</p>
                    <p className="text-white/90">Pittsburgh, Ingram, and all of Allegheny County</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
                  <Link href="tel:+14127336355">
                    <Phone className="w-5 h-5 mr-3" />
                    Call (412) 733-6355
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-black hover:bg-white hover:text-primary text-lg px-8 py-6">
                  <Link href="/contact">
                    Schedule Service
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-6">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Emergency Service</h3>
                  <p className="text-white/90 mb-6">
                    Plumbing emergency? We're available 24/7 on weekends for urgent repairs. 
                    Fast response times when you need us most.
                  </p>
                  <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
                    <Link href="tel:+14127336355">
                      <Phone className="w-4 h-4 mr-2" />
                      Emergency Call
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Free Estimates</h3>
                  <p className="text-white/90 mb-6">
                    Get a free estimate for your plumbing project. We provide honest, 
                    transparent pricing with no hidden fees.
                  </p>
                  <Button asChild variant="outline" className="border-white text-black hover:bg-white hover:text-primary">
                    <Link href="/contact">
                      Request Estimate
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}