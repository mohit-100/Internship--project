/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#292b32",
          "200": "#1d1d1f",
        },
        black: "#000",
        dimgray: "#525965",
        cornflowerblue: "#2c9cf0",
        whitesmoke: "#f7f7f8",
        darkslategray: {
          "100": "#3b3e47",
          "200": "#222d3a",
        },
        teal: "#006555",
        dodgerblue: "#738fff",
        gainsboro: "#dfdfdf",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        poppins: "Poppins",
      },
      borderRadius: {
        "10xs": "3px",
      },
    },
    fontSize: {
      "smi-7": "12.7px",
      sm: "14px",
      mid: "17px",
      "31xl": "50px",
      "smi-8": "12.8px",
      xl: "20px",
      xs: "12px",
      "5xl": "24px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
  darkMode:'class',
};
