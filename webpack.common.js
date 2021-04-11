const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let htmlPageNames = ['index', 'about'];
let multipleHtmlPlugins = htmlPageNames.map((name) => {
  return new HtmlWebpackPlugin({
    template: `./src/${name}.html`,
    filename: `${name}.html`,
  });
});

module.exports = {
  entry: {
    index: { import: './src/index.js', dependOn: 'shared' },
    sum: { import: './src/sum.js', dependOn: 'shared' },
    shared: 'lodash',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ].concat(multipleHtmlPlugins),
};
