"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { Award, Users, Clock, Shield, CheckCircle, ArrowRight } from "lucide-react";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Michael Rodriguez",
      position: "Founder & Lead Contractor",
      experience: "25+ years",
      certifications: ["Master Roofer", "GAF Certified", "OSHA Certified"],
      description: "Michael founded Summit Roofing with a vision to provide honest, quality roofing services to the community."
    },
    {
      name: "Sarah Chen",
      position: "Project Manager",
      experience: "15+ years",
      certifications: ["Project Management", "Quality Control", "Customer Relations"],
      description: "Sarah ensures every project runs smoothly from initial consultation to final cleanup."
    },
    {
      name: "David Thompson",
      position: "Senior Roofer",
      experience: "20+ years",
      certifications: ["Commercial Roofing", "Safety Specialist", "Team Leader"],
      description: "David leads our field teams with expertise in both residential and commercial roofing."
    },
    {
      name: "Lisa Martinez",
      position: "Customer Service Manager",
      experience: "10+ years",
      certifications: ["Customer Service", "Insurance Claims", "Scheduling"],
      description: "Lisa coordinates all customer communications and ensures satisfaction at every step."
    }
  ];

  const certifications = [
    {
      name: "GAF Master Elite Contractor",
      description: "Only 3% of roofing contractors achieve this prestigious certification",
      icon: "🏆"
    },
    {
      name: "Better Business Bureau A+",
      description: "Highest rating for business ethics and customer satisfaction",
      icon: "⭐"
    },
    {
      name: "State Licensed Contractor",
      description: "Fully licensed for residential and commercial roofing work",
      icon: "📜"
    },
    {
      name: "Comprehensive Insurance",
      description: "Full liability and workers' compensation coverage",
      icon: "🛡️"
    }
  ];

  const milestones = [
    {
      year: "2010",
      title: "Company Founded",
      description: "Michael Rodriguez establishes Summit Roofing with a focus on quality and integrity."
    },
    {
      year: "2015",
      title: "1,000th Project",
      description: "Celebrated completing our 1,000th successful roofing project."
    },
    {
      year: "2018",
      title: "GAF Master Elite",
      description: "Achieved GAF Master Elite Contractor status, joining the top 3% nationwide."
    },
    {
      year: "2020",
      title: "Emergency Response Team",
      description: "Launched 24/7 emergency response team for storm damage repairs."
    },
    {
      year: "2023",
      title: "5,000+ Projects",
      description: "Reached milestone of 5,000+ completed projects with 99% customer satisfaction."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-dark-2 text-white py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About Summit Roofing
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Over a decade of excellence in roofing services. 
                Built on trust, powered by expertise, dedicated to your satisfaction.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-dark-1 mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-dark-2 mb-6">
                  Founded in 2010 by master roofer Michael Rodriguez, Summit Roofing began with a simple mission: 
                  to provide honest, reliable roofing services that homeowners and businesses could trust.
                </p>
                <p className="text-lg text-dark-2 mb-6">
                  What started as a small, family-owned business has grown into one of the region's most respected 
                  roofing companies, completing over 5,000 projects while maintaining our commitment to quality 
                  craftsmanship and exceptional customer service.
                </p>
                <p className="text-lg text-dark-2 mb-8">
                  Today, we're proud to be a GAF Master Elite Contractor, a distinction earned by less than 3% 
                  of roofing contractors nationwide. This achievement reflects our dedication to ongoing training, 
                  quality work, and customer satisfaction.
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Learn About Our Services <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
                  <div className="text-dark-2">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">99%</div>
                  <div className="text-dark-2">Customer Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">13+</div>
                  <div className="text-dark-2">Years in Business</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-dark-2">Emergency Service</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-light-2">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-1 mb-4">
                Meet Our Expert Team
              </h2>
              <p className="text-lg text-dark-2 max-w-2xl mx-auto">
                Our experienced professionals bring decades of combined expertise to every project.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 0.1}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-dark-1">{member.name}</CardTitle>
                    <CardDescription className="text-dark-2">{member.position}</CardDescription>
                    <Badge variant="outline">{member.experience}</Badge>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-dark-2">{member.description}</p>
                    <div>
                      <h4 className="font-semibold text-dark-1 mb-2">Certifications:</h4>
                      <div className="space-y-1">
                        {member.certifications.map((cert, idx) => (
                          <div key={idx} className="flex items-center text-sm text-dark-2">
                            <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                            {cert}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-1 mb-4">
                Licenses & Certifications
              </h2>
              <p className="text-lg text-dark-2 max-w-2xl mx-auto">
                Our commitment to excellence is recognized by industry leaders and regulatory bodies.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <AnimatedSection key={cert.name} delay={index * 0.1}>
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="text-4xl mb-4">{cert.icon}</div>
                    <CardTitle className="text-dark-1">{cert.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-dark-2">
                      {cert.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-light-2">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-1 mb-4">
                Our Journey
              </h2>
              <p className="text-lg text-dark-2 max-w-2xl mx-auto">
                Key milestones in our company's growth and commitment to excellence.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <AnimatedSection key={milestone.year} delay={index * 0.1}>
                <div className="flex items-start mb-8 last:mb-0">
                  <div className="flex-shrink-0 w-20 text-right mr-8">
                    <div className="text-2xl font-bold text-primary">{milestone.year}</div>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full mt-2 mr-8"></div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-dark-1 mb-2">{milestone.title}</h3>
                    <p className="text-dark-2">{milestone.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-1 mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-dark-2 max-w-2xl mx-auto">
                The principles that guide everything we do.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="text-center">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-dark-1 mb-4">Integrity</h3>
                <p className="text-dark-2">
                  We believe in honest communication, transparent pricing, and doing what's right for our customers, 
                  even when no one is watching.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="text-center">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-dark-1 mb-4">Excellence</h3>
                <p className="text-dark-2">
                  We strive for perfection in every project, using premium materials and proven techniques 
                  to deliver results that exceed expectations.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="text-center">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-dark-1 mb-4">Reliability</h3>
                <p className="text-dark-2">
                  When you need us, we're there. From scheduled appointments to emergency repairs, 
                  you can count on Summit Roofing to deliver on our promises.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work with the Best?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Summit Roofing for their roofing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-light-2 px-8 py-4 text-lg">
                Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
                Call (555) 123-ROOF
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}