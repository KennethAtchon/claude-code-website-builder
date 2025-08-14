"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { Award, Users, Calendar, Shield, ArrowRight } from "lucide-react";

export default function About() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const teamMembers = [
    {
      name: "Michael Rodriguez",
      role: "Founder & Lead Contractor",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      bio: "With over 20 years in construction and home renovation, Mike founded Premier Home Renovations with a vision to deliver exceptional craftsmanship and customer service.",
      certifications: ["Licensed General Contractor", "OSHA Certified", "Lead-Safe Certified"]
    },
    {
      name: "Sarah Chen",
      role: "Design Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b442",
      bio: "Sarah brings 15 years of interior design experience, specializing in creating functional and beautiful spaces that reflect each client's unique style.",
      certifications: ["NCIDQ Certified", "LEED Green Associate", "Kitchen & Bath Design"]
    },
    {
      name: "David Thompson",
      role: "Project Manager", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      bio: "David ensures every project runs smoothly from start to finish, coordinating teams and maintaining our high standards of quality and timeline adherence.",
      certifications: ["PMP Certified", "Construction Management", "Safety Coordinator"]
    },
    {
      name: "Lisa Martinez",
      role: "Client Relations Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80", 
      bio: "Lisa is your main point of contact throughout the renovation process, ensuring clear communication and that your vision becomes reality.",
      certifications: ["Customer Success Specialist", "Certified Renovation Consultant", "Project Coordination"]
    }
  ];

  const certifications = [
    {
      title: "Better Business Bureau A+ Rating",
      description: "Maintaining the highest standards of business ethics and customer service.",
      icon: "🏆"
    },
    {
      title: "Licensed & Bonded Contractors",
      description: "All our contractors are fully licensed, bonded, and insured for your protection.",
      icon: "🛡️"
    },
    {
      title: "EPA Lead-Safe Certified",
      description: "Certified in safe renovation practices for homes built before 1978.",
      icon: "✅"
    },
    {
      title: "OSHA Safety Certified",
      description: "Committed to maintaining the highest safety standards on every job site.",
      icon: "🔒"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Team Members" }
  ];

  if (!isMounted) return null;

  return (
    <div className="pt-8">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <Badge className="mb-4 bg-accent text-accent-foreground">
                About Our Company
              </Badge>
              <h1 className="font-playfair text-4xl md:text-6xl font-semibold text-primary mb-6">
                Building Dreams, Creating Homes
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                For over 15 years, Premier Home Renovations has been transforming houses into dream homes 
                throughout New Jersey. We combine expert craftsmanship with personalized service to deliver 
                exceptional results that exceed expectations.
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
                  alt="Premier Home Renovations team at work"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">500+</div>
                    <div className="text-sm text-gray-600">Happy Families</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <Image
                src="https://images.unsplash.com/photo-1448630360428-65456885c650"
                alt="Premier Home Renovations history"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </AnimatedSection>

            <AnimatedSection>
              <div>
                <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Premier Home Renovations was founded in 2008 by Michael Rodriguez, a third-generation 
                    craftsman with a passion for transforming homes. What started as a small family business 
                    has grown into one of New Jersey's most trusted renovation companies.
                  </p>
                  <p>
                    Our commitment to quality craftsmanship, transparent communication, and exceptional 
                    customer service has earned us hundreds of satisfied customers and countless referrals. 
                    We believe every home tells a story, and we're honored to help write the next chapter.
                  </p>
                  <p>
                    Today, our team of skilled professionals continues to uphold the same values and 
                    dedication to excellence that Mike instilled from day one. We're not just building 
                    beautiful spaces – we're building lasting relationships with our clients.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-white mb-4">
                By the Numbers
              </h2>
              <p className="text-primary-foreground/90 text-lg">
                Our track record speaks for itself
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label}>
                <div className="text-center text-white">
                  <div className="text-4xl md:text-6xl font-bold font-playfair mb-2">
                    {stat.number}
                  </div>
                  <div className="text-primary-foreground/90 text-lg">
                    {stat.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-playfair text-3xl md:text-5xl font-semibold text-primary mb-6">
                Meet Our Team
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our experienced professionals are dedicated to bringing your renovation dreams to life 
                with expertise, creativity, and attention to detail.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={member.name}>
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-lg text-primary mb-1">
                      {member.name}
                    </h3>
                    <p className="text-accent font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                    <div className="space-y-1">
                      {member.certifications.map((cert, certIndex) => (
                        <Badge key={certIndex} variant="secondary" className="text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-playfair text-3xl md:text-5xl font-semibold text-primary mb-6">
                Certifications & Awards
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our commitment to excellence is recognized through various industry certifications and awards.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <AnimatedSection key={cert.title}>
                <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{cert.icon}</div>
                    <h3 className="font-semibold text-lg text-primary mb-3">{cert.title}</h3>
                    <p className="text-gray-600 text-sm">{cert.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mb-6">
                  Our Process
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      step: "Discovery",
                      description: "We start with a thorough consultation to understand your vision, needs, and budget."
                    },
                    {
                      step: "Design",
                      description: "Our design team creates detailed plans and 3D renderings to visualize your project."
                    },
                    {
                      step: "Build", 
                      description: "Our skilled craftsmen bring the design to life with attention to every detail."
                    },
                    {
                      step: "Deliver",
                      description: "We complete a final walkthrough to ensure everything exceeds your expectations."
                    }
                  ].map((process, index) => (
                    <div key={process.step} className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold mr-4">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">{process.step}</h4>
                        <p className="text-gray-600">{process.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <Image
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
                alt="Renovation process"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="text-white">
              <h2 className="font-playfair text-3xl md:text-5xl font-semibold mb-6">
                Ready to Work Together?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
                Let's discuss your renovation project and how our experienced team can bring your vision to life.
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}