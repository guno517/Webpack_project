const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  resolve: {
    // import 할때 뒤에 생략가능
    extensions: [".vue", ".js"],
    alias: {
      "~": path.resolve(__dirname, "src"),
      // "src": path.resolve(__dirname, "src"),
    },
  },
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"), // 절대 경로를 해석하는 path.resolve 기능
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/, // .vue로 끝나는 파일들만 찾는다.
        use: "vue-loader",
      },
      {
        test: /\.s?css$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"], // 순서가 중요하다..
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlPlugin({
      // template: path.resolve(__dirname, "src/index.html"),
      template: "./src/index.html", // 동일 동작
    }),
    new CopyPlugin({
      patterns: [{ from: "static" }],
    }),
  ],
  // devServer: {
  //   port: 1234,
  // },
};
