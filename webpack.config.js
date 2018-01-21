const { join } = require('path');
process.env.NODE_ENV = process.env.NODE_ENV || 'production';
const reactScriptsConfig = require('react-scripts/config/webpack.config.prod');

module.exports = Object.assign({}, reactScriptsConfig, {
  output: Object.assign({}, reactScriptsConfig.output, {
     path: join(__dirname, '/public')
  })
});
