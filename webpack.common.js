const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: {
    index: { import: "./src/index.js", dependOn: "shared" },
    sum: { import: "./src/sum.js", dependOn: "shared"},
    shared: "lodash"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
};
