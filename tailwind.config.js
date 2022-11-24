/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
  ],
  theme: {
    extend: {
      fontFamily: {
        raj: "Rajdhani",
        roboto: "Roboto",
        poppins: "Poppins",
      },
      colors: {
        dark: "#111111",
        primary: "#FFB703",
      },
    },
  },
  plugins: [],
};
