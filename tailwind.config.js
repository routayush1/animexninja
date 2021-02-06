module.exports = {
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./styles/**/*.css",
    ],

    // These options are passed through directly to PurgeCSS
    options: {
      safelist: [
        "bg-background",
        "text-notactive",
        "border-notactive",
        "border-gray-400",
        "text-gray-400",
      ],
    },
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: "#1a1c20",
        notactive: "#8d8f94",
      },
      width: {
        player: "1024px",
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
