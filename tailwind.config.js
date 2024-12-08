/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'color-primary': '#e84545',
        'color-secndary': '#fef5f5',
        'color-orange-ass': '#f8c7c7',
        'color-border-ass': '#e8e9e9',
        'text-heading': '#535559',
        'color-nav': '#8e8a87',
        'color-pra': '#424448',
        'color-border': '#eceded',
        'color-white-ass': '#f9f9f9',
        'color-black-ass': '#636669',
        'color-white-black': '#eaebec',
        'color-ass': '#b7b6b5',
      },
      fontFamily : {
        'font-nav': "Poppins",
        'font-heading': 'Montserrat',
        'font-text': 'Open Sans',
      }
    },
    container : {
      center: true,
      padding: {
        DEFAULT: '20px',
        md: '40px',
      }
    }
  },
  plugins: [],
}