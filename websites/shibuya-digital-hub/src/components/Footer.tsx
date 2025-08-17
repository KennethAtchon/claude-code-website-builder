"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Youtube, 
  Mail, 
  Globe,
  BookOpen,
  Code,
  Users,
  Briefcase,
  Heart
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const footerSections = [
  {
    title: "Content",
    links: [
      { label: "Articles", href: "/articles" },
      { label: "Tutorials", href: "/tutorials" },
      { label: "Reviews", href: "/reviews" },
      { label: "News", href: "/news" },
      { label: "Guides", href: "/guides" },
      { label: "Code Snippets", href: "/snippets" },
    ]
  },
  {
    title: "Categories",
    links: [
      { label: "Web Development", href: "/category/webdev" },
      { label: "AI & Machine Learning", href: "/category/ai" },
      { label: "Mobile Development", href: "/category/mobile" },
      { label: "Cloud Computing", href: "/category/cloud" },
      { label: "Cybersecurity", href: "/category/security" },
      { label: "Game Development", href: "/category/gaming" },
    ]
  },
  {
    title: "Community",
    links: [
      { label: "Forums", href: "/community" },
      { label: "Discord Server", href: "/discord" },
      { label: "Events", href: "/events" },
      { label: "Meetups", href: "/meetups" },
      { label: "Contributors", href: "/contributors" },
      { label: "Code of Conduct", href: "/code-of-conduct" },
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "API Reference", href: "/api" },
      { label: "Tools & Libraries", href: "/tools" },
      { label: "Downloads", href: "/downloads" },
      { label: "Templates", href: "/templates" },
      { label: "Cheat Sheets", href: "/cheatsheets" },
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Support", href: "/support" },
    ]
  },
];

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

const quickStats = [
  { icon: BookOpen, value: "50K+", label: "Articles" },
  { icon: Code, value: "25K+", label: "Code Snippets" },
  { icon: Users, value: "1M+", label: "Developers" },
  { icon: Briefcase, value: "5K+", label: "Job Listings" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-3 text-light-1 pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-dark-2 rounded-lg p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
              <p className="text-light-3 text-sm">
                Get the latest tech news, tutorials, and insights delivered to your inbox weekly.
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <Input
                placeholder="Enter your email"
                className="bg-dark-3 border-dark-1 text-light-1 placeholder:text-light-3 md:w-64"
              />
              <Button className="bg-primary hover:bg-primary-dark">
                Subscribe
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {quickStats.map((stat, index) => (
            <div key={stat.label} className="text-center p-4 bg-dark-2 rounded-lg">
              <div className="flex justify-center mb-2">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-light-1">{stat.value}</div>
              <div className="text-sm text-light-3">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sectionIndex * 0.1 }}
            >
              <h4 className="font-semibold mb-4 text-light-1">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-light-3 hover:text-primary text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <Separator className="bg-dark-1 mb-6" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">S</span>
              </div>
              <span className="font-bold text-lg">Shibuya Digital Hub</span>
            </Link>
            <div className="flex items-center gap-2 text-sm text-light-3">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>for developers</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-light-3 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
            <div className="text-sm text-light-3">
              © 2024 Shibuya Digital Hub. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}