const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'main.bundle.js',
    },
    plugins: [
        new HtmlPlugin({
            title: 'Treejs app',
            template: './src/index.html'
        }),
        new CopyPlugin([
            {
                from: 'src/*.css',
                to: 'styles',
                flatten: true,
            }
        ])
    ],
    devServer: {
        contentBase: './dist',
    }
};
