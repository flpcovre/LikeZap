/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite/**/*.{js,ts}"
  ],
  components: true,
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

