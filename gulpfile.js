'use strict';

const config = {
   proxy: 'http://kodu.noip.me:4000/'
};

const gulp = require('gulp');
const webpack = require('gulp-webpack');
const sequence = require('gulp-sequence');
var browserSync = require('browser-sync').create();

gulp.task('webpack', function(){
   return gulp.src('client/app.js')
      .pipe(webpack(require('./webpack.config.js')))
      .pipe(gulp.dest('dist'));
});

gulp.task('favicon', function(){
   return gulp.src('client/favicon.ico')
      .pipe(gulp.dest('dist'));
});

gulp.task('browser-sync', function(){
   browserSync.init({
      proxy: config.proxy
   });
});

gulp.task('sequence', sequence([
   'webpack', 
   'favicon', 
   //'browser-sync'
]));

gulp.task('default', ['sequence'], function(){
});
