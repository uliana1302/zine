const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    page: './src/page.jsx',
    menu: './src/javascript/menu.js',
    search: './src/javascript/search.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs')
    // clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [

    new CopyPlugin({
      patterns: [
        { from: 'src/images', to: 'images' }
      ]
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),

    // Landing page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/index.html',
      filename: './index.html',
      chunks: ['index', 'menu']
    }),

    // Error
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/404.html',
      filename: './404.html',
      chunks: ['index', 'menu']
    }),

    // Tutorial page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/tutorial.html',
      filename: './tutorial.html',
      chunks: ['index', 'menu', 'search']
    }),

    // About page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/about.html',
      filename: './about.html',
      chunks: ['index', 'menu', 'search']
    }),

    // Module page 1
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/brand.html',
      filename: './brand.html',
      chunks: ['index', 'menu', 'search']
    }),

    // Module page 2
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/zines.html',
      filename: './zines.html',
      chunks: ['index', 'menu', 'search']
    }),

    // Module page 3
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/creation.html',
      filename: './creation.html',
      chunks: ['index', 'menu', 'search']
    }),

    // Module page 4
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/promotion.html',
      filename: './promotion.html',
      chunks: ['index', 'menu', 'search']
    }),

    // Module page 5
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/monetization.html',
      filename: './monetization.html',
      chunks: ['index', 'menu', 'search']
    }),

    // Tools page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/tools.html',
      filename: './tools.html',
      chunks: ['index', 'menu', 'search']
    }),

    // Topic page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/brand/topic.html',
      filename: './brand/topic.html',
      chunks: ['index', 'menu', 'search']
    }),

    // 1.1
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/brand/personal_brand.html',
      filename: './brand/personal_brand.html',
      chunks: ['index', 'menu', 'search']
    }),

    // 1.2
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/brand/brand_creation.html',
      filename: './brand/brand_creation.html',
      chunks: ['index', 'menu', 'search']
    }),

    // 1.3
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/brand/brand_promotion.html',
      filename: './brand/brand_promotion.html',
      chunks: ['index', 'menu', 'search']
    }),

    // 2.1
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/zines/zine.html',
      filename: './zines/zine.html',
      chunks: ['index', 'menu', 'search']
    }),

    // 2.2
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/zines/zine_history.html',
      filename: './zines/zine_history.html',
      chunks: ['index', 'menu', 'search']
    }),

    // 3.1
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/creation/storytelling.html',
      filename: './creation/storytelling.html',
      chunks: ['index', 'menu', 'search']
    }),

    // 3.2
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/creation/fonts.html',
      filename: './creation/fonts.html',
      chunks: ['index', 'menu', 'search']
    }),

    // 4.1
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/promotion/promo_strateges.html',
      filename: './promotion/promo_strateges.html',
      chunks: ['index', 'menu', 'search']
    }),

    // 4.2
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/promotion/feedback.html',
      filename: './promotion/feedback.html',
      chunks: ['index', 'menu', 'search']
    }),

    // 5.1
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/monetization/income.html',
      filename: './monetization/income.html',
      chunks: ['index', 'menu', 'search']
    }),

    // 5.2
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/monetization/identity.html',
      filename: './monetization/identity.html',
      chunks: ['index', 'menu', 'search']
    }),

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      }
    ]),

    // Menu
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/list.html'),
        location: 'list',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
