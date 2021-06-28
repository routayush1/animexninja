module.exports = {
  purge: {
    enable: true,
    content: [
      "./pages/**/*.{js,jsx,ts,tsx}",
      "./components/**/*.{js,jsx,ts,tsx}",
      "./redux/**/*.{js,ts,jsx,tsx}",
    ],
  },

  darkMode: false,
  variants: {
    color: ["responsive", "hover", "focus", "group-hover"],
    borderColor: ["responsive", "hover", "focus", "group-hover"],
  },
  theme: {
    extend: {
      colors: {
        background: "#1a1c20",
        notactive: "#8d8f94",
      },
      width: {
        player: "1024px",
      },
      border: ["hover"],
    },
  },

  variants: {
    extend: {},
    aspectRatio: ['responsive', 'hover']
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
