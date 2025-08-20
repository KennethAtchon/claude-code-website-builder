"use client";
import { Phone, Clock, Zap, ShieldCheck, AlertTriangle, CheckCircle, Umbrella } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

export default function EmergencyServicesPage() {
  const emergencyServices = [
    {
      icon: Zap,
      title: "Immediate Leak Repair",
      description: "Stop water damage in its tracks with our emergency leak repair service. We respond within 4 hours to prevent costly damage to your ceiling, walls, and belongings.",
      features: ["Emergency tarping", "Immediate water diversion", "Temporary patching", "Damage assessment"]
    },
    {
      icon: Umbrella,
      title: "Emergency Tarping",
      description: "Protect your property from further damage with professional emergency tarping. Our weatherproof tarps are installed securely until permanent repairs can be made.",
      features: ["Weatherproof materials", "Secure installation", "Large area coverage", "Temporary protection"]
    },
    {
      icon: AlertTriangle,
      title: "Storm Damage Response",
      description: "When severe weather strikes, we're ready to respond. Our emergency team assesses storm damage and provides immediate protection and repair services.",
      features: ["24/7 storm response", "Insurance documentation", "Emergency board-up", "Structural assessment"]
    },
    {
      icon: ShieldCheck,
      title: "Structural Safety Assessment",
      description: "Ensure your roof's structural integrity after damage. Our certified professionals assess safety concerns and provide immediate solutions.",
      features: ["Safety evaluation", "Structural analysis", "Risk assessment", "Emergency reinforcement"]
    }
  ];

  const emergencySteps = [
    {
      step: 1,
      title: "Call Our Emergency Hotline",
      description: "Contact us immediately at (704) 668-0707. Our emergency line is answered 24/7/365.",
      icon: Phone
    },
    {
      step: 2,
      title: "Rapid Response Dispatch",
      description: "We dispatch our emergency team within 4 hours, often much sooner depending on your location.",
      icon: Clock
    },
    {
      step: 3,
      title: "Immediate Assessment & Protection",
      description: "Our team assesses the damage and implements immediate protective measures to prevent further damage.",
      icon: ShieldCheck
    },
    {
      step: 4,
      title: "Emergency Repairs & Documentation",
      description: "We perform necessary emergency repairs and document everything for insurance claims.",
      icon: CheckCircle
    }
  ];

  const damageTypes = [
    "Severe storm damage",
    "Hail damage",
    "Wind damage and missing shingles",
    "Tree damage from fallen branches",
    "Active roof leaks",
    "Ice dam damage",
    "Structural damage concerns",
    "Fire or smoke damage"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary to-dark-2 text-primary-foreground">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Zap className="w-16 h-16" />
              <h1 className="text-5xl md:text-6xl font-bold">
                24/7 Emergency Roof Repair
              </h1>
            </div>
            <p className="text-2xl mb-8">
              Immediate Response • 4-Hour Guarantee • Available 24/7/365
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-light-1 text-primary hover:bg-light-2 text-lg px-8 py-4">
                <Phone className="w-5 h-5 mr-2" />
                CALL EMERGENCY LINE: (704) 668-0707
              </Button>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-2">🚨 Roof Emergency?</h3>
              <p className="text-lg">
                Don't wait for damage to get worse. We respond within 4 hours to prevent costly ceiling damage, 
                structural problems, electrical issues, and black mold.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Emergency Response Process */}
      <section className="py-16 bg-light-1">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-dark-1 mb-4">
              Our Emergency Response Process
            </h2>
            <p className="text-lg text-dark-2 max-w-2xl mx-auto">
              When you call us for an emergency, here's exactly what happens
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {emergencySteps.map((step, index) => (
              <AnimatedSection key={index}>
                <Card className="text-center h-full relative">
                  <CardContent className="p-6">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                        {step.step}
                      </div>
                    </div>
                    <step.icon className="w-12 h-12 text-primary mx-auto mb-4 mt-4" />
                    <h3 className="font-semibold text-dark-1 mb-3">{step.title}</h3>
                    <p className="text-dark-2 text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-16 bg-light-2">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-dark-1 mb-4">
              Emergency Roofing Services
            </h2>
            <p className="text-lg text-dark-2 max-w-2xl mx-auto">
              Comprehensive emergency services to protect your property from further damage
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {emergencyServices.map((service, index) => (
              <AnimatedSection key={index}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <service.icon className="w-12 h-12 text-primary mt-1" />
                      <div>
                        <h3 className="text-2xl font-bold text-dark-1 mb-3">{service.title}</h3>
                        <p className="text-dark-2 mb-4">{service.description}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-dark-1 mb-3">Service Includes:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-dark-2">
                            <CheckCircle className="w-4 h-4 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* When to Call */}
      <section className="py-16 bg-light-1">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-dark-1 mb-6">
                When to Call for Emergency Service
              </h2>
              <p className="text-lg text-dark-2 mb-6">
                Don't wait for minor issues to become major problems. Call us immediately if you notice any of these signs:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {damageTypes.map((damage, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-primary" />
                    <span className="text-dark-2">{damage}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-primary/10 rounded-lg">
                <h3 className="font-semibold text-dark-1 mb-2">⚠️ Remember:</h3>
                <p className="text-dark-2">
                  Roof damage gets worse quickly and can lead to expensive interior damage, structural problems, 
                  electrical issues, and dangerous black mold growth.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection>
              <div className="relative">
                <img 
                  src="/2021-048-11.jpg" 
                  alt="Emergency roof damage"
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-1/20 to-transparent rounded-lg"></div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Response Time Guarantee */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center">
            <Clock className="w-20 h-20 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">4-Hour Response Time Guarantee</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              We guarantee that our emergency response team will be dispatched to your location within 4 hours of your call. 
              Most of the time, we respond much faster - often within 1-2 hours.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">Average Response</div>
                <div className="text-5xl font-bold mb-2">2 Hours</div>
                <div>or less in most cases</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">Guaranteed Response</div>
                <div className="text-5xl font-bold mb-2">4 Hours</div>
                <div>maximum response time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">Availability</div>
                <div className="text-5xl font-bold mb-2">24/7</div>
                <div>365 days a year</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-dark-1 text-light-1">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center">
            <h2 className="text-4xl font-bold mb-4">
              Don't Let Roof Damage Get Worse
            </h2>
            <p className="text-xl mb-8 text-light-2 max-w-3xl mx-auto">
              Every minute counts when you have roof damage. The sooner we can protect your property, 
              the less damage you'll have to deal with later.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-xl px-12 py-6"
              asChild
            >
              <a href="tel:7046680707" className="flex items-center gap-3">
                <Phone className="w-6 h-6" />
                CALL NOW: (704) 668-0707
              </a>
            </Button>
            <p className="text-light-3 mt-4">Available 24/7 for emergencies • 4-hour response guarantee</p>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}