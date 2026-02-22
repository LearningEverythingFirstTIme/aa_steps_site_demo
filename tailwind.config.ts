import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#0a0a0b",
        "void-light": "#121214",
        "void-lighter": "#1a1a1d",
        gold: "#d4af37",
        "gold-light": "#e8c547",
        "gold-dark": "#b8941f",
        amber: "#ffbf00",
        "amber-soft": "#ffd700",
      },
      fontFamily: {
        display: ["var(--font-cinzel)", "Cinzel", "serif"],
        body: ["var(--font-source-serif)", "Source Serif 4", "serif"],
      },
      animation: {
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
