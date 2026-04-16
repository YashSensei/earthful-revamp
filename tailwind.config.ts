import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFFAF3",
        ink: "#121212",
        earth: {
          orange: "#FFC773",
          footer: "#FFC773",
          footerText: "#404040",
          olive: "#69744C",
          oliveDark: "#23271A",
          cream: "#FFFAF3",
          softCream: "#FBF4E7",
          badge: "#F3F3F3",
          muted: "#B3B3B3",
          sale: "#B83A3A",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Literata", "serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
        display: ["var(--font-display)", "Aboreto", "serif"],
      },
      fontSize: {
        "xxs": "1rem",
      },
      maxWidth: {
        page: "1440px",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-slow": "marquee 60s linear infinite",
        scrollword: "scrollword 2500ms ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scrollword: {
          "0%, 20%": { transform: "translateY(0)", opacity: "1" },
          "25%, 45%": { transform: "translateY(-100%)", opacity: "1" },
          "50%, 70%": { transform: "translateY(-200%)", opacity: "1" },
          "75%, 95%": { transform: "translateY(-300%)", opacity: "1" },
          "100%": { transform: "translateY(-400%)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
