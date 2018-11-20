//“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录
//本例：__dirname = E:/src-y-paas-new/webpack-test
console.log(__dirname);
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const isProd = false;

module.exports = {
    mode: isProd ? 'production' : 'development',
    devtool: 'source-map',//生成源码,开发阶段使用，这为我们提供了一种对应编译文件和源文件的方法，使得编译后的代码可读性更高，也更容易调试。
    //devtool: 'source-map',//生产环境用这个
    entry: __dirname + "/app/main.js", //已多次提及的唯一入口文件
    output: {
        path: __dirname + "/build",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    devServer: {
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        hot: true,
        compress: true,
        stats: {
            colors: true,
            children: false,
            chunks: false,
            assetsSort: 'size'
        }
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: 'babel-loader',
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[name]_[local]_[hash:base64]',
                            sourceMap: true,
                            minimize: true
                        }
                    },
                    {
                        loader: "postcss-loader"
                    }
                ]
            },
            ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: __dirname + '/index.tmpl.html'
        }),
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new webpack.HotModuleReplacementPlugin()//热加载插件
    ],
    performance: {
        hints:false
    }
};
