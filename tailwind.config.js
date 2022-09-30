/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/*.html", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        roboto: "roboto",
      },
      fontSize: {
        paragraph: "16px",
      },
      borderRadius: {
        sm: "12px",
      },
      backgroundImage: {
        "header-gradien": "./assets/images/vectors/Blur Gradient.svg",
      },
    },
  },
  plugins: [],
};
