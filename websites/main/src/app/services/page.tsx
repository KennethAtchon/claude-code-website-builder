import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, Droplets, Wrench, Hammer, Pickaxe, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedSection from "@/components/animations/AnimatedSection";

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Plumbing Services - Water Heater, Drain Cleaning & More | B.E.T. Plumbing LLC",
  description: "Complete plumbing services in Pittsburgh and Allegheny County. Water heater installation, drain cleaning, pipe repair, excavation work, and emergency services. Licensed and insured.",
  keywords: ["water heater installation Pittsburgh", "drain cleaning", "pipe repair", "emergency plumbing", "excavation work", "bathroom remodel"],
};

const services = [
  {
    icon: Droplets,
    title: "Water Heater Services",
    description: "Complete water heater installation, repair, and replacement services. We work with all major brands and can handle both traditional tank and tankless systems. Professional installation ensures optimal performance and extends equipment life.",
    features: [
      "Tank and tankless water heater installation",
      "Water heater repair and maintenance",
      "Energy-efficient system upgrades",
      "Emergency water heater replacement",
      "Professional warranty service",
      "All major brands supported"
    ],
    image: "/2021-02-01.jpg",
  },
  {
    icon: Wrench,
    title: "Drain Cleaning & Repair",
    description: "Professional drain cleaning services using advanced equipment to clear even the toughest clogs. From kitchen sinks to main sewer lines, we restore proper drainage quickly and effectively.",
    features: [
      "Kitchen and bathroom drain cleaning",
      "Main sewer line clearing",
      "Hydro-jetting for tough blockages",
      "Camera inspection services",
      "Root removal from pipes",
      "Preventive maintenance programs"
    ],
    image: "/2021-03-02.jpg",
  },
  {
    icon: Hammer,
    title: "Pipe Installation & Repair",
    description: "Expert pipe installation and repair services for residential and commercial properties. We handle everything from small leak repairs to complete repiping projects using quality materials and proven techniques.",
    features: [
      "Leak detection and repair",
      "Complete repiping projects",
      "PEX and copper pipe installation",
      "Frozen pipe repair and prevention",
      "Water line installation",
      "Gas line installation and repair"
    ],
    image: "/2021-03-09.jpg",
  },
  {
    icon: Pickaxe,
    title: "Excavation & Underground Work",
    description: "Professional excavation services for sewer line repair, water line installation, and underground plumbing work. We use proper equipment and techniques to minimize property damage while completing necessary underground repairs.",
    features: [
      "Sewer line excavation and repair",
      "Water line installation",
      "Underground utility location",
      "Trenchless repair options",
      "Property restoration services",
      "Emergency excavation services"
    ],
    image: "/2022-01-15.jpg",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Professional Plumbing Services
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                From emergency repairs to planned installations, we handle it all with professional 
                expertise and fair pricing. Serving Pittsburgh and Allegheny County.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Link href="tel:+14127336355">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (412) 733-6355
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-black hover:bg-white hover:text-primary">
                  <Link href="/contact">
                    Get Free Estimate
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.2}>
                <Card className="overflow-hidden">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={`aspect-[4/3] relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                    <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <service.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h2 className="text-3xl font-bold text-foreground">
                          {service.title}
                        </h2>
                      </div>
                      
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button asChild className="bg-primary hover:bg-primary/90 self-start">
                        <Link href="tel:+14127336355">
                          Get Quote for {service.title}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Service CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <Card className="bg-gradient-to-r from-red-600 to-red-700 text-white">
              <CardContent className="p-12 text-center">
                <h2 className="text-4xl font-bold mb-6">
                  24/7 Emergency Plumbing Services
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                  Plumbing emergency? We're available 24/7 on weekends for urgent repairs. 
                  Fast response times when you need us most in Pittsburgh and Allegheny County.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white text-red-600 hover:bg-white/90 text-lg px-8 py-6">
                    <Link href="tel:+14127336355">
                      <Phone className="w-5 h-5 mr-3" />
                      Emergency Call: (412) 733-6355
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}