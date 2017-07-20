const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const SvgStore = require('webpack-svgstore-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json', '.md'],
    alias: {
      Containers: path.resolve(__dirname, 'src/containers'),
      Components: path.resolve(__dirname, 'src/components'),
      Data: path.resolve(__dirname, 'src/data'),
      Images: path.resolve(__dirname, 'src/assets/images')
    }
  },
  devtool: 'inline-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    path.resolve(__dirname, 'src/index.jsx')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.scss/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                'src/styles/base/_colors.scss',
                'src/styles/base/_type-setting.scss',
                'src/styles/utilities/_mixins.scss'
              ]
            }
          }
        ]
      },
      {
        test: /\.md$/,
        use: [
          'html-loader',
          'markdown-loader'
        ]
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        use: [
          'file-loader?name=[path][name].[ext]'
        ]
      },
      {
        test: /\.(eot|otf|ttf|woff)$/,
        use: [
          'file-loader?name=[path][name].[ext]'
        ]
      }
    ]
  },
  plugins: [
    new SvgStore({
      prefix: ''
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new StyleLintPlugin()
  ]
}
