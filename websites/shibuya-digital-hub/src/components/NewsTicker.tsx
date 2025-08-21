"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

interface NewsItem {
  id: number;
  title: string;
  time: string;
  category: string;
}

const newsItems: NewsItem[] = [
  { id: 1, title: "OpenAI releases GPT-5 with enhanced reasoning capabilities", time: "2h ago", category: "AI" },
  { id: 2, title: "Apple announces M4 Pro chip with 30% performance boost", time: "3h ago", category: "Hardware" },
  { id: 3, title: "Google I/O 2024: Android 15 introduces advanced privacy features", time: "4h ago", category: "Mobile" },
  { id: 4, title: "Microsoft Azure introduces new quantum computing services", time: "5h ago", category: "Cloud" },
  { id: 5, title: "Meta releases Llama 3.5 with improved multilingual support", time: "6h ago", category: "AI" },
  { id: 6, title: "Tesla unveils new autonomous driving update with 99.9% accuracy", time: "7h ago", category: "Auto" },
];

export default function NewsTicker() {
  const [isPaused, setIsPaused] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-primary/10 border-b border-primary/20 h-7 overflow-hidden">
      <div className="flex items-center h-full">
        {/* Breaking News Label */}
        <div className="bg-primary text-primary-foreground px-3 py-1 text-xs font-bold flex items-center gap-1 h-full">
          <Clock className="h-3 w-3" />
          BREAKING
        </div>

        {/* Scrolling News */}
        <div 
          className="flex-1 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex items-center h-full"
            animate={{
              x: isPaused ? 0 : "-100%"
            }}
            transition={{
              duration: isPaused ? 0 : 60,
              ease: "linear",
              repeat: isPaused ? 0 : Infinity,
            }}
          >
            {[...newsItems, ...newsItems].map((item, index) => (
              <div key={`${item.id}-${index}`} className="flex items-center h-full whitespace-nowrap">
                <span className="text-xs font-medium text-foreground/90 px-4">
                  <span className="text-primary font-bold">[{item.category}]</span> {item.title}
                  <span className="text-muted-foreground ml-2">• {item.time}</span>
                </span>
                <span className="text-muted-foreground text-xs mx-4">|</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Current Time */}
        <div className="bg-muted text-muted-foreground px-3 py-1 text-xs font-mono h-full flex items-center">
          {currentTime.toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
}