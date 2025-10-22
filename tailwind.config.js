/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8f0f1',
          100: '#d1e1e4',
          200: '#a3c3c8',
          300: '#75a5ad',
          400: '#478791',
          500: '#335c67',
          600: '#2a4a53',
          700: '#21383f',
          800: '#18262b',
          900: '#0f1417',
        },
        accent: {
          yellow: {
            light: '#FFFBDB',
            DEFAULT: '#FFF3B0',
            dark: '#E6DA9F',
          },
          orange: {
            light: '#F4B963',
            DEFAULT: '#E09F3E',
            dark: '#C78A35',
          },
          red: {
            light: '#C14445',
            DEFAULT: '#9E2A2B',
            dark: '#7A2021',
          },
          crimson: {
            light: '#6B0E12',
            DEFAULT: '#540B0E',
            dark: '#3D080A',
          },
        },
        dark: {
          700: '#2a2a2a',
          800: '#1f1f1f',
          900: '#121212',
        },
        light: {
          50: '#FFFFFF',
          100: '#FFFBF5',
          200: '#F8F8F8',
        }
      },
    },
  },
  plugins: [],
}
