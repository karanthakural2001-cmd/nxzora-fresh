import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#ff0a7f", dark: "#d10069", soft: "#ff4fa3" },
        ink: "#0a0a0a",
        panel: "#141414",
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "none" },
        },
      },
      animation: {
        fadeUp: "fadeUp .7s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
