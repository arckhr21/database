const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpackMerge = require('webpack-merge');
//const mergeConfig = (mode) => require(`./builder/webpack.${mode}.js`)();
const mergeConfig = (mode) => require(`./builder/webpack.${mode}.js`)();

module.exports = ({mode}) => {
   
  return webpackMerge(
      {
        mode: mode,
        entry: './src/index.js',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist'),
        },
        module: {
            rules: [
                {
                  test: /\.js/,
                  use: [
                    {
                        loader: 'babel-loader',
                        option: {
                            presets: ['@babel/preset-env'],
                        },
                    }, 
                  ],
                  exclude: /node_modules/,
                },
            ],
        },
          
        plugins: [new HtmlWebpackPlugin()],
                  devServer: {
                        static: './dist',
                  },
      }, mergeConfig(mode));
};