#!/usr/bin/env node
// this line above makes it so this file is executed via node rather than directly

import chokidar from 'chokidar';
import debounce from 'lodash.debounce';

const start = debounce(() => {
  console.log('starting users program');
}, 1000);

chokidar.watch('.')
  .on('add', start)
  .on('change', () => console.log('FILE CHANGED'))
  .on('unlink', () => console.log('FILE HAS BEEN REMOVED'));
