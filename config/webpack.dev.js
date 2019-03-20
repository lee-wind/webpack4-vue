const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');
const Util = require('./util')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
       // contentBase: 'dist/index.html',
        openPage: 'dist/',
        overlay: true,
        compress: true,
        // disableHostCheck: true,
        hot: true,
        publicPath: '/dist/'
    },
    output: {
        filename: 'js/[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                // exclude: /node_modules/,
                // exclude: [
                //     /node_modules/,
                //     /src\/assets\/js\/flexible.js/
                // ],
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.(sc|le|c)ss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    Util.px2remLoader,
                    'postcss-loader',
                    'sass-loader',
                ]
            }
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            "SERVER_ENV": JSON.stringify("development")
        })
    ],

});