const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require("webpack-merge");
const loadPresets = require("./build-utils/presets/loadPresets.js")
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);

// default arguments provided for the destructured 
module.exports = ({mode, presets} = { mode: "production", presets: [] }) => {
    // webpack merge is just like Object.assign! composing our config of several sources.
    return webpackMerge(
		{
			mode,
			plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()]
		},
		modeConfig(mode),
		loadPresets({mode, presets}) // passes in those env. files to the other configuration
	)
}