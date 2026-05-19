import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'salmon-pink': '#F28482',
        'sandy-brown': '#F6AA1C',
        'bittersweet': '#FB4B4E',
        'ocean-green': '#4DA167',
        'eerie-black': '#212121',
        'davys-gray': '#474747',
        'sonic-silver': '#767676',
        'spanish-gray': '#9B9B9B',
        'cultured': '#F5F5F5',
        'onyx': '#3C3C3C',
        // NOCTE design tokens
        'nocte-black': '#0A0A0A',
        'nocte-s1': '#111111',
        'nocte-s2': '#1A1A1A',
        'nocte-s3': '#2A2A2A',
        'nocte-border': '#2A2A2A',
        'nocte-border-subtle': '#1F1F1F',
        'nocte-mid': '#888888',
        'nocte-light': '#CCCCCC',
        'nocte-white': '#FFFFFF',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Didot', 'Georgia', 'serif'],
        sans: ['Inter', 'DM Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'fs-1': '1.563rem',
        'fs-2': '1.375rem',
        'fs-3': '1.25rem',
        'fs-4': '1.125rem',
        'fs-5': '1rem',
        'fs-6': '0.938rem',
        'fs-7': '0.875rem',
        'fs-8': '0.813rem',
        'fs-9': '0.75rem',
        'fs-10': '0.688rem',
        'fs-11': '0.625rem',
      },
      borderRadius: {
        'md-custom': '10px',
        'sm-custom': '5px',
      },
      screens: {
        'xs': '480px',
        'sm': '570px',
        'xl': '1200px',
        '2xl': '1400px',
      },
    },
  },
} satisfies Config
