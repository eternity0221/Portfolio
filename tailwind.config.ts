import type { Config } from "tailwindcss";

export default {
  corePlugins: {
    container: false,
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        BigShouldersDisplay: ["var(--font-big-shoulders-display)"],
        Iceland: ["var(--font-iceland)"]
      },
      colors: {
        "primary": "#E84A4A"
      }
    },
  },
  plugins: [],
} satisfies Config;
