var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './');
var APP_DIR = path.resolve(__dirname, './src/client');

const config = {
   entry: {
     main: APP_DIR + '/index.js'
   },
   output: {
     filename: 'build/[name].bundle.js',
     path: BUILD_DIR,
     chunkFilename: 'build/[name].bundle.js',
   },
   module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    presets: [
                        "@babel/env",
                        "@babel/react"
                    ],
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.md$/,
                use: 'raw-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.REACT_APP_PERSONAL_WEBSITE_API_SERVICE_HOST': JSON.stringify(process.env.PERSONAL_WEBSITE_API_SERVICE_HOST),
            'process.env.REACT_APP_PERSONAL_WEBSITE_API_SERVICE_PORT': JSON.stringify(process.env.PERSONAL_WEBSITE_API_SERVICE_PORT)
        })
    ]
  };
module.exports = config;