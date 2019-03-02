const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
       // contentBase: '/dist',
        openPage: 'login.html',
        overlay: true,
        compress: true,
        host: "192.168.0.101",
        // disableHostCheck: true,
        hot: true
    },
    output: {
        filename: 'js/[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.(sc|le|c)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: 'images/[name].[ext]',
                    }
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: 'fonts/[name].[ext]',
                    }
                }
            }
        ],
    },
    plugins: [
        //new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            "SERVER_ENV": JSON.stringify("development")
        })
    ],

});