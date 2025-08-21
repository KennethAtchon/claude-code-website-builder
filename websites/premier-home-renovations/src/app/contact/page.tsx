"use client";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import AnimatedSection from "@/components/AnimatedSection";
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle, Send } from "lucide-react";

export default function Contact() {
  const [isMounted, setIsMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    timeline: "",
    budget: "",
    message: ""
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  const serviceAreas = [
    "Westfield", "Summit", "Millburn", "Short Hills", "Chatham", "Madison",
    "New Providence", "Berkeley Heights", "Scotch Plains", "Fanwood",
    "Cranford", "Mountainside", "Springfield", "Maplewood", "South Orange"
  ];

  if (!isMounted) return null;

  return (
    <div className="pt-8">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <Badge className="mb-4 bg-accent text-accent-foreground">
              Get In Touch
            </Badge>
            <h1 className="font-playfair text-4xl md:text-6xl font-semibold text-primary mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ready to transform your home? Get in touch with our team for a free consultation 
              and detailed estimate for your renovation project.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <Card>
                  <CardHeader>
                    <CardTitle className="font-playfair text-2xl text-primary">
                      Request Free Estimate
                    </CardTitle>
                    <p className="text-gray-600">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Personal Info */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <Input
                            required
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            placeholder="Enter your full name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <Input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <Input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="(555) 123-4567"
                        />
                      </div>

                      {/* Project Details */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Project Type *
                          </label>
                          <Select onValueChange={(value) => handleInputChange("projectType", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select project type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="kitchen">Kitchen Remodeling</SelectItem>
                              <SelectItem value="bathroom">Bathroom Renovation</SelectItem>
                              <SelectItem value="addition">Home Addition</SelectItem>
                              <SelectItem value="flooring">Flooring Installation</SelectItem>
                              <SelectItem value="exterior">Exterior Renovation</SelectItem>
                              <SelectItem value="whole-home">Whole Home Renovation</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Timeline
                          </label>
                          <Select onValueChange={(value) => handleInputChange("timeline", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="asap">As soon as possible</SelectItem>
                              <SelectItem value="1-3months">1-3 months</SelectItem>
                              <SelectItem value="3-6months">3-6 months</SelectItem>
                              <SelectItem value="6-12months">6-12 months</SelectItem>
                              <SelectItem value="planning">Just planning</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Budget Range
                        </label>
                        <Select onValueChange={(value) => handleInputChange("budget", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-10k">Under $10,000</SelectItem>
                            <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                            <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                            <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                            <SelectItem value="over-100k">Over $100,000</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Project Description
                        </label>
                        <Textarea
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          placeholder="Tell us about your project, specific requirements, or any questions you have..."
                          rows={4}
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </Button>

                      <div className="flex items-center justify-center text-sm text-gray-500">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        We'll respond within 24 hours
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <AnimatedSection>
                <Card>
                  <CardHeader>
                    <CardTitle className="font-playfair text-xl text-primary">
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-accent mr-3" />
                      <div>
                        <p className="font-medium">(555) 123-4567</p>
                        <p className="text-sm text-gray-500">Call or text anytime</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-accent mr-3" />
                      <div>
                        <p className="font-medium">info@premierhomerenovations.com</p>
                        <p className="text-sm text-gray-500">We reply within hours</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-accent mr-3 mt-1" />
                      <div>
                        <p className="font-medium">123 Main Street</p>
                        <p className="text-gray-600">Westfield, NJ 07090</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection>
                <Card>
                  <CardHeader>
                    <CardTitle className="font-playfair text-xl text-primary">
                      Business Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-accent mr-3" />
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span>Monday - Friday</span>
                          <span className="font-medium">7:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Saturday</span>
                          <span className="font-medium">8:00 AM - 4:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunday</span>
                          <span className="font-medium">By Appointment</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection>
                <Card>
                  <CardHeader>
                    <CardTitle className="font-playfair text-xl text-primary">
                      Emergency Services
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-3">
                      Need immediate assistance? We offer 24/7 emergency services for urgent repairs.
                    </p>
                    <Button variant="outline" className="w-full">
                      Call Emergency Line
                      <Phone className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="font-playfair text-3xl md:text-5xl font-semibold text-primary mb-6">
                Service Areas
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We proudly serve homeowners throughout Central New Jersey and surrounding communities.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {serviceAreas.map((area, index) => (
                    <div key={area} className="text-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-primary">{area}</span>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <p className="text-gray-600 mb-4">
                    Don't see your area listed? We may still be able to help!
                  </p>
                  <Button variant="outline">
                    Check Service Availability
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl md:text-4xl font-semibold text-primary mb-4">
                Find Us
              </h2>
              <p className="text-lg text-gray-600">
                Located in the heart of Westfield, serving all of Central New Jersey
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gray-200 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-lg text-primary mb-2">Interactive Map</h3>
                    <p className="text-gray-600">
                      123 Main Street, Westfield, NJ 07090
                    </p>
                    <Button className="mt-4" variant="outline">
                      Get Directions
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="text-white">
              <h2 className="font-playfair text-3xl md:text-5xl font-semibold mb-6">
                Let's Start Your Project Today
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
                Don't wait to transform your home. Contact us now for your free consultation and estimate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                  Call (555) 123-4567
                  <Phone className="ml-2 h-5 w-5" />
                </Button>
                <div className="flex items-center text-primary-foreground/90">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Free estimates • No obligation
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}