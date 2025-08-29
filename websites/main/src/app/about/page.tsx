import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, Star, MapPin, Clock, CheckCircle, Award, Users, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedSection from "@/components/animations/AnimatedSection";

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "About B.E.T. Plumbing LLC - Professional Plumbers Pittsburgh",
  description: "Learn about B.E.T. Plumbing LLC, owned by Brandon Tolkacevic. Professional plumbing services in Pittsburgh and Allegheny County with 5.0 stars and 76+ reviews. Licensed and insured.",
  keywords: ["Brandon Tolkacevic", "B.E.T. Plumbing", "Pittsburgh plumber", "Allegheny County", "licensed plumber", "insured plumbing"],
};

const values = [
  {
    icon: CheckCircle,
    title: "Quality Workmanship",
    description: "Every job is completed to the highest standards using quality materials and proven techniques."
  },
  {
    icon: Clock,
    title: "Reliable Service",
    description: "We show up on time and complete work as promised. Your time is valuable to us."
  },
  {
    icon: Award,
    title: "Professional Excellence",
    description: "Licensed, insured, and committed to ongoing training and industry best practices."
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Your satisfaction is our priority. We listen, communicate clearly, and exceed expectations."
  }
];

const serviceAreas = [
  "Pittsburgh", "Ingram", "Crafton", "Carnegie", "Scott Township", 
  "Green Tree", "Dormont", "Mount Lebanon", "Upper St. Clair", 
  "Bethel Park", "Peters Township", "South Fayette"
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="space-y-6">
                <div className="flex items-center space-x-2 text-yellow-400 mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-white font-medium">5.0 Stars • 76+ Reviews</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  About B.E.T. Plumbing LLC
                </h1>
                
                <p className="text-xl text-white/90 leading-relaxed">
                  Professional plumbing services built on trust, quality, and exceptional customer service. 
                  Serving Pittsburgh and Allegheny County with integrity and expertise.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                    <Link href="/services">
                      Our Services
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white text-primary hover:bg-white hover:text-primary">
                    <Link href="tel:+14127336355">
                      <Phone className="w-5 h-5 mr-2" />
                      Call (412) 733-6355
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/2021-03-14.jpg"
                  alt="Brandon Tolkacevic, owner of B.E.T. Plumbing LLC"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/2021-09-12.jpg"
                  alt="Professional plumbing work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-foreground">
                  Our Story
                </h2>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  B.E.T. Plumbing LLC was founded with a simple mission: provide reliable, professional 
                  plumbing services at fair prices. Based in Ingram, Pennsylvania, we've built our reputation 
                  on quality work, honest pricing, and exceptional customer service throughout Pittsburgh 
                  and Allegheny County.
                </p>

                <p className="text-muted-foreground">
                  Owner Brandon Tolkacevic brings years of experience and a commitment to excellence to every job. 
                  Whether it's an emergency repair or a planned installation, we approach each project with 
                  professionalism and attention to detail. Our 5.0 Google rating reflects our dedication to 
                  customer satisfaction and quality workmanship.
                </p>

                <div className="flex items-center space-x-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">15+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">76+</div>
                    <div className="text-sm text-muted-foreground">Happy Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">100%</div>
                    <div className="text-sm text-muted-foreground">Licensed & Insured</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our Values
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                These core values guide everything we do and shape how we serve our customers 
                throughout Pittsburgh and Allegheny County.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-foreground">
                  Our Service Area
                </h2>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Proudly serving Pittsburgh, Ingram, and all of Allegheny County. Our central location 
                  allows us to provide fast response times throughout the region. Whether you're dealing 
                  with a plumbing emergency or planning a renovation, we're here to help.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{area}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-secondary p-6 rounded-lg">
                  <div className="flex items-center space-x-3 mb-3">
                    <MapPin className="w-6 h-6 text-primary" />
                    <div>
                      <h3 className="font-semibold text-foreground">Our Location</h3>
                      <p className="text-muted-foreground">121 Ingram Ave, Pittsburgh, PA 15205</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-primary" />
                    <div>
                      <h3 className="font-semibold text-foreground">Business Hours</h3>
                      <p className="text-muted-foreground">Monday-Friday 7AM-5PM</p>
                      <p className="text-sm text-primary">24/7 Weekend Emergency Service</p>
                    </div>
                  </div>
                </div>

                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="tel:+14127336355">
                    Call for Service
                  </Link>
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card>
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Why Choose B.E.T. Plumbing?
                    </h3>
                    <div className="flex items-center justify-center space-x-2 text-yellow-500 mb-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                      <span className="text-foreground font-medium">5.0 Rating</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Wrench className="w-5 h-5 text-primary" />
                      <span className="text-foreground">Professional, knowledgeable service</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-foreground">Fastest response time in Pittsburgh</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="text-foreground">Licensed and fully insured</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="text-foreground">Local, owner-operated business</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="text-foreground">Fair pricing, no hidden fees</span>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t">
                    <Button asChild className="w-full bg-primary hover:bg-primary/90">
                      <Link href="https://www.google.com/maps/place/B.E.T.+Plumbing+LLC" target="_blank" rel="noopener noreferrer">
                        Read Customer Reviews
                      </Link>
                    </Button>
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