var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var settings = require('./settings');
var paths = settings.paths.html;

module.exports = function() {
    return gulp.src(paths.src)
        .pipe(gulp.dest(paths.dist))
        .pipe($.connect.reload());
}