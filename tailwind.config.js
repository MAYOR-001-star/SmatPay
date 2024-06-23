// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-50': 'rgba(0, 0, 0, 0.7)',
      },
      fontFamily: {
        'familyy' : ['Montserrat']
      },
    },
  },
  plugins: [],
}
