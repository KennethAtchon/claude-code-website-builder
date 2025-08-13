"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search, User, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { NavigationItem } from "@/types";

const navigationItems: NavigationItem[] = [
  { label: "Collections", path: "/collections" },
  { label: "Heritage", path: "/heritage" },
  { label: "Atelier", path: "/atelier" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Navigation - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.slice(0, 2).map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "text-sm font-medium tracking-wider uppercase transition-colors hover:text-accent",
                  isScrolled ? "text-text" : "text-white"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Logo - Center */}
          <Link
            href="/"
            className="flex flex-col items-center group"
            aria-label="Lumière Collection Home"
          >
            <span
              className={cn(
                "font-primary text-2xl md:text-3xl font-bold tracking-[0.3em] transition-colors",
                isScrolled ? "text-text" : "text-white"
              )}
            >
              LUMIÈRE
            </span>
            <span
              className={cn(
                "font-secondary text-xs tracking-[0.2em] uppercase transition-colors",
                isScrolled ? "text-muted" : "text-white/80"
              )}
            >
              Collection
            </span>
          </Link>

          {/* Right Navigation - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.slice(2).map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "text-sm font-medium tracking-wider uppercase transition-colors hover:text-accent",
                  isScrolled ? "text-text" : "text-white"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Action Items */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "transition-colors",
                isScrolled ? "text-text hover:text-accent" : "text-white hover:text-accent"
              )}
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "transition-colors",
                isScrolled ? "text-text hover:text-accent" : "text-white hover:text-accent"
              )}
              aria-label="Account"
            >
              <User className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "transition-colors",
                isScrolled ? "text-text hover:text-accent" : "text-white hover:text-accent"
              )}
              aria-label="Shopping bag"
            >
              <ShoppingBag className="h-5 w-5" />
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "md:hidden transition-colors",
                isScrolled ? "text-text" : "text-white"
              )}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <div className="py-6 px-4 space-y-4">
              <Link href="/" className="skip-to-content sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent text-white px-4 py-2 rounded">
                Skip to main content
              </Link>
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="block text-text hover:text-accent font-medium tracking-wider uppercase transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}