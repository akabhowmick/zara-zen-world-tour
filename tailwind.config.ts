// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 1s ease-in-out both",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
};
