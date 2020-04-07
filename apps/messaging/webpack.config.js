/**
 * [sources](https://linguinecode.com/post/how-to-setup-webpack-dev-server-react-babel)
 */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Host
const host = process.env.HOST || "localhost";

module.exports = {
  // ... mode, entry, output configurations
  // Environment mode
  mode: "development",

  // Entry point of app
  entry: path.join(__dirname, "src/index.jsx"),

  output: {
    // Development filename output
    filename: "static/js/bundle.js",
  },
  // ... dev server configurations
  devServer: {
    // Serve index.html as the base
    contentBase: path.join(__dirname, "public"),

    // Enable compression
    compress: true,

    // Enable hot reloading
    hot: true,

    host,

    port: 3000,

    // Public path is root of content base
    publicPath: "/",
  },

  plugins: [
    // Re-generate index.html with injected script tag.
    // The injected script tag contains a src value of the
    // filename output defined above.
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(__dirname, "public/index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        include: path.join(__dirname, "src"),
        loader: "babel-loader",
      },
    ],
  },
};
