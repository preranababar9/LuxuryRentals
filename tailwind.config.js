/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rufina: ['var(--font-rufina)'],
        playfair: ['var(--font-playfair)'],
        raleway: ['var(--font-raleway)'],
       
      },
      colors : {
        primary1 : '#5B656F',
        primary2 : '#8998A6',
        lightbrown : '#AB9C85',
        pink : '#F5E9D6',
        lightblue : '#DFE3E7',
      }
    },
  },
  plugins: [],
};
