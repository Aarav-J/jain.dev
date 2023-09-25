/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,tsx}", "./*.html"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        background: {
          primary: "#1E1E1E",
        },

        devGrey: "#CCCCCC",
        devPink: "#C517F1",
        devPurple: "#9417DE",
      },
      backgroundImage: {
        navbarTitle:
          "conic-gradient(from 296deg at 103.52% 77.36%, #C517F0 126deg, #9117DD 334deg, #C417F0 350deg, #8317D8 326deg);",
      },

      keyframes: {
        "gradient-change": {
          "0%": {
            backgroundPosition: "0% center",
          },

          "100%": {
            backgroundPosition: "-200% center",
          },
        },
      },
      animation: {
        "gradient-move": "gradient 3s linear infinite",
      },
    },
    fontFamily: {
      display: ["Source Sans 3", "sans-serif"],
    },
  },
  plugins: [],
};
