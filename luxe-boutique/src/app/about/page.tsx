import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Star, Award, Users, Globe } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Luxe Boutique - Our Story & Values",
  description: "Learn about Luxe Boutique's 25-year journey in luxury fashion. Founded by Isabella Martinez, we curate authentic luxury pieces with exceptional craftsmanship and heritage.",
  keywords: "luxury boutique history, authentic luxury, sustainable fashion, expert stylists, Madison Avenue boutique",
};

export default function About() {
  const values = [
    "Authentic luxury pieces",
    "Exceptional customer service",
    "Exclusive designer partnerships",
    "Sustainable luxury practices"
  ];

  const stats = [
    { icon: Users, number: "50+", label: "Expert Staff" },
    { icon: Award, number: "25", label: "Years Experience" },
    { icon: Globe, number: "40+", label: "Countries Served" },
    { icon: Star, number: "1000+", label: "Happy Clients" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <AnimatedSection className="relative py-24 bg-gradient-to-br from-accent to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">
              About Luxe Boutique
            </h1>
            <p className="text-xl text-foreground max-w-3xl mx-auto">
              Founded on the belief that true luxury transcends price, we curate exceptional pieces that tell stories of craftsmanship, heritage, and timeless beauty.
            </p>
          </div>
        </AnimatedSection>

        {/* Story Section */}
        <AnimatedSection className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
                  Our Story
                </h2>
                <div className="space-y-6 text-lg text-foreground leading-relaxed">
                  <p>
                    Luxe Boutique was born from a passion for authentic luxury and a desire to share the stories behind extraordinary pieces. Founded in 1999 by renowned fashion curator Isabella Martinez, our atelier began as a small showroom on Madison Avenue.
                  </p>
                  <p>
                    What started as a curated selection of vintage couture has evolved into a premier destination for discerning individuals seeking pieces that reflect their personal style and values. We believe that luxury is not just about exclusivity—it&apos;s about connecting with the artisans, designers, and heritage brands that create these remarkable works of art.
                  </p>
                  <p>
                    Today, we continue to honor that founding vision, offering our clients not just products, but experiences that celebrate the intersection of craftsmanship, beauty, and personal expression.
                  </p>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Isabella Martinez, founder of Luxe Boutique"
                  width={600}
                  height={700}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Values Section */}
        <AnimatedSection className="py-16 lg:py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
                Our Values
              </h2>
              <p className="text-xl text-foreground max-w-2xl mx-auto">
                Every decision we make is guided by these core principles that define who we are and how we serve our clients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-secondary rounded-full p-3 mt-1">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">{value}</h3>
                    <p className="text-foreground">
                      {index === 0 && "We source only genuine pieces from verified designers and heritage brands, ensuring every item meets our exacting standards for authenticity."}
                      {index === 1 && "Our dedicated team provides personalized attention, from initial consultation to after-sales care, creating lasting relationships with our clients."}
                      {index === 2 && "We maintain exclusive relationships with renowned designers and emerging talents, offering our clients access to limited editions and custom pieces."}
                      {index === 3 && "We're committed to supporting brands that prioritize ethical sourcing, sustainable production, and fair labor practices."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Stats Section */}
        <AnimatedSection className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
                By the Numbers
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center border-0 bg-accent/30 hover:bg-accent/50 transition-colors duration-300">
                  <CardContent className="p-8">
                    <stat.icon className="h-12 w-12 text-secondary mx-auto mb-4" />
                    <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-foreground font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Team Preview Section */}
        <AnimatedSection className="py-16 lg:py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
                Meet Our Team
              </h2>
              <p className="text-xl text-foreground max-w-2xl mx-auto">
                Our expert stylists and curators bring decades of experience in luxury fashion and design.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Isabella Martinez",
                  role: "Founder & Creative Director",
                  image: "https://images.unsplash.com/photo-1494790108755-2616b612b641?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                },
                {
                  name: "Alexander Chen",
                  role: "Senior Style Consultant",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                },
                {
                  name: "Sophie Laurent",
                  role: "Jewelry Specialist",
                  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                }
              ].map((member, index) => (
                <Card key={index} className="text-center border-0 bg-white hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold text-primary mb-1">{member.name}</h3>
                    <p className="text-foreground">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  );
}