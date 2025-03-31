// eslint-disable-next-line no-undef
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  // darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Nueva paleta más sobria y arquitectónica
        primary: {
          DEFAULT: '#1C1C1C', // Negro sobrio
          light: '#333333',
          dark: '#101010',
        },
        accent: {
          DEFAULT: '#00B8D9', // Azul tecnológico
          light: '#79E2F2',
          dark: '#008DA6',
        },
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        success: '#36B37E',
        warning: '#FFAB00',
        error: '#FF5630',
        info: '#0065FF',
        
        // Colores específicos de la UI
        surface: {
          DEFAULT: '#FFFFFF',
          dark: '#121212',
        },
        'white-safe': '#FFFFFF',
        'dark-overlay': 'rgba(18, 18, 18, 0.85)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Metropolis', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        72: '18rem',
        80: '20rem',
        96: '24rem',
        128: '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        subtle: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        soft: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'soft-md': '0 6px 10px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'soft-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
        glow: '0 0 15px rgba(0, 184, 217, 0.3)',
        sharp: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { opacity: 0.8 },
          '50%': { opacity: 0.4 },
        },
        shimmer: {
          '0%': { backgroundPosition: '-500px 0' },
          '100%': { backgroundPosition: '500px 0' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'text-blink': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      animation: {
        breathe: 'breathe 4s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        pulse: 'pulse 3s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'text-blink': 'text-blink 0.8s step-end infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(to right, #1C1C1C 1px, transparent 1px), linear-gradient(to bottom, #1C1C1C 1px, transparent 1px)',
        'dot-pattern': 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
      },
      screens: {
        touch: {raw: 'only screen and (pointer: coarse)'},
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
