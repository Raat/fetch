const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'scripts.js',
		path: path.resolve(__dirname, './public/js/')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader'
				}
			},

			{
				test: /\.css$/,
				use: [
					{loader: 'style-loader'},
					{loader: 'css-loader'}
				]
			}

		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"production"',
			PRODUCT_LIST_URL: JSON.stringify('http://localhost:8003/products'),
			CURRENCY: JSON.stringify('€'),
			NAMESPACE: JSON.stringify('APP')
		}),
		new webpack.optimize.UglifyJsPlugin({
			mangle: true,
			compress: {
				warnings: false, // Suppress uglification warnings
				pure_getters: true, // eslint-disable-line camelcase
				unsafe: true, // eslint-disable-line camelcase
				unsafe_comps: true, // eslint-disable-line camelcase
				screw_ie8: true // eslint-disable-line camelcase
			},
			output: {
				comments: false
			},
			exclude: [/\.min\.js$/gi] // Skip pre-minified libs
		})
	]
};
