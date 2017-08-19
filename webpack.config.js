const {resolve} = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'Colorer.js',
    path: resolve(__dirname, 'build/')
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/
      },
    ],
  }
};
