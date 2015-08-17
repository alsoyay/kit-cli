var fs = require('fs')
var path = require('path')
var mkdirp = require('mkdirp')
var mout = require('mout')

module.exports = {
	add: function(name) {
		// console.log(mout.string.interpolate('[lib/module/add], name = {{name}}, dir = {{dir}}', {name: name, dir: dir}));

		// dir = dir == undefined ? '' : dir
		mkdirp.sync(name)
		fs.writeFileSync(name + '.js', '')
	},

	remove: function(name, dir) {
		// console.log(mout.string.interpolate('[lib/module/remove], name = {{name}}, dir = {{dir}}', {name: name, dir: dir}));
		dir = dir == undefined ? '' : dir
		fs.rmdirSync(path.join(dir, name))
		fs.unlinkSync(path.join(dir, name + '.js'), '')
	}
}