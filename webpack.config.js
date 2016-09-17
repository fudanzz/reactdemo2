var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname + '/app');

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        inline: true,
        contentBase: __dirname,
        port: 3333
    },
    module: {
        loaders: [{
            test: /\.jsx?/,
            includes: APP_DIR,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }

}

module.exports = config;
