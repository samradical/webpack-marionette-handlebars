var gulp = require('gulp');
var path = require('path');
var $ = require('gulp-load-plugins')();
var del = require('del');

//--type-production
var src = 'src/';
var dist = 'dist/';

// tasks
gulp.task('scripts', require('./src/tasks/scripts.js'));
gulp.task('css', require('./src/tasks/css.js'));
gulp.task('server', require('./src/tasks/server.js'));
gulp.task('html', require('./src/tasks/html.js'));


gulp.task('watch', function() {
    gulp.watch(src + 'stylus/*.styl', ['styles']);
    gulp.watch(src + 'index.html', ['html']);
    gulp.watch(src + 'js/**/*.*', ['scripts']);
});

gulp.task('clean', function(cb) {
    del([dist], cb);
});


// by default build project and then watch files in order to trigger livereload
gulp.task('default', ['build', 'server', 'watch']);

// waits until clean is finished then builds the project
gulp.task('build', ['clean'], function() {
    gulp.start(['html', 'scripts', 'css', ]);
});