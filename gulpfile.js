'use strict';

const gulp = require('gulp');
const webpack = require('gulp-webpack');

gulp.task('webpack', function(){
   return gulp.src('client/app.js')
      .pipe(webpack(require('./webpack.config.js')))
      .pipe(gulp.dest('dist'));
});

gulp.task('default', ['webpack'], function(){

});
