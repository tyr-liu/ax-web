/**
 * Created by rain on 2016/3/1.
 */
const path = require('path');

const PATHS = {
    app: path.join(__dirname, 'js/src'),
    build: path.join(__dirname, 'js/build')
};

module.exports = {
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        stats: 'errors-only',
        host: '0.0.0.0',
        port: 3000,
        publicPath: '/js/build/'
    },
    entry: PATHS.app,
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },
    resolve: {
        root: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')],
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loaders: ['style', 'css', 'postcss'],
            include: PATHS.app
        }, {
            test: /\.jsx?$/,
            loader: 'babel',
            include: PATHS.app
        }, {
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
            loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
        }]
    }
};
