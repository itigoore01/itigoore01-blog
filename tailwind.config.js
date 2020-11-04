module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Montserrat"',
          '"游ゴシック"',
          'YuGothic',
          '"ヒラギノ角ゴ ProN W3"',
          '"Hiragino Kaku Gothic ProN"',
          '"メイリオ"',
          'Meiryo',
          'sans-serif',
        ],
        display: ['Montserrat', 'sans-serif'],
      },
    },
    typography: (theme) => ({
      default: {
        css: {
          color: theme('colors.white'),
          maxWidth: null,
          a: {
            color: theme('colors.blue.500'),
            textDecoration: 'none',
            '&:hover': {
              color: theme('colors.blue.400'),
            },
          },
          strong: {
            color: theme('colors.white'),
          },
          hr: {
            borderColor: theme('colors.gray.800'),
          },
          blockquote: {
            color: theme('colors.gray.300'),
            borderLeftColor: theme('colors.blue.700'),
          },
          h1: {
            color: theme('colors.white'),
          },
          h2: {
            color: theme('colors.white'),
          },
          h3: {
            color: theme('colors.white'),
          },
          h4: {
            color: theme('colors.white'),
          },
          code: {
            color: theme('colors.gray.300'),
          },
          thead: {
            color: theme('colors.white'),
            borderBottomColor: theme('colors.gray.700'),
          },
          'tbody tr': {
            borderBottomColor: theme('colors.gray.800'),
          },
        },
      },
    }),
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};
