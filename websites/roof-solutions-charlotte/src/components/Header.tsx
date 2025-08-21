"use client";
import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Emergency Services", href: "/emergency-services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Emergency Banner */}
      <div className="bg-primary text-primary-foreground py-2.5 text-center text-sm font-medium sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-center gap-2 flex-wrap">
          <Zap className="w-4 h-4 flex-shrink-0" />
          <span className="whitespace-nowrap">🚨 EMERGENCY? We respond in 4 hours or less!</span>
          <a href="tel:7046680707" className="font-bold hover:underline whitespace-nowrap">
            (704) 668-0707
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-light-1 shadow-lg border-b border-light-3 sticky top-10 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-18 py-2">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
              <div className="flex flex-col">
                <div className="text-primary font-bold text-xl leading-tight">
                  ROOF SOLUTIONS
                </div>
                <div className="text-dark-2 text-sm leading-tight">Charlotte</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-dark-1 hover:text-primary transition-colors font-medium text-sm xl:text-base whitespace-nowrap relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* Phone CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <Button asChild className="bg-primary hover:bg-primary/90 shadow-md">
                <a href="tel:7046680707" className="flex items-center gap-2 text-sm xl:text-base">
                  <Phone className="w-4 h-4" />
                  <span className="hidden xl:inline">Call</span> (704) 668-0707
                </a>
              </Button>
            </div>

            {/* Mobile Menu */}
            <div className="flex items-center gap-3 lg:hidden">
              {/* Mobile phone button */}
              <Button asChild size="sm" className="bg-primary hover:bg-primary/90 md:hidden">
                <a href="tel:7046680707" className="flex items-center gap-1">
                  <Phone className="w-3 h-3" />
                </a>
              </Button>

              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-9 w-9 p-0 bg-dark-2 text-light-1">
                    <Menu className="w-4 h-4" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px] sm:w-[300px] border-0 shadow-2xl invisible backdrop-blur-sm mr-4 mt-4 mb-4 rounded-xl">
                  <div className="flex flex-col w-[280px] sm:w-[300px] visible border-0 shadow-2xl bg-light-1/95 rounded-xl p-2">
                    {/* Header */}
                    <div className="py-4 px-2 border-b border-light-3 flex items-center justify-between">
                      <div className="text-lg font-semibold text-dark-1">Menu</div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-8 w-8 p-0 hover:bg-light-2"
                        onClick={() => setIsOpen(false)}
                      >
                        <X className="w-4 h-4" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                    </div>
                    
                    {/* Navigation */}
                    <nav className="flex flex-col py-4 space-y-2">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="text-dark-1 hover:text-primary hover:bg-light-2 transition-all duration-200 font-medium text-base py-3 px-4 rounded-lg border border-transparent hover:border-light-3"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                      
                      {/* Call button under Contact */}
                      <div className="pt-2 px-2">
                        <Button asChild className="bg-primary hover:bg-primary/90 w-full shadow-md">
                          <a href="tel:7046680707" className="flex items-center justify-center gap-2">
                            <Phone className="w-4 h-4" />
                            Call (704) 668-0707
                          </a>
                        </Button>
                      </div>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}