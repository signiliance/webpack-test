const webpack = require('webpack')
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	// entry: {
	// 	bundle: './src/index.js', // 入口文件
	// 	vendor: ['react-redux', 'react', 'redux-thunk', 'ramda']
  // },
  entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'js/bundle-[hash].js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				// 图片格式正则
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				use: [
					{
						loader: 'url-loader',
						// 配置 url-loader 的可选项
						options: {
							// 限制 图片大小 10000B，小于限制会将图片转换为 base64格式
							limit: 10000,
							// 超出限制，创建的文件格式
							// build/images/[图片名].[hash].[图片格式]
							name: 'images/[name].[hash].[ext]'
						}
					}
				]
			},
			  {
			    test: /\.css$/,
			    use: ['style-loader',
			        {
			            loader: 'css-loader',
			            options: {
			                modules: true
			               }
			        }
			    ]
			},
			// {
      //   test: /\.css$/,
      //   exclude: /node_modules/,
			// 	loader: ExtractTextPlugin.extract({
			// 		// 必须这样写，否则会报错
			// 		fallback: 'style-loader',
			// 		use: [
			// 			{
			// 				loader: 'css-loader',
			// 				options: {
			// 					modules: true
			// 				}
			// 			}
			// 		]
			// 	})
			// }
		]
	},
	plugins: [
    // 输出的文件路径
    // new CleanWebpackPlugin(),
		// new ExtractTextPlugin('css/[name].[hash].css'),
		// new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: 'src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
		// new config.optimization.splitChunks({
    //   names: ['vendor', 'mainfest'],
    //   minChunks: Infinity
    // })
  ],
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       commons: {
  //           name: ['vendor', 'mainfest'],
  //           chunks: "initial",
  //           minChunks: Infinity
  //       }
  //   }
  //   }
  // }
  optimization: {
    splitChunks: {
      chunks: 'all', 
    }
	},
	stats: 'errors-only'
};
