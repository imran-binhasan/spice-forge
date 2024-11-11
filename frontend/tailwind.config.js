// tailwind.config.js
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}' // Tailwind will scan these files
  ],
  theme: {
    extend: {
      backgroundImage: {
        'best-menu': 'url(./src/assets/home/featured.jpg)'
      }
    },
  },
  plugins: [],
}
