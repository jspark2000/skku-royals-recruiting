/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['NanumSquareNeo'],
        sans: ['NanumSquareNeo']
      }
    }
  },
  plugins: []
}
