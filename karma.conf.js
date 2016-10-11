/* global process: true */


var  webpackDevConfig =require('./webpack.config.js')
webpackDevConfig.devtool = 'inline-source-map';
webpackDevConfig.module = {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.jsx?$/
      }
    ],
}
var nodeExternals = require('webpack-node-externals');


module.exports = function(config) {
    'use strict';
    
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: './',

        frameworks: ['browserify', 'mocha'],
        webpack: {
          devtool: 'inline-source-map',
          module: {
            loaders: [
              {
                exclude: /node_modules/,
                loader: 'babel-loader',
                test: /\.jsx?$/
              }
            ],
          },
          target: 'node',
          externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
        },
        webpackMiddleware: {
          noInfo: true
        },
        files: [
        // 'node_modules/react/react.js',
            './node_modules/requirejs/**/*.js',
            './node_modules/require/**/*.js',
            './node_modules/chai/chai.js',
            // './node_modules/supertest/**/*.js',
            './node_modules/phantomjs-polyfill/bind-polyfill.js',
            'tests.webpack.js',
            // 'node_modules/*',
            'test/MainKarma.js', 
            // 'node_modules/path/lib/*.js',
            {
                pattern : 'src/client/app/**/*.js',
                included : false
            }, {
                pattern : 'test/*Test.js',
                included: false
            }], 

        // list of files to exclude
        exclude: [
        ],
        preprocessors: {
            './node_modules/require/**/*.js': ['browserify'],
            './node_modules/chai/**/*.js': ['browserify'],
            './node_modules/requirejs/**/*.js': ['browserify'],
            './node_modules/supertest/**/*.js': ['browserify'],
            'utils/*': ['browserify'],
        //     // 'Source/client/app/index.jsx': ['webpack', 'sourcemap'],
        //     'Source/client/app/**/*.js': ['browserify'],
        //     'Source/client/app/*.js': ['browserify'],
        //     'Source/**/*.js': ['browserify'],
        //     'Spec/*Test.js': ['webpack', 'sourcemap']
            'tests.webpack.js': [ 'browserify', 'webpack', 'sourcemap'  ]

        },
        browserify: {
            debug: true,
            transform: ['babelify']
        },
        reporters: ['spec'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        // CLI --auto-watch --no-auto-watch
        autoWatch: true,

        // Start these browsers, currently available:
        browsers: ['PhantomJS'],
        // browsers: ['Chrome', 'ChromeCanary'],
        customLaunchers: {
              Chrome_travis_ci: {
                  base: 'Chrome',
                  flags: ['--no-sandbox']
              }
          },
        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 20000,

        // Set to false to watch files for changes
        singleRun: true,

        // plugins: ["karma-requirejs","karma-jasmine", 'karma-browserify','karma-sourcemap-loader', 'karma-webpack','karma-babel-preprocessor',  'karma-chrome-launcher',
        //     "karma-spec-reporter", 'karma-phantomjs-launcher'],        
       // plugins: ["karma-requirejs","karma-jasmine", 'karma-sourcemap-loader', 'karma-browserify', 'karma-webpack','karma-babel-preprocessor', 
       //     "karma-spec-reporter", 'karma-phantomjs-launcher'],        
        
    });
};
