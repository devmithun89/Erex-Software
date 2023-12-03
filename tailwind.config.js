/** @type {import('tailwindcss').Config} */
module.exports = {
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
      fontFamily: {
        inter: ["var(--font-inter)"],
        roboto: ["var(--roboto)"],
      },
      colors: {
        primary: "#2639ED",
        secodary: "#342a27",
        info: "#fec926",
        white: "#fefcff;",
        sliver: "#d5d6d3",
        black: "#000000",
        pink: "#FF007A",
        purplelite: "#EFF1FF",
        yellowlite: "#FFF5DB",
        skybluelite: "#F4F9FF",
        skyblue: "#DAE9FF",
        greenlite: "#DEFFEE",
        graylite: "#F1F7FF",
        shadow: "#F2F2F2",
        bule: "#F1F7FF",
        redlite: "#FFF2F8",
        litetext: "#565656",
        whiteborder: "#F1F1F1",
      },
      screens: {
        sm: "540px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
