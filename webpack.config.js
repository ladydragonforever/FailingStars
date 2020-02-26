const path = require('path');

module.exports = {
    context: __dirname,
    entry: './frontend/failing_stars.jsx',
    output: {
        path: path.resolve(__dirname),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '*']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules)/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    devtool: 'source-map'
};