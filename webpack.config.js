const path = require('path');
const WebpackShellPlugin = require('webpack-shell-plugin');
const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = env => {
    const isDev = env.NODE_ENV === 'development';
    console.log(env.NODE_ENV);
    

    return {
        mode: env.NODE_ENV,
        entry: './server/src/index.ts',
        output: {
            path: path.resolve('server/dist'),
            filename: 'index.js',
        },
        resolve: {
            extensions: ['.ts', '.js']
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: [
                        'ts-loader',
                    ],
                    exclude: '/node_modules/'
                }
            ]
        },
        externals: [nodeExternals()],
        plugins: [
            new WebpackShellPlugin({
                onBuildStart: !isDev ? ['npm run build:ui'] : [],
                onBuildEnd: isDev ? ['npm run watch:server'] : []
            }),
            new CopyPlugin([
                { from: 'ui/build', to: 'public' },
            ]),
        ],
        watch: isDev,
        optimization: {
            minimize: false
        },
        target: 'node',
        node: {
            __dirname: false,
            __filename: false,
        }
    }
};
