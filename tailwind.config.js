export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Poppins': ['Poppins', 'sans-serif'],
      'Nunito': ['Nunito', 'sans-serif']
    },
    extend: {
      boxShadow: {
        glow: '0 0 8px 2px rgba(34, 190, 94, 0.7)',
      },
      keyframes: {
        shine: {
          '0%, 100%': { boxShadow: '0 0 8px 2px rgba(34, 190, 94, 0.4)', filter: 'brightness(100%)' },
          '50%': { boxShadow: '0 0 20px 5px rgba(34, 190, 94, .9)', filter: 'brightness(150%)' },
        },
      },
      animation: {
        'slow-shine': 'shine 3s ease-in-out infinite',
      },
    }
  },
  plugins: [],
  variants: {
    extend: {
      rotate: ['hover', 'group-hover'],
      scale: ['hover', 'group-hover'],
      translate: ['hover', 'group-hover'],
    },
  },
}
