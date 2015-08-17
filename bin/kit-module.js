#!/usr/bin/env node

var program = require('commander')
// var module = require('../lib/module/index')


program
	.command('add <name>', 'adds a module')
	.command('remove <name>', 'removes a module')
	.parse(process.argv);
  



// program
// 	.command('add <name>', 'adds a module')
// 	.action(function (name) {
// 		module.add(name)
// 	})

// program
// 	.command('remove <name>', 'removes a module')
// 	.action( )


// program
// 	.parse(process.argv);


	// require('../lib/module/index')
	// .add(program.args[0], require('path').join(process.cwd(), program.path == undefined ? '' : program.path))


