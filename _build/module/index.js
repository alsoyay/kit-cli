#!/usr/bin/env node
var _cli = require('commander')


_cli
  .command('add [name]', 'install one or more packages')
//   // .command('module <cmd>')
//   // .alias('ex')
//   // .description('run setup commands for all envs')
//   // .option("-s, --setup_mode [mode]", "Which setup mode to use")
//   // .option("--add [name]", "add a module")
//   // .option("a, add2 [name]", "add a module")
//   .action(function(action, target) {
//   	console.log("action = ", action);
//   })


// module
//   .command('add')
//   // .action(function(action, target) {
//   // 	console.log("action = ", action);
//   // })

// module.parse(process.argv);
// // // show help by default
// // if (!_cli.args.length) {
// //     _cli.outputHelp();
// //     process.exit(0);
// // }
// 
console.log("__filename = ", __filename);