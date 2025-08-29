import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Star, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/animations/AnimatedSection";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-yellow-400">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-white font-medium">5.0 Stars • 76+ Reviews</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Professional Plumbing Services You Can Trust
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed">
                Brandon Tolkacevic and the B.E.T. Plumbing team serve Pittsburgh and Allegheny County 
                with fast, reliable repairs and installations. Available 24/7 on weekends - we respond within hours, not days.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
                  <Link href="tel:+14127336355">
                    <Phone className="w-5 h-5 mr-3" />
                    Call Now: (412) 733-6355
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-black hover:bg-white hover:text-primary text-lg px-8 py-6">
                  <Link href="/contact">
                    Get Free Estimate
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-yellow-400" />
                  <div>
                    <p className="font-semibold">24/7 Emergency</p>
                    <p className="text-sm opacity-90">Weekend Availability</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-yellow-400" />
                  <div>
                    <p className="font-semibold">Local Service</p>
                    <p className="text-sm opacity-90">Pittsburgh & Allegheny County</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                  <div>
                    <p className="font-semibold">Licensed & Insured</p>
                    <p className="text-sm opacity-90">Professional Service</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/2021-02-01.jpg"
                  alt="Professional plumber working on pipes"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white text-primary p-6 rounded-lg shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-yellow-400 text-primary p-6 rounded-lg shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold">76+</div>
                  <div className="text-sm text-primary/80">Happy Customers</div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}