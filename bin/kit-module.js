#!/usr/bin/env node

var program = require('commander')

program
	.command('add <name>', 'adds a module')
	.command('remove <name>', 'removes a module')
	.parse(process.argv);
  

