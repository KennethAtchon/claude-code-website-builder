import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#FFFFFF",
        accent: "#D4AF37",
        background: "#FAFAFA",
        text: "#1A1A1A",
        muted: "#8B8B8B",
      },
      fontFamily: {
        primary: ["Playfair Display", "serif"],
        secondary: ["Inter", "sans-serif"],
      },
      fontSize: {
        "display": "3.5rem",
        "heading": "2.5rem", 
        "subheading": "1.75rem",
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};

export default config;