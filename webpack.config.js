const path = require("path");

module.exports = {
  output: {
    path: path.resolve(__dirname, "dist/bundle"),
    filename: "lambda.js",
    libraryTarget: "commonjs2",
  },
  entry: [path.resolve(__dirname, "dist/lambda/index.js")],
  target: "node",
};
