/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx,html}"], // Ensure Tailwind scans all your files
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#1e1e1e', // black
          100: '#3d3d3d', // grey
          200: '#c0bfbf', // font-color
          300: '#F1F3F4', // variation of font-color
          400: '#009900', // green 
          500: '#7F00FF', // purple for links
          600: '#ef233c', // red for logout
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        secondary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      }
    },
    screens: {
      'xsm': '400px',
      'sm': '640px',
      'md': '960px',
      'lg': '1024px',
      'xl': '1280px',
    }, // You can customize colors, fonts, etc. here
    fontFamily: {
        // Option 1: Override default Tailwind fonts
        // 'sans' is for general UI and body text
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
        // 'mono' is for monospace text like code
        mono: ['Fira Code', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', '"Liberation Mono"', 'monospace'],
        myfont: ['Slabo 27px', 'serif'],
        // Option 2: Create custom font utility names (e.g., 'heading', 'body')
        // This is useful if you want distinct fonts for specific purposes
        heading: ['Poppins', 'sans-serif'], // For titles and prominent text
        body: ['Inter', 'sans-serif'],     // For general paragraphs and UI text
        code: ['Fira Code', 'monospace'],  // For code blocks
      },
  },
  plugins: [],
};