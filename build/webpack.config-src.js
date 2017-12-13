var assetsSubDirectory = 'static/';
var path = require('path');
var root = path.resolve(__dirname, '../');

module.exports = {
    devtool: 'source-map',

    entry:  root + "/src/index_global.js",
    output: {
        path: root + "/dist/",
        libraryTarget: 'umd',
        filename: "header.js"
    },

    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.json$/,
                loader: "json"
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
                test: /\.js$/,
                loader: 'babel',
                include: root,
                exclude: [
                    path.join(root, '../node_modules/')
                ]
            },
            {
                test: /\.css$/,
                loader: 'style!css'//添加对样式表的处理
            }
        ]
    },

    watch: true
}
