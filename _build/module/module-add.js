var mkdirp = require('mkdirp')

module.exports = function(name) {

	// console.log("module-add");
	// console.log("name = ", name);

	mkdirp.sync(path.join('./lib', name))
	// fs.writeFileSync(path.join('./lib', name + '.js'), '')
}