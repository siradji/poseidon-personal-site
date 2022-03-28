module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'primary': {
        100: '#223866',
        200: '#080234',
        500: '#3e3768'
      },
      'secondary': {
        100: "#01c5ba",
        200: "#064462"
      },
      gray: {
        50: '#FAFAFA',
        100: '#F5F5F5',
        200: '#E5E5E5',
        300: '#D4D4D4',
        400: '#A3A3A3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717'
      },
      red: {
        50: '#FFF2F2',
        100: '#FFE6E6',
        200: '#FFBFBF',
        300: '#FF9999',
        500: '#FF0000',
        600: '#E60000'
      },
      orange: {
        50: '#FFFAF4',
        100: '#FFF5EA',
        200: '#FFE5CA',
        300: '#FFD5A9',
        500: '#FF9629',
        600: '#E68725'
      },
      green: {
        50: '#F2FBF4',
        100: '#E6F7E8',
        200: '#C0ECC6',
        300: '#9AE1A4',
        500: '#02B31B',
        600: '#02A118'
      },
      blue: {
        50: '#F7FBFE',
        100: '#EFF6FD',
        200: '#D6EAF9',
        500: '#5AA9E6',
      }
    },
    extend: {

    },
  },
  plugins: [],
}
