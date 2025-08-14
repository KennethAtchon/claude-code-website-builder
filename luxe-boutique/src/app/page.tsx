import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Star, Shield, Truck, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <AnimatedSection className="relative h-screen flex items-center justify-center bg-gradient-to-br from-accent to-white">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Elegant model in premium fashion against minimal backdrop"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-primary mb-6">
              Elevate Your Style
            </h1>
            <p className="text-xl md:text-2xl text-foreground mb-8 max-w-2xl mx-auto">
              Discover curated luxury collections for the discerning individual
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
              Shop Collection
            </Button>
          </div>
        </AnimatedSection>

        {/* Featured Collections */}
        <AnimatedSection className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4">
                Featured Collections
              </h2>
              <p className="text-xl text-foreground max-w-2xl mx-auto">
                Handpicked pieces that define contemporary luxury
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-accent/50">
                <CardHeader className="relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Signature Handbags"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-2xl font-serif mb-2">Signature Handbags</CardTitle>
                  <p className="text-foreground mb-4">
                    Exquisite leather craftsmanship meets timeless design
                  </p>
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    $2,500 - $8,500
                  </Badge>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-accent/50">
                <CardHeader className="relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Premium Jewelry"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-2xl font-serif mb-2">Premium Jewelry</CardTitle>
                  <p className="text-foreground mb-4">
                    Precious metals and stones in contemporary settings
                  </p>
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    $1,200 - $15,000
                  </Badge>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-accent/50">
                <CardHeader className="relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Designer Apparel"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-2xl font-serif mb-2">Designer Apparel</CardTitle>
                  <p className="text-foreground mb-4">
                    Exclusive fashion pieces from renowned designers
                  </p>
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    $800 - $5,000
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </AnimatedSection>

        {/* About Section */}
        <AnimatedSection className="py-16 lg:py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
                  Curated Excellence
                </h2>
                <p className="text-lg text-foreground mb-8 leading-relaxed">
                  At Luxe Boutique, we believe luxury is not just about price—it&apos;s about craftsmanship, 
                  heritage, and the stories behind each piece. Our carefully curated selection represents 
                  the pinnacle of design and quality.
                </p>
                <ul className="space-y-4">
                  {[
                    "Authentic luxury pieces",
                    "Exceptional customer service", 
                    "Exclusive designer partnerships",
                    "Sustainable luxury practices"
                  ].map((value, index) => (
                    <li key={index} className="flex items-center">
                      <Star className="h-5 w-5 text-secondary mr-3" />
                      <span className="text-foreground">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Luxury store interior"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Services Section */}
        <AnimatedSection className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4">
                Personalized Services
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary transition-colors duration-300">
                  <Users className="h-8 w-8 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Personal Styling</h3>
                <p className="text-foreground">One-on-one consultation with our expert stylists</p>
              </div>

              <div className="text-center group">
                <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary transition-colors duration-300">
                  <Star className="h-8 w-8 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Private Appointments</h3>
                <p className="text-foreground">Exclusive shopping experience in our private showroom</p>
              </div>

              <div className="text-center group">
                <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary transition-colors duration-300">
                  <Truck className="h-8 w-8 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Global Delivery</h3>
                <p className="text-foreground">Worldwide shipping with white-glove service</p>
              </div>

              <div className="text-center group">
                <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary transition-colors duration-300">
                  <Shield className="h-8 w-8 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Authentication</h3>
                <p className="text-foreground">Certified authenticity for every piece</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  );
}
