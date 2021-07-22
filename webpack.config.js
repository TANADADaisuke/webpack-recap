const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/client/index.js',
    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
        port: 3000,
        injectClient: false,
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        libraryTarget: 'var',
        library: 'Client'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: "/\.js$/",
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: './src/client/view/index.html',
            filename: './index.html'
        })
    ]
};
