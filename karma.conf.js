/* global process: true */


// var  webpackDevConfig =require('./webpack.config.js')
// webpackDevConfig.devtool = 'inline-source-map';
// webpackDevConfig.module.loaders = [
//   {
//     test: /\.(js|jsx)$/, exclude: /(node_modules)/,
//     loader: 'babel-loader'
//   }
// ];
module.exports = function(config) {
    'use strict';
    
    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: './',

        // frameworks: ['jasmine', 'requirejs','browserify'],
        frameworks: ['jasmine'],
        // webpack: webpackDevConfig,
        // webpackMiddleware: {
        //   noInfo: true
        // },

        files: [
            // 'Spec/MainKarma.js', 
        // 'utils/stub_router_context.js',
        // 'node_modules/react/react.js',
            'tests.webpack.js',
            './node_modules/phantomjs-polyfill/bind-polyfill.js'
            // './Spec/*.js',
            // 'node_modules/*',
            // 'node_modules/path/lib/*.js',
        //     {
        // //     pattern : 'Source/*.js',
        // //     included : false
        // // }, {
        //     pattern : 'Spec/*Test.js',
        //     included: false
        // }
        ], 
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
              }
            },
        webpackMiddleware: {
          noInfo: true,
        },
        // list of files to exclude
        exclude: [
        ],
        preprocessors: {
        //     'node_modules/*': ['browserify'],
            // 'Source/**/*.js': ['webpack'],
        //     'utils/*': ['browserify'],
        //     // 'Source/client/app/index.jsx': ['webpack', 'sourcemap'],
        //     'Source/client/app/**/*.js': ['browserify'],
        //     'Source/client/app/*.js': ['browserify'],
        //     'Source/**/*.js': ['browserify'],
        //     'Spec/*Test.js': ['webpack', 'sourcemap']
            // 'utils/*.js': [ 'webpack', 'sourcemap'],

            'tests.webpack.js': [ 'webpack', 'sourcemap']

        },
        // webpack: {
        //       devtool: 'inline-source-map',
        //       module: {
        //         loaders: [
        //           {
        //             exclude: /node_modules/,
        //             loader: 'babel-loader',
        //             test: /\.jsx?$/
        //           }
        //         ],
        //       }
        //     },
        // browserify: {
        //     debug: true,
        //     transform: ['babelify']
        // },
        reporters: ['spec'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        // CLI --auto-watch --no-auto-watch
        // autoWatch: true,

        // Start these browsers, currently available:
        // browsers: ['PhantomJS'],
        browsers: ['Chrome', 'ChromeCanary'],
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
        //     "karma-spec-reporter", 'karma-phantomjs-launcher']       
       // plugins: ["karma-requirejs","karma-jasmine", 'karma-sourcemap-loader', 'karma-browserify', 'karma-webpack','karma-babel-preprocessor', 
       //     "karma-spec-reporter", 'karma-phantomjs-launcher'],        
        
    });
};



// var webpack = require('karma-webpack');
// var webpackConfig = require('./webpack.config');
// webpackConfig.module.loaders = [
//   {
//     test: /\.(js|jsx)$/, exclude: /(bower_components|node_modules)/,
//     loader: 'babel-loader'
//   }
// ];
// webpackConfig.module.postLoaders = [{
//   test: /\.(js|jsx)$/, exclude: /(node_modules|bower_components|tests)/,
//   loader: 'istanbul-instrumenter'
// }];

// module.exports = function (config) {
//   config.set({
//     frameworks: [ 'jasmine' ],
//     files: [
//       './node_modules/phantomjs-polyfill/bind-polyfill.js',
//       'tests/**/*_spec.js'
//     ],
//     plugins: [
//       webpack, 
//       'karma-jasmine',
//       'karma-chrome-launcher',
//       'karma-firefox-launcher',
//       'karma-phantomjs-launcher',
//       'karma-coverage',
//       'karma-spec-reporter'
//     ],
//     browsers: [ 'PhantomJS' ],
//     preprocessors: {
//       'tests/**/*_spec.js': ['webpack'],
//       'src/**/*.js': ['webpack']
//     },
//     reporters: [ 'spec', 'coverage' ],
//     coverageReporter: {
//       dir: 'build/reports/coverage',
//       reporters: [
//         { type: 'html', subdir: 'report-html' },
//         { type: 'lcov', subdir: 'report-lcov' },
//         { type: 'cobertura', subdir: '.', file: 'cobertura.txt' }
//       ]
//     },
//     webpack: webpackConfig,
//     webpackMiddleware: { noInfo: true }
//   });
// };
