/** @type {import('tailwindcss').Config} */
import ThemeConfig from './src/themes/config.json'

export default {
  content: ['./src/**/*.{html,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ...ThemeConfig
      }
    }
  },
  plugins: []
}
