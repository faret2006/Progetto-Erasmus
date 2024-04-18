/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'gray': {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#1f1f1f',
          '1000': '#111111',
        },
        'dark-green': {
          '50': '#f1fcf9',
          '100': '#d1f6ed',
          '200': '#a4ebdb',
          '300': '#6edac5',
          '400': '#40c1ac',
          '500': '#27a592',
          '600': '#1c8577',
          '700': '#1b6a61',
          '800': '#1a554f',
          '900': '#1a4742',
          '950': '#092a28',
        },
        'bright-red': {
          '50': '#ffebdb',
          '100': '#ffdfc2',
          '200': '#ffbe8f',
          '300': '#ff9452',
          '400': '#ff5f14',
          '500': '#f04000',
          '600': '#f02000',
          '700': '#cc1100',
          '800': '#a80e00',
          '900': '#8b0f04',
          '950': '#4d0300',
        },

      }
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('not-last', '&:not(:last-child)')
      addVariant('not-first', '&:not(:first-child)')
    })
  ],
}

