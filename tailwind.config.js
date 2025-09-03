module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      keyframes: {
        "gradient-bg": {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "50%": { opacity: "0.3", transform: "translateY(-5px)" },
          "100%": { opacity: "0", transform: "translateY(10px)" },
        },
      },
      animation: {
        "gradient-bg": "gradient-bg 15s ease infinite",
        "fade-up": "fade-up 4s ease-in-out infinite",
      },
            backgroundSize: {
        '200': '200% 200%',
      },
    },
  },
  plugins: [],
}
