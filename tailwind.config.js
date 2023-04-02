/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue-primary': '#212B33',
        'dark-blue-secondary': '#25333F',
        'primary': '#00aeff',
        'background-primary': '#E7F1F3',
        'background-secondary': '#CBDDE0',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      screens: {
        'mobile': '320px',
        // => @media (min-width: 320px) { ... }
        
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}