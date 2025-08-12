"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wrench, Menu, X, Settings, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gradient-to-r from-[#1E3A8A]/95 via-[#1D4ED8]/95 to-[#3B82F6]/95 backdrop-blur-xl shadow-2xl' 
          : 'bg-gradient-to-r from-white/90 via-gray-50/90 to-white/90 backdrop-blur-md shadow-lg'
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [-100, 100, -100],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 left-0 w-96 h-full bg-gradient-to-r from-[#F97316]/20 to-transparent blur-xl"
        />
        <motion.div
          animate={{
            x: [100, -100, 100],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-[#1E3A8A]/20 to-transparent blur-xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-16">
          {/* Enhanced Logo */}
          <motion.div
            className="flex items-center space-x-3 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              {/* Animated gear background */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-12 h-12 bg-gradient-to-br from-[#F97316] to-[#ea580c] rounded-full opacity-20 blur-sm"
              />
              <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-br from-[#1E3A8A] via-[#1D4ED8] to-[#3B82F6] rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300">
                <motion.div
                  animate={{ rotate: scrolled ? 180 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Wrench className="w-5 h-5 text-white drop-shadow-sm" />
                </motion.div>
                {/* Animated sparkle */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-1 -right-1 w-3 h-3 bg-[#F97316] rounded-full blur-sm"
                />
              </div>
              {/* Secondary rotating element */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -top-1 -right-1"
              >
                <Settings className="w-3 h-3 text-[#F97316] opacity-70" />
              </motion.div>
            </div>
            
            <div className="flex flex-col">
              <motion.span 
                className={`text-xl font-bold transition-colors duration-300 ${
                  scrolled ? 'text-white' : 'bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] bg-clip-text text-transparent'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Elite Auto Repair
              </motion.span>
              <motion.span 
                className={`text-xs font-medium transition-colors duration-300 ${
                  scrolled ? 'text-blue-200' : 'text-[#F97316]'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                Premium Service • Since 2004
              </motion.span>
            </div>
          </motion.div>

          {/* Enhanced Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="relative group"
              >
                <motion.a
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    scrolled 
                      ? 'text-white hover:text-[#F97316]' 
                      : 'text-gray-700 hover:text-[#1E3A8A]'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95, y: 0 }}
                >
                  {/* Hover gradient background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#F97316]/20 via-[#F97316]/30 to-[#ea580c]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                    animate={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                  />
                  
                  {/* Animated underline */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#F97316] to-[#ea580c] group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full"
                  />
                  
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Subtle glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/10 to-[#3B82F6]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
                    animate={{
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.a>
              </motion.div>
            ))}
          </div>

          {/* Enhanced CTA Button */}
          <div className="hidden md:flex">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="relative group"
            >
              {/* Animated background glow */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-1 bg-gradient-to-r from-[#F97316] via-[#ea580c] to-[#F97316] rounded-lg blur-sm opacity-30"
              />
              
              <Button 
                className="relative bg-gradient-to-r from-[#F97316] via-[#ea580c] to-[#F97316] hover:from-[#ea580c] hover:via-[#F97316] hover:to-[#ea580c] text-white font-semibold px-6 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-[#F97316]/20"
                asChild
              >
                <motion.a
                  href="#contact"
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 15, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Zap className="w-4 h-4" />
                  </motion.div>
                  Schedule Service Today
                  {/* Animated shine effect */}
                  <motion.div
                    animate={{
                      x: [-100, 100],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "linear",
                    }}
                    className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 rounded-lg"
                  />
                </motion.a>
              </Button>
            </motion.div>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <div className="md:hidden">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative"
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMenu}
                className={`relative p-2 rounded-lg border transition-all duration-300 ${
                  scrolled 
                    ? 'border-white/30 text-white hover:bg-white/10' 
                    : 'border-[#1E3A8A]/30 text-[#1E3A8A] hover:bg-[#1E3A8A]/10'
                }`}
              >
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </motion.div>
              </Button>
              
              {/* Animated ring on button press */}
              <motion.div
                animate={{
                  scale: isOpen ? [1, 1.5, 1] : 1,
                  opacity: isOpen ? [0.5, 0, 0.5] : 0,
                }}
                className={`absolute inset-0 border-2 rounded-lg ${
                  scrolled ? 'border-white/30' : 'border-[#F97316]/50'
                }`}
              />
            </motion.div>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <motion.div 
                className={`relative py-4 space-y-2 backdrop-blur-xl border-t transition-all duration-300 ${
                  scrolled 
                    ? 'bg-gradient-to-b from-[#1E3A8A]/95 to-[#3B82F6]/95 border-white/20' 
                    : 'bg-gradient-to-b from-white/95 to-gray-50/95 border-gray-200'
                }`}
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {/* Animated background pattern */}
                <div className="absolute inset-0 overflow-hidden">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                      opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#F97316]/20 to-[#ea580c]/20 rounded-full blur-xl"
                  />
                </div>

                <div className="relative z-10">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <motion.a
                        href={item.href}
                        className={`block px-4 py-3 mx-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                          scrolled 
                            ? 'text-white hover:text-[#F97316] hover:bg-white/10' 
                            : 'text-gray-700 hover:text-[#1E3A8A] hover:bg-[#1E3A8A]/10'
                        }`}
                        onClick={() => setIsOpen(false)}
                        whileHover={{ x: 5, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center justify-between">
                          <span>{item.name}</span>
                          <motion.div
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1, x: 5 }}
                            className="text-[#F97316]"
                          >
                            →
                          </motion.div>
                        </div>
                        
                        {/* Animated underline */}
                        <motion.div
                          className="h-0.5 bg-gradient-to-r from-[#F97316] to-[#ea580c] rounded-full mt-1 origin-left"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.a>
                    </motion.div>
                  ))}
                  
                  <motion.div 
                    className="px-4 py-3"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    <motion.div className="relative group">
                      {/* Animated glow */}
                      <motion.div
                        animate={{
                          scale: [1, 1.05, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute -inset-0.5 bg-gradient-to-r from-[#F97316] to-[#ea580c] rounded-lg blur-sm opacity-50"
                      />
                      
                      <Button 
                        className="relative w-full bg-gradient-to-r from-[#F97316] to-[#ea580c] hover:from-[#ea580c] hover:to-[#F97316] text-white font-semibold shadow-lg"
                        asChild
                      >
                        <motion.a 
                          href="#contact" 
                          onClick={() => setIsOpen(false)}
                          className="flex items-center justify-center gap-2"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Zap className="w-4 h-4" />
                          Schedule Service Today
                        </motion.a>
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}