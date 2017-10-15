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
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			PRODUCT_LIST_URL: JSON.stringify('http://localhost:8003/products')
		})]
};
