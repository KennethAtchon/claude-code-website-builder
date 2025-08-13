"use client";

import { Crown, Phone, Mail, MapPin, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-luxury-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Crown className="h-8 w-8 text-luxury-gold" />
              <span className="text-2xl font-playfair font-bold">Élégance</span>
            </div>
            <p className="text-luxury-gray-300 mb-6 max-w-md leading-relaxed">
              For over 150 years, Élégance has been the epitome of luxury and sophistication, 
              creating timeless pieces for the world's most discerning collectors.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-luxury-gray-400 hover:text-luxury-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-luxury-gray-400 hover:text-luxury-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-luxury-gray-400 hover:text-luxury-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-luxury-gray-400 hover:text-luxury-gold transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-playfair font-bold mb-6 text-luxury-gold">Collections</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-luxury-gray-300 hover:text-white transition-colors">Fine Jewelry</a></li>
              <li><a href="#" className="text-luxury-gray-300 hover:text-white transition-colors">Luxury Watches</a></li>
              <li><a href="#" className="text-luxury-gray-300 hover:text-white transition-colors">Custom Designs</a></li>
              <li><a href="#" className="text-luxury-gray-300 hover:text-white transition-colors">Limited Editions</a></li>
              <li><a href="#" className="text-luxury-gray-300 hover:text-white transition-colors">Heritage Collection</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-playfair font-bold mb-6 text-luxury-gold">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-luxury-gray-300 hover:text-white transition-colors">Personal Shopping</a></li>
              <li><a href="#" className="text-luxury-gray-300 hover:text-white transition-colors">Private Viewing</a></li>
              <li><a href="#" className="text-luxury-gray-300 hover:text-white transition-colors">VIP Membership</a></li>
              <li><a href="#" className="text-luxury-gray-300 hover:text-white transition-colors">Authentication</a></li>
              <li><a href="#" className="text-luxury-gray-300 hover:text-white transition-colors">Concierge</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="border-t border-luxury-gray-800 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-luxury-gold" />
              <div>
                <p className="text-sm text-luxury-gray-400">VIP Concierge</p>
                <p className="font-medium">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-luxury-gold" />
              <div>
                <p className="text-sm text-luxury-gray-400">Email</p>
                <p className="font-medium">concierge@elegance-boutique.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-luxury-gold" />
              <div>
                <p className="text-sm text-luxury-gray-400">Location</p>
                <p className="font-medium">789 Madison Avenue, NYC</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-luxury-gray-800 py-8">
          <div className="text-center">
            <h4 className="text-xl font-playfair font-bold mb-4 text-luxury-gold">
              Stay Connected
            </h4>
            <p className="text-luxury-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to receive exclusive invitations to private viewings, 
              early access to new collections, and insider insights from our master craftsmen.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-luxury-gray-800 border border-luxury-gray-700 rounded-lg text-white placeholder-luxury-gray-400 focus:outline-none focus:border-luxury-gold"
              />
              <button className="px-6 py-3 bg-luxury-gold text-luxury-black font-semibold rounded-lg hover:bg-luxury-gold/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-luxury-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-luxury-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Élégance Luxury Boutique. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-luxury-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-luxury-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-luxury-gray-400 hover:text-white transition-colors">Cookie Policy</a>
              <a href="#" className="text-luxury-gray-400 hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}