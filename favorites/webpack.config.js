const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require("webpack").container;
const path = require('path');
const pkg = require('./package.json');
const BuildHashPlugin = require('@module-federation/dashboard-plugin');

module.exports = {
    entry: './src/index',
    cache: false,

    mode: 'development',
    devtool: 'source-map',

    optimization: {
        minimize: false,
    },

    output: {
        publicPath: 'http://localhost:3004/',
    },

    resolve: {
        extensions: ['.jsx', '.js', '.css', '.less', '.json', 'jpg', 'png'],
        modules: ['node_modules'],
        alias: { }
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    envName: 'client',
                    plugins: ['@babel/plugin-syntax-dynamic-import']
                },
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [
                    process.env.NODE_ENV === 'production'
                        ? MiniCssExtractPlugin.loader
                        : {loader: 'style-loader' },
                    {loader: 'css-loader', options: {importLoaders: 1}},
                    {
                        loader: 'postcss-loader',
                        options: {plugins: [autoprefixer()]}
                    },
                    {
                        loader: 'less-loader',
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    process.env.NODE_ENV === 'production'
                        ? MiniCssExtractPlugin.loader
                        : {loader: 'style-loader' },
                    {loader: 'css-loader', options: {importLoaders: 1}},
                    {
                        loader: 'postcss-loader',
                        options: {plugins: [autoprefixer()]}
                    }
                ]
            },
            {
                test: /\.eot$/,
                loader: 'url-loader',
                options: {
                    limit: 1000000
                }
            },
            {
                test: /\.ttf$/,
                loader: 'url-loader',
                options: {
                    limit: 1000000
                }
            }
        ],
    },

    plugins: [
        new ModuleFederationPlugin({
            name: 'favorites',
            library: {type: 'var', name: 'favorites'},
            filename: 'remoteEntry.js',
            remotes: {
                appshell: 'appshell'
            },
            exposes: {
                './Favorites': './src/App'
            },
            shared: ['react', 'react-dom', 'react-router-dom'],
        }),
        new HtmlWebpackPlugin({
            hash: true,
            title: `${pkg.name} - ${pkg.description}`,
            template: './public/index.html',
        }),
        new BuildHashPlugin({
            filename: 'dashboard.json',
            dashboardURL: 'http://localhost:3000/api/update',
            metadata: {
              source: {
                url: 'https://github.com/module-federation/federation-dashboard/tree/master/dashboard-example/home'
              },
              remote: 'http://localhost:3004/remoteEntry.js'
            },
            reportFunction: (data) => {
                console.log('afterDone', data);
            },
        }),
    ],
};
