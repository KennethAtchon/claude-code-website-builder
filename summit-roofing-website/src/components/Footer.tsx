"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Youtube,
  ArrowRight,
  Shield,
  Award,
  Clock
} from "lucide-react";
import { BUSINESS_INFO, SOCIAL_LINKS } from "@/lib/constants";

const navigation = {
  services: [
    { name: "Roof Replacement", href: "#services" },
    { name: "Roof Repairs", href: "#services" },
    { name: "Commercial Roofing", href: "#services" },
    { name: "Emergency Repairs", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Work", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ],
  resources: [
    { name: "Free Estimate", href: "#contact" },
    { name: "Insurance Claims", href: "#services" },
    { name: "Maintenance Tips", href: "#" },
    { name: "Warranty Info", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">SR</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Summit Roofing</h3>
                <p className="text-sm text-gray-400">Solutions</p>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              Denver&apos;s most trusted roofing contractor since 2003. Quality craftsmanship, 
              reliable service, and comprehensive roofing solutions.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 text-xs">
              <div className="flex items-center space-x-1 text-gray-300">
                <Shield className="h-4 w-4 text-green-500" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-300">
                <Award className="h-4 w-4 text-yellow-500" />
                <span>A+ BBB Rating</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-300">
                <Clock className="h-4 w-4 text-blue-500" />
                <span>24/7 Emergency</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Stay Connected</h4>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">{BUSINESS_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">{BUSINESS_INFO.email}</span>
              </div>
              <div className="flex items-start space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state}
                </span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-3">
              <p className="text-sm text-gray-300">Get roofing tips & updates</p>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter email"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 flex-shrink-0">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 mt-6">
              <Link
                href={SOCIAL_LINKS.facebook}
                className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href={SOCIAL_LINKS.instagram}
                className="bg-gray-800 p-2 rounded-lg hover:bg-pink-600 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href={SOCIAL_LINKS.twitter}
                className="bg-gray-800 p-2 rounded-lg hover:bg-blue-400 transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href={SOCIAL_LINKS.linkedin}
                className="bg-gray-800 p-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link
                href={SOCIAL_LINKS.youtube}
                className="bg-gray-800 p-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                <Youtube className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Banner */}
      <div className="bg-red-600 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-2 text-white">
              <Clock className="h-5 w-5" />
              <span className="font-semibold">24/7 Emergency Roofing Services Available</span>
            </div>
            <Button variant="secondary" size="sm" className="bg-white text-red-600 hover:bg-gray-100">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Button>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-700" />

      {/* Bottom Footer */}
      <div className="bg-gray-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
              <p>&copy; 2024 Summit Roofing Solutions. All rights reserved.</p>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              <p>Colorado State Licensed | Fully Insured</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}