#!/usr/bin/env node

var program = require('commander')

// program.option('-p, --path <path>', 'Adds a path')
program.parse(process.argv)

require('../lib/module/index')
	.compile(require('path').join(process.cwd(), program.args[0]))



