import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#967E6F",
          secondary: "#B9EAFF",
          tertiary: "#E8DDD1",
          canvas: "#F5F2ED",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
      fontSize: {
        display: ["clamp(2.75rem,8vw,6.5rem)", { lineHeight: "1.02", letterSpacing: "-0.045em" }],
        hero: ["clamp(1.75rem,4.5vw,3.25rem)", { lineHeight: "1.08", letterSpacing: "-0.03em" }],
      },
      transitionTimingFunction: {
        apple: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
