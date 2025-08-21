"use client";

import { useState } from "react";
import { Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Color {
  name: string;
  hex: string;
}

interface ExportMenuProps {
  colors: Color[];
}

export default function ExportMenu({ colors }: ExportMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const generateCSS = () => {
    const cssVars = colors.map(color => 
      `  --color-${color.name.toLowerCase().replace(/\s+/g, '-')}: ${color.hex};`
    ).join('\n');
    
    return `:root {\n${cssVars}\n}`;
  };

  const generateJSON = () => {
    const colorObj = colors.reduce((acc, color) => {
      acc[color.name.toLowerCase().replace(/\s+/g, '-')] = color.hex;
      return acc;
    }, {} as Record<string, string>);
    
    return JSON.stringify(colorObj, null, 2);
  };

  const generateAdobe = () => {
    const adobeFormat = {
      "version": "1.0",
      "colors": colors.map(color => ({
        "name": color.name,
        "type": "spot",
        "colorValue": {
          "mode": "RGB",
          "values": hexToRgb(color.hex)
        }
      }))
    };
    
    return JSON.stringify(adobeFormat, null, 2);
  };

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
      parseInt(result[1], 16) / 255,
      parseInt(result[2], 16) / 255,
      parseInt(result[3], 16) / 255
    ] : [0, 0, 0];
  };

  const downloadFile = (content: string, filename: string, mimeType: string) => {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleExport = (format: 'css' | 'json' | 'adobe') => {
    let content: string;
    let filename: string;
    let mimeType: string;

    switch (format) {
      case 'css':
        content = generateCSS();
        filename = 'color-palette.css';
        mimeType = 'text/css';
        break;
      case 'json':
        content = generateJSON();
        filename = 'color-palette.json';
        mimeType = 'application/json';
        break;
      case 'adobe':
        content = generateAdobe();
        filename = 'color-palette.ase.json';
        mimeType = 'application/json';
        break;
    }

    downloadFile(content, filename, mimeType);
    setIsOpen(false);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button className="flex items-center gap-2 bg-primary hover:bg-primary/90">
          <Download className="w-4 h-4" />
          Export Palette
          <ChevronDown className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem onClick={() => handleExport('css')}>
          <div className="flex flex-col">
            <span className="font-medium">CSS Variables</span>
            <span className="text-xs text-gray-500">For web development</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleExport('json')}>
          <div className="flex flex-col">
            <span className="font-medium">JSON Format</span>
            <span className="text-xs text-gray-500">For applications</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleExport('adobe')}>
          <div className="flex flex-col">
            <span className="font-medium">Adobe Format</span>
            <span className="text-xs text-gray-500">For design tools</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}