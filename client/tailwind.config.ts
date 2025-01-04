import type { Config } from "tailwindcss";

export default {
  corePlugins: {container: false},
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    extend: {
      maxWidth: {"FHD": "1920px"},
      fontFamily: {
        BigShouldersDisplay: ["var(--font-big-shoulders-display)"],
        Iceland: ["var(--font-iceland)"]
      },
      colors: {
        "primary": "#E84A4A",
        "primary-alternative": "#932B2B",
        "secondary": "#050508",
        "secondary-alternative": "#2A2627",
      }
    },
  },
  plugins: [],
} satisfies Config;
