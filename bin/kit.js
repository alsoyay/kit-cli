#!/usr/bin/env node


var program = require('commander')

program
	.command('module', 'add and remove modules')
	.command('compile', 'compile a module')
	.parse(process.argv);
  


