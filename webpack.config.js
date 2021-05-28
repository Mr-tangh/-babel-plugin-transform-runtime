const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: __dirname + '/src/main.js', // 指定webpack打包的入口文件
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究'),
    new HtmlWebpackPlugin({
      template: __dirname + "/public/index.html"//new 一个这个插件的实例，并传入相关的参数
    })
  ],

  devServer: {
    publicPath: '/',
    host: 'localhost',
    hot: true,
    port: 9099
  },

  module: {
    rules: [
      {
        test:  /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // presets: [
            //   "@babel/preset-env",
            //   {
            //     "useBuiltIns": "entry",
            //     "debug": true
            //   }
            // ],

            presets: [[
              "@babel/preset-env",
              {
                useBuiltIns: "usage",
                corejs: '2' //加上他就解决了
              }
            ]],
            plugins: [
              // ['@babel/plugin-proposal-class-properties', {'loose': true}]
              [
                "@babel/plugin-transform-runtime",
                {
                  "corejs": 3 // 指定 runtime-corejs 的版本，目前有 2 3 两个版本
                }
              ]
            ]
          }
        }
      }
    ]
  }
}