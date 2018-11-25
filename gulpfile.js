"use strict";

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function () {

  browserSync.init({
    server: "./src"
  });

  gulp.watch("src/scss/**/*.scss", ['sass']);
  gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('sass', function () {
  return gulp.src('./src/scss/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCss({ compatibility: 'ie8' }))
    .pipe(rename('app.min.css'))
    .pipe(gulp.dest('./src/css'))
    .pipe(browserSync.stream());
});



gulp.task('minifyScripts', function () {
  return gulp.src('./src/js/app.js')
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('./src/js'));
});


gulp.task('default', ['serve']);
