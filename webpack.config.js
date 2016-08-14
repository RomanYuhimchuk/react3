var HTMLWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	//html copy-compiler
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});
module.exports={
	//entry point
	entry: __dirname + '/app/index.js',
	//what to do with it
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
		        test: /\.scss$/,
		        loaders: ["style", "css?sourceMap", "sass?sourceMap"]
		    },
		]
	},
	// sassLoader: {
	//     filename: 'style.css',
	// 	path: __dirname + '/build'
	// },
	//where to compile
	output: {
		filename: 'transformed.js',
		path: __dirname + '/build'
	},
	//plugins export
	plugins: [HTMLWebpackPluginConfig]
};
