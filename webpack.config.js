var webpack = require('webpack');
var path = require('path');
  console.log(__dirname,'dirname')
var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: ['react-hot-loader/patch',
  'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
  'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors,
  APP_DIR + '/index.jsx'],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel',
        // query:
        //   {
        //     presets:['react']
        //   }
      },

      // { 
      //   test: /\.jsx?$/, 
      //   loaders: ['react-hot'], 
      //   include: path.join(__dirname, 'src') 
      // }

    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = config;