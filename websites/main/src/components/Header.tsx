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
      <div className="bg-primary text-primary-foreground py-2 text-center text-sm font-medium sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-center gap-2">
          <Zap className="w-4 h-4" />
          <span>🚨 EMERGENCY? We respond in 4 hours or less!</span>
          <a href="tel:7046680707" className="font-bold hover:underline">
            (704) 668-0707
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-light-1 shadow-md sticky top-8 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-primary font-bold text-xl">
                ROOF SOLUTIONS
              </div>
              <div className="text-dark-2 text-sm">Charlotte</div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-dark-1 hover:text-primary transition-colors font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Phone CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <Button asChild className="bg-primary hover:bg-primary/90">
                <a href="tel:7046680707" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call (704) 668-0707
                </a>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="sm">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-dark-1 hover:text-primary transition-colors font-medium text-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button asChild className="bg-primary hover:bg-primary/90 mt-4">
                    <a href="tel:7046680707" className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Call (704) 668-0707
                    </a>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}