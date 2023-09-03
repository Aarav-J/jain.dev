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
          "conic-gradient(from -65deg at 103.52% 77.36%, #C517F0 2.499373219907284deg, #9117DD 35.832394659519196deg, #C417F0 312.0280694961548deg, #8317D8 357.8975987434387deg)",
      },
    },
    fontFamily: {
      display: ["Source Sans 3", "sans-serif"],
    },
    plugins: [],
  },
};
