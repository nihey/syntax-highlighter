var webpack = require('webpack'),
    path = require('path');

module.exports = {
  entry: './js/main.js',
  devtool: ['source-map'],

  resolve: {
    root: path.join(__dirname, 'js'),
    extensions: ['', '.js'],
  },

  output: {
    path: './dist/',
    filename: 'syntax-highlighter.js',
  },
};
