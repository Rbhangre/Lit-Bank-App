const path = require('path');

module.exports = {
    mode: 'development',
    entry: './app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
        static: './',
        port: 3000,
        open: true,
        hot: true,
        watchFiles: ['src/**/*'],
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.scss$/,
                use: [
                  'style-loader', // Injects styles into DOM
                  'css-loader',   // Turns CSS into commonjs
                  'sass-loader',  // Compiles Sass to CSS
                ],
            }
        ],
    },
};