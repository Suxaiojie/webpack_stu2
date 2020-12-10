const path = require('path');//加载path模块
const HtmlwebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPluhin, CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
    entry: {
        index: './src//index.js',
        // tpl: "./src/tpl.js",
        // cart: "./src/cart.js"
    },
    output: {
        path: path.resolve(__dirname, '../dist'),

        filename: '[name].js'
    },
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        compress: true,
        port: 8080,
        open: true
    },
    module: {
        rules: [//解析规则
            {
                test: /\.css$/,//文件解析匹配规则
                use: [//表示匹配到的文件 需要用那些loader来处理
                    // { loader: "style-loader" },
                    { loader: miniCssExtractPlugin.loader },
                    { loader: "css-loader" }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    // { loader: "style-loader" },
                    { loader: miniCssExtractPlugin.loader },
                    { loader: "css-loader" },
                    { loader: "less-loader" }
                ]
            },
            /*
            {
                test:/\.(jpg|png|gif|webp|jpeg)$/,
                use:[
                    {loader:"file-loader"}
                ]
            }
            */
            {
                test: /\.(jpg|png|gif|webp|jpeg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 102400 //单位byte 图片小于100k的时候转化为base64
                        }
                    }
                ]
            },
            {
                test: /\.js$/,//匹配js文件
                exclude: /(node_modules|brower_components)/,//babel转化的时候排除 node_modules 和 brower_components 文件夹
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["env"]
                        }
                    },
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    { loader: miniCssExtractPlugin.loader },
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
                ]
            },
        ]
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: "测试",
            template: "./src/tpl/index.html",
            inject: "body",
            minify: {
                removeComments: true,
                removeAttributeQuotes: true,
                collapseWhitespace: false
            },
            chunks:['index'],
            filename: "index.html"
        }),

        // new HtmlwebpackPlugin({
        //     title: "测试",
        //     template: "./src/tpl/tpl.html",
        //     inject: "body",
        //     minify: {
        //         removeComments: true,
        //         removeAttributeQuotes: true,
        //         collapseWhitespace: false
        //     },
        //     chunks:['tpl'],
        //     filename: "tpl.html"
        // }),
        // new HtmlwebpackPlugin({
        //     title: "测试",
        //     template: "./src/tpl/index.html",
        //     inject: "body",
        //     minify: {
        //         removeComments: true,
        //         removeAttributeQuotes: true,
        //         collapseWhitespace: false
        //     },
        //     chunks:['cart'],
        //     filename: "cart.html"
        // }),

        new miniCssExtractPlugin({
            filename: "[name].css"
        }),
        new CleanWebpackPlugin(),
    ]

}