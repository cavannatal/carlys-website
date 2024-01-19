/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-pink': '#FB6F92',
        'custom-purple': '#C084FC',
        'custom-darkpurple':'#9063BD',
        'custom-orange': '#FFD26F',
        'custom-grass':'#50C878',
        'custom-emerald':'#046307',
      },
      backgroundImage: {
        'pink-purple-gradient': 'linear-gradient(to right, #FB6F92, #C084FC)',
        'pink-orange-gradient': 'linear-gradient(to right, #FB6F92, #FFD26F)',
        'emerald-gradient': 'linear-gradient(to right, #50C878, #046307)'
      },
    },
  },
  plugins: [],
}

