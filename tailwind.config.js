/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        quickSand: ["Quicksand", "sans-serif"],
      },
      fontSize: {
        xxs: "10px",
        "3.5xl": "32px",
      },
      colors: {
        primary: "#3b3f5c",
        secondary: "#888ea8",
        gray: {
          "db-1": "#bfc9d4",
        },
        white: {
          "db-1": "#ced4da",
        },
        red: {
          "db-1": "#662E53",
        },
        blue: {
          "db-1": "#122140",
        },
      },
      boxShadow: {
        primary:
          // "0 4px 6px 0 rgba(85, 85, 85, 0.09019607843137255), 0 1px 20px 0 rgba(0, 0, 0, 0.08), 0px 1px 11px 0px rgba(0, 0, 0, 0.06)",
          "0 0 5px 2px rgba(102, 46, 83, 0.2)",
      },
    },
  },
  plugins: [],
};
