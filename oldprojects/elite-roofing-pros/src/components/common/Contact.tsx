"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      content: "(555) 123-ROOF",
      description: "Available 24/7 for emergencies"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "info@eliteroofingpros.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "1247 Oak Ridge Drive",
      description: "Springfield, IL 62704"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon-Fri: 7AM-6PM",
      description: "Sat: 8AM-4PM, Sun: Emergency Only"
    }
  ];

  const hours = [
    { day: "Monday", time: "7:00 AM - 6:00 PM" },
    { day: "Tuesday", time: "7:00 AM - 6:00 PM" },
    { day: "Wednesday", time: "7:00 AM - 6:00 PM" },
    { day: "Thursday", time: "7:00 AM - 6:00 PM" },
    { day: "Friday", time: "7:00 AM - 6:00 PM" },
    { day: "Saturday", time: "8:00 AM - 4:00 PM" },
    { day: "Sunday", time: "Emergency Services Only" }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get Your Free Estimate Today
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to protect your property? Contact us for a free, no-obligation estimate. 
            We're here to help with all your roofing needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Request Free Estimate</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                  />
                  <Select onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Service Needed" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="roof-replacement">Roof Replacement</SelectItem>
                      <SelectItem value="roof-repair">Roof Repair</SelectItem>
                      <SelectItem value="gutter-installation">Gutter Installation</SelectItem>
                      <SelectItem value="emergency">Emergency Service</SelectItem>
                      <SelectItem value="inspection">Free Inspection</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <textarea
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />

                <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                  Send Message
                  <Send className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                    <p className="text-lg font-medium text-blue-600 mb-1">{info.content}</p>
                    <p className="text-sm text-gray-600">{info.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Business Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-blue-600" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {hours.map((hour, index) => (
                    <div key={index} className="flex justify-between items-center py-1">
                      <span className="text-gray-700">{hour.day}</span>
                      <span className="text-gray-600 text-sm">{hour.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Emergency Service Available</h3>
              <p className="text-red-700 mb-4">
                Storm damage or roof emergency? We're available 24/7 for urgent repairs.
              </p>
              <Button variant="destructive" size="lg" className="w-full">
                Call Emergency Line: (555) 123-ROOF
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}