/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm Earth Palette
        cream: {
          DEFAULT: '#F8EDE3',
          50: '#FFFFFF',
          100: '#FDFAF7',
          200: '#F8EDE3',
          300: '#F0DBC7',
          400: '#E8C9AB',
          500: '#E0B78F',
        },
        sand: {
          DEFAULT: '#DFD3C3',
          50: '#F5F1EC',
          100: '#EBE5DB',
          200: '#DFD3C3',
          300: '#D0C0AA',
          400: '#C1AD91',
          500: '#B29A78',
        },
        taupe: {
          DEFAULT: '#D0B8A8',
          50: '#F0E9E4',
          100: '#E5D9D0',
          200: '#D0B8A8',
          300: '#BEA08C',
          400: '#AC8870',
          500: '#967158',
        },
        terracotta: {
          DEFAULT: '#C5705D',
          50: '#F2DDD8',
          100: '#EAC9C1',
          200: '#DAA193',
          300: '#CA7965',
          400: '#C5705D',
          500: '#B05A47',
          600: '#8E4839',
          700: '#6C372B',
          800: '#4A251D',
          900: '#28140F',
        },
      },
      fontFamily: {
        serif: ['var(--font-ibm-plex-serif)', 'serif'],
        sans: ['var(--font-ibm-plex-sans)', 'sans-serif'],
        mono: ['var(--font-ibm-plex-mono)', 'monospace'],
      },
      fontSize: {
        'display-1': ['3rem', { lineHeight: '1.1', letterSpacing: '0' }],
        'display-2': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.5px' }],
        'display-3': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.3px' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.3s ease-out forwards',
        'pulse-subtle': 'pulseSubtle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      maxWidth: {
        'prose': '80ch',
      },
      boxShadow: {
        'warm-sm': '0 1px 2px rgba(197, 112, 93, 0.1)',
        'warm': '0 4px 12px rgba(197, 112, 93, 0.15)',
        'warm-lg': '0 8px 30px rgba(197, 112, 93, 0.2)',
      },
    },
  },
  plugins: [],
}
