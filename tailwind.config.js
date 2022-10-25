/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          // primary: "#FBBD23",
          primary: "#1d4ed8",
          // secondary: "#6419E6",
          secondary: "#ff5e19",
          accent: "#0c0e3f",
          light: "#acb3f2",
          neutral: "#191D24",
          "base-": "#090a27",
          info: "#3ABFF8",
          success: "#090a27",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
