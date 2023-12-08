const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
	entry: "./src/index.tsx",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	mode: "development",
	module: {
		rules: [
			{
				test: /.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		]
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	/*plugins: [
		new CopyWebpackPlugin({
			patterns: [
				{
					from: "*.html"
				}
			]
		})
	]*/
};