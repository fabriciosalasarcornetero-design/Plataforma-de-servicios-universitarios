/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lime: {
          DEFAULT: "#A3F42A",
          soft: "#E8FBC9",
        },
        leaf: {
          DEFAULT: "#5EBB20",
          dark: "#468617",
        },
        violet: {
          DEFAULT: "#6C35D9",
          soft: "#EFE7FC",
        },
        ink: {
          DEFAULT: "#17232D",
        },
        graphite: "#4B5563",
        mist: "#F3F5F7",
      },
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(23,35,45,0.06), 0 8px 24px rgba(23,35,45,0.06)",
        cardHover: "0 4px 10px rgba(23,35,45,0.08), 0 16px 32px rgba(23,35,45,0.10)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(8px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp .5s ease-out both",
      },
    },
  },
  plugins: [],
};
