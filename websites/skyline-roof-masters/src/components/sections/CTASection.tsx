"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Calendar } from "lucide-react";
import AnimatedSection from "@/components/animations/AnimatedSection";

interface CTASectionProps {
  title: string;
  content: string;
  ctaLabel: string;
  ctaLink: string;
  imageUrl: string;
}

export default function CTASection({ title, content, ctaLabel, ctaLink, imageUrl }: CTASectionProps) {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={imageUrl}
          alt="Premium consultation"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {title}
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              {content}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href={ctaLink}>
                <Button 
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  {ctaLabel}
                </Button>
              </Link>
              
              <a href="tel:+1-555-123-4567">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now: (555) 123-4567
                </Button>
              </a>
            </div>

            {/* Contact options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                  <Calendar className="h-8 w-8 text-white mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Free Consultation
                  </h3>
                  <p className="text-white/80 text-sm">
                    Schedule your premium consultation with our master craftsmen
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                  <Phone className="h-8 w-8 text-white mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    24/7 Emergency
                  </h3>
                  <p className="text-white/80 text-sm">
                    Emergency roofing services available around the clock
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                  <Mail className="h-8 w-8 text-white mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Expert Advice
                  </h3>
                  <p className="text-white/80 text-sm">
                    Get professional recommendations for your roofing needs
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-2xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
    </section>
  );
}