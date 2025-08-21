"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface ColorWheelProps {
  onColorChange: (color: string) => void;
  size?: number;
}

export default function ColorWheel({ onColorChange, size = 300 }: ColorWheelProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#6366F1");
  const [cursorPosition, setCursorPosition] = useState({ x: size / 2, y: size / 2 });

  const drawColorWheel = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size / 2 - 20;

    ctx.clearRect(0, 0, size, size);

    // Draw the color wheel
    for (let angle = 0; angle < 360; angle += 1) {
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
      gradient.addColorStop(0, `hsl(${angle}, 0%, 100%)`);
      gradient.addColorStop(0.3, `hsl(${angle}, 50%, 75%)`);
      gradient.addColorStop(1, `hsl(${angle}, 100%, 50%)`);

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, (angle - 0.5) * Math.PI / 180, (angle + 0.5) * Math.PI / 180);
      ctx.lineWidth = 2;
      ctx.strokeStyle = gradient;
      ctx.stroke();
    }

    // Draw cursor
    ctx.beginPath();
    ctx.arc(cursorPosition.x, cursorPosition.y, 8, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.stroke();
  }, [size, cursorPosition]);

  useEffect(() => {
    drawColorWheel();
  }, [drawColorWheel]);

  const getColorFromPosition = useCallback((clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return "#000000";

    const rect = canvas.getBoundingClientRect();
    const centerX = size / 2;
    const centerY = size / 2;
    
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const dx = x - centerX;
    const dy = y - centerY;
    
    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxRadius = size / 2 - 20;
    
    if (distance > maxRadius) return selectedColor;
    
    const angle = Math.atan2(dy, dx) * 180 / Math.PI;
    const hue = (angle + 360) % 360;
    const saturation = Math.min(100, (distance / maxRadius) * 100);
    const lightness = Math.max(30, Math.min(70, 100 - (distance / maxRadius) * 40));
    
    setCursorPosition({ x, y });
    
    return `hsl(${Math.round(hue)}, ${Math.round(saturation)}%, ${Math.round(lightness)}%)`;
  }, [size, selectedColor]);

  const handleInteraction = useCallback((e: React.MouseEvent) => {
    const color = getColorFromPosition(e.clientX, e.clientY);
    setSelectedColor(color);
    onColorChange(color);
  }, [getColorFromPosition, onColorChange]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleInteraction(e);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleInteraction(e);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative">
        <canvas
          ref={canvasRef}
          width={size}
          height={size}
          className="cursor-crosshair rounded-full shadow-2xl border-4 border-white"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        />
      </div>
      <div className="text-center space-y-2">
        <div 
          className="w-20 h-20 rounded-full border-4 border-white shadow-lg mx-auto"
          style={{ backgroundColor: selectedColor }}
        />
        <div className="text-sm font-mono text-gray-600">
          {selectedColor.toUpperCase()}
        </div>
      </div>
    </div>
  );
}