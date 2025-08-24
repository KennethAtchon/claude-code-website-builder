import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const navigation = {
    services: [
      { name: "Residential Roofing", href: "/services" },
      { name: "Commercial Roofing", href: "/services" },
      { name: "Roof Restoration", href: "/services" },
      { name: "Emergency Repairs", href: "/services" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Technology", href: "/technology" },
      { name: "Testimonials", href: "/testimonials" },
    ],
    support: [
      { name: "Contact", href: "/contact" },
      { name: "Consultation", href: "/consultation" },
      { name: "Warranty", href: "/warranty" },
      { name: "Maintenance", href: "/maintenance" },
    ],
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
  ];

  return (
    <footer className="bg-dark-1 text-light-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company info */}
            <div className="lg:col-span-2">
              <div className="text-2xl font-bold text-primary mb-4">
                Skyline Roof Masters
              </div>
              <p className="text-light-2 mb-6 max-w-md">
                Premium roofing specialists delivering exceptional craftsmanship and innovative solutions for residential and commercial properties across the region.
              </p>
              
              {/* Contact info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-light-2">(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-light-2">info@skylineroof.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-light-2">123 Roofing Ave, City, ST 12345</span>
                </div>
              </div>
            </div>

            {/* Navigation columns */}
            <div>
              <h3 className="text-lg font-semibold text-light-1 mb-4">Services</h3>
              <ul className="space-y-3">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-light-2 hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-light-1 mb-4">Company</h3>
              <ul className="space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-light-2 hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-light-1 mb-4">Support</h3>
              <ul className="space-y-3">
                {navigation.support.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-light-2 hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-dark-3 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social links */}
            <div className="flex space-x-6">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-light-2 hover:text-primary transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{item.name}</span>
                  </a>
                );
              })}
            </div>

            {/* Copyright */}
            <div className="text-light-3 text-sm">
              © {new Date().getFullYear()} Skyline Roof Masters. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}