/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        first: "#FFF8E8",
        second: "#F7EED3",
        button: "#AAB396",
        hover: "#674636",
        add: "#efefef",
        scrollbarBg: "#FFF8E8",
        scrollbarThumb: "#AAB396",
        scrollbarThumbHover: "#674636",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
