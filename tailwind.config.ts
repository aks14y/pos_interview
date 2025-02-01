import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "custom-yellow": "#f6f6ef",
        "level-0": "#ecfff1",
        "level-1": "#f8f8a7",
        "level-2": "#a6d96a",
        "level-3": "#1a9641",
        "level-4": "#003f0b",
      },
    },
  },
  plugins: [],
};
export default config;
