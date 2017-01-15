'use strict';

const spawn = require('child_process').spawn;
const watch = require('node-watch');

const options = {
   stdio: 'inherit',
   cwd: __dirname,
};

const watched = [
   __dirname + '/gulpfile.js',
   //__dirname + '/node_modules'
];

var gulp = spawn('gulp', [], options);

watch(watched, function(filename){
   console.log('file has been changed:', filename, '\n');
   gulp.kill();
   gulp = spawn('gulp', [], options);
});

gulp.on('close', code => {
   console.log(`GULP '${gulp.pid}' CLOSED WITH CODE: ${code}`);
});

