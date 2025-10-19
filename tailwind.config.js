/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // ✅ enable class strategy for dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#ffffff",
        text: "#000000",
        muted: "#666666",
        accent: "#00aaff",
        darkBg: "#2d2d2d", // ✅ dark mode background
        darkText: "#f5f5f5" // ✅ dark mode text
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        opensans: ['"Open Sans"', "sans-serif"],
        baloo: ["Baloo 2", "sans-serif"],
      },
      boxShadow: {
        card: "0 20px 50px rgba(0,0,0,0.2)",
        nav: "-6px 6px 12px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};
