const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const { presets } = require('./babel.config');

module.exports = {
    // подключите плагины к PostCSS
    plugins: [
      autoprefixer,
      cssnano({ preset: 'default' })
    ]
  }; 