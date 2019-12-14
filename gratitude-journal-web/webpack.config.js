const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = ({ mode }) => ({
  mode,
  entry: path.join(__dirname, "src", "app.ts"),
  output: {
    path: path.join(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".js", ".css", ".scss"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "awesome-typescript-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  devtool: mode === "development" ? "source-map" : "none",
  devServer: {
    host: "0.0.0.0",
    port: process.env.PORT || 3000,
    hot: true
  }
});
