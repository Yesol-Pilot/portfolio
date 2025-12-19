/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505', // Deep Black
        surface: '#0f0f0f',
        primary: '#7c3aed', // Deep Violet
        secondary: '#db2777', // Deep Pink
        accent: '#0891b2', // Cyan
        text: '#ededed',
        muted: '#525252',
      },
      fontFamily: {
        sans: ['Pretendard', 'Inter', 'sans-serif'],
        mono: ['Rajdhani', 'Roboto Mono', 'monospace'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
