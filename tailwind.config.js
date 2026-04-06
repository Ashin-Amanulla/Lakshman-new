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
        // Serif editorial system
        sans: ['"Source Sans 3"', "system-ui", ...fontFamily.sans],
        serif: ['"Playfair Display"', "Georgia", ...fontFamily.serif],
        heading: ['"Playfair Display"', "Georgia", ...fontFamily.serif],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
      colors: {
        // Serif Design System — Warm Monochrome + Burnished Gold
        background: "#FAFAF8",
        foreground: "#1A1A1A",
        muted: "#F5F3F0",
        "muted-foreground": "#6B6B6B",
        border: "#E8E4DF",
        "border-hover": "#C8C4BF",
        card: "#FFFFFF",

        // Burnished Gold Accent
        accent: {
          DEFAULT: "#B8860B",
          secondary: "#D4A84B",
          muted: "#B8860B0F", // 6% opacity
          foreground: "#FFFFFF",
        },

        // Keep primary for legacy compatibility — mapped to foreground tones
        primary: {
          50: "#F5F3F0",
          100: "#EBE9E5",
          200: "#D4D0CA",
          300: "#B8B4AE",
          400: "#908C85",
          500: "#6B6B6B",
          600: "#4A4A4A",
          700: "#2E2E2E",
          800: "#1F1F1F",
          900: "#1A1A1A",
          950: "#111111",
        },

        // Neutral grays
        neutral: {
          50: "#FAFAF8",
          100: "#F5F3F0",
          200: "#E8E4DF",
          300: "#D4CFC9",
          400: "#B0A89F",
          500: "#8C8278",
          600: "#6B6B6B",
          700: "#4A4846",
          800: "#2E2C2A",
          900: "#1A1A1A",
        },

        // Semantic
        success: "#4A7C59",
        warning: "#B8860B",
        error: "#8B2222",
        info: "#2C5F7A",
      },

      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.75rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "1.4rem" }],
        "3xl": ["1.875rem", { lineHeight: "1.3rem" }],
        "4xl": ["2.25rem", { lineHeight: "1.2rem" }],
        "5xl": ["3rem", { lineHeight: "1.1rem" }],
        "6xl": ["3.75rem", { lineHeight: "1.05rem" }],
        "7xl": ["4.5rem", { lineHeight: "1rem" }],
        "8xl": ["6rem", { lineHeight: "1rem" }],
        "9xl": ["8rem", { lineHeight: "1rem" }],
      },

      spacing: {
        18: "4.5rem",
        112: "28rem",
        128: "32rem",
        144: "36rem",
      },

      borderRadius: {
        md: "6px",
        lg: "8px",
        xl: "10px",
        "2xl": "12px",
        "4xl": "2rem",
      },

      maxWidth: {
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
        "8xl": "88rem",
      },

      boxShadow: {
        // Serif design — very subtle shadows
        sm: "0 1px 2px rgba(26,26,26,0.04)",
        md: "0 4px 12px rgba(26,26,26,0.06)",
        lg: "0 8px 24px rgba(26,26,26,0.08)",
        // Legacy aliases
        soft: "0 1px 4px rgba(26,26,26,0.04)",
        medium: "0 4px 12px rgba(26,26,26,0.06)",
        large: "0 8px 24px rgba(26,26,26,0.08)",
        // Gold accent glow
        glow: "0 0 20px rgba(184,134,11,0.15)",
        "accent-sm": "0 4px 16px rgba(184,134,11,0.12)",
      },

      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
        tight: "-0.01em",
        normal: "0em",
        wide: "0.05em",
        wider: "0.1em",
        widest: "0.15em",
        "ultra-wide": "0.2em",
      },

      lineHeight: {
        "extra-tight": "1.05",
        tight: "1.1",
        snug: "1.2",
        normal: "1.4",
        relaxed: "1.6",
        loose: "1.75",
        "extra-loose": "2",
      },

      animation: {
        "fade-in": "fade-in 0.6s ease-out forwards",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        float: "float 8s ease-in-out infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },

      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
