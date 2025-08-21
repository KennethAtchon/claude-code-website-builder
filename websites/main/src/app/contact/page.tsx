"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    emergency: false,
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    "Emergency Roof Repair",
    "Free Roof Inspection",
    "Complete Roof Replacement", 
    "Storm Damage Repair",
    "Commercial Roofing",
    "Roof Maintenance",
    "Insurance Claims Assistance",
    "Other"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-dark-1 to-dark-2 text-light-1">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Contact Roof Solutions Charlotte
            </h1>
            <p className="text-xl text-light-2 mb-8">
              Get in touch for emergency repairs, free inspections, or any roofing questions
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

      {/* Contact Form & Info Section */}
      <section className="py-16 bg-light-1">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection>
              <Card className="h-full">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-dark-1 mb-6">Get Your Free Quote</h2>
                  
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-semibold text-dark-1 mb-2">Thank You!</h3>
                      <p className="text-dark-2">
                        We've received your message and will contact you within 4 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            required
                            className="mt-1"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="service">Service Needed</Label>
                        <Select onValueChange={(value) => handleInputChange("service", value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="emergency"
                          checked={formData.emergency}
                          onCheckedChange={(checked) => handleInputChange("emergency", checked as boolean)}
                        />
                        <Label htmlFor="emergency" className="text-sm">
                          This is an emergency (we'll contact you within 4 hours)
                        </Label>
                      </div>
                      
                      <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          rows={4}
                          className="mt-1"
                          placeholder="Describe your roofing needs or any questions you have..."
                        />
                      </div>
                      
                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Contact Information */}
            <div className="space-y-8">
              <AnimatedSection>
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-dark-1 mb-6">Contact Information</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <Phone className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold text-dark-1">Emergency Hotline</h4>
                          <a href="tel:7046680707" className="text-lg text-primary hover:underline">
                            (704) 668-0707
                          </a>
                          <p className="text-sm text-dark-2">Available 24/7 for emergencies</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <Mail className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold text-dark-1">Email</h4>
                          <a href="mailto:info@roofsolutionscharlotte.com" className="text-primary hover:underline">
                            info@roofsolutionscharlotte.com
                          </a>
                          <p className="text-sm text-dark-2">General inquiries and quotes</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <MapPin className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold text-dark-1">Address</h4>
                          <p className="text-dark-2">
                            6611 Haddonfield Pl<br />
                            Charlotte, NC 28277
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <Clock className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold text-dark-1">Hours</h4>
                          <p className="text-dark-2">Open 24 hours</p>
                          <p className="text-sm text-dark-3">Emergency service available</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
              
              <AnimatedSection>
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-dark-1 mb-6">Service Areas</h3>
                    <p className="text-dark-2 mb-4">
                      We proudly serve the greater Charlotte metro area:
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-sm text-dark-2">
                      <div>• Charlotte, NC</div>
                      <div>• Matthews, NC</div>
                      <div>• Mint Hill, NC</div>
                      <div>• Concord, NC</div>
                      <div>• Huntersville, NC</div>
                      <div>• Cornelius, NC</div>
                      <div>• Davidson, NC</div>
                      <div>• Pineville, NC</div>
                      <div>• Gastonia, NC</div>
                      <div>• Rock Hill, SC</div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-light-2">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-dark-1 mb-4">Find Us</h2>
            <p className="text-lg text-dark-2">Located in Charlotte, serving the entire metro area</p>
          </AnimatedSection>
          
          <AnimatedSection>
            <div className="bg-dark-3 rounded-lg h-96 flex items-center justify-center">
              <div className="text-light-1 text-center">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Interactive Map Coming Soon</h3>
                <p>6611 Haddonfield Pl, Charlotte, NC 28277</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center">
            <h2 className="text-4xl font-bold mb-4">
              Need Emergency Roof Repair?
            </h2>
            <p className="text-xl mb-8">
              Don't wait! Call now for immediate assistance - we respond within 4 hours
            </p>
            <Button 
              size="lg" 
              className="bg-light-1 text-primary hover:bg-light-2"
              asChild
            >
              <a href="tel:7046680707" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Emergency Line: (704) 668-0707
              </a>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}