const defaultTheme = require('tailwindcss/defaultTheme')

const colors = [{"name":"Honeydew","hex":"f8fbf7","rgb":[241,250,238],"cmyk":[4,0,5,2],"hsb":[105,5,98],"hsl":[105,55,96],"lab":[97,-5,5]},{"name":"Prussian Blue","hex":"1d3557","rgb":[29,53,87],"cmyk":[67,39,0,66],"hsb":[215,67,34],"hsl":[215,50,23],"lab":[22,3,-23]},{"name":"Imperial Red","hex":"e63946","rgb":[230,57,70],"cmyk":[0,75,70,10],"hsb":[355,75,90],"hsl":[355,78,56],"lab":[52,66,34]},{"name":"Myrtle Green","hex":"1d7874","rgb":[29,120,116],"cmyk":[76,0,3,53],"hsb":[177,76,47],"hsl":[177,61,29],"lab":[46,-26,-5]},{"name":"Wintergreen Dream","hex":"679289","rgb":[103,146,137],"cmyk":[29,0,6,43],"hsb":[167,29,57],"hsl":[167,17,49],"lab":[57,-17,0]}]

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"Gotham A"', '"Gotham B"', ...defaultTheme.fontFamily.sans],
      body: ['Inter var', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      // fontFamily: {
      //   sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      // },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
