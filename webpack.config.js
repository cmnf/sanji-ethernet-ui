'use strict';

var path = require('path');
var webpack = require('webpack');
var NODE_ENV = process.env.NODE_ENV;
var bowerRoot = path.join(__dirname, 'bower_components');
var nodeRoot = path.join(__dirname, 'node_modules');
var appRoot = path.join(__dirname, 'app');
var config = {
  context: appRoot,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'sanji-ethernet.js'
  },
  resolve: {
    root: [bowerRoot, nodeRoot],
    // npm-linked packages can locate missing dependencies in app's node_modules
    fallback: nodeRoot,
    alias: {
      'angular-sanji-window': bowerRoot + '/angular-sanji-window/dist/sanji-window.js',
      'angular-sanji-window.css': bowerRoot + '/angular-sanji-window/dist/sanji-window.css',
      'bootstrap': bowerRoot + '/bootstrap/dist/css/bootstrap.min.css'
    },
    extensions: ['', '.js', '.json', 'html', 'scss', 'css']
  },
  resolveLoader: {
    root: nodeRoot
  },
  module: {
    preLoaders: [
      {test: /\.js$/, loader: "eslint", exclude: /(node_modules|bower_components)/}
    ],
    loaders: [
      {test: /\.js$/, loader: 'ng-annotate!babel', exclude: /(node_modules|bower_components)/},
      {test: /\.html$/, loader: 'ng-cache?prefix=[dir]/[dir]', exclude: /(node_modules|bower_components)/}
    ],
    noParse: []
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      __TEST__: 'test' === NODE_ENV,
      __DEV__: 'development' === NODE_ENV,
      __RELEASE__: 'production' === NODE_ENV
    }),
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
    ),
    new webpack.NoErrorsPlugin()
  ]
};

module.exports = config;
