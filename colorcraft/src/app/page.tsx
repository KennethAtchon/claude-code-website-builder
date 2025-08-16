"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ColorWheel from "@/components/ColorWheel";
import PaletteDisplay from "@/components/PaletteDisplay";
import ExportMenu from "@/components/ExportMenu";
import ParallaxSection from "@/components/ParallaxSection";
import { Button } from "@/components/ui/button";
import { Palette, Shuffle, Wand2 } from "lucide-react";

interface Color {
  name: string;
  hex: string;
}

export default function Home() {
  const [baseColor, setBaseColor] = useState("#6366F1");
  const [generatedColors, setGeneratedColors] = useState<Color[]>([
    { name: "Primary", hex: "#6366F1" },
    { name: "Primary Dark", hex: "#4338ca" },
    { name: "Light 1", hex: "#f8faff" },
    { name: "Light 2", hex: "#eef2ff" },
    { name: "Light 3", hex: "#e0e7ff" },
    { name: "Dark 1", hex: "#312e81" },
    { name: "Dark 2", hex: "#3730a3" },
    { name: "Dark 3", hex: "#4338ca" }
  ]);

  const generatePalette = (color: string) => {
    const hslMatch = color.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);
    if (!hslMatch) return;
    
    const [, h, s, l] = hslMatch.map(Number);
    
    const newColors: Color[] = [
      { name: "Primary", hex: hslToHex(h, s, l) },
      { name: "Primary Dark", hex: hslToHex(h, Math.min(100, s + 15), Math.max(10, l - 30)) },
      { name: "Light 1", hex: hslToHex(h, Math.max(3, s - 50), 98) },
      { name: "Light 2", hex: hslToHex(h, Math.max(8, s - 35), 92) },
      { name: "Light 3", hex: hslToHex(h, Math.max(15, s - 25), 85) },
      { name: "Dark 1", hex: hslToHex(h, Math.min(100, s + 20), Math.max(8, l - 40)) },
      { name: "Dark 2", hex: hslToHex(h, Math.min(100, s + 15), Math.max(15, l - 30)) },
      { name: "Dark 3", hex: hslToHex(h, Math.min(100, s + 10), Math.max(25, l - 20)) }
    ];
    
    setGeneratedColors(newColors);
  };

  const generateRandomPalette = () => {
    const randomHue = Math.floor(Math.random() * 360);
    const randomSaturation = Math.floor(Math.random() * 40) + 60; // 60-100%
    const randomLightness = Math.floor(Math.random() * 20) + 40; // 40-60%
    const randomColor = `hsl(${randomHue}, ${randomSaturation}%, ${randomLightness}%)`;
    
    setBaseColor(randomColor);
    generatePalette(randomColor);
  };

  const hslToHex = (h: number, s: number, l: number) => {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = (n: number) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  };

  const handleColorChange = (color: string) => {
    setBaseColor(color);
    generatePalette(color);
  };

  return (
    <div className="min-h-screen">
      <ParallaxSection 
        backgroundUrl="https://images.unsplash.com/photo-1557804506-669a67965ba0"
        speed="slow"
        className="min-h-screen flex items-center justify-center"
      >
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8 px-4"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full"
            >
              <Palette className="w-8 h-8 text-white" />
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              ColorCraft
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
              Professional color palette generator for designers, developers, and creative professionals
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-block"
          >
            <a
              href="#generator"
              className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-colors duration-200 shadow-lg"
            >
              Start Creating
            </a>
          </motion.div>
        </motion.div>
      </ParallaxSection>

      <section id="generator" className="min-h-screen bg-gradient-to-br from-light-2 via-light-1 to-light-3 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-12"
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-dark-1">
                Interactive Color Generator
              </h2>
              <p className="text-lg text-dark-2 max-w-2xl mx-auto">
                Click and drag on the color wheel for real-time color selection, then hit Generate for new palette variations or Random for instant inspiration. 
                Advanced color theory algorithms create perfect combinations for any project.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-start justify-center gap-12 lg:gap-20">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-shrink-0"
              >
                <ColorWheel onColorChange={handleColorChange} size={350} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex-1 w-full max-w-2xl"
              >
                <div className="space-y-6">
                  <div className="flex justify-between items-center flex-wrap gap-4">
                    <h3 className="text-2xl font-semibold text-dark-1">Generated Palette</h3>
                    <div className="flex gap-3">
                      <Button 
                        onClick={() => generatePalette(baseColor)}
                        variant="outline"
                        className="flex items-center gap-2"
                      >
                        <Wand2 className="w-4 h-4" />
                        Generate
                      </Button>
                      <Button 
                        onClick={generateRandomPalette}
                        variant="outline"
                        className="flex items-center gap-2"
                      >
                        <Shuffle className="w-4 h-4" />
                        Random
                      </Button>
                      <ExportMenu colors={generatedColors} />
                    </div>
                  </div>
                  <PaletteDisplay baseColor={baseColor} colors={generatedColors} />
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto"
            >
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <h4 className="font-semibold text-dark-1">Smart Algorithm</h4>
                  <p className="text-sm text-dark-2">
                    Uses advanced color theory to generate harmonious palettes with perfect contrast ratios
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-dark-1">Multiple Formats</h4>
                  <p className="text-sm text-dark-2">
                    Export to CSS variables, JSON, or Adobe-compatible formats for seamless workflow integration
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-dark-1">Instant Copy</h4>
                  <p className="text-sm text-dark-2">
                    One-click copying of individual colors or entire palettes for immediate use in your projects
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
