module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      space: { main: "#283D3B", secondary: "#536362" },
      champagne: "#EDDDD4",
      orange: "#C44536",
      liver: "#772E25",
      skobeloff: "#197278",
    },
  },
  plugins: [],
};
