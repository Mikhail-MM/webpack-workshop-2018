const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  return webpackMerge(
    {
      mode,
      output: {
        filename: "bundle.js"
      },
      plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
      module: {
        rules: [
          {
            test: /\.jpe?g/, // We would either want to Base-64 inline this, or have it in dist.
            use: "url-loader"
          }
        ]
      }
    },
    modeConfig(mode)
  );
};
