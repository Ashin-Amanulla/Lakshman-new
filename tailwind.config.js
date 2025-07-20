/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        heading: ["Inter", ...fontFamily.sans],
      },
      colors: {
        // Professional law firm color palette
        primary: {
          50: "#f0f4f8",
          100: "#d8e7f0",
          200: "#b1cfe0",
          300: "#8ab7d0",
          400: "#5a8fc0",
          500: "#1a365d", // Main brand color
          600: "#163050",
          700: "#122a43",
          800: "#0e2236",
          900: "#0a1a29",
        },
        secondary: {
          50: "#f0f6ff",
          100: "#e0ecff",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#2563eb", // Accent color
          600: "#1d4ed8",
          700: "#1e40af",
          800: "#1e3a8a",
          900: "#1e3a8a",
        },
        accent: {
          50: "#fefdf8",
          100: "#fefbf0",
          200: "#fcf4d6",
          300: "#f9edbc",
          400: "#f4df88",
          500: "#be9e44", // Gold accent
          600: "#a88a3d",
          700: "#8f7336",
          800: "#765c2e",
          900: "#5d4626",
        },
        neutral: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
        // Semantic colors
        success: "#10b981",
        warning: "#f59e0b",
        error: "#ef4444",
        info: "#3b82f6",
      },
      fontSize: {
        // Responsive typography scale
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
        // Custom display sizes
        "display-sm": ["2.25rem", { lineHeight: "2.5rem" }],
        "display-md": ["2.875rem", { lineHeight: "3.25rem" }],
        "display-lg": ["3.75rem", { lineHeight: "4.25rem" }],
        "display-xl": ["4.5rem", { lineHeight: "5rem" }],
      },
      spacing: {
        18: "4.5rem",
        112: "28rem",
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.5s ease-out",
        "slide-down": "slide-down 0.5s ease-out",
        "slide-left": "slide-left 0.5s ease-out",
        "slide-right": "slide-right 0.5s ease-out",
        "scale-in": "scale-in 0.5s ease-out",
        "bounce-gentle": "bounce-gentle 2s infinite",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-left": {
          "0%": { transform: "translateX(20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-right": {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "bounce-gentle": {
          "0%, 100%": { transform: "translateY(-2px)" },
          "50%": { transform: "translateY(2px)" },
        },
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        medium:
          "0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 20px -5px rgba(0, 0, 0, 0.04)",
        large:
          "0 10px 40px -10px rgba(0, 0, 0, 0.1), 0 20px 25px -5px rgba(0, 0, 0, 0.04)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
