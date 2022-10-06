const path = require("path");

module.exports = {
  entry: [
    path.join(__dirname, "src", "app.js"),
    // path.join(__dirname, "scripts", "feedPost.js"),
  ],

  output: {
    path: path.join(__dirname, "scripts"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        // This is a regular expression and here we are trying to say that webpack has to run babel-loader on javascript files
        exclude: /node_modules/,
        // This is also a regular expression and we are trying to say that it should exclude all the files in the node_modules folder
      },
      // As babel does not run automatically so we need to mention some presets in .babelrc config file
      {
        use: ["style-loader", "css-loader", "sass-loader"],

        // The sass-loader behind the scenes is going to use node-sass
        test: /\.s?css$/,

        // If we want to specify multiple loaders then we use 'use' key instead of 'loader' and provide the array of loaders
      },
    ],
  },
  devtool: "eval-cheap-module-source-map",
  // This are called as source maps
  // This makes debugging easier by spotting the error in the source file itself instead of spotting itself in bundle.js
  // This is used in development phase

  devServer: {
    static: path.join(__dirname, "scripts"),
    // Here we need to give the absolute path of the folder where the webpack devserver should search for the files
  },
};
