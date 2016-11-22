var webpack = require('webpack');
var HappyPack = require('happypack');
var countCore = require('os').cpus().length;
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpackEntries = require('./webpack.entries.js');

var DEBUG = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
var ASSETS_PATH = path.join(__dirname, 'assets');
var CLIENT_PATH = path.join(__dirname, 'assets/src');

var resultConfig = {
    context: CLIENT_PATH,

    output: {
        path: path.join(CLIENT_PATH, '../public'),
        filename: './js/[name].js',
        library: '[name]',
        libraryTarget: 'this',
    },

    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            modules: path.join(CLIENT_PATH, 'modules'),
            // ui: path.join(CLIENT_PATH, 'ui'),
            // lib: path.join(CLIENT_PATH, 'lib'),
            // theme: path.join(CLIENT_PATH, 'theme'),
            // template: path.join(ASSETS_PATH, 'template'),
        },
    },

    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: 'json',
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style-loader', 'happypack/loader?id=less', {
                    publicPath: '../',
                }),
            },
            {
                test: /\.jsx?$/,
                loader: 'happypack/loader?id=js',
                include: [
                    path.join(CLIENT_PATH),
                ],
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?importLoaders=1', {
                    publicPath: '../',
                }),
            },
            {
                test: /\.png$/,
                loader: 'url-loader?limit=100000&name=images/[name]-[hash].[ext]',
            },
            {
                test: /\.jpg$/,
                loader: 'file-loader?name=images/[name]-[hash].[ext]',
            },
            {
                test: /\.gif$/,
                loader: 'file-loader?name=images/[name]-[hash].[ext]',
            },
            {
                test: /\.ttf(\?[a-z0-9=\.]+)?$/,
                loader: 'file-loader?mimetype=application/font-ttf&name=fonts/[name]-[hash].[ext]',
            },
            {
                test: /\.svg(\?[a-z0-9=\.]+)?$/,
                loader: 'file-loader?mimetype=image/svg+xml&name=fonts/[name]-[hash].[ext]',
            },
            {
                test: /\.woff(\?[a-z0-9=\.]+)?$/,
                loader: 'file-loader?mimetype=application/font-woff&name=fonts/[name]-[hash].[ext]',
            },
            {
                test: /\.woff2(\?[a-z0-9=\.]+)?$/,
                loader: 'file-loader?mimetype=application/font-woff2&name=fonts/[name]-[hash].[ext]',
            },
            {
                test: /\.eot(\?[a-z0-9=\.]+)?$/,
                loader: 'file-loader?mimetype=application/vnd.ms-fontobject&name=fonts/[name]-[hash].[ext]',
            },
        ],
    },

    plugins: [
        new webpack.DefinePlugin({
            __DEBUG__: JSON.stringify(DEBUG),
        }),
        new ExtractTextPlugin('./css/[name].css'),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery',
        }),
        new HappyPack({
            id: 'less',
            loaders: [
                'css-loader!less-loader',
            ],
            threadPool: HappyPack.ThreadPool({ size: DEBUG ? 5 : 10 }),
            // Количество используемых ядер
            // threads: 2,
            cache: true,
        }),
        new HappyPack({
            id: 'js',
            loaders: [
                'babel?presets[]=es2015&presets[]=react&presets[]=stage-0',
            ],
            threadPool: HappyPack.ThreadPool({ size: DEBUG ? 5 : 10 }),
            // Количество используемых ядер
            // threads: 2,
            cache: true,
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
        }),
    ],

    watch: DEBUG,

    devtool: DEBUG ? 'source-map' : false,
};

// Минимизация кода, если production режим
if (!DEBUG) {
    resultConfig.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
        })
    );
}

resultConfig.entry = webpackEntries.entry;

module.exports = resultConfig;
