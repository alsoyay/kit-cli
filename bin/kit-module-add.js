#!/usr/bin/env node

var mkdirp = require('mkdirp')
var fs = require('fs')
var path = require('path')
var program = require('commander')



// program
// 	.command('<module>')
// 	.parse(process.argv).args


var args = require('commander').parse(process.argv).args;
var name = args[0]


console.log("program.args = ", program.args);
// console.log("name = ", name);


mkdirp.sync(path.join('./lib', name))
fs.writeFileSync(path.join('./lib', name + '.js'), '')



