var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var server = require('./settings').server;

module.exports = function() {
    return $.connect.server({
        root: server.dist,
        port: server.port,
        livereload: {
            port: server.liveReloadPort
        }
    });
}