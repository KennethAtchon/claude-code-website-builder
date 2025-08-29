import React from "react";
import Link from "next/link";
import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/animations/AnimatedSection";

const testimonials = [
  {
    name: "Dandelion Nails",
    rating: 5,
    review: "✨ I couldn't be happier with the service I received from BET Plumbing.",
    platform: "Google Reviews"
  },
  {
    name: "M D",
    rating: 5,
    review: "BET is literally the fastest plumber service that I've ever encountered.",
    platform: "Google Reviews"
  },
  {
    name: "LeQuira Hutson",
    rating: 5,
    review: "Prices are fair and quality of work is guaranteed satisfaction.",
    platform: "Google Reviews"
  },
  {
    name: "Yelp Customer",
    rating: 5,
    review: "Excellent work, excellent response time and continued communication. I would highly recommend them for any plumbing job.",
    platform: "Yelp"
  },
  {
    name: "Home Advisor Review",
    rating: 5,
    review: "Brandon is a true professional and knows what he is doing when it comes to plumbing. Quick, reliable young man. I highly recommend BET for all of your plumbing needs.",
    platform: "Home Advisor"
  },
  {
    name: "Pittsburgh Resident",
    rating: 5,
    review: "Same day service, professional work, and fair pricing. Brandon arrived on time and fixed our water heater issue quickly. Will definitely call again.",
    platform: "Google Reviews"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex text-yellow-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 fill-current" />
                ))}
              </div>
              <span className="text-xl font-semibold text-foreground">5.0 Stars</span>
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real testimonials from satisfied customers across Pittsburgh and Allegheny County. 
              See why homeowners trust B.E.T. Plumbing for their plumbing needs.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-yellow-500">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">{testimonial.platform}</span>
                  </div>
                  
                  <blockquote className="text-foreground mb-4 leading-relaxed">
                    "{testimonial.review}"
                  </blockquote>
                  
                  <div className="flex items-center justify-between">
                    <cite className="font-semibold text-primary not-italic">
                      {testimonial.name}
                    </cite>
                    <div className="text-sm text-muted-foreground">
                      ⭐ {testimonial.rating}.0
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="text-center space-y-6">
            <div className="bg-secondary rounded-lg p-8">
              <div className="flex items-center justify-center space-x-6 mb-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">76+</div>
                  <div className="text-sm text-muted-foreground">Google Reviews</div>
                </div>
                <div className="w-px h-12 bg-border"></div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">5.0</div>
                  <div className="text-sm text-muted-foreground">Average Rating</div>
                </div>
                <div className="w-px h-12 bg-border"></div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction</div>
                </div>
              </div>
              
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link 
                  href="https://www.google.com/maps/place/B.E.T.+Plumbing+LLC"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read All Reviews
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}