/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#1b324d',
          900: '#0c2340',
          950: '#071628',
        },
        brand: {
          primary: '#0c2340', // Deep Navy Blue
          secondary: '#1d4ed8', // Royal Blue
          accent: '#0284c7', // Cyan / Precision Blue
          accentLight: '#38bdf8',
          slate: '#f8fafc',
          card: '#ffffff',
          border: '#e2e8f0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'card': '0 4px 6px -1px rgba(12, 35, 64, 0.06), 0 2px 4px -1px rgba(12, 35, 64, 0.04)',
        'hover': '0 10px 15px -3px rgba(12, 35, 64, 0.08), 0 4px 6px -2px rgba(12, 35, 64, 0.04)',
      }
    },
  },
  plugins: [],
}
