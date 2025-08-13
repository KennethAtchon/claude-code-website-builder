"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service_needed: "",
    project_description: "",
    preferred_contact: "phone"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get Your Free Estimate
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your roofing project? Contact us today for a free, no-obligation estimate
          </p>
          <p className="text-primary font-semibold mt-2">
            Response time: Within 2 hours during business hours
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Request Free Estimate</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="service_needed" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed *
                  </label>
                  <Select
                    id="service_needed"
                    name="service_needed"
                    required
                    value={formData.service_needed}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option value="roof_installation">New Roof Installation</option>
                    <option value="roof_repair">Roof Repair</option>
                    <option value="roof_inspection">Roof Inspection</option>
                    <option value="storm_damage">Storm Damage Assessment</option>
                    <option value="emergency">Emergency Service</option>
                    <option value="other">Other</option>
                  </Select>
                </div>

                <div>
                  <label htmlFor="preferred_contact" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Contact Method
                  </label>
                  <Select
                    id="preferred_contact"
                    name="preferred_contact"
                    value={formData.preferred_contact}
                    onChange={handleChange}
                  >
                    <option value="phone">Phone Call</option>
                    <option value="email">Email</option>
                    <option value="text">Text Message</option>
                  </Select>
                </div>

                <div>
                  <label htmlFor="project_description" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Description
                  </label>
                  <Textarea
                    id="project_description"
                    name="project_description"
                    rows={4}
                    value={formData.project_description}
                    onChange={handleChange}
                    placeholder="Please describe your roofing needs, any specific concerns, or questions you have..."
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Send className="w-4 h-4 mr-2" />
                  Send Free Estimate Request
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">(555) ROOF-PRO</p>
                    <p className="text-sm text-gray-500">24/7 Emergency Line</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">contact@premierroofingpros.com</p>
                    <p className="text-sm text-gray-500">We respond within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">
                      1245 Commerce Drive<br />
                      Austin, Texas 78704
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Business Hours</h4>
                    <div className="text-gray-600 text-sm space-y-1">
                      <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                      <p>Saturday: 8:00 AM - 4:00 PM</p>
                      <p>Sunday: Emergency Only</p>
                      <p className="text-accent font-medium">Emergency: 24/7 Available</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Emergency Service</h3>
                <p className="mb-4">Storm damage? Roof leak? We're here 24/7!</p>
                <Button 
                  variant="outline" 
                  className="bg-white text-red-600 hover:bg-gray-100 border-white"
                  size="lg"
                >
                  Call Emergency Line
                </Button>
              </CardContent>
            </Card>

            {/* Service Areas */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Service Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">We proudly serve:</p>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                  <div>• Austin</div>
                  <div>• Cedar Park</div>
                  <div>• Round Rock</div>
                  <div>• Pflugerville</div>
                  <div>• Leander</div>
                  <div>• Georgetown</div>
                </div>
                <p className="text-sm text-gray-500 mt-3">
                  Don't see your area? Call us - we may still be able to help!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}