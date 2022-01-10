const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //installed via npm

require("@babel/core").transformSync("code", {
  plugins: ["@babel/plugin-syntax-jsx"],
});

module.exports = {
  mode: 'development',
  entry: "./src/index.jsx",
  output: {
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
