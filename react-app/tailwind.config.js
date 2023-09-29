/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        midnightblue: "#33095d",
        black: "#000",
        darkslategray: "#454141",
        gold: "rgba(254, 200, 40, 0.53)",
        lavenderblush: "#f5ecf4",
        thistle: "#d4c1ce",
      },
      spacing: {},
      fontFamily: {
        "gilroy-semibold": "Gilroy-SemiBold",
        poppins: "Poppins",
        "gilroy-bold": "Gilroy-Bold",
      },
      borderRadius: {
        "21xl": "40px",
      },
    },
    fontSize: {
      xl: "35px",
     
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
