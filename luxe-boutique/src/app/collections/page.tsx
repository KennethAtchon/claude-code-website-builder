import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Heart, ShoppingBag } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collections | Luxe Boutique - Luxury Fashion & Designer Pieces",
  description: "Browse our curated collection of luxury handbags, premium jewelry, designer apparel, and exclusive accessories. Each piece handpicked for exceptional craftsmanship.",
  keywords: "luxury collections, designer handbags, premium jewelry, luxury apparel, designer accessories, authentic luxury pieces",
};

export default function Collections() {
  const products = [
    {
      id: 1,
      name: "Classic Leather Tote",
      category: "Handbags",
      price: "$3,200",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Timeless elegance in premium Italian leather"
    },
    {
      id: 2,
      name: "Diamond Tennis Bracelet",
      category: "Jewelry",
      price: "$8,500",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "18K white gold with brilliant cut diamonds"
    },
    {
      id: 3,
      name: "Silk Evening Gown",
      category: "Apparel",
      price: "$2,800",
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Hand-draped silk with intricate beadwork"
    },
    {
      id: 4,
      name: "Vintage-Inspired Watch",
      category: "Accessories",
      price: "$4,500",
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Swiss movement with mother-of-pearl dial"
    },
    {
      id: 5,
      name: "Cashmere Coat",
      category: "Apparel",
      price: "$3,900",
      image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Double-faced cashmere with signature buttons"
    },
    {
      id: 6,
      name: "Pearl Drop Earrings",
      category: "Jewelry",
      price: "$1,800",
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Tahitian pearls with 14K gold settings"
    }
  ];

  const categories = ["All", "Handbags", "Jewelry", "Apparel", "Accessories"];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <AnimatedSection className="relative py-24 bg-gradient-to-br from-accent to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">
              Our Collections
            </h1>
            <p className="text-xl text-foreground max-w-2xl mx-auto">
              Discover our carefully curated selection of luxury pieces, each chosen for its exceptional craftsmanship and timeless appeal.
            </p>
          </div>
        </AnimatedSection>

        {/* Filter Section */}
        <AnimatedSection className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className={category === "All" ? "bg-primary hover:bg-primary/90" : "hover:bg-accent"}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Products Grid */}
        <AnimatedSection className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card key={product.id} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-accent/30">
                  <CardHeader className="relative overflow-hidden p-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={400}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                        <ShoppingBag className="h-4 w-4" />
                      </Button>
                    </div>
                    <Badge 
                      variant="secondary" 
                      className="absolute top-4 left-4 bg-secondary text-secondary-foreground"
                    >
                      {product.category}
                    </Badge>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-xl font-serif mb-2">{product.name}</CardTitle>
                    <p className="text-foreground mb-4 text-sm">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-semibold text-primary">{product.price}</span>
                      <Button className="bg-primary hover:bg-primary/90">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="py-16 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              Didn&apos;t Find What You&apos;re Looking For?
            </h2>
            <p className="text-lg text-foreground mb-8">
              Our personal stylists can help you find the perfect piece or source exclusive items just for you.
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              Schedule Consultation
            </Button>
          </div>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  );
}