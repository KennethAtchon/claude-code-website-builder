"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Play, Pause } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoadedData = () => setIsLoaded(true);
      video.addEventListener("loadeddata", handleLoadedData);
      return () => video.removeEventListener("loadeddata", handleLoadedData);
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.jpg"
          onLoadedData={() => setIsLoaded(true)}
        >
          <source src="/videos/hero-luxury.mp4" type="video/mp4" />
          {/* Fallback image for browsers that don't support video */}
        </video>
        
        {/* Fallback Image */}
        {!isLoaded && (
          <Image
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&h=1080&fit=crop&crop=center"
            alt="Luxury jewelry collection"
            fill
            className="object-cover"
            priority
          />
        )}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              className="font-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-wider"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              Timeless Elegance
            </motion.h1>
            
            <motion.p
              className="font-secondary text-lg sm:text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            >
              Discover our handcrafted jewelry collection, where each piece tells a story of exceptional craftsmanship and enduring beauty.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            >
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-black font-medium px-8 py-4 rounded-none uppercase tracking-wider transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/collections">Explore Collection</Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-black font-medium px-8 py-4 rounded-none uppercase tracking-wider transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/heritage">Watch Story</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Video Controls */}
      <motion.button
        onClick={toggleVideo}
        className="absolute bottom-8 right-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3 text-white hover:bg-white/30 transition-all duration-300"
        aria-label={isPlaying ? "Pause video" : "Play video"}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
      </motion.button>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center text-white/80">
          <span className="text-xs uppercase tracking-wider mb-2 font-secondary">Scroll</span>
          <div className="w-px h-12 bg-white/40 relative">
            <motion.div
              className="w-px h-3 bg-white absolute top-0"
              animate={{ y: [0, 36, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}