import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Luxe Boutique - Schedule Consultation & Visit Our Atelier",
  description: "Visit our Madison Avenue atelier or schedule a personal consultation. Expert styling services, private appointments, and luxury shopping experience in New York.",
  keywords: "luxury boutique contact, personal styling consultation, Madison Avenue, private appointments, luxury shopping NYC",
};

export default function Contact() {
  const hours = [
    { day: "Monday", hours: "10:00 AM - 7:00 PM" },
    { day: "Tuesday", hours: "10:00 AM - 7:00 PM" },
    { day: "Wednesday", hours: "10:00 AM - 7:00 PM" },
    { day: "Thursday", hours: "10:00 AM - 8:00 PM" },
    { day: "Friday", hours: "10:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "12:00 PM - 5:00 PM" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <AnimatedSection className="relative py-24 bg-gradient-to-br from-accent to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">
              Visit Our Atelier
            </h1>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Experience luxury shopping in our private showroom. Schedule a personal consultation or visit us at our Madison Avenue location.
            </p>
          </div>
        </AnimatedSection>

        {/* Contact Information & Form */}
        <AnimatedSection className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-lg text-foreground mb-8">
                    Our team is here to assist you with personalized styling, private appointments, and any inquiries about our collections.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-secondary mt-1" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Address</h3>
                      <p className="text-foreground">123 Madison Avenue<br />New York, NY 10021</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-secondary mt-1" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Phone</h3>
                      <p className="text-foreground">+1 (212) 555-0123</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-secondary mt-1" />
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Email</h3>
                      <p className="text-foreground">concierge@luxeboutique.com</p>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <Card className="border-0 bg-accent/30">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="h-5 w-5 text-secondary mr-2" />
                      Store Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {hours.map((schedule, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="text-foreground">{schedule.day}</span>
                          <span className="text-foreground font-medium">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <Card className="border-0 bg-accent/30">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">Schedule a Consultation</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-primary mb-2">
                          First Name
                        </label>
                        <Input id="firstName" placeholder="Enter your first name" />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-primary mb-2">
                          Last Name
                        </label>
                        <Input id="lastName" placeholder="Enter your last name" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                        Email Address
                      </label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                        Phone Number
                      </label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-primary mb-2">
                        Service Interest
                      </label>
                      <select className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground">
                        <option value="">Select a service</option>
                        <option value="personal-styling">Personal Styling</option>
                        <option value="private-appointment">Private Appointment</option>
                        <option value="authentication">Authentication Service</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                        Message
                      </label>
                      <textarea 
                        id="message" 
                        rows={4}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                        placeholder="Tell us about your styling needs or questions"
                      ></textarea>
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </AnimatedSection>

        {/* Map Section (Placeholder) */}
        <AnimatedSection className="py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">
                Find Us
              </h2>
              <p className="text-foreground">Located in the heart of Manhattan's luxury shopping district</p>
            </div>
            
            {/* Map Placeholder */}
            <div className="bg-accent rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-secondary mx-auto mb-4" />
                <p className="text-foreground">Interactive map would be integrated here</p>
                <p className="text-sm text-muted-foreground mt-2">123 Madison Avenue, New York, NY 10021</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Services CTA */}
        <AnimatedSection className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              Exceptional Service Awaits
            </h2>
            <p className="text-lg text-foreground mb-8">
              Whether you're seeking a specific piece or exploring our full collection, our experts are here to provide personalized guidance and exceptional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Book Appointment
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Call Now
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  );
}