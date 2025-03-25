#!/usr/bin/env node
// this line above makes it so this file is executed via node rather than directly


import debounce from 'lodash.debounce';
import chokidar from 'chokidar';
import program from 'caporal';

program
  .version('0.0.1')
  .argument('[filename]', 'Name of a file to execute')
  .action((args) => {
    console.log(args);
  });

  program.parse(process.argv);

// const start = debounce(() => {
//   console.log('starting users program');
// }, 1000);

// chokidar.watch('.')
//   .on('add', start)
//   .on('change', () => console.log('FILE CHANGED'))
//   .on('unlink', () => console.log('FILE HAS BEEN REMOVED'));
