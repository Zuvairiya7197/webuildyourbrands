import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",
        primary: {
          foreground: "hsl(var(--primary-foreground))"
        },
        muted: {
          foreground: "hsl(var(--muted-foreground))"
        }
      }
    }
  },
  plugins: []
};

export default config;
