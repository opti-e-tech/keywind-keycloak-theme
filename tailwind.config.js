const colors = require('tailwindcss/colors');

/**
 * @type { import('tailwindcss').Config }
 */
module.exports = {
  content: ['./theme/**/*.ftl'],
  experimental: {
    optimizeUniversalDefaults: true,
  },
  plugins: [require('@tailwindcss/forms')],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': "#eff6ff",
          '100': "#dbeafe",
          '200': "#bfdbfe",
          '300': "#93c5fd",
          '400': "#60a5fa",
          '500': "#3b82f6",
          '600': "#2563eb",
          '700': "#1d4ed8",
          '800': "#1e40af",
          '900': "#1e3a8a",
        },
        primary: {
          '50': '#f7fbe6',
          '100': '#e6f3b3',
          '200': '#ddef99',
          '300': '#cde666',
          '400': '#c4e24d',
          '500': '#b3da1a',
          '600': '#ABD600',
          '700': '#9ac100',
          '800': '#89ab00',
          '900': '#789600',
        },
        secondary: {
          '50': '#f9f9f9',
          '100': '#f2f2f2',
          '200': '#dadada',
          '300': '#c2c2c2',
          '400': '#a9a9a9',
          '500': '#919191',
          '600': '#797979',
          '700': '#616161',
          '800': '#494949',
          '900': '#303030',
        },

        provider: {
          bitbucket: '#0052CC',
          facebook: '#1877F2',
          github: '#181717',
          gitlab: '#FC6D26',
          google: '#4285F4',
          instagram: '#E4405F',
          linkedin: '#0A66C2',
          microsoft: '#5E5E5E',
          oidc: '#F78C40',
          openshift: '#EE0000',
          paypal: '#00457C',
          slack: '#4A154B',
          stackoverflow: '#F58025',
          twitter: '#1DA1F2',
        },
      },

      fontFamily: {
        default: ['Radio Canada', 'sans-serif']
      }
    },
  },
};
