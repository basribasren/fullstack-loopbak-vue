const webpack = require('webpack')
const merge = require('webpack-merge')
const CompressionPlugin = require('compression-webpack-plugin')
// const { InjectManifest } = require('workbox-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const terserOptions = require('./setting/terserOptions')

const baseWebpackConfig = require('./setting/webpack.base.config.js')

module.exports = merge(baseWebpackConfig, {
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin(terserOptions())
		],
		nodeEnv: 'production',
		sideEffects: true,
		concatenateModules: false,
		runtimeChunk: true,
		noEmitOnErrors: true,
		namedChunks: true,    
		moduleIds: 'hashed',
		chunkIds: 'named',
		mergeDuplicateChunks: false,
		splitChunks: {
			chunks: 'async',
			minSize: 30000,
			maxSize: 0,
			minChunks: 1,
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
			automaticNameDelimiter: '~',
			name: true,
			cacheGroups: {
				vendors: {
					name: 'vendor/vendors',
					test: /[\\/]node_modules[\\/]/,
					priority: -10,
					chunks: 'initial'
				},
				common: {
					name: 'js/common',
					minChunks: 2,
					priority: -20,
					chunks: 'initial',
					reuseExistingChunk: true
				}
			}
		}
	},

	plugins: [
		// new InjectManifest({
		//   swSrc: 'src/sw.js',
		//   swDest: 'sw.js',
		//   importWorkboxFrom: 'local'
		// }),
		new CompressionPlugin({
			cache: true,
			filename: '[path].gz[query]',
			algorithm: 'gzip',
			test: /\.js$|\.css$|\.html$/,
			threshold: 10240,
			minRatio: 0.8
		}),
		new webpack.optimize.AggressiveMergingPlugin({ minSizeReduce: 1.5 }),
		new OptimizeCSSPlugin({
			cssProcessorOptions: {
				safe: true
			}
		}),
	],
	
	// Don't attempt to continue if there are any errors.
	bail: true
})
