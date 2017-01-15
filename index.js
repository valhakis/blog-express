'use strict';

const spawn = require('child_process').spawn;
const watch = require('node-watch');

const options = {
  stdio: 'inherit',
  // current working directory
  cwd: __dirname,
  // called when process terminates
  callback: function() {
    console.log('THIS IS THE CALLBACK');
  }
};

var gulp = spawn('gulp', [], options);

watch(__dirname + '/gulpfile.js', function(filename){
  console.log('file has been changed:', filename, '\n');
  gulp.kill();
  gulp = spawn('gulp', [], options);
});

gulp.on('close', code => {
  console.log(`GULP '${gulp.pid}' CLOSED WITH CODE: ${code}`);
});

