/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./*.html"],
  safelist: [
    "text-blue-300",   "bg-blue-500/10",   "border-blue-500/20",
    "text-green-300",  "bg-green-500/10",  "border-green-500/20",
    "text-purple-300", "bg-purple-500/10", "border-purple-500/20",
    "text-orange-300", "bg-orange-500/10", "border-orange-500/20",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        background: {
          primary: "#0F1820",
        },
        devGrey: "#AAAAAA",
        devPink: "#C517F1",
        devPurple: "#9417DE",
        white: "#EEDAEA",
        react: "#00D8FE",
        js: "#E8D44E",
        node: "#69A063",
        github: "#6170C2",
        globe: "#1576B6",
        mongo: "#01EC64",
        tailwind: "#38B2AC",
        overleaf: "#05652F",
        openai: "#42B18F",
        ts: "#2F74C0",
        supabase: "#6DC071",
        axios: "#5A29E4",
        python: "#5384B1",
        flask: "#0D448A",
        cplusplus: "#5C92C8",
        firebase: "#DD2C01",
      },
      backgroundImage: {
        navbarTitle: () =>
          `conic-gradient(from 296deg at 103.52% 77.36%, #C517F1 126deg, #9417DE 334deg, #C417F0 350deg, #8317D8 326deg)`,
      },
      fontFamily: {
        display: ["Geist", "sans-serif"],
        mono: ["Geist Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
