"use client";
import { useState } from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxSection from "@/components/ParallaxSection";
import { 
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  Send,
  MessageSquare,
  Calendar
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    propertySize: "",
    serviceType: "",
    description: "",
    contactMethod: "",
    timeline: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["(555) 123-4567", "Available 7 days a week"],
      action: { label: "Call Now", href: "tel:5551234567" }
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["info@greenscapelandscaping.com", "Response within 24 hours"],
      action: { label: "Send Email", href: "mailto:info@greenscapelandscaping.com" }
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office",
      details: ["123 Garden Way", "Green Valley, ST 12345"],
      action: { label: "Get Directions", href: "#" }
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Mon-Fri: 7:00 AM - 6:00 PM", "Sat-Sun: 8:00 AM - 4:00 PM"],
      action: { label: "Schedule Visit", href: "#quote-form" }
    }
  ];

  const serviceAreas = [
    "Green Valley",
    "Highland Hills", 
    "Meadowbrook",
    "Downtown District",
    "Retail District",
    "Medical District",
    "Surrounding Areas"
  ];

  const whyChooseUs = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Free Consultations",
      description: "No-obligation site visits and project assessments"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Flexible Scheduling",
      description: "Work around your schedule with evening and weekend appointments"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Clear Communication",
      description: "Regular updates and transparent pricing throughout your project"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <ParallaxSection
        backgroundUrl="https://images.unsplash.com/photo-1434394354979-a235cd36269d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
        speed="medium"
        className="h-96 flex items-center justify-center"
      >
        <AnimatedSection className="text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-light-2">
            Ready to transform your outdoor space? Let's get started today.
          </p>
        </AnimatedSection>
      </ParallaxSection>

      {/* Contact Information */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark-1 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-dark-2 max-w-3xl mx-auto">
              Multiple ways to reach us. Choose what works best for you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center border-light-3 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-light-2 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary">{info.icon}</div>
                  </div>
                  <h3 className="font-semibold text-xl text-dark-1 mb-3">{info.title}</h3>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-dark-2">{detail}</p>
                    ))}
                  </div>
                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <Link href={info.action.href}>{info.action.label}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Quote Form */}
      <AnimatedSection id="quote-form" className="py-20 bg-light-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark-1 mb-4">
                Get Your Free Quote
              </h2>
              <p className="text-lg text-dark-2">
                Fill out the form below and we'll contact you within 24 hours to schedule your free consultation.
              </p>
            </div>

            {isSubmitted ? (
              <Card className="bg-white border-primary">
                <CardContent className="p-12 text-center">
                  <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h3 className="font-playfair text-2xl font-bold text-dark-1 mb-4">
                    Thank You for Your Request!
                  </h3>
                  <p className="text-lg text-dark-2 mb-6">
                    We've received your quote request and will contact you within 24 hours to schedule your free consultation.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild className="bg-primary hover:bg-primary/90">
                      <Link href="tel:5551234567">Call Us Now</Link>
                    </Button>
                    <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                      <Link href="/portfolio">View Our Work</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-white">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-dark-1 mb-2">
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="border-light-3 focus:border-primary"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark-1 mb-2">
                          Phone Number *
                        </label>
                        <Input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="border-light-3 focus:border-primary"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-dark-1 mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="border-light-3 focus:border-primary"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark-1 mb-2">
                          Property Size (sq ft)
                        </label>
                        <Input
                          type="text"
                          value={formData.propertySize}
                          onChange={(e) => handleInputChange("propertySize", e.target.value)}
                          className="border-light-3 focus:border-primary"
                          placeholder="e.g., 2,500 sq ft"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-dark-1 mb-2">
                        Property Address *
                      </label>
                      <Input
                        type="text"
                        required
                        value={formData.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        className="border-light-3 focus:border-primary"
                        placeholder="123 Main Street, City, State, Zip"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-dark-1 mb-2">
                          Service Type *
                        </label>
                        <Select onValueChange={(value) => handleInputChange("serviceType", value)}>
                          <SelectTrigger className="border-light-3 focus:border-primary">
                            <SelectValue placeholder="Select service type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="lawn-care">Lawn Care</SelectItem>
                            <SelectItem value="garden-design">Garden Design</SelectItem>
                            <SelectItem value="hardscaping">Hardscaping</SelectItem>
                            <SelectItem value="irrigation">Irrigation Systems</SelectItem>
                            <SelectItem value="maintenance">Landscape Maintenance</SelectItem>
                            <SelectItem value="complete-renovation">Complete Landscape Renovation</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark-1 mb-2">
                          Preferred Contact Method
                        </label>
                        <Select onValueChange={(value) => handleInputChange("contactMethod", value)}>
                          <SelectTrigger className="border-light-3 focus:border-primary">
                            <SelectValue placeholder="How should we contact you?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="phone">Phone Call</SelectItem>
                            <SelectItem value="email">Email</SelectItem>
                            <SelectItem value="text">Text Message</SelectItem>
                            <SelectItem value="any">Any Method</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-dark-1 mb-2">
                        Timeline for Project
                      </label>
                      <Select onValueChange={(value) => handleInputChange("timeline", value)}>
                        <SelectTrigger className="border-light-3 focus:border-primary">
                          <SelectValue placeholder="When would you like to start?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">As soon as possible</SelectItem>
                          <SelectItem value="1-month">Within 1 month</SelectItem>
                          <SelectItem value="2-3-months">2-3 months</SelectItem>
                          <SelectItem value="3-6-months">3-6 months</SelectItem>
                          <SelectItem value="next-year">Next year</SelectItem>
                          <SelectItem value="just-planning">Just planning/researching</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-dark-1 mb-2">
                        Project Description *
                      </label>
                      <Textarea
                        required
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        className="border-light-3 focus:border-primary min-h-[120px]"
                        placeholder="Please describe your project, including any specific requirements, preferences, or challenges you'd like us to address..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 py-6 text-lg"
                    >
                      {isSubmitting ? (
                        "Sending Request..."
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Get My Free Quote
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </AnimatedSection>

      {/* Service Areas & Why Choose Us */}
      <AnimatedSection className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Service Areas */}
            <div>
              <h3 className="font-playfair text-3xl font-bold text-dark-1 mb-6">
                Service Areas
              </h3>
              <p className="text-lg text-dark-2 mb-6">
                We proudly serve the following areas and surrounding communities:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-dark-2">{area}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-dark-3 mt-4">
                Don't see your area listed? Contact us anyway - we may still be able to help!
              </p>
            </div>

            {/* Why Choose Us */}
            <div>
              <h3 className="font-playfair text-3xl font-bold text-dark-1 mb-6">
                Why Choose GreenScape?
              </h3>
              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-light-2 rounded-full p-2 flex-shrink-0">
                      <div className="text-primary">{item.icon}</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-1 mb-2">{item.title}</h4>
                      <p className="text-dark-2">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Emergency Services */}
      <AnimatedSection className="py-20 bg-dark-1 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Emergency Landscape Services
          </h2>
          <p className="text-xl text-light-2 mb-8 max-w-3xl mx-auto">
            Storm damage? Irrigation emergencies? We offer 24/7 emergency landscape services for urgent situations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-lg px-8 py-6">
              <Link href="tel:5551234567">Emergency: (555) 123-4567</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-dark-1">
              <Link href="/services">Regular Services</Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
}