//--type-production
var args = require('yargs').argv;

var environment = args.type || 'development';
var isProduction = environment === 'production';

module.exports = {
    server: {
        port: 1337,
        dist: 'dist/',
        liveReloadPort: 35728
    },
    paths: {
        html: {
            src: "src/index.html",
            dist: "dist/"
        },
        templates: {
            src: "./src/templates/*.hbs",
            dist: "./src/js/"
        },
        stylus: {
            src: "./src/stylus/*.styl",
            dist: "./dist/css/"
        },
        scripts: {
            entry: "./src/js/main.js",
            output: "bundle.js",
            src: "./src/js/**/*.js ",
            dist: "./dist/js/"
        }
    },
    environment: environment,
    isProduction: isProduction
};