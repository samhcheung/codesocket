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
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  node: {
    fs: 'empty'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js']
  },
  module: {
    loaders: [    { 
        test: /\.json$/, 
        loader: 'json-loader',
        include: path.join(__dirname, 'node_modules')
      },
      {
        test: /\.jsx?/,
        loaders: ['react-hot', 'babel'],
        include: [
                APP_DIR,
                path.join(__dirname, 'test'),
                path.join(__dirname, 'utils')
            ]
      }
    ]
  }
};