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
