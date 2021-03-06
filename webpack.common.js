const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: [path.resolve(__dirname, "src/index.js"), path.resolve(__dirname, "src/index.scss")],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            attrs:false
                        }
                    }
                ]
            }, {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader", {
                        loader: 'resolve-url-loader'
                    },
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            context: 'project',
                        },
                    },
                ],
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(["dist"]),
        new MiniCssExtractPlugin({
            filename: "style.css"
        }),
        
    ]
};