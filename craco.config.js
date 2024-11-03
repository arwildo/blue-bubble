const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  style: {
    postcss: {
      loaderOptions: {
        postcssOptions: {
          plugins: [
            tailwindcss('./tailwind.config.js'),
            autoprefixer
          ],
        },
      },
    },
  },
};
