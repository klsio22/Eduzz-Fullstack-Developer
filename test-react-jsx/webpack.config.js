// eslint-disable-next-line no-undef
const path = require("path");
// eslint-disable-next-line no-undef
const HtmlWebpackPlugin = require("html-webpack-plugin"); //installed via npm
// eslint-disable-next-line no-undef
require("@babel/core").transformSync("code", {
  plugins: ["@babel/plugin-syntax-jsx"],
});

// eslint-disable-next-line no-undef
module.exports = {
  devtool:"source-map",
  // eslint-disable-next-line no-undef
  mode: "development",
  entry: "./src/index.jsx",
  output: {
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, "./dist"),
    filename: "bundler.js",
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
  ],

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },

  /*  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3000,
  }, */
};
