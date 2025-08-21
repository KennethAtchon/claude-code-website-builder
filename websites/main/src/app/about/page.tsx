"use client";
import { Metadata } from "next";
import { Calendar, Users, Award, ShieldCheck, Phone, Clock, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

export default function AboutPage() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Quality Workmanship",
      description: "We use only premium materials and certified installation techniques to ensure lasting results."
    },
    {
      icon: Clock,
      title: "24/7 Emergency Service", 
      description: "Available around the clock for roof emergencies with 4-hour response time guarantee."
    },
    {
      icon: Gift,
      title: "Customer Satisfaction",
      description: "We guarantee our work with free labor on any additional repairs needed."
    }
  ];

  const milestones = [
    { year: "1980", event: "Founded as a family-owned roofing business in Charlotte" },
    { year: "1990", event: "Expanded to serve the greater Charlotte metro area" },
    { year: "2000", event: "Introduced 24/7 emergency response service" },
    { year: "2010", event: "Became fully licensed and insured commercial contractor" },
    { year: "2020", event: "Celebrating 40 years of service to Charlotte families" },
    { year: "2024", event: "Continue serving Charlotte with next-generation expertise" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-dark-1 to-dark-2 text-light-1">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Roof Solutions Charlotte
            </h1>
            <p className="text-xl text-light-2 mb-8">
              Four decades of trusted roofing expertise serving Charlotte families and businesses since 1980
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Phone className="w-5 h-5 mr-2" />
                Call (704) 668-0707
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Get Free Inspection
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-light-1">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-dark-1 mb-6">Our Story</h2>
              <p className="text-lg text-dark-2 mb-6">
                Family-owned roofing company serving Charlotte since 1980 with certified professionals and guaranteed workmanship. 
                What started as a small local business has grown into Charlotte's most trusted roofing contractor, but we've never 
                forgotten our commitment to treating every customer like family.
              </p>
              <p className="text-lg text-dark-2 mb-6">
                For over four decades, we've built our reputation on quality workmanship, emergency response, and customer satisfaction. 
                Our team of certified professionals brings decades of combined experience to every project, from emergency repairs 
                to complete roof replacements.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">40+</div>
                  <div className="text-dark-2">Years in Business</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-dark-2">Emergency Service</div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection>
              <div className="relative">
                <img 
                  src="https://www.warnerroofinginc.com/wp-content/uploads/Dollarphotoclub_95604724.jpg" 
                  alt="Professional roofers installing new roof"
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-1/20 to-transparent rounded-lg"></div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 bg-light-2">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-dark-1 mb-4">Our Mission & Values</h2>
            <p className="text-lg text-dark-2 max-w-2xl mx-auto">
              To provide the best roof repair service in Charlotte with emergency response and customer satisfaction guarantee
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={index}>
                <Card className="text-center h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <value.icon className="w-16 h-16 text-primary mx-auto mb-6" />
                    <h3 className="text-xl font-semibold text-dark-1 mb-4">{value.title}</h3>
                    <p className="text-dark-2">{value.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-light-1">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-dark-1 mb-4">Our Journey</h2>
            <p className="text-lg text-dark-2 max-w-2xl mx-auto">
              Four decades of growth, innovation, and commitment to Charlotte
            </p>
          </AnimatedSection>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary"></div>
              
              {milestones.map((milestone, index) => (
                <AnimatedSection key={index}>
                  <div className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-8`}>
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <Card className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                          <p className="text-dark-2">{milestone.event}</p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-light-1"></div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-dark-1 text-light-1">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-light-2 max-w-2xl mx-auto">
              Certified professionals with decades of combined experience in roofing and customer service
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection>
              <Card className="bg-dark-2 border-dark-3 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-light-1 mb-2">Certified Roofers</h3>
                  <p className="text-light-2">Licensed and insured professionals with extensive training and experience</p>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection>
              <Card className="bg-dark-2 border-dark-3 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Clock className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-light-1 mb-2">Emergency Response Team</h3>
                  <p className="text-light-2">Available 24/7 for emergency repairs with 4-hour response guarantee</p>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection>
              <Card className="bg-dark-2 border-dark-3 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Award className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-light-1 mb-2">Quality Inspectors</h3>
                  <p className="text-light-2">Detailed inspections and assessments to ensure the highest quality work</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Work with Charlotte's Most Trusted Roofers?</h2>
            <p className="text-xl mb-8">
              Join thousands of satisfied customers who trust Roof Solutions Charlotte for all their roofing needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-light-1 text-primary hover:bg-light-2"
                asChild
              >
                <a href="tel:7046680707" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call (704) 668-0707
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary">
                Get Free Inspection
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}