const path = require('path');

module.exports = {
    dev: {
        publicPath: '/',
        assertPublicPath: './',
    },
    deploy: {
        publicPath: './',
        assertPublicPath: '../',
    },
    px2remLoader: {
        loader: 'px2rem-loader',
        options: {
            remUnit: 192,
            remPrecision: 3,
        }
    },
    px2remInStyleAttrInHtml: {
        loader: path.resolve(__dirname, '../loaders/styleAttrInHtml.js'),
        options: {
            remUnit: 192,
            remPrecision: 3,
        }
    }
}