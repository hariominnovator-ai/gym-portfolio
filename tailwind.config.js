/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          green: '#587D3D',
          black: '#000000',
          white: '#F6F5F3',
          gold: '#C9A24C',
        },
        glass: 'rgba(255,255,255,0.06)',
      },
      fontFamily: {
        headline: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backdropBlur: {
        'glass': '8px',
      },
      letterSpacing: {
        'button': '0.06em',
      },
    },
  },
  plugins: [],
}
