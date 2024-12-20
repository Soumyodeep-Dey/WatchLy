/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4AF37', // Base gold color
          light: '#FFD700',   // Bright gold
          dark: '#B8860B',    // Deep gold
        },
        white: {
          DEFAULT: '#FFFFFF', // Pure white
          off: '#F5F5F5',     // Slightly muted white
        },
        black: {
          DEFAULT: '#000000', // Pure black
          rich: '#0A0A0A',    // Rich, deep black
        },
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(to right, #FFD700, #D4AF37, #B8860B)', // Gold gradient
      },
      fontFamily: {
        sans: ['Inter', 'Sans-serif'], // Example font family for sleek typography
      },
      spacing: {
        '128': '32rem', // Custom large spacing value if needed
        '144': '36rem',
      },
      borderRadius: {
        'xl': '1rem', // Custom border radius for smoother curves
      },
    },
  },
  plugins: [],
};
