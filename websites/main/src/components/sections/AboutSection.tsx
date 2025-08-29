import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Star, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/animations/AnimatedSection";

const features = [
  "Water heater installation & repair",
  "Professional drain cleaning", 
  "Complete pipe repair & installation",
  "24/7 weekend emergency services",
  "Complete bathroom remodeling",
  "Licensed & insured professionals"
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="space-y-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex text-yellow-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-foreground font-medium">5.0 Rating • 76+ Reviews</span>
              </div>

              <h2 className="text-4xl font-bold text-foreground">
                Professional Plumbing Services You Can Trust
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                B.E.T. Plumbing LLC, owned by Brandon Tolkacevic, has been serving Pittsburgh and surrounding areas 
                with professional plumbing services. We specialize in water heater installation, drain cleaning, 
                pipe repair, complete bathroom remodels, and emergency services.
              </p>

              <p className="text-muted-foreground">
                Operating Monday-Friday 7AM-5PM with 24-hour weekend availability, our commitment to quality work 
                and customer satisfaction has earned us 5.0 stars on Google with over 76 reviews.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/portfolio">
                    View Our Work
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/about">
                    Learn More About Us
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-6">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/2021-03-09.jpg"
                  alt="Professional plumber Brandon Tolkacevic at work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-foreground">Mon-Fri</div>
                    <div className="text-sm text-muted-foreground">7AM - 5PM</div>
                    <div className="text-xs text-primary font-medium">24/7 Weekends</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-foreground">Local</div>
                    <div className="text-sm text-muted-foreground">Pittsburgh Area</div>
                    <div className="text-xs text-primary font-medium">Allegheny County</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}