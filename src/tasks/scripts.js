var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var settings = require('./settings');
var paths = settings.paths.scripts;

var webpackConfig = require('../../webpack.config.js')[settings.environment];

module.exports = function() {
    return gulp.src(paths.entry)
        .pipe($.webpack(webpackConfig))
        .pipe(gulp.dest(paths.dist))
        .pipe($.if(settings.isProduction, $.uglify()))
        .pipe($.if(settings.isProduction, $.stripDebug()))
        .pipe($.if(settings.isProduction, $.rename({
            suffix: '.min'
        })))
        .pipe(gulp.dest(paths.dist))
        .pipe($.connect.reload());
}