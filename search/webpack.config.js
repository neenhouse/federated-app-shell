const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require("webpack").container;
const autoprefixer = require('autoprefixer');
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
        publicPath: 'http://localhost:3003/',
    },

    resolve: {
        extensions: ['.tsx', '.jsx', '.js', '.json', '.less', '.css'],
        alias: { "url": false }
    },

    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                loader: 'babel-loader',
                options: {
                    envName: 'client',
                    plugins: ['@babel/plugin-syntax-dynamic-import']
                },
            },
            {
                test: /\.md$/,
                loader: 'raw-loader',
            },
            {
                test: /\.less$/,
                use: [
                    process.env.NODE_ENV === 'production'
                        ? MiniCssExtractPlugin.loader
                        : {loader: 'style-loader'},
                    {loader: 'css-loader', options: {importLoaders: 1}},
                    {
                        loader: 'postcss-loader',
                        options: {plugins: [autoprefixer()]},
                    },
                    'less-loader',
                ],
            },
            {
                test: /\.css$/,
                use: [
                    process.env.NODE_ENV === 'production'
                        ? MiniCssExtractPlugin.loader
                        : {loader: 'style-loader'},
                    {loader: 'css-loader', options: {importLoaders: 1}},
                    {
                        loader: 'postcss-loader',
                        options: {plugins: [autoprefixer()]},
                    },
                ],
            },
            {
                test: /\.eot$/,
                loader: 'url-loader',
                options: {
                    limit: 100000,
                    mimetype: 'image/png',
                },
            },
            {
                test: /\.ttf$/,
                loader: 'url-loader',
                options: {
                    limit: 100000,
                    mimetype: 'image/png',
                },
            },
        ],
    },

    plugins: [
        new ModuleFederationPlugin({
            name: 'search',
            library: {type: 'var', name: 'search'},
            filename: 'remoteEntry.js',
            remotes: {
                appshell: 'appshell',
            },
            exposes: {
                './Search': './src/App'
            },
            shared: ['react', 'react-dom'],
        }),
        new HtmlWebpackPlugin({
            hash: true,
            title: `${pkg.name} - ${pkg.description}`,
            template: './public/index.html'
        }),
        new BuildHashPlugin({
            filename: 'dashboard.json',
            dashboardURL: 'http://localhost:3000/api/update',
            metadata: {
              source: {
                url: 'https://github.com/module-federation/federation-dashboard/tree/master/dashboard-example/home'
              },
              remote: 'http://localhost:3003/remoteEntry.js'
            },
            reportFunction: (data) => {
                console.log('afterDone', data);
            },
        }),
    ],
};
