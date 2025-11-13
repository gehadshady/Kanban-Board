/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      jakarta: ["Plus Jakarta Sans", "sans-serif"],
    },
    fontSize: {
      // Headings
      "heading-s": ["0.75rem", { fontWeight: "700" }], // 12px
      "heading-m": ["0.9rem", { fontWeight: "700" }], // 14.4px
      "heading-l": ["1.125rem", { fontWeight: "700" }], // 18px
      "heading-xl": ["1.5rem", { fontWeight: "700" }], // 24px

      // Body
      "body-m": ["0.75rem", { fontWeight: "700" }], // 12px bold
      "body-l": ["0.8125rem", { fontWeight: "500" }], // 13px medium
    },
    colors: {
      "main-purple": "#635fc7",
      "main-purple-hover": "#a8a4ff",

      red: "#ea5555",
      "red-hover": "#ff9898",

      white: "#ffffff",
      black: "#000112",

      "light-grey": "#f4f7fd",
      "dark-grey": "#2b2c37",
      "medium-grey": "#828fa3",
      "very-dark-grey": "#1e1e1e",

      lines: "#3e3f4e",
      "lines-light": "#e4ebfa",
    },
    extend: {},
  },
  plugins: [],
};
