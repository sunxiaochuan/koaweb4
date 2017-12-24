//这个是上线版本使用的 js 配置文件
//引入 path 模块
const path = require('path');
//引入 webpack 模块
const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');
// 引入 css 编译插件
const ExtractTextPlugin = require("extract-text-webpack-plugin");
//引入 css 压缩 模块
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
//引入 html 编译 模块
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //入口资源配置  需要编译的文件
    entry: {
        index: [
            path.join(__dirname, '../src/public/scripts/index.es'),
            path.join(__dirname, '../src/public/scripts/indexadd.js')
        ],
        tags: [
            path.join(__dirname, '../src/public/scripts/tags.es'),
            path.join(__dirname, '../src/public/scripts/star.es'),
        ]
    },
    //资源输出配置    资源输出的路径
    output: {
        //资源输出时的名称 以 MD5 的形式
        filename: 'public/scripts/[name]-[hash:5].js',
        //将资源输出到指定的服务器路径上一份，使得在其他地方也可以直接进行资源的访问  这个服务器这里使用的本机来模拟的 下面需要输入的 IP 地址指的就是本机的 IP 加 3000 端口 这个端口号是因为 node 的服务在这个上面
        publicPath:'http://192.168.1.104:3000/',
        //资源输出时的路径
        path: path.join(__dirname, '../build/')
    },
    module: {
        rules: [{
            //这个 .es 正则实际上对应的就是 index.es 和 tags.es 文件
            test: /\.es$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'stage-0']
                }
            }
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        }]
    },
    //配置插件
    plugins: [
        //用这个插件定义 进程 的名称，设置 webpack.config.js 中的 process.env.NODE_ENV  方法对应的值
        new webpack.DefinePlugin({
            'process': {
                'NODE_ENV': 'prod'
            }
        }),
        new LiveReloadPlugin({ appendScriptTag: true }),
        new ExtractTextPlugin("public/css/[name]-[hash:5].css"),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: false,
            }
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: { removeAll: true } },
            canPrint: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'public/scripts/common/[name]-[hash:5].min.js',
        }),
        new HtmlWebpackPlugin({
            filename: './views/layout.html',
            template: path.join(__dirname, '../src/widget/layout.html'),
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: './views/index.html',
            //这里是用 js 文件拼接来生成的 html 代码 主要是引用了 layout.html 模板和 css 、js 的资源
            template: path.join(__dirname, '../src/views/index.js'),
            inject: false,
            //定义文件分发时的名称
            chunks: ['vendor', 'index', 'tags']
        }),
        new HtmlWebpackPlugin({
            filename: './widget/index.html',
            //这里引用的是 html 中组件标签
            template: path.join(__dirname, '../src/widget/index.html'),
            inject: false
        }),
        //配置插件  plugins 里面新增代码
        new HtmlWebpackPlugin({
            filename: './views/star.html',
            //这里是用 js 文件拼接来生成的 html 代码 主要是引用了 layout.html 模板和 css 、js 的资源
            template: path.join(__dirname, '../src/views/star.js'),
            inject: false,
            //定义文件分发时的名称
            chunks: ['vendor', 'index', 'tags']
        }),
        new HtmlWebpackPlugin({
            filename: './widget/star.html',
            //这里引用的是 html 中组件标签
            template: path.join(__dirname, '../src/widget/star.html'),
            inject: false
        }),
    ]
};