/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-roboto-mono)"],
      },
      colors: {
        dark: "#BFBFBF",
        light: "#262626", //f5f5f5
        primary: "#6A00FF",
        secondary: "#800000",
        primDark: "#58e6d9",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgb(191, 191, 191, 0.6) 2px,#262626 5px, #262626 100px);",
        circularLightLg:
          "repeating-radial-gradient(rgb(191, 191, 191, 0.6) 2px,#262626 5px, #262626 80px);",
        circularLightMd:
          "repeating-radial-gradient(rgb(191, 191, 191, 0.6) 2px,#262626 5px, #262626 60px);",
        circularLightSm:
          "repeating-radial-gradient(rgb(191, 191, 191, 0.6) 2px,#262626 4px, #262626 40px);",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media(max-width: 1535px)
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
    },
  },
  plugins: [],
};
