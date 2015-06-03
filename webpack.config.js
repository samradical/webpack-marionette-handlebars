var bowerWebpackPlugin = require("bower-webpack-plugin");
var path = require("path");
var webpack = require("webpack");
var paths = require('./src/tasks/settings.js').paths;
var entry = paths.scripts.entry;
var output = {
    path: __dirname,
    filename: paths.scripts.output
};

function getBowerWebpackPlugin() {
    return new bowerWebpackPlugin({
        modulesDirectories: ["bower_components"],
        manifestFiles: "bower.json",
        includes: /.*/,
        excludes: [],
        searchResolveModulesDirectories: true
    });
}

module.exports.development = {
    debug: true,
    devtool: 'eval',
    entry: entry,
    output: output,
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.hbs$/,
            loader: 'handlebars-loader'
        }]
    },
    resolve: {
        root: [path.join(__dirname, "bower_components")],
        alias: {
            underscore: 'lodash/lodash.min.js'
        }
    },
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        )
    ]
    /*,
    plugins: [getBowerWebpackPlugin()]*/
};

module.exports.production = {
    debug: false,
    entry: entry,
    output: output,
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.hbs$/,
            loader: 'handlebars-loader'
        }]
    },
    plugins: [getBowerWebpackPlugin()]
};