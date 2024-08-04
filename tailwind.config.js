/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        italianno: ['Italianno-Regular', 'cursive'],
      },
      spacing: {
        '2.5': '10px',
      },
      boxShadow: {
        'custom': '0 4px 6px rgba(0, 0, 250, 0.1)',
      },
      
    },
  },
  plugins: [],
};

