const path = require('path');
const fs = require('fs');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MyPlugin = require('../plugins/myPlugin')

module.exports = {
    entry: {
        app: './src/main.js',
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: "../"
    },
    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: ['img:src', 'img:data-src', 'audio:src'],
                        // minimize: true
                        publicPath: './'
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
            Assets: path.resolve(__dirname, '../src/assets/'),
        },
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, '../')
        }),
        ...getNewHtmlWebpackPlugin(),
        new MyPlugin({
            paths: ["./configuration/config.js"]
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        })
    ]
};

function getEntries(){
    const entrys = {};
    getEntryName().forEach(page => {
        entrys[page] = `./src/js/${page}.js`
    });
    console.log(entrys);
    return entrys;
}

function getNewHtmlWebpackPlugin(){
    const newHtmlWebpackPlugins = [];
    getEntryName().forEach(page => {
        newHtmlWebpackPlugins.push(new HtmlWebpackPlugin({
            filename: `pages/${page}.html`,
            template: `src/pages/${page}.html`,
            chunks: [`${page}`, 'vendor', 'common', 'runtime'],
        }))
    });
    return newHtmlWebpackPlugins;
}

function getEntryName(){
    const pages = [];
    fs.readdirSync('./src/pages').forEach(item => {
        pages.push(item.slice(0, -5));
    });
    return pages;
}
