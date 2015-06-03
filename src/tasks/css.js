var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var settings = require('./settings');
var paths = settings.paths.stylus;

var autoprefixerBrowsers = [
    'ie >= 9',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 6',
    'opera >= 23',
    'ios >= 6',
    'android >= 4.4',
    'bb >= 10'
];

module.exports = function() {
    return gulp.src(paths.src)
        .pipe($.stylus({
            'include css': true
        }))
        .pipe($.autoprefixer({
            browsers: autoprefixerBrowsers
        }))
        .pipe(gulp.dest(paths.dist))
        .pipe($.rename({
            suffix: '.min'
        }))
        .pipe($.minifyCss())
        .pipe(gulp.dest(paths.dist))
}