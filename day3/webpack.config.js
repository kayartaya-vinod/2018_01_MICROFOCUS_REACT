let path = require('path');
let webpack = require('webpack');

module.exports = {
	entry: {
		bundle: './src/main.js'
	},
	output: {
		path: path.join(__dirname, 'out'),
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				test: /.\js$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},
	stats: {
		colors: true
	},
	plugins: [
		new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
	]
};