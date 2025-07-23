import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          100: "#ffdde5",
          200: "#ffc4d2",
          300: "#ff92ad",
          400: "#ff5d7e",
          main: "#ff1f44",
          600: "#e6103e",
          700: "#be1e31",
        },
        gray: {
          white: "#fafafa",
          100: "#ececee",
          200: "#dddee0",
          300: "#a6a7ab",
          400: "#95969b",
          500: "#7a7d82",
          600: "#6f7176",
          700: "#57585c",
          800: "#434448",
          850: "#333537",
          900: "#29292c",
          950: "#1b1b1b",
          black: "#0e0e0e",
        },
      },
      fontSize: {
        "title-1": ["1.5rem", { lineHeight: "150%", fontWeight: "700" }],
        "title-2": ["1.375rem", { lineHeight: "150%", fontWeight: "700" }],
        "title-3": ["1.25rem", { lineHeight: "140%", fontWeight: "700" }],
        "body-1": ["1.125rem", { lineHeight: "140%" }],
        "body-2": ["1rem", { lineHeight: "140%" }],
        "body-3": ["0.875rem", { lineHeight: "140%" }],
        "caption-1": ["0.75rem", { lineHeight: "130%" }],
        "caption-2": ["0.6875rem", { lineHeight: "130%" }],
        "caption-3": ["0.625rem", { lineHeight: "130%" }],
      },
    },
  },
  plugins: [],
};

export default config;
