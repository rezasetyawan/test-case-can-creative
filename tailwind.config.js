/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dist/**/*.{html,js}',
    './src/**/*.{html,js}',
  ],
  theme: {
    extend:
    {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        'primary-color': '#1391AD',
        'footer-color': '#107578',
        'accent-color': '#F4CD00'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, black 0%, black 66%, #1391ad40 66%, #1391ad40 100%)',
      },
    },
  },
  plugins: [],
}

