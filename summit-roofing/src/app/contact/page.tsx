"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/AnimatedSection";
import { Phone, Mail, MapPin, Clock, ArrowRight, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [quoteForm, setQuoteForm] = useState({
    fullName: "",
    phoneNumber: "",
    propertyAddress: "",
    roofType: "",
    projectDescription: "",
    preferredContactTime: ""
  });

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    serviceInterest: "",
    message: ""
  });

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Quote form submitted:", quoteForm);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", contactForm);
  };

  const businessHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Emergency Service Only" },
    { day: "Emergency Repairs", hours: "24/7 Available" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-dark-2 text-white py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Contact Summit Roofing
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Ready to get started? We're here to help with all your roofing needs. 
                Get your free quote today or reach out with any questions.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-destructive text-destructive-foreground py-4">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="font-semibold text-lg">
              🚨 Emergency Roofing Service Available 24/7 - Call (555) 123-ROOF Now! 🚨
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <AnimatedSection>
              <Card className="text-center h-full">
                <CardHeader>
                  <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-dark-1">Phone</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary mb-2">(555) 123-ROOF</p>
                  <p className="text-dark-2 mb-4">Call for immediate assistance</p>
                  <Badge className="bg-primary text-primary-foreground">24/7 Emergency</Badge>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <Card className="text-center h-full">
                <CardHeader>
                  <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-dark-1">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-dark-1 mb-2">info@summitroofing.com</p>
                  <p className="text-dark-2 mb-4">We respond within 24 hours</p>
                  <Badge variant="outline">Business Inquiries</Badge>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="text-center h-full">
                <CardHeader>
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-dark-1">Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-dark-1 mb-2">123 Main Street</p>
                  <p className="text-dark-1 mb-4">Your City, ST 12345</p>
                  <Badge variant="outline">Service Area</Badge>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          {/* Business Hours */}
          <AnimatedSection>
            <Card className="max-w-2xl mx-auto">
              <CardHeader className="text-center">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-dark-1">Business Hours</CardTitle>
                <CardDescription>Regular hours and emergency availability</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-light-3 last:border-b-0">
                      <span className="font-medium text-dark-1">{schedule.day}</span>
                      <span className="text-dark-2">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Forms Section */}
      <section className="py-20 bg-light-2">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Quote Form */}
            <AnimatedSection>
              <Card>
                <CardHeader>
                  <CardTitle className="text-dark-1">Request a Free Quote</CardTitle>
                  <CardDescription>
                    Get a detailed estimate for your roofing project. We'll contact you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleQuoteSubmit} className="space-y-4">
                    <Input
                      placeholder="Full Name *"
                      value={quoteForm.fullName}
                      onChange={(e) => setQuoteForm({...quoteForm, fullName: e.target.value})}
                      required
                    />
                    
                    <Input
                      placeholder="Phone Number *"
                      type="tel"
                      value={quoteForm.phoneNumber}
                      onChange={(e) => setQuoteForm({...quoteForm, phoneNumber: e.target.value})}
                      required
                    />
                    
                    <Input
                      placeholder="Property Address *"
                      value={quoteForm.propertyAddress}
                      onChange={(e) => setQuoteForm({...quoteForm, propertyAddress: e.target.value})}
                      required
                    />
                    
                    <Select onValueChange={(value) => setQuoteForm({...quoteForm, roofType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Roof Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asphalt-shingles">Asphalt Shingles</SelectItem>
                        <SelectItem value="metal">Metal Roofing</SelectItem>
                        <SelectItem value="tile">Tile Roofing</SelectItem>
                        <SelectItem value="slate">Slate Roofing</SelectItem>
                        <SelectItem value="flat">Flat Roof</SelectItem>
                        <SelectItem value="unsure">Not Sure</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    <textarea
                      className="w-full p-3 border border-input rounded-md resize-none"
                      rows={4}
                      placeholder="Project Description (Tell us about your roofing needs) *"
                      value={quoteForm.projectDescription}
                      onChange={(e) => setQuoteForm({...quoteForm, projectDescription: e.target.value})}
                      required
                    />
                    
                    <Select onValueChange={(value) => setQuoteForm({...quoteForm, preferredContactTime: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Preferred Contact Time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
                        <SelectItem value="evening">Evening (5PM - 7PM)</SelectItem>
                        <SelectItem value="anytime">Anytime</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Request Quote <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    
                    <p className="text-xs text-dark-2">
                      * Required fields. We'll contact you within 24 hours to schedule your free estimate.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection delay={0.2}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-dark-1">General Contact</CardTitle>
                  <CardDescription>
                    Have questions or need general information? Send us a message and we'll get back to you soon.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <Input
                      placeholder="Name *"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      required
                    />
                    
                    <Input
                      placeholder="Email *"
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      required
                    />
                    
                    <Input
                      placeholder="Phone"
                      type="tel"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                    />
                    
                    <Select onValueChange={(value) => setContactForm({...contactForm, serviceInterest: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Service Interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="roof-installation">Roof Installation</SelectItem>
                        <SelectItem value="roof-repair">Roof Repair</SelectItem>
                        <SelectItem value="roof-replacement">Roof Replacement</SelectItem>
                        <SelectItem value="emergency-repair">Emergency Repair</SelectItem>
                        <SelectItem value="gutter-services">Gutter Services</SelectItem>
                        <SelectItem value="roof-inspection">Roof Inspection</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    <textarea
                      className="w-full p-3 border border-input rounded-md resize-none"
                      rows={6}
                      placeholder="Message *"
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      required
                    />
                    
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </Button>
                    
                    <p className="text-xs text-dark-2">
                      * Required fields. We typically respond to messages within 24 hours.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-1 mb-4">
                Our Service Area
              </h2>
              <p className="text-lg text-dark-2 max-w-2xl mx-auto">
                We proudly serve the greater metropolitan area and surrounding communities. 
                If you're unsure whether we service your area, give us a call!
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <Card>
              <CardContent className="p-0">
                <div className="bg-light-2 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-dark-1 mb-2">Interactive Map</h3>
                    <p className="text-dark-2">Map integration would be implemented here</p>
                    <p className="text-sm text-dark-2 mt-2">123 Main Street, Your City, ST 12345</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-light-2">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-1 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-dark-2 max-w-2xl mx-auto">
                Common questions about our services and process.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection delay={0.1}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-dark-1">How quickly can you provide a quote?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-dark-2">
                    We typically provide quotes within 24 hours of receiving your request. 
                    For emergency situations, we can often provide same-day estimates.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-dark-1">Do you work with insurance companies?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-dark-2">
                    Yes! We have extensive experience working with insurance companies and can help 
                    guide you through the claims process for storm damage and other covered repairs.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-dark-1">What areas do you serve?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-dark-2">
                    We serve the greater metropolitan area and surrounding communities within a 50-mile radius. 
                    Contact us to confirm service availability in your specific location.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-dark-1">What if I have an emergency?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-dark-2">
                    We offer 24/7 emergency roofing services. Call (555) 123-ROOF immediately for 
                    urgent repairs, storm damage, or any situation that threatens your property.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}