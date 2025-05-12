module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        blob3d: {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
          },
          "50%": {
            transform: "translate(10px, -10px) scale(1.3)",
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "-100% 0" },
          "100%": { backgroundPosition: "100% 0" },
        },
        wave: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        blob3d: "blob3d 8s ease-in-out infinite",
        shimmer: "shimmer 3s infinite",
        wave: "wave 10s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
