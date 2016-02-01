var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');


module.exports = {
	// entry: [
	// 	'webpack-dev-server/client',
	// 	'webpack/hot/dev-server',
	// 	'./app/main'
	// ],
	entry: './app/main',
	output: {
		path: './public',
		filename: 'build.js'
	},
	resolve: {
        extensions: ['', '.js', '.jsx']
    },
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				},
				exclude: /\/node_modules/
			},
			{
				test: /\.scss$/,
				// loader: ExtractTextPlugin.extract('style-loader', 'css-loader','sass-loader')
				loader: 'style-loader!css-loader!sass-loader'
			},
			{
		    	test: /\.(png|jpg|svg|ttf|woff|woff2|eot)$/,
		    	loader: 'file?name=[path][name].[ext]',
		    	exclude: /\/node_modules/
		    },
		]
	},
	plugins: [
		new ExtractTextPlugin('styles.css'),
		new BrowserSyncPlugin({
			host: 'localhost',
			port: 3000,
			server: { baseDir: ['./'] },
			// tunnel: "tenn"
	    })
	],
	// devServer:{
	// 	contentBase: './',
	// }
};
