/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "primary-color": "#5538c8",
        "gray-4": "#bdbdbd",
        "gray-color": "#9c9c9c",
        black: {
          100: "#080614",
          200: "#000",
        },
        silver: "#bcbcbc",
        whitesmoke: "#f9f9f9",
        mediumseagreen: "#2ec787",
        gainsboro: "#d9d9d9",
        lavender: "#e1dcf4",
        "main-color": "#185bc3",
      },
      fontFamily: {
        sora: "Sora",
        inter: "Inter",
      },
      borderRadius: {
        "10xs": "3px",
        "9xs-4": "3.4px",
        "11xl": "30px",
      },
    },
    fontSize: {
      base: "16px",
      lg: "18px",
      "3xs": "10px",
      xs: "12px",
      "3xl": "22px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
