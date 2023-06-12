module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      animation: {
        'open-navbar': 'open 0.3s linear forwards',
        'close-navbar': 'close 0.3s linear forwards',
        'float-img': 'float 1.5s linear infinite'
      },
      keyframes: {
        open: {
          '100%': { transform: 'translateX(0)' },
        },

        close: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },

        float: {
          '0%': { transform: 'translatey(0)' },
          '50%': { transform: 'translatey(5px)' },
        }
        
      }
    },
    fontFamily: {
      'Geologica': 'Geologica, sans-serif',
    },
  },
  plugins: [],
}