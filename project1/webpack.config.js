const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx", //  ./src/JS/index.js  ./src/TS/index.ys
  output: {
    path: path.resolve(__dirname, "./dist"), // 文件出口
    filename: "[name].bundle.js", // 出口文件名
  },
  mode: "development", //production ｜ development
  plugins: [
    new HtmlWebpackPlugin({
      title: "Project1",
      template: path.resolve(__dirname, "./public/index.html"),
      filename: "index.html",
    }),
    new ModuleFederationPlugin({
      // 提供给其他服务加载的文件
      // filename: "app1RemoteEntry.js",
      // 唯一ID，用于标记当前服务
      name: "project1",
      filename: "project1RemoteEntry.js",
      // 需要暴露的模块，使用时通过 `${name}/${expose}` 引入
      exposes: {
        "./Page1": "./src/Page1",
        "./Page12": "./src/Page12",
      }
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css", ".scss"],
  },
  module: {
    /* ... */
    rules: [
      /* ... */
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
        include: [path.resolve(__dirname, 'src')]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader","css-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 8011,
  },
};
