// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        blob3d: {
          '0%, 100%': {
            transform: "translate(0, 0) scale(1)",
          },
          '50%': {
            transform: "translate(10px, -10px) scale(1.3)",
          },
        },
      },
      animation: {
        blob3d: 'blob3d 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
