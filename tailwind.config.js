/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: {
          default: '#AE2012',
          shade: '#941B10',
          tint: '#DE2817'
        },
        secondary: {
          default: '#0A9396',
          shade: '#077173',
          tint: '#0CBDC0'
        },
        dark: '#001219'
      }
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
