#!/usr/bin/env node

var mkdirp = require('mkdirp')
var fs = require('fs')
var path = require('path')
var program = require('commander')



var args = require('commander').parse(process.argv).args;
var name = args[0]

fs.rmdirSync(path.join('./lib', name))
fs.unlinkSync(path.join('./lib', name + '.js'), '')



