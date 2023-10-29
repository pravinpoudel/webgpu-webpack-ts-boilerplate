const path = require("path")
module.exports = {
    context: __dirname,
    entry: "./src/main.ts",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },

    module: {
        rules: [
                {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader"
                }
            }
        ]
    },
    mode: "development",
    devServer: {
        port: 8080,
        static: path.resolve(__dirname, "dist"),
        hot: true,
    },
    resolve: {
        extensions: ["", ".ts", ".js"]
    }
}