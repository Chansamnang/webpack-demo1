const path = require('path')
const hwp = require('html-webpack-plugin')
const cwp = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js',
    },
   // devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins:[
        new cwp(),
        new hwp({
            title: 'output management'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    module: {
        rules: [
            {test:/\.css$/,use: ['style-loader','css-loader']}
        ]
    },
    optimization: {
        usedExports:true
    }
}
