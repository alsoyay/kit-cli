#!/usr/bin/env node

var program = require('commander')


program.option('-p, --path <path>', 'Adds a path')
	.parse(process.argv)



require('../lib/module/index')
	.remove(program.args[0], require('path').join(process.cwd(), program.path == undefined ? '' : program.path))

