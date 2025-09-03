/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,tsx}", "./*.html"],
  mode: "jit",
  theme: {
    // colors: { 
    //   white: "#EEDAEA",
    // },
    extend: {
      colors: {
        background: {
          primary: "#0F1820",
        },

        devGrey: "#CCCCCC",
        devPink: "#C517F1",
        devPurple: "#9417DE",
        white: "#EEDAEA", 
        goto: '#292136', 
        react: "#00D8FE", 
        js: "#E8D44E", 
        node: '#69A063', 
        github: '#6170C2', 
        globe: "#1576B6", 
        mongo: "#01EC64", 
        tailwind: "#38B2AC",
        overleaf: "#05652F",
        // brain: "#F382", 
        openai: "#42B18F",
        ts: "#2F74C0", 
        supabase: '#6DC071',
        axios: "#5A29E4", 
        python: "#5384B1", 
        flask: "#0D448A", 
        cplusplus: "#5C92C8", 
        firebase: "#DD2C01", 
       
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
    // colors: { 
    //     white: "#EEDAEA"
    // },
    fontFamily: {
      display: ["Source Sans 3", "sans-serif"],
    },
  },

  
  plugins: [],
};
