"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, User, Phone, Mail, MapPin, CheckCircle } from "lucide-react";

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    propertyType: "",
    serviceType: "",
    timeline: "",
    budget: "",
    message: "",
    consultationType: "on-site"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We'll contact you within 24 hours to schedule your premium consultation.");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        {/* Consultation Hero */}
        <HeroSection
          title="Premium Consultation Service"
          content="Experience our premium consultation with master craftsmen who deliver personalized roofing solutions"
          ctaLabel="Book Consultation"
          ctaLink="#booking"
          imageUrl="https://images.unsplash.com/photo-1556156653-e5a7c83a09cb"
        />

        {/* Consultation Process */}
        <section className="py-20 bg-light-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-dark-1 mb-6">Our Premium Consultation Process</h2>
              <p className="text-xl text-dark-2 max-w-3xl mx-auto">
                Initial assessment, detailed analysis, custom solution design, premium quote, and project planning
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { icon: Calendar, title: "Schedule", description: "Book your convenient consultation time" },
                { icon: MapPin, title: "Site Visit", description: "Comprehensive on-site property assessment" },
                { icon: CheckCircle, title: "Analysis", description: "Detailed structural and material analysis" },
                { icon: User, title: "Design", description: "Custom solution design and recommendations" },
                { icon: Mail, title: "Proposal", description: "Premium quote and project timeline" }
              ].map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="text-center">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      {index < 4 && (
                        <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-light-3 -translate-x-8"></div>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-dark-1 mb-2">{step.title}</h3>
                    <p className="text-dark-2 text-sm">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-20 bg-light-2" id="booking">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Form */}
              <Card className="bg-white shadow-xl">
                <CardHeader className="bg-primary text-white rounded-t-lg">
                  <CardTitle className="text-2xl">Schedule Your Premium Consultation</CardTitle>
                  <p className="text-white/90">Fill out the form below and we'll contact you within 24 hours</p>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-dark-1 mb-2">Full Name *</label>
                        <Input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="border-light-3"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark-1 mb-2">Phone Number *</label>
                        <Input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="border-light-3"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-dark-1 mb-2">Email Address *</label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="border-light-3"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-dark-1 mb-2">Property Address *</label>
                      <Input
                        type="text"
                        required
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        className="border-light-3"
                      />
                    </div>

                    {/* Project Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-dark-1 mb-2">Property Type *</label>
                        <Select onValueChange={(value) => handleInputChange('propertyType', value)}>
                          <SelectTrigger className="border-light-3">
                            <SelectValue placeholder="Select property type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="residential">Residential</SelectItem>
                            <SelectItem value="commercial">Commercial</SelectItem>
                            <SelectItem value="industrial">Industrial</SelectItem>
                            <SelectItem value="historic">Historic Building</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark-1 mb-2">Service Type *</label>
                        <Select onValueChange={(value) => handleInputChange('serviceType', value)}>
                          <SelectTrigger className="border-light-3">
                            <SelectValue placeholder="Select service type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="new-installation">New Installation</SelectItem>
                            <SelectItem value="replacement">Roof Replacement</SelectItem>
                            <SelectItem value="repair">Roof Repair</SelectItem>
                            <SelectItem value="restoration">Historic Restoration</SelectItem>
                            <SelectItem value="maintenance">Maintenance Program</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-dark-1 mb-2">Timeline</label>
                        <Select onValueChange={(value) => handleInputChange('timeline', value)}>
                          <SelectTrigger className="border-light-3">
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="immediate">Immediate (Emergency)</SelectItem>
                            <SelectItem value="1-month">Within 1 Month</SelectItem>
                            <SelectItem value="3-months">Within 3 Months</SelectItem>
                            <SelectItem value="6-months">Within 6 Months</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark-1 mb-2">Budget Range</label>
                        <Select onValueChange={(value) => handleInputChange('budget', value)}>
                          <SelectTrigger className="border-light-3">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-25k">Under $25,000</SelectItem>
                            <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                            <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                            <SelectItem value="100k-plus">$100,000+</SelectItem>
                            <SelectItem value="discuss">Prefer to Discuss</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-dark-1 mb-2">Project Details</label>
                      <Textarea
                        placeholder="Tell us about your project, any specific requirements, or questions you have..."
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="border-light-3 min-h-[120px]"
                      />
                    </div>

                    {/* Consultation Type */}
                    <div>
                      <label className="block text-sm font-medium text-dark-1 mb-2">Consultation Type *</label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            id="on-site"
                            name="consultationType"
                            value="on-site"
                            checked={formData.consultationType === "on-site"}
                            onChange={(e) => handleInputChange('consultationType', e.target.value)}
                            className="text-primary"
                          />
                          <label htmlFor="on-site" className="text-dark-1">On-Site Consultation</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            id="virtual"
                            name="consultationType"
                            value="virtual"
                            checked={formData.consultationType === "virtual"}
                            onChange={(e) => handleInputChange('consultationType', e.target.value)}
                            className="text-primary"
                          />
                          <label htmlFor="virtual" className="text-dark-1">Virtual Consultation</label>
                        </div>
                      </div>
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                      Schedule Premium Consultation
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Expert Team */}
              <div>
                <h2 className="text-3xl font-bold text-dark-1 mb-8">Meet Our Expert Team</h2>
                <p className="text-xl text-dark-2 mb-8">
                  Our team of master craftsmen, certified roofing specialists, and design experts deliver exceptional results
                </p>

                <div className="space-y-6">
                  {[
                    {
                      name: "Michael Rodriguez",
                      title: "Master Craftsman",
                      experience: "25+ Years Experience",
                      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
                      specialties: ["Luxury Residential", "Custom Design", "Historic Restoration"]
                    },
                    {
                      name: "Sarah Chen",
                      title: "Commercial Specialist",
                      experience: "20+ Years Experience", 
                      image: "https://images.unsplash.com/photo-1494790108755-2616b612b9e3",
                      specialties: ["Large-Scale Projects", "Energy Systems", "Project Management"]
                    },
                    {
                      name: "David Thompson",
                      title: "Innovation Director",
                      experience: "15+ Years Experience",
                      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
                      specialties: ["Smart Roofing", "Sustainability", "Technology Integration"]
                    }
                  ].map((expert, index) => (
                    <Card key={expert.name} className="bg-white shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <img
                            src={expert.image}
                            alt={expert.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          <div className="flex-grow">
                            <h3 className="font-semibold text-dark-1">{expert.name}</h3>
                            <p className="text-primary font-medium">{expert.title}</p>
                            <p className="text-sm text-dark-2">{expert.experience}</p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className="flex flex-wrap gap-2">
                            {expert.specialties.map((specialty) => (
                              <span
                                key={specialty}
                                className="bg-light-2 text-dark-2 text-xs px-3 py-1 rounded-full"
                              >
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <Phone className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <p className="text-white/90">(555) 123-4567</p>
                <p className="text-white/70 text-sm">Available 24/7 for emergencies</p>
              </div>
              
              <div>
                <Mail className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-white/90">info@skylineroof.com</p>
                <p className="text-white/70 text-sm">Response within 24 hours</p>
              </div>
              
              <div>
                <Clock className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Business Hours</h3>
                <p className="text-white/90">Mon-Fri: 8AM-6PM</p>
                <p className="text-white/90">Sat: 9AM-4PM</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}