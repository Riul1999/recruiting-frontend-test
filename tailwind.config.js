module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      focus : '#c4b5fd'
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}