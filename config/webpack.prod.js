const merge = require('webpack-merge');
const webpack = require('webpack');

const common = require('./webpack.common');
const deploy = require('./deploy');

module.exports = merge(deploy, common, {
    mode: 'production',
    plugins: [
        new webpack.DefinePlugin({
            "SERVER_ENV": JSON.stringify("production")
        }),
    ]
});