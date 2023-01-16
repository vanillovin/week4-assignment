module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      tablet: '576px',
      // => @media (min-width: 576px) { ... }

      laptop: '992px',
      // => @media (min-width: 992px) { ... }

      desktop: '1200px',
      // => @media (min-width: 1200px) { ... }
    },

    extend: {
      fontSize: {
        '2xs': '.5rem',
      },
      colors: {
        diary: {
          red: '#F38181',
          pin: '#FF6FB5',
          ora: '#F2A379',
          yel: '#FCE38A',
          gre: '#36AE7C',
          min: '#95E1D3',
          blu: '#006E7F',
          nav: '#143F6B',
          pur: '#A85CF9',
          gra: '#EEEEEE',
        },
      },
    },
  },
  plugins: [],
};
