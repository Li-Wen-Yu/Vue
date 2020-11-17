const{ src , dest, parallel } = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');

function packJB() {
    return src('node_modules/jquery/dist/jquery.min.js')
        .pipe(src('node_modules/bootstrap/dist/js/bootstrap.min.js'))
        .pipe(concat('jb.min.js'))
        .pipe(uglify())
        .pipe(dest('static/js'))
}

function vue() {
    return src('node_modules/vue/dist/vue.min.js')
        .pipe(uglify())
        .pipe(dest('static/js'))
}

function packBs() {
    return src('node_modules/bootstrap/dist/css/bootstrap.min.css')
        .pipe(src('node_modules/bootstrap/dist/css/bootstrap-grid.min.css'))
        .pipe(concat('bs.min.js'))
        .pipe(cleanCSS())
        .pipe(dest('static/css'))
}


exports.build = parallel(packJB, vue, packBs);
exports.default = packJB;
exports.default = vue;
exports.default = packBs;
