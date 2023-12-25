const path = require("path");

module.exports = {
  mode: "production",
  entry: "./main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "./public"),
    },
    compress: true,
    port: 8080,
  },
};
