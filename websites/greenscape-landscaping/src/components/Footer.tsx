"use client";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-light-1 text-dark-1 border-t border-light-3">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="font-playfair font-semibold text-xl text-dark-1">
                GreenScape
              </span>
            </div>
            <p className="text-dark-2 text-sm">
              Transforming outdoor spaces with professional expertise and environmental consciousness since 1998.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-dark-1 mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-dark-2 hover:text-primary transition-colors">
                  Lawn Care
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-dark-2 hover:text-primary transition-colors">
                  Garden Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-dark-2 hover:text-primary transition-colors">
                  Hardscaping
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-dark-2 hover:text-primary transition-colors">
                  Irrigation Systems
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-dark-1 mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-dark-2 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-dark-2 hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-dark-2 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-dark-2 hover:text-primary transition-colors">
                  Get Quote
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-dark-1 mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 text-dark-2">
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-dark-2">
                <Mail className="w-4 h-4" />
                <span>info@greenscapelandscaping.com</span>
              </div>
              <div className="flex items-start space-x-2 text-dark-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>123 Garden Way<br />Green Valley, ST 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-light-3 mt-8 pt-8 text-center text-sm text-dark-2">
          <p>&copy; 2024 GreenScape Landscaping. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}