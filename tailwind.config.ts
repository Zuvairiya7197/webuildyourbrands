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
        primary: {
          foreground: "hsl(var(--primary-foreground))"
        }
      }
    }
  },
  plugins: []
};

export default config;
