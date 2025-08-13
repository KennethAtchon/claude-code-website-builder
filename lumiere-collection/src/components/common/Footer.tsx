"use client";

import React from "react";
import Link from "next/link";
import { Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import type { NavigationItem, SocialPlatform, ContactInfo } from "@/types";

const collections: NavigationItem[] = [
  { label: "Étoile", path: "/collections/etoile" },
  { label: "Héritage", path: "/collections/heritage" },
  { label: "Moderne", path: "/collections/moderne" },
  { label: "Bespoke", path: "/bespoke" },
];

const services: NavigationItem[] = [
  { label: "Personal Shopping", path: "/services/personal-shopping" },
  { label: "Repairs", path: "/services/repairs" },
  { label: "Appraisals", path: "/services/appraisals" },
  { label: "Care Guide", path: "/care" },
];

const company: NavigationItem[] = [
  { label: "Our Story", path: "/heritage" },
  { label: "Sustainability", path: "/sustainability" },
  { label: "Press", path: "/press" },
  { label: "Careers", path: "/careers" },
];

const legal: NavigationItem[] = [
  { label: "Privacy Policy", path: "/privacy" },
  { label: "Terms of Service", path: "/terms" },
  { label: "Returns", path: "/returns" },
];

const socialPlatforms: SocialPlatform[] = [
  { name: "Instagram", url: "https://instagram.com/lumierecollection", icon: "instagram" },
  { name: "YouTube", url: "https://youtube.com/lumierecollection", icon: "youtube" },
];

const contactInfo: ContactInfo = {
  phone: "+1 (555) 123-4567",
  email: "concierge@lumierecollection.com",
  address: "Madison Avenue Flagship, New York",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-muted/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="pt-16 pb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Link href="/" className="inline-block group">
              <div className="font-primary text-3xl md:text-4xl font-bold text-text tracking-[0.3em] mb-2 group-hover:text-accent transition-colors duration-300">
                LUMIÈRE
              </div>
              <div className="font-secondary text-sm text-muted tracking-[0.2em] uppercase mb-4">
                Collection
              </div>
            </Link>
            <p className="font-secondary text-muted max-w-md mx-auto leading-relaxed">
              Timeless luxury jewelry since 1990
            </p>
            <p className="font-secondary text-sm text-muted/80 mt-2">
              Handcrafted excellence in every piece
            </p>
          </motion.div>

          {/* Links Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-16"
          >
            {/* Collections */}
            <div>
              <h3 className="font-primary text-lg font-semibold text-text mb-6 tracking-wider">
                Collections
              </h3>
              <ul className="space-y-3">
                {collections.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className="font-secondary text-muted hover:text-accent transition-colors duration-300 text-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-primary text-lg font-semibold text-text mb-6 tracking-wider">
                Services
              </h3>
              <ul className="space-y-3">
                {services.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className="font-secondary text-muted hover:text-accent transition-colors duration-300 text-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-primary text-lg font-semibold text-text mb-6 tracking-wider">
                Company
              </h3>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className="font-secondary text-muted hover:text-accent transition-colors duration-300 text-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-primary text-lg font-semibold text-text mb-6 tracking-wider">
                Contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="font-secondary text-muted hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="font-secondary text-muted hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span className="font-secondary text-muted text-sm">
                    {contactInfo.address}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="font-primary text-lg font-semibold text-text mb-6 tracking-wider">
              Follow Our Journey
            </h3>
            <div className="flex justify-center space-x-6">
              {socialPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-muted/10 hover:bg-accent rounded-full transition-all duration-300 transform hover:scale-110"
                  aria-label={`Follow us on ${platform.name}`}
                >
                  {platform.icon === "instagram" && (
                    <Instagram className="w-5 h-5 text-muted group-hover:text-white transition-colors duration-300" />
                  )}
                  {platform.icon === "youtube" && (
                    <Youtube className="w-5 h-5 text-muted group-hover:text-white transition-colors duration-300" />
                  )}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="border-t border-muted/10 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="font-secondary text-sm text-muted">
              © {currentYear} Lumière Collection. All rights reserved.
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {legal.map((item, index) => (
                <React.Fragment key={item.path}>
                  <Link
                    href={item.path}
                    className="font-secondary text-sm text-muted hover:text-accent transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                  {index < legal.length - 1 && (
                    <span className="text-muted/40">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}