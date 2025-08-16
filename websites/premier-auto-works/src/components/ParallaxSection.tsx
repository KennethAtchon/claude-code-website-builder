"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  backgroundUrl: string;
  speed?: "slow" | "medium" | "fast";
  className?: string;
}

export default function ParallaxSection({ 
  children, 
  backgroundUrl, 
  speed = "medium",
  className = ""
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const speeds = { 
    slow: [-50, 50], 
    medium: [-100, 100], 
    fast: [-200, 200] 
  };
  const y = useTransform(scrollYProgress, [0, 1], speeds[speed]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{ 
          y,
          backgroundImage: `url(${backgroundUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
        className="absolute inset-0 h-[120%] -top-[10%]"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
}