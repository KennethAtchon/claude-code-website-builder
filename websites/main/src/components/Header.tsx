"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/unnamed.png"
              alt="B.E.T. Plumbing Logo"
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
              priority
            />
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-primary">B.E.T. Plumbing</span>
              <p className="text-sm text-muted-foreground">Professional Plumbing Services</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Call Now</p>
              <p className="font-semibold text-primary">(412) 733-6355</p>
            </div>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="tel:+14127336355">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t">
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link href="tel:+14127336355">
                    <Phone className="w-4 h-4 mr-2" />
                    Call (412) 733-6355
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}