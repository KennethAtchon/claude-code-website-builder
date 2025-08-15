"use client";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-1 text-light-1">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-primary">Summit</div>
              <div className="text-xl font-medium text-light-2">Roofing</div>
            </div>
            <p className="text-light-2 text-sm leading-relaxed">
              Professional roofing solutions for residential and commercial properties. 
              Licensed, insured, and committed to quality workmanship.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-light-1">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-light-2 hover:text-primary transition-colors duration-200 text-sm">
                Home
              </Link>
              <Link href="/services" className="text-light-2 hover:text-primary transition-colors duration-200 text-sm">
                Services
              </Link>
              <Link href="/about" className="text-light-2 hover:text-primary transition-colors duration-200 text-sm">
                About Us
              </Link>
              <Link href="/contact" className="text-light-2 hover:text-primary transition-colors duration-200 text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-light-1">Services</h3>
            <nav className="flex flex-col space-y-2">
              <span className="text-light-2 text-sm">Roof Installation</span>
              <span className="text-light-2 text-sm">Roof Repair</span>
              <span className="text-light-2 text-sm">Roof Replacement</span>
              <span className="text-light-2 text-sm">Emergency Repairs</span>
              <span className="text-light-2 text-sm">Gutter Services</span>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-light-1">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-light-2 text-sm">(555) 123-ROOF</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-light-2 text-sm">info@summitroofing.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-light-2 text-sm">123 Main Street<br />Your City, ST 12345</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-light-2 text-sm">Mon-Fri: 8AM-6PM<br />Sat: 9AM-4PM<br />Emergency: 24/7</span>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Banner */}
        <div className="mt-8 p-4 bg-destructive rounded-lg text-center">
          <p className="text-destructive-foreground font-semibold">
            24/7 Emergency Roof Repairs - Call Now: (555) 123-ROOF
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-dark-2">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-light-3 text-sm">
              © 2024 Summit Roofing Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-light-3 hover:text-primary transition-colors duration-200 text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-light-3 hover:text-primary transition-colors duration-200 text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}