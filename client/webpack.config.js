const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./setting/webpack.base.config.js')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

module.exports = merge(baseWebpackConfig, {
	devServer: {
		proxy: {
			'/api': 'http://localhost:3000'
			// proxy URLs to backend development server
		},
		historyApiFallback: true,
		hot: true,
		open: true,
		host: 'localhost',
		port: 8080,
		compress: true,
	},
	
	plugins: [
		// new webpack.ProvidePlugin({
		//     $: 'jquery',
		//     jquery: 'jquery',
		//     jQuery: 'jquery',
		//     'window.jQuery': 'jquery'
		// }),
		new FriendlyErrorsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
	],
	//advance setting
	profile: false, // boolean
	// capture timing information
	bail: false, //boolean
	// fail out on the first error instead of tolerating it.
	cache: false, // boolean
	// disable/enable caching
	watch: false, // boolean
	// enables watching
	recordsPath: path.resolve(__dirname, 'build/records.json'),
	recordsInputPath: path.resolve(__dirname, 'build/records.json'),
	recordsOutputPath: path.resolve(__dirname, 'build/records.json')
})
