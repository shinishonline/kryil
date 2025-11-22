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
        darkBg: "#1a1a1a", // ✅ dark mode background - darker for better contrast
        darkText: "#f0f0f0" // ✅ dark mode text - lighter for better readability
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
