const config  = require('./webpack.conf.base')
const path = require('path')
const webpack = require('webpack')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const baseDir = process.cwd()
const srcDir = path.resolve(baseDir, 'src')
const webpackBuildPath = path.resolve(baseDir, '__build') //webpack虚拟目录

// devServer: {
//   contentBase: path.resolve(__dirname, 'dist'),
//   compress: true,
//   port: 9530,
//   hot: true,
//   proxy: {

//   }
// }

const devConfig = Object.assign(config, {
  devtool: 'cheap-module-source-map'
})

// Object.getOwnPropertyNames((config.entry || {})).map(function (name) {
//   devConfig.entry[name] = []
//       //添加HMR文件
//       .concat("webpack/hot/dev-server")
//       .concat("webpack-dev-server/client?http://localhost:9390")
//       .concat(config.entry[name])
// });

devConfig.plugins = (config.plugins || []).concat(
  new webpack.HotModuleReplacementPlugin(),
//   new BrowserSyncPlugin({
//     host: 'localhost',
//     port: 3010,
//     files: '',
//     server: {
//         //指定服务器启动根目录
//         baseDir: webpackBuildPath
//     }
// })
)

module.exports = config