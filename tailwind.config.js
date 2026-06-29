/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emeraldLuxury: "#059669",
        goldLuxury: "#AA820A",
        whiteLuxury: "#F5F5F7",
        charcoal: "#1D1D1F",
        slateLuxury: "#515154",
      },

      fontFamily: {
        luxury: ["Poppins", "sans-serif"],
      },

      backdropBlur: {
        xs: '2px',
      },

      boxShadow: {
        luxury:
          "0 20px 80px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
}