#!/usr/bin/env node
// this line above makes it so this file is executed via node rather than directly


import debounce from 'lodash.debounce';
import chokidar from 'chokidar';
import program from 'caporal';
import fs from 'fs';
import { spawn } from 'child_process';

program
  .version('0.0.1')
  .argument('[filename]', 'Name of a file to execute')
  .action(async ({ filename }) => {
    const name = filename || 'index.js';

    try {
      await fs.promises.access(name);
    } catch (err) {
      throw new Error(`Could not find the file ${name}`);
    }

    const start = debounce(() => {
      spawn('node', [name], { stdio: 'inherit'});
    }, 100);

    chokidar
      .watch('.')
      .on('add', start)
      .on('change', start)
      .on('unlink', start);
  });

  program.parse(process.argv);
