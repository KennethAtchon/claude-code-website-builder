"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedSection({ children, className = "", delay = 0 }: AnimatedSectionProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut", delay }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}