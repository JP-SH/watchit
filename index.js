#!/usr/bin/env node
// this line above makes it so this file is executed via node rather than directly

import chokidar from 'chokidar';

chokidar.watch('.')
  .on('add', () => console.log('FILE ADDED'))
  .on('change', () => console.log('FILE CHANGED'))
  .on('unlink', () => console.log('FILE HAS BEEN REMOVED'));
