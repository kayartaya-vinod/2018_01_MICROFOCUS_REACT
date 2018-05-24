let path = require('path');
let webpack = require('webpack');

module.exports = {
	entry: {
		bundle: './src/main.js'
	},
	output: {
		path: path.join(__dirname, 'dist'),
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
			},
            {
                test: /\.css$/,
                loader: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader"
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: "file-loader"
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