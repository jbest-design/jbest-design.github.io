var webpack = require('webpack');
var path    = require('path');

var BUILD_DIR   = path.resolve(__dirname, 'assets/js/app');
var APP_DIR     = path.resolve(__dirname, 'app');

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    presets: ['react'] 
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            },
            {
                test: /\.map$/,
                loader: "ignore-loader"
            }
        ]
    }
};

module.exports = config;
