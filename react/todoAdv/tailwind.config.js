/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px"
      },
      colors: {
        blueD: "#4793AF",
        light: "#FFC470",
        medium: "#DD5746",
        dark: "#8B322C"
      },
      fontFamily: {
        hind: ["Hind", "sans-serif"]
      },
      fontWeight: {
        bolder: "800",
        bold: "700",
        medium: "500",
        normal: "400"
      }
    }
  },
  plugins: []
};
