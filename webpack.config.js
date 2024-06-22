// node.js 환경에서 동작함!!

const path = require("path")
const HtmlPlugin = require("html-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
    // 파일을 읽어들이기 시작하는 진입점 설정
    entry: "./js/main.js",
    // 결과물(번들)을 반환하는 설정
    output: {
        // dist/main.js가 default라 아래 내용 입력하지 않아도 됨
        // path: path.resolve(__dirname, "dist"),
        // filename: "main.js",
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    "style-loader", //  순서 중요!!
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            template: "./index.html"
        }),
        new CopyPlugin({
            patterns: [
                { from: "static"}
            ]
        })
    ]
    // devServer: {
    //     host: "localhost"
    // }
}