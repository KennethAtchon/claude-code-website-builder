"use client";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxSection from "@/components/ParallaxSection";
import { 
  Award,
  Shield,
  Users,
  Leaf,
  CheckCircle,
  Calendar,
  Phone,
  Mail
} from "lucide-react";

export default function About() {
  const teamMembers = [
    {
      name: "Michael Rodriguez",
      role: "Founder & Lead Designer",
      experience: "25+ years",
      certification: "Certified Landscape Architect",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      description: "Michael founded GreenScape with a vision to create sustainable, beautiful outdoor spaces that connect people with nature."
    },
    {
      name: "Sarah Thompson",
      role: "Operations Manager",
      experience: "15+ years",
      certification: "Project Management Professional",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      description: "Sarah ensures every project runs smoothly from conception to completion, maintaining our high standards of quality and customer service."
    },
    {
      name: "David Chen",
      role: "Horticulture Specialist",
      experience: "12+ years",
      certification: "Master Gardener",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      description: "David brings extensive knowledge of plant science and sustainable gardening practices to create thriving, eco-friendly landscapes."
    }
  ];

  const values = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Environmental Stewardship",
      description: "We prioritize sustainable practices and native plant selection to create eco-friendly landscapes that benefit the environment."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Excellence",
      description: "Every project meets our rigorous standards of craftsmanship and attention to detail, backed by our satisfaction guarantee."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Partnership",
      description: "We work closely with our clients to understand their vision and bring it to life through collaborative design and communication."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trust & Reliability",
      description: "Licensed, insured, and committed to delivering on our promises with transparent pricing and reliable service."
    }
  ];

  const achievements = [
    {
      number: "500+",
      label: "Projects Completed"
    },
    {
      number: "25+",
      label: "Years Experience"
    },
    {
      number: "100%",
      label: "Satisfaction Rate"
    },
    {
      number: "50+",
      label: "Awards Won"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <ParallaxSection
        backgroundUrl="https://images.unsplash.com/photo-1574482620881-2bc9d0fcfe4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
        speed="medium"
        className="h-96 flex items-center justify-center"
      >
        <AnimatedSection className="text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4">
            About GreenScape
          </h1>
          <p className="text-xl md:text-2xl text-light-2">
            25+ years of transforming outdoor spaces with passion and expertise
          </p>
        </AnimatedSection>
      </ParallaxSection>

      {/* Company Story */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark-1 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-dark-2">
                <p>
                  Founded in 1998 by Michael Rodriguez, GreenScape Landscaping began as a small family business with a simple mission: to create beautiful, sustainable outdoor spaces that bring people closer to nature.
                </p>
                <p>
                  What started as a one-man operation has grown into a respected landscaping company serving residential and commercial clients throughout the region. Our success is built on a foundation of quality workmanship, environmental consciousness, and unwavering commitment to customer satisfaction.
                </p>
                <p>
                  Today, we're proud to be one of the area's leading landscaping companies, known for our innovative designs, sustainable practices, and exceptional service. Every project we undertake reflects our passion for creating outdoor spaces that enhance both property value and quality of life.
                </p>
              </div>
              <div className="mt-8 flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="text-dark-1 font-semibold">Est. 1998 - Over 25 Years of Excellence</span>
              </div>
            </div>
            
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
                alt="GreenScape team at work"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Achievements */}
      <AnimatedSection className="py-20 bg-light-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark-1 mb-4">
              Our Achievements
            </h2>
            <p className="text-lg text-dark-2 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and customer satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {achievement.number}
                </div>
                <div className="text-dark-2 font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Values */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark-1 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-dark-2 max-w-3xl mx-auto">
              The principles that guide every decision we make and every project we complete.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-light-3 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-primary mb-4">{value.icon}</div>
                  <h3 className="font-semibold text-xl text-dark-1 mb-3">{value.title}</h3>
                  <p className="text-dark-2">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Team */}
      <AnimatedSection className="py-20 bg-light-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark-1 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-dark-2 max-w-3xl mx-auto">
              Experienced professionals dedicated to bringing your outdoor vision to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-white border-light-3 overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl text-dark-1 mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <div className="space-y-1 text-sm text-dark-2 mb-4">
                    <p><strong>Experience:</strong> {member.experience}</p>
                    <p><strong>Certification:</strong> {member.certification}</p>
                  </div>
                  <p className="text-dark-2">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Certifications & Guarantees */}
      <AnimatedSection className="py-20 bg-dark-1 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Licensed, Insured & Guaranteed
            </h2>
            <p className="text-xl text-light-2 mb-8 max-w-3xl mx-auto">
              Your peace of mind is our priority. We're fully licensed, insured, and stand behind our work with comprehensive guarantees.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center space-y-4">
                <Shield className="w-12 h-12 text-primary" />
                <h3 className="text-xl font-semibold">Fully Licensed</h3>
                <p className="text-light-2 text-center">State licensed contractors with all required permits and certifications.</p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Award className="w-12 h-12 text-primary" />
                <h3 className="text-xl font-semibold">Fully Insured</h3>
                <p className="text-light-2 text-center">Comprehensive liability and workers' compensation insurance coverage.</p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <CheckCircle className="w-12 h-12 text-primary" />
                <h3 className="text-xl font-semibold">100% Guarantee</h3>
                <p className="text-light-2 text-center">Complete satisfaction guarantee on all our work and services.</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-dark-1">
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
}