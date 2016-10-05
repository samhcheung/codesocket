var path = require('path');
var webpack = require('webpack');
var APP_DIR = path.resolve(__dirname, 'src/client/app');
var SERVER_DIR = path.resolve(__dirname, 'server');

console.log('=============', path.join(__dirname, 'dist'))
module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client', 'webpack/hot/dev-server',
    APP_DIR + '/index.jsx'
  ],
  output: {
    path: path.resolve(__dirname, 'src/client/dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
    {
      test: /\.jsx?/,
      loaders: ['react-hot', 'babel'],
      include: APP_DIR
    }]
  }
};