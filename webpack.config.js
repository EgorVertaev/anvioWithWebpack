const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;


module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, `src/js/main.js`),
  output: {
    filename: `./js/${filename('js')}`,
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[name][ext]',
    clean: true,
  },
 
  devServer: {
    historyApiFallback: true,
    open: true,
    hot: true,
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: `./css/${filename('css')}`
    }),
  ],

  devtool: isProd ? false : 'source-map',

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        include: /src/,
        use: [ MiniCssExtractPlugin.loader,'css-loader', "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: `images/${filename('[ext]')}`
        }
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: `fonts/${filename('[ext]')}`
        }
      },
    ]
  }
}