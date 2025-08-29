"use client";
import Link from "next/link";
import { useState } from "react";
import { Phone, MapPin, Clock, Mail, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import AnimatedSection from "@/components/animations/AnimatedSection";

const services = [
  "Water Heater Installation/Repair",
  "Drain Cleaning",
  "Pipe Installation/Repair", 
  "Emergency Plumbing",
  "Bathroom Remodel",
  "Excavation Work",
  "General Plumbing",
  "Other"
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    urgency: "normal"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For static site, this would typically integrate with a form service like Netlify Forms
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll contact you within 24 hours.");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="flex items-center justify-center space-x-2 text-yellow-400 mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-white font-medium">5.0 Stars • 76+ Reviews</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Contact B.E.T. Plumbing
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Ready for professional plumbing service? Contact us today. Call us directly for 
                immediate assistance or use our contact form to describe your plumbing needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Link href="tel:+14127336355">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (412) 733-6355
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-primary hover:bg-white hover:text-primary">
                  <Link href="#contact-form">
                    Send Message
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-background" id="contact-form">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Get In Touch
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Ready for professional plumbing service? We provide free estimates for most services 
                    and are available for emergency calls 24/7 on weekends.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                          <p className="text-lg font-semibold text-primary mb-2">(412) 733-6355</p>
                          <p className="text-sm text-muted-foreground">
                            Available 24/7 weekends for emergencies
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Address</h3>
                          <p className="text-foreground">121 Ingram Ave</p>
                          <p className="text-foreground mb-2">Pittsburgh, PA 15205</p>
                          <p className="text-sm text-muted-foreground">
                            Serving all of Allegheny County
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                          <div className="space-y-1 text-foreground">
                            <p><span className="font-medium">Monday - Friday:</span> 7:00 AM - 5:00 PM</p>
                            <p><span className="font-medium">Weekends:</span> Emergency Service Only</p>
                          </div>
                          <p className="text-sm text-primary font-medium mt-2">
                            24-hour weekend availability for emergencies
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-secondary p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-4">Why Choose B.E.T. Plumbing?</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">Licensed and fully insured</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">5.0 star rating with 76+ reviews</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">Fair pricing with no hidden fees</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">Same-day emergency service</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection delay={0.2}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours with a free estimate.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Your full name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(412) 123-4567"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Needed</Label>
                        <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                          <SelectTrigger>
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
                      <div className="space-y-2">
                        <Label htmlFor="urgency">Urgency Level</Label>
                        <Select value={formData.urgency} onValueChange={(value) => setFormData({...formData, urgency: value})}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="emergency">Emergency (Same Day)</SelectItem>
                            <SelectItem value="urgent">Urgent (Within 24 Hours)</SelectItem>
                            <SelectItem value="normal">Normal (Within Week)</SelectItem>
                            <SelectItem value="scheduled">Scheduled (Plan Ahead)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Please describe your plumbing issue or project in detail..."
                        rows={6}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button type="submit" className="bg-primary hover:bg-primary/90 flex-1">
                        Send Message
                      </Button>
                      <Button asChild variant="outline" className="flex-1">
                        <Link href="tel:+14127336355">
                          <Phone className="w-4 h-4 mr-2" />
                          Call Instead
                        </Link>
                      </Button>
                    </div>

                    <p className="text-xs text-muted-foreground">
                      * Required fields. We'll respond to all inquiries within 24 hours. 
                      For emergencies, please call directly.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Service Area Map Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our Service Area
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We provide professional plumbing services throughout Pittsburgh and Allegheny County. 
                Fast response times and reliable service wherever you are.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Primary Service Areas</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>Pittsburgh</div>
                    <div>Ingram</div>
                    <div>Crafton</div>
                    <div>Carnegie</div>
                    <div>Scott Township</div>
                    <div>Green Tree</div>
                    <div>Dormont</div>
                    <div>Mount Lebanon</div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>Response Times</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Emergencies:</span>
                    <span className="text-sm font-semibold text-primary">Within 1 Hour</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Urgent Calls:</span>
                    <span className="text-sm font-semibold">Same Day</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Scheduled Work:</span>
                    <span className="text-sm font-semibold">Within 24 Hours</span>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-xs text-muted-foreground">
                      Available 24/7 weekends for emergency service
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>Service Guarantee</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 text-primary" />
                      <span className="text-sm">Licensed & Insured</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 text-primary" />
                      <span className="text-sm">Free Estimates</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 text-primary" />
                      <span className="text-sm">Satisfaction Guaranteed</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-3 h-3 text-primary" />
                      <span className="text-sm">Fair, Upfront Pricing</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}