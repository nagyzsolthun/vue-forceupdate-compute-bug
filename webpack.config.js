const webpack = require('webpack');
const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");

const output = {
	path: path.resolve(__dirname, 'build')
	,filename: 'app.js'
}

const vueLoaderRule = {test: /\.vue$/, loader: 'vue-loader'}

const htmlPlugin = new HtmlPlugin({title: "vue-forceupdate-computed", filename: "build.html"});

// const productionDefinePlugin = new webpack.DefinePlugin({'process.env': {NODE_ENV: '"production"'}});

module.exports = {
	entry: './app.js'
	,output: output
	,module: {rules: [ vueLoaderRule ]}
	,plugins: [ htmlPlugin ]
}
