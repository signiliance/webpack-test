const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require("webpack-Hot-middleware")
const app = express();
const config = require('./webpack.conf.base.js');
const compiler = webpack(config);
// const bs = require('browser-sync').create()
const opn = require('opn')

// 告诉 express 使用 webpack-dev-middleware，
// 以及将 webpack.config.js 配置文件作为基础配置
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler,{
  log: false,
  heartbeat: 2000,
}));

// 将文件 serve 到 port 3000。
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});


opn('http://localhost:3000')