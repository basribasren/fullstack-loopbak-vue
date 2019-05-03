const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
	mode: isProduction ? 'production' : 'development',

	entry: {
		index: './src/main.js'
	},

	devtool: isProduction ? 'none' : 'source-map',

	target: 'web',

	output: {
		path: path.resolve(__dirname, '..', 'dist'),
		filename: 'js/[name].[hash].js',
		chunkFilename: 'js/[name].[hash].js',
		publicPath: '/'
	},

	resolve: {
		extensions: ['*', '.js', '.json', '.vue'],
		alias: {
			'@': path.resolve(__dirname, '..', 'src'),
			'vue$': 'vue/dist/vue.runtime.esm.js'
		},
		symlinks: false
	},

	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.html$/,
				use: [{
					loader: 'html-loader',
					options: {
						minimize: true,
						removeComments: false,
						collapseWhitespace: false
					}
				}]
			},
			{
				test: /\.pug$/,
				loader: 'pug-plain-loader'
			},
			{
				test: /\.scss$/,
				use: [
					'vue-style-loader',
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.sass$/,
				use: [
					'vue-style-loader',
					MiniCssExtractPlugin.loader,
					'css-loader', {
						loader: 'sass-loader',
						options: {
							indentedSyntax: true
						}
					}
				]
			},
			{
				test: /\.styl(us)?$/,
				use: [
					'vue-style-loader',
					MiniCssExtractPlugin.loader,
					'css-loader',
					'stylus-loader'
				]
			},
			{
				test: /\.css$/,
				use: [
					'vue-style-loader',
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader'
				]
			},
			{
				test: /\.(ico|png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: 'img/[name].[hash:7].[ext]'
				}
			},
			{
				test: /\.(woff|woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: 'fonts/[name].[hash:7].[ext]'
				}
			},
			{
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: 'media/[name].[hash:7].[ext]'
				}
			},
			{
				test: /\.svg$/,
				use: [{
					loader: 'svg-url-loader',
					options: {
						// Inline files smaller than 10 kB
						limit: 10 * 1024,
						noquotes: true
					}
				}]
			},
			{
				test: /\.txt$/,
				use: ['raw-loader']
			}
		]
	},
	performance: {
		maxEntrypointSize: 300000,
		hints: isProduction ? 'warning' : false
	},
	stats: { children: false },
	plugins: [
		new CleanWebpackPlugin(),
		new webpack.DefinePlugin({
			'process.env': JSON.stringify(process.env)
		}),
		new VueLoaderPlugin(),
		new CopyWebpackPlugin([
			{
				from: 'public/manifest.json',
				to: 'manifest.json'
			},
			{
				from: 'public/favicon.ico',
				to: 'favicon.ico'
			},
			{
				from: 'public/logo.png',
				to: 'logo.png'
			},
			{
				from: 'public/robots.txt',
				to: 'robots.txt'
			},
			{
				from: 'public/img/',
				to: 'img/',
				toType: 'dir'
			}
		]),
		new HtmlWebpackPlugin({
			template: './public/index.html',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeAttributeQuotes: true
			},
			filename: 'index.html',
			inject: true
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[hash].css',
			chunkFilename: 'css/[id].[hash].css'
		}),
	]
}
