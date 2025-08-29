import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, Droplets, Wrench, Hammer, Pickaxe, Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/animations/AnimatedSection";

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Portfolio - Plumbing Projects & Work Examples | B.E.T. Plumbing LLC",
  description: "View our portfolio of completed plumbing projects in Pittsburgh and Allegheny County. Water heater installations, drain cleaning, pipe work, and excavation examples.",
  keywords: ["plumbing portfolio", "plumbing projects Pittsburgh", "water heater installation examples", "drain cleaning work", "before after plumbing"],
};

const portfolioCategories = [
  {
    icon: Droplets,
    title: "Water Heater Installations",
    description: "Professional water heater installations showcasing our expertise with various systems and configurations. Each installation meets code requirements and manufacturer specifications for optimal performance and longevity.",
    projects: [
      {
        title: "Tankless Water Heater Upgrade",
        location: "Pittsburgh, PA",
        description: "Complete replacement of old tank system with energy-efficient tankless unit. Included gas line upgrade and venting modifications.",
        image: "/2021-02-01.jpg",
        tags: ["Tankless", "Energy Efficient", "Code Compliant"]
      },
      {
        title: "50-Gallon Tank Installation",
        location: "Ingram, PA", 
        description: "Emergency replacement of failed water heater with same-day installation. Customer had hot water restored within 4 hours.",
        image: "/2021-03-02.jpg",
        tags: ["Emergency Service", "Same Day", "50 Gallon"]
      }
    ]
  },
  {
    icon: Wrench,
    title: "Drain Cleaning Projects",
    description: "Examples of our drain cleaning work, from simple clogs to complex main line issues. We use professional equipment and techniques to restore proper drainage and prevent future problems.",
    projects: [
      {
        title: "Main Sewer Line Cleaning",
        location: "Scott Township, PA",
        description: "Hydro-jetting service to clear years of buildup in main sewer line. Restored full flow and prevented costly excavation.",
        image: "/2021-09-11.jpg",
        tags: ["Hydro-Jetting", "Main Line", "Preventive"]
      },
      {
        title: "Kitchen Drain Restoration",
        location: "Mount Lebanon, PA",
        description: "Complete kitchen drain system cleaning including disposal line and main drain. Eliminated recurring backup issues.",
        image: "/2021-03-02.jpg",
        tags: ["Kitchen", "Recurring Issue", "Complete System"]
      }
    ]
  },
  {
    icon: Hammer,
    title: "Pipe Installation & Repair",
    description: "Comprehensive pipe work including new installations, repairs, and system upgrades. Our work ensures reliable water supply and proper drainage for residential and commercial properties.",
    projects: [
      {
        title: "Whole House Repiping",
        location: "Carnegie, PA",
        description: "Complete replacement of old galvanized pipes with modern PEX system. Improved water pressure and eliminated leak issues.",
        image: "/2021-03-09.jpg",
        tags: ["PEX Installation", "Whole House", "Pressure Improvement"]
      },
      {
        title: "Burst Pipe Emergency Repair",
        location: "Green Tree, PA",
        description: "Emergency repair of burst pipe in basement during winter freeze. Minimized water damage and restored service same day.",
        image: "/2021-03-14.jpg",
        tags: ["Emergency", "Freeze Damage", "Same Day"]
      }
    ]
  },
  {
    icon: Pickaxe,
    title: "Excavation & Underground Work",
    description: "Professional excavation projects for sewer line repair, water line installation, and underground utility work. We complete these projects efficiently while minimizing disruption to your property.",
    projects: [
      {
        title: "Sewer Line Replacement",
        location: "Dormont, PA",
        description: "Complete sewer line replacement from house to street connection. Minimal landscaping disruption with precise excavation.",
        image: "/2021-09-11.jpg",
        tags: ["Sewer Line", "Full Replacement", "Minimal Disruption"]
      },
      {
        title: "Water Service Line Installation",
        location: "Upper St. Clair, PA",
        description: "New water service line installation for home addition. Coordinated with utility company for seamless connection.",
        image: "/2021-02-01.jpg",
        tags: ["New Installation", "Home Addition", "Utility Coordination"]
      }
    ]
  }
];

export default function PortfolioPage() {
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
                Our Work Portfolio
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                See examples of our professional plumbing work across Pittsburgh and Allegheny County. 
                From emergency repairs to complete installations, we deliver quality results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Link href="tel:+14127336355">
                    <Phone className="w-5 h-5 mr-2" />
                    Request Service
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-primary hover:bg-white hover:text-primary">
                  <Link href="/contact">
                    Get Free Estimate
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Portfolio Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {portfolioCategories.map((category, categoryIndex) => (
              <AnimatedSection key={category.title} delay={categoryIndex * 0.2}>
                <div className="space-y-8">
                  {/* Category Header */}
                  <div className="text-center max-w-4xl mx-auto">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <category.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="text-3xl font-bold text-foreground">
                        {category.title}
                      </h2>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  {/* Projects Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {category.projects.map((project, projectIndex) => (
                      <AnimatedSection key={project.title} delay={(categoryIndex * 0.2) + (projectIndex * 0.1)}>
                        <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                          <div className="aspect-[3/2] relative overflow-hidden rounded-t-lg">
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover hover:scale-105 transition-transform duration-300"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                          </div>
                          <CardHeader>
                            <div className="flex items-start justify-between">
                              <div>
                                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                                <p className="text-sm text-muted-foreground">{project.location}</p>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground mb-4 leading-relaxed">
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {project.tags.map((tag, tagIndex) => (
                                <Badge key={tagIndex} variant="secondary" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </AnimatedSection>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-4xl font-bold text-foreground">
                What Our Customers Say About Our Work
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-current text-yellow-500" />
                      ))}
                    </div>
                    <blockquote className="text-foreground mb-3">
                      "Excellent work, excellent response time and continued communication."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">Yelp Customer</cite>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-current text-yellow-500" />
                      ))}
                    </div>
                    <blockquote className="text-foreground mb-3">
                      "Brandon is a true professional and knows what he is doing when it comes to plumbing."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">Home Advisor Review</cite>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-current text-yellow-500" />
                      ))}
                    </div>
                    <blockquote className="text-foreground mb-3">
                      "Prices are fair and quality of work is guaranteed satisfaction."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">LeQuira Hutson</cite>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link 
                    href="https://www.google.com/maps/place/B.E.T.+Plumbing+LLC" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Read All Reviews
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">
                    Schedule Your Project
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-4xl font-bold">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-white/90">
                Contact us today for a free estimate on your plumbing project. 
                We'll provide honest, transparent pricing with no hidden fees.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
                  <Link href="tel:+14127336355">
                    <Phone className="w-5 h-5 mr-3" />
                    Call (412) 733-6355
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-primary hover:bg-white hover:text-primary text-lg px-8 py-6">
                  <Link href="/contact">
                    Request Estimate
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}