var glob = require('glob')
var mout = require('mout')
var path = require('path')
var fs = require('fs')
var util = require('util')
var _cli = require('commander')
var mkdirp = require('mkdirp')



// module.exports = {
//     createPackage: function(name) {

//     }
// }


_cli
    .option('-s, --silent', 'suppress log messages.')
    // .option('-f, --foo', 'enable some foo')
    // .option('f, foo', 'enable some foo2')


_cli
  .command('module add [target]')
  // .command('module <cmd>')
  // .alias('ex')
  // .description('run setup commands for all envs')
  // .option("-s, --setup_mode [mode]", "Which setup mode to use")
  // .option("--add [name]", "add a module")
  // .option("a, add2 [name]", "add a module")
  // .action(module)
  .parse(process.argv);
  // .action(function(action, options){

  //   // var mode = options.setup_mode || "normal";
  //   // env = env || 'all';
  //   // console.log('setup for %s env(s) with %s mode', env, mode);
  //   // 
  //   console.log("options.add = ", options.add);
  //   console.log("options.add2 = ", options.add2);
  //   console.log("options.remove = ", options.remove);
  //   console.log("options = ", options);

  //   var action = action || 'add'




  // });




// // show help by default
// if (!_cli.args.length) {
//     _cli.outputHelp();
//     process.exit(0);
// }


function module(action, target) {
    // console.log("options = ", options);
    // console.log("target = ", target);
    // 
    console.log("action = ", action);

      switch (action) {

          case 'add' :
            require('./module-add')(target)

          break;

          case 'remove' :
          console.log("Removing");

          break;
      }
    // console.log("options.add2 = ", options.add2);
}
    


// _cli
//   .command('setup [env]')
//   .description('run setup commands for all envs')
//   .option("-s, --setup_mode [mode]", "Which setup mode to use")
//   .option("add <name>", "add a module")
//   .action(function(env, options){

//     var mode = options.setup_mode || "normal";
//     env = env || 'all';
//     console.log('setup for %s env(s) with %s mode', env, mode);

//     var action = action || 'add'

//     switch (action) {

//         case 'add' :

//         break;
//     }


//   });
//   
// _cli
//     .command('module')
//     .option('-a, --add <name>', 'add a module')
//     .action(function(name, options) {
//         console.log("things");

//         console.log("options.add = ", options.add);
//     }).on('--add', function() {
//         console.log("add");
//     });



// _cli
//     .command('exec <cmd>')
//     .alias('ex')
//     .description('execute the given remote cmd')
//     .option("-e, --exec_mode <mode>", "Which exec mode to use")
//     .option("a, add <name>", "add a module")
//     .action(function(cmd, options){
//       // console.log('exec "%s" using %s mode', cmd, options.exec_mode);
//       console.log('exec "%s" using %s name', cmd, options.exec_mode);
//     }).on('--help', function() {
//       console.log('  Examples:');
//       console.log();
//       console.log('    $ deploy exec sequential');
//       console.log('    $ deploy exec async');
//       console.log();
//     });


// // _cli
// //     .command('module [name]')
// //     .option('add', 'add a module')
// //     // .option('r, remove', 'remove a module')
// //     // .option('-f, --foo', 'enable some foo')
// //     // .description('add or remove modules')
// //     .action( function (name, options) {
// //         console.log("options.a = ", options.a);
// //         console.log("options.add = ", options.add);
// //         // console.log("name = ", name);

// //     } )
    



// var program = require('../');

// _cli
//     .command('module remove')
//     .description('add a module')
//     .arguments('remove [name]')
//     .action( module );
//     
//     
// _cli
//     .command('module remove')
//     .description('add a module')
//     .command('module add')
//     .description('add a module')


// _cli
//     .command('module')
//     .command('remove')
    // .command('add')
    // .description('add a module')
    // .command('module add')
    // .description('add a module')


// if (typeof cmdValue === 'undefined') {
//    console.error('no command given!');
//    process.exit(1);
// }
// console.log('command:', cmdValue);
// console.log('environment:', envValue || "no environment given");


// _cli
//     .command('module <cmd> [name]')
//     .description('add or remove modules')
//     .action( module )






// _cli
//     .command('add <cmd> [name]')
//     // .description('add or remove modules')
//     .action( function (cmd, name) {
//         console.log("cmd = ", cmd);
//         console.log("name = ", name);

//         console.log("options = ", options);
//     } )
    
    
    
    
    
// _cli
//     .command('module-add')
//     // .alias('module add')
//     .description('add a module')
//     // .action( cmd(buildDocs) );
//     .action( createModule )


// _cli
//     .command('module [mode] [name]')
//     .description('add a module')
//     // .action( cmd(buildDocs) );
//     .action( createModule )


// _cli
//     .command('module remove [module]')
//     .description('remove a module')
//     // .action( cmd(buildDocs) );
//     .action( removeModule )
// _cli
//     .command('pkg')
//     .description('update packages and specs')
//     .action( cmd(updatePackages) );

// _cli
//     .command('add <moduleName> [templateName]')
//     .description('add a new module.')
//     .action( cmd(addModule) );



// function add(cmd, options) {

// }


// function module(cmd, options) {
//     console.log("cmd = ", cmd);

// }

function createModule(name, templateName) {
    console.log("name = ", name);

    // mkdirp.sync(path.join('./lib', name))
    // fs.writeFileSync(path.join('./lib', name + '.js'), '')
}


function removeModule (name) {
    console.log("removeModule");

}

function something() {

    var dirs = glob.sync('./lib/!(*-old)')


    console.log("dirs = ", dirs);


    var modules = mout.array.toLookup(dirs, function(dir) {
        var key = path.basename(dir)
        var template = "require('{{name}}')"
        var value = mout.string.interpolate(template, {name: key})
        return key
    })


    console.log("modules = ", modules);



    var moduleString = JSON.stringify(modules, null, 4) 
    // var moduleString = util.inspect(modules)
    // var moduleString = util.inspect(JSON.stringify(modules, null, 4))
    var string = mout.string.interpolate("module.exports = {{modules}}", {modules: moduleString})

    console.log("string = ", string);
    // var string = modules.join('\n')
    fs.writeFileSync('index.js', string)



    // var tmpl = 'Hello {{name}}!';
    // interpolate(tmpl, {name: 'World'}); 
}