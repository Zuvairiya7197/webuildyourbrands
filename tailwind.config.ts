import type { Config } from "tailwindcss";

const offWhite = "#f1eee7";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        white: offWhite,
        ring: "hsl(var(--ring))",
        primary: {
          foreground: "hsl(var(--primary-foreground))"
        },
        foreground: "hsl(var(--foreground))",
        background: "hsl(var(--background))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        border: "hsl(var(--border))",
        card: {
          DEFAULT: "hsl(var(--card))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))"
        }
      }
    }
  },
  plugins: []
};

export default config;
