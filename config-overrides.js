const path = require('path');
const { addWebpackAlias } = require('customize-cra');

module.exports = function override(config, env) {
  config = addWebpackAlias({
    ['@utils']: path.resolve(__dirname, 'src', 'utils'),
    ['@icons']: path.resolve(__dirname, 'src', 'assets', 'icons'),
    ['@config']: path.resolve(__dirname, 'src', 'config'),
    ['@shared']: path.resolve(__dirname, 'src', 'shared'),
    ['@features']: path.resolve(__dirname, 'src', 'features'),
  })(config);

  return config;
};
