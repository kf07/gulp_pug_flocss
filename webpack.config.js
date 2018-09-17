const path = require('path');

module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: "development",

    // メインのJS
    entry: "./src/main.ts",
    // 出力ファイル
    output: {
        path: path.resolve(__dirname, 'dist/assets/js'),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                // 拡張子 .ts の場合
                test: /\.ts$/,
                // TypeScript をコンパイルする
                use: 'ts-loader'
            }
        ]
    },
    // import 文で .ts ファイルを解決するため
    resolve: {
        extensions: [
            '.ts'
        ],
        alias: {
            // vue.js のビルドを指定する
            vue: 'vue/dist/vue.common.js'
        }
    },
    watch: true

};