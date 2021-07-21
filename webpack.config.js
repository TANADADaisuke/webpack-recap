const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/client/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        libraryTarget: 'var',
        library: 'Client'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: './src/client/view/index.html',
            filename: './index.html'
        })
    ]
}
