//const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
//const webpackMerge = require('webpack-merge');
//const mergeConfig = (mode) => require(`./builder/webpack.${mode}.js`)();
//const mergeConfig = (mode) => require(`./builder/webpack.${mode}.js`)();

module.exports = () => {
    return { 
        mode: 'none',
        entry: './src/index.js',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'build'),
        },
    };
       
        
};