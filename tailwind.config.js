module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: ["10px", "18px"],
        sm: ["12px", "20px"],
        base: ["18px", "24px"],
        lg: ["16px", "24px"],
        xl: ["24px", "36px"],
        "2xl": ["30px", "45px"],
        "3xl": ["42px", "54px"],
        "4xl": ["68px", "55px"],
        "5xl": ["68px", "96px"],
        "6xl": ["90px", "96px"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
