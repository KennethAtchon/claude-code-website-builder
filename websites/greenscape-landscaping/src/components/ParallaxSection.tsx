"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef, useEffect, useState } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  backgroundUrl: string;
  speed?: "slow" | "medium" | "fast";
  className?: string;
}

export default function ParallaxSection({ 
  children, 
  backgroundUrl, 
  speed = "fast",
  className = ""
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const speeds ={ slow: [-50, 50], medium: [-100, 100], fast: [-200, 200] };
  const y = useTransform(scrollYProgress, [0, 1], speeds[speed]);

  // Preload image
  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => {
      console.error('Failed to load image:', backgroundUrl);
      setImageLoaded(false);
    };
    img.src = backgroundUrl;
  }, [backgroundUrl]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Background layer */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        {imageLoaded ? (
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("${backgroundUrl}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        ) : (
          // Fallback gradient while image loads
          <div className="w-full h-full bg-gradient-to-br from-primary to-dark-1" />
        )}
      </motion.div>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
}