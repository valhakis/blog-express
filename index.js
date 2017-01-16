'use strict';

const spawn = require('child_process').spawn;
const watch = require('node-watch');
const jsonfile = require('jsonfile');

const options = {
   stdio: 'inherit',
   cwd: __dirname,
};

const watched = [
   __dirname + '/gulpfile.js',
   __dirname + '/webpack.config.js',
   //__dirname + '/node_modules'
];

// create gulp process
var gulp = spawn('gulp', [], options);

watch(watched, function(filename){
   console.log('file has been changed:', filename, '\n');
   gulp.kill();
   gulp = spawn('gulp', [], options);
});

gulp.on('close', code => {
   console.log(`GULP '${gulp.pid}' CLOSED WITH CODE: ${code}`);
});

// create nodemon config
var nodemon_config = {
   watch: [
      'server'
   ]
};
var nodemon_file = __dirname + '/tmp/nodemon.json';
jsonfile.writeFileSync(nodemon_file, nodemon_config);

// create nodemon process
var nodemon = spawn('nodemon', ['server', '--config', nodemon_file], options);
nodemon.on('close', code => {
   console.log(`NODEMON '${nodemon.pid}' CLOSED WITH CODE: ${code}`);
});

// before exit
let preExit = [];
process.stdin.resume();
process.on('exit', code => {
   for (let i = 0; i < preExit.length; i++) {
      preExit[i] (code);
   }
   process.exit(code);
});

process.on ('SIGINT', () => {
   console.log ('\nCTRL+C...');
   process.exit (0);
});

// Catch uncaught exception
process.on ('uncaughtException', err => {
   console.dir (err, { depth: null });
   process.exit (1);
});

preExit.push (code => {
   console.log ('Whoa! Exit code %d, cleaning up...', code);
   gulp.kill();
   nodemon.kill();
   // i.e. close database
});
