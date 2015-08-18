var fs = require('fs')
var path = require('path')
var mkdirp = require('mkdirp')
var mout = require('mout')
var glob = require('glob')

module.exports = {
	add: function(name) {
		// console.log(mout.string.interpolate('[lib/module/add], name = {{name}}, dir = {{dir}}', {name: name, dir: dir}));
		mkdirp.sync(name)
		fs.writeFileSync(name + '.js', '')
	},

	remove: function(name, dir) {
		// console.log(mout.string.interpolate('[lib/module/remove], name = {{name}}, dir = {{dir}}', {name: name, dir: dir}));
		dir = dir == undefined ? '' : dir
		fs.rmdirSync(path.join(dir, name))
		fs.unlinkSync(path.join(dir, name + '.js'), '')
	},

	compile: function(name) {
		console.log(mout.string.interpolate('[lib/module/remove], name = {{name}}', {name: name}))
		
		var files = glob.sync(path.join(name, '*.js'))
		var modules = mout.array.toLookup(files, function(dir) {
		    var key = path.basename(dir, '.js')
		    var value = mout.string.interpolate("require('{{name}}')", {name: key})
		    return key
		})

		// console.log("modules = ", modules);

		var moduleString = JSON.stringify(modules, null, 4) 
		// var moduleString = util.inspect(modules)
		// var moduleString = util.inspect(JSON.stringify(modules, null, 4))
		var string = mout.string.interpolate("module.exports = {{modules}}", {modules: moduleString})

		// console.log("string = ", string);
		// var string = modules.join('\n')
		// 
		var index = name + '.js'
		console.log("index = ", index);
		fs.writeFileSync(index, string)
		

	}
}