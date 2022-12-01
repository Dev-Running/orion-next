/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
  ],
  theme: {
    extend: {
      fontFamily: {
        raj: 'Rajdhani',
        roboto: 'Roboto',
        poppins: 'Poppins',
        inter: 'Inter',
      },
      colors: {
        dark: '#111111',
        primary: '#FFB703',
      },
      animation: {
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
