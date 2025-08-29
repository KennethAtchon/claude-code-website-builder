import React from "react";
import Link from "next/link";
import { Phone, MapPin, Clock, Mail, Star } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
                <span className="text-primary  font-bold text-xl">BET</span>
              </div>
              <div>
                <span className="text-xl  font-bold">B.E.T. Plumbing</span>
                <p className="text-sm  opacity-90">Professional Plumbing Services</p>
              </div>
            </div>
            <p className="text-sm  opacity-90 mb-4">
              Professional plumbing services you can trust. Serving Pittsburgh and Allegheny County with fast, reliable repairs and installations.
            </p>
            <div className="flex items-center space-x-1 text-sm">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-current text-yellow-400" />
                ))}
              </div>
              <span className="ml-2 ">5.0 Stars (76+ Reviews)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg  font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg  font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm  opacity-90">
              <li>Water Heater Installation</li>
              <li>Drain Cleaning</li>
              <li>Pipe Repair & Installation</li>
              <li>Emergency Plumbing</li>
              <li>Bathroom Remodels</li>
              <li>Excavation Work</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg  font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className=" font-semibold">(412) 733-6355</p>
                  <p className="text-sm  opacity-90">24/7 Weekend Emergency</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm ">121 Ingram Ave</p>
                  <p className="text-sm ">Pittsburgh, PA 15205</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm ">Mon-Fri: 7AM-5PM</p>
                  <p className="text-sm  opacity-90">24/7 Weekend Availability</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm  opacity-90">
              © 2024 B.E.T. Plumbing LLC. All rights reserved. | Licensed & Insured
            </p>
            <p className="text-sm  opacity-90">
              Serving Pittsburgh, Ingram, and all of Allegheny County
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}