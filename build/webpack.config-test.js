var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin')

var root = path.resolve(__dirname, '../');
var utils = require('./util.js')
var assetsSubDirectory = 'static/';
var cssSourceMap = true;

var webpackConfig = {
    entry : {
        app : [
            "./test/index.js"
        ]
    },
    output: {
        path: root +　'/dist/',
        publicPath: '/',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.vue'],
        fallback: [path.join(__dirname, '../node_modules')],
        alias: {
            'vue': 'vue/dist/vue',
            'src': path.resolve(__dirname, '../src'),
            'assets': path.resolve(__dirname, '../src/assets'),
            'LIB': path.resolve(__dirname, '../src/lib'),
            'MODEL': path.resolve(__dirname, '../src/script/data/model'),
            'PROXY': path.resolve(__dirname, '../src/script/data/proxy'),
            'COMPONENTS': path.resolve(__dirname, '../src/components')
        }
    },
    resolveLoader: {
        fallback: [path.join(__dirname, '../node_modules')]
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: assetsSubDirectory + 'img/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: assetsSubDirectory + 'fonts/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.js$/,
                loader: 'babel',
                include: root,
                exclude: [
                    path.join(__dirname, '../node_modules/')
                ]
            },
            utils.styleLoaders({ sourceMap: cssSourceMap })
        ]
    },
    vue: {
        loaders: utils.cssLoaders(),
        postcss: [
            require('autoprefixer')({
                browsers: ['last 2 versions']
            })
        ]
    },
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'test/index.html',
            inject: true
        }),
    ]
};

module.exports = webpackConfig;
