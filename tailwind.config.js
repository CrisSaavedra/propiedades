module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      animation: {
        'open-navbar': 'open 0.3s linear forwards',
        'close-navbar': 'close 0.3s linear forwards',
      },
      keyframes: {
        open: {
          '100%': { transform: 'translateX(0)' },
        },

        close: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        
      }
    },
    fontFamily: {
      'Geologica': 'Geologica, sans-serif',
    },
  },
  plugins: [],
}