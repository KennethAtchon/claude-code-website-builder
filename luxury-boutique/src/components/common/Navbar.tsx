"use client";

import { useState } from "react";
import { Menu, X, Crown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Crown className="h-8 w-8 text-yellow-600" />
            <span className="text-2xl font-bold text-gray-900" style={{fontFamily: 'Playfair Display, serif'}}>
              Élégance
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-900 hover:text-yellow-600 transition-colors font-medium">
              Home
            </a>
            <a href="#collections" className="text-gray-900 hover:text-yellow-600 transition-colors font-medium">
              Collections
            </a>
            <a href="#about" className="text-gray-900 hover:text-yellow-600 transition-colors font-medium">
              Heritage
            </a>
            <a href="#services" className="text-gray-900 hover:text-yellow-600 transition-colors font-medium">
              Services
            </a>
            <a href="#contact" className="text-gray-900 hover:text-yellow-600 transition-colors font-medium">
              Contact
            </a>
          </div>

          {/* VIP Contact */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-600">
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">VIP: (555) 123-4567</span>
            </div>
            <Button className="bg-yellow-600 hover:bg-yellow-700 text-white font-medium">
              Private Appointment
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 hover:text-yellow-600 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <a
                href="#home"
                className="block px-3 py-2 text-gray-900 hover:text-yellow-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                href="#collections"
                className="block px-3 py-2 text-gray-900 hover:text-yellow-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Collections
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-900 hover:text-yellow-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Heritage
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-gray-900 hover:text-yellow-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-900 hover:text-yellow-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <div className="px-3 py-2 border-t border-gray-200 mt-2">
                <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-medium">
                  Private Appointment
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}