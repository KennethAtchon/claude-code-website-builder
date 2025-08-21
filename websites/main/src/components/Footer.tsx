import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const serviceAreas = [
    "Charlotte, NC", "Matthews, NC", "Mint Hill, NC", "Concord, NC",
    "Huntersville, NC", "Cornelius, NC", "Davidson, NC", "Pineville, NC",
    "Gastonia, NC", "Rock Hill, SC"
  ];

  const services = [
    "Emergency Roof Repair",
    "Free Roof Inspections", 
    "Complete Roof Replacement",
    "Storm Damage Repair",
    "Commercial Roofing",
    "Roof Maintenance"
  ];

  return (
    <footer className="bg-dark-1 text-light-1">
      {/* Emergency CTA Section */}
      <div className="bg-primary py-8 border-t-1">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-primary-foreground mb-4">
            Emergency Roof Repair Available 24/7
          </h3>
          <p className="text-primary-foreground/90 mb-6">
            Don't wait for roof damage to get worse. Call now for immediate assistance!
          </p>
          <Button 
            asChild 
            size="lg"
            className="bg-light-1 text-primary hover:bg-light-2 font-bold"
          >
            <a href="tel:7046680707" className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Call (704) 668-0707 Now
            </a>
          </Button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-primary font-bold text-xl mb-2">
              ROOF SOLUTIONS
            </div>
            <div className="text-light-2 text-sm mb-4">Charlotte</div>
            <p className="text-light-2 mb-6">
              Charlotte's Premier 24/7 Roof Repair Specialists Since 1980. 
              Family-owned business with guaranteed workmanship.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/roofsolutionscharlotte" className="text-light-2 hover:text-primary">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/roofsolutionscharlotte" className="text-light-2 hover:text-primary">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-light-1 font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-light-2 hover:text-primary transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-light-1 font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <a href="tel:7046680707" className="text-light-2 hover:text-primary">
                    (704) 668-0707
                  </a>
                  <div className="text-sm text-light-3">24/7 Emergency Line</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <a href="mailto:info@roofsolutionscharlotte.com" className="text-light-2 hover:text-primary">
                  info@roofsolutionscharlotte.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div className="text-light-2">
                  6611 Haddonfield Pl<br />
                  Charlotte, NC 28277
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5" />
                <div className="text-light-2">
                  Open 24 hours<br />
                  Emergency service available
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-light-1 font-semibold mb-4">Service Areas</h4>
            <div className="text-light-2 text-sm">
              <p className="mb-2">Serving Greater Charlotte Area:</p>
              <div className="space-y-1">
                {serviceAreas.map((area) => (
                  <div key={area}>{area}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-2 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-light-3">
            <div>
              © 2024 Roof Solutions Charlotte. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
              <span>Licensed & Insured</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}