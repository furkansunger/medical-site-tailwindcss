module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        medical: "#00BFA6",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
