"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Lightbulb, Leaf, Settings, Award } from "lucide-react";
import AnimatedSection from "@/components/animations/AnimatedSection";

interface FeaturesProps {
  title: string;
  content: string;
  ctaLabel: string;
  ctaLink: string;
  imageUrl: string;
}

export default function FeaturesSection({ title, content, ctaLabel, ctaLink, imageUrl }: FeaturesProps) {
  const features = [
    {
      icon: Zap,
      title: "Cutting-Edge Materials",
      description: "Advanced composites and sustainable options for superior performance and longevity.",
    },
    {
      icon: Settings,
      title: "Advanced Installation Techniques",
      description: "Precision installation methods using the latest tools and industry best practices.",
    },
    {
      icon: Lightbulb,
      title: "Energy-Efficient Solutions",
      description: "Smart roofing systems that optimize energy consumption and reduce costs.",
    },
    {
      icon: Shield,
      title: "Smart Technology Integration",
      description: "IoT sensors and monitoring systems for predictive maintenance and performance tracking.",
    },
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description: "Eco-friendly materials and installation methods that minimize environmental impact.",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous quality control and comprehensive warranties for your peace of mind.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-dark-1 to-dark-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold text-light-1 mb-6">
                {title}
              </h2>
              <p className="text-xl text-light-2 mb-12 leading-relaxed">
                {content}
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="bg-dark-2/50 border-dark-3 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <Icon className="h-8 w-8 text-primary mb-4" />
                        <h3 className="text-lg font-semibold text-light-1 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-light-2 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            <AnimatedSection>
              <Link href={ctaLink}>
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold"
                >
                  {ctaLabel}
                </Button>
              </Link>
            </AnimatedSection>
          </div>

          {/* Image */}
          <AnimatedSection>
            <div className="relative">
              <div className="relative h-[600px] rounded-2xl overflow-hidden">
                <Image
                  src={imageUrl}
                  alt="Innovation showcase"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}