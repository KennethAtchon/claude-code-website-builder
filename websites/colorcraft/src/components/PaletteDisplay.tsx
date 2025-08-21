"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Color {
  name: string;
  hex: string;
}

interface PaletteDisplayProps {
  baseColor: string;
  colors: Color[];
}

export default function PaletteDisplay({ baseColor, colors }: PaletteDisplayProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const copyAllColors = async () => {
    const allColors = colors.map(color => `${color.name}: ${color.hex}`).join('\n');
    try {
      await navigator.clipboard.writeText(allColors);
      setCopiedIndex(-1);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-800">Generated Palette</h2>
        <Button 
          onClick={copyAllColors}
          variant="outline"
          className="flex items-center gap-2"
        >
          {copiedIndex === -1 ? (
            <>
              <Check className="w-4 h-4" />
              Copied All!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Copy All
            </>
          )}
        </Button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {colors.map((color, index) => (
          <Card 
            key={index} 
            className="overflow-hidden hover:shadow-lg transition-shadow duration-200"
          >
            <div 
              className="h-32 w-full cursor-pointer"
              style={{ backgroundColor: color.hex }}
              onClick={() => copyToClipboard(color.hex, index)}
            />
            <div className="p-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium text-sm">{color.name}</span>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => copyToClipboard(color.hex, index)}
                  className="h-8 w-8 p-0"
                >
                  {copiedIndex === index ? (
                    <Check className="w-4 h-4 text-green-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
              <div className="text-xs font-mono text-gray-600">
                {color.hex.toUpperCase()}
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="text-center text-sm text-gray-500">
        Click on any color to copy its hex code
      </div>
    </div>
  );
}