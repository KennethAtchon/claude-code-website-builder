import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Shield, Award } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-primary mb-2">
                Premier Roofing Pros
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Your Roof, Our Promise
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Trusted roofing experts delivering exceptional craftsmanship and reliable service for residential and commercial properties since 2008.
              </p>
            </div>
            
            {/* Trust Badges */}
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center text-xs">
                <Shield className="w-4 h-4 mr-1 text-primary" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center text-xs">
                <Award className="w-4 h-4 mr-1 text-primary" />
                <span>BBB A+</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="#services" className="hover:text-primary transition-colors text-sm">
                  Roof Installation
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary transition-colors text-sm">
                  Roof Repair
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary transition-colors text-sm">
                  Roof Inspection
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary transition-colors text-sm">
                  Storm Damage
                </Link>
              </li>
              <li>
                <Link href="#emergency" className="hover:text-primary transition-colors text-sm">
                  Emergency Service
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-primary transition-colors text-sm">
                  Free Estimates
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Austin, TX</li>
              <li>Cedar Park, TX</li>
              <li>Round Rock, TX</li>
              <li>Pflugerville, TX</li>
              <li>Leander, TX</li>
              <li>Georgetown, TX</li>
            </ul>
            <p className="text-xs text-gray-400 mt-3">
              And surrounding Central Texas areas
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-primary" />
                <div>
                  <a href="tel:(555) ROOF-PRO" className="hover:text-primary transition-colors text-sm">
                    (555) ROOF-PRO
                  </a>
                  <p className="text-xs text-gray-400">24/7 Emergency</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-primary" />
                <a 
                  href="mailto:contact@premierroofingpros.com" 
                  className="hover:text-primary transition-colors text-sm"
                >
                  contact@premierroofingpros.com
                </a>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 text-primary mt-1" />
                <div className="text-sm">
                  <p>1245 Commerce Drive</p>
                  <p>Austin, TX 78704</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                <a 
                  href="https://facebook.com/premierroofingpros"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://instagram.com/premierroofingpros"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/company/premier-roofing-pros"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              <p>© {currentYear} Premier Roofing Pros. All rights reserved.</p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-primary transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
          
          {/* Additional Info */}
          <div className="mt-4 pt-4 border-t border-gray-800 text-center">
            <p className="text-xs text-gray-500">
              Texas State Board of Plumbing Examiners License #12345 | 
              Fully Licensed, Bonded & Insured | 
              GAF Master Elite Contractor
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}