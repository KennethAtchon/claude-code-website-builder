// Color Palette Generator - Reverse Engineered Algorithm
// Based on common HSL manipulation techniques used by design tools

/**
 * Convert hex to HSL
 */
function hexToHsl(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return [h * 360, s * 100, l * 100];
}

/**
 * Convert HSL to hex
 */
function hslToHex(h, s, l) {
  h /= 360;
  s /= 100;
  l /= 100;

  const hue2rgb = (p, q, t) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1/6) return p + (q - p) * 6 * t;
    if (t < 1/2) return q;
    if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
    return p;
  };

  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = hue2rgb(p, q, h + 1/3);
  const g = hue2rgb(p, q, h);
  const b = hue2rgb(p, q, h - 1/3);

  const toHex = (c) => {
    const hex = Math.round(c * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/**
 * Generate color palette from primary color
 * This mimics how websitestylekit.com and similar tools work
 */
function generateColorPalette(primaryHex) {
  const [h, s, l] = hexToHsl(primaryHex);
  
  // Primary Dark: Reduce lightness by 15-20%
  const primaryDark = hslToHex(h, s, Math.max(l - 18, 10));
  
  // Light variations: Increase lightness progressively
  // Light 1: Near white (95% lightness)
  // Light 2: Very light (85% lightness)  
  // Light 3: Light (75% lightness)
  const light1 = hslToHex(h, Math.max(s - 90, 5), 96);
  const light2 = hslToHex(h, Math.max(s - 70, 8), 87);
  const light3 = hslToHex(h, Math.max(s - 40, 15), 78);
  
  // Dark variations: Decrease lightness progressively
  // Dark 1: Very dark (15% lightness)
  // Dark 2: Medium dark (25% lightness)
  // Dark 3: Light dark (35% lightness)
  const dark1 = hslToHex(h, Math.min(s + 20, 85), 15);
  const dark2 = hslToHex(h, Math.min(s + 10, 75), 25);
  const dark3 = hslToHex(h, Math.max(s - 5, 45), 35);

  return [
    { name: "Primary", hex: primaryHex },
    { name: "Primary Dark", hex: primaryDark },
    { name: "Light 1", hex: light1 },
    { name: "Light 2", hex: light2 },
    { name: "Light 3", hex: light3 },
    { name: "Dark 1", hex: dark1 },
    { name: "Dark 2", hex: dark2 },
    { name: "Dark 3", hex: dark3 }
  ];
}

// Command line usage
if (require.main === module) {
  const primaryColor = process.argv[2] || "#13EBF6";
  const palette = generateColorPalette(primaryColor);
  console.log(JSON.stringify(palette, null, 2));
}

// Export function for use in templates
module.exports = { generateColorPalette };