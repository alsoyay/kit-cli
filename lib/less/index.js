var less 		= require('less')
fs 				= require('fs')

module.exports = {

	filesForDirectory: function(dir, options) {
		options = options ? options : {}
		return glob(path.join(dir, (options.recursive ? '**/*' : '*') + '.less'))
	},


	concat: function(files) {
		return (files.map(function(file, index) { return util.format("@import '%s';", file) })).join('\n')
	},

	concatWithString: function(string, files) {
		return (files.map(function(file, index) { return util.format(string, file) })).join('\n')
	
	},

	concatDirectory: function(dir, options) {
		return this.concat(this.filesForDirectory(dir, options))
	},

	parseImports: function(imports) {
		var ret = ''
		if (imports) {
			if (imports.constructor == Object) {
				var keys = Object.keys(imports)

				ret = keys.map(function(type) {
					return imports[type].map(function(file) {
						return util.format("@import %s '%s';", type, file) 
					})
				}).join('\n')
			}
		}
		return ret
		
	},

	renderDirectory: function(dir, options, dest) {
		options = options ? options : {}
		// options = options == undefined ? {} : options

		var ret
		var string

		if (options.prepend) {
			var files = this.filesForDirectory(dir, options)
			var imports = this.parseImports(options.imports)

			var blocks = files.map(function(file, index) {
				var header = options.prepend(file)
				var string = fs.readFileSync(file, 'utf8')
				return header.concat(this.render(imports.concat(string), options))
			}.bind(this))

			ret = blocks.join('\n')

		} else {
			string = this.concatDirectory(dir, options)
			ret = this.render(string, options)
		}
	
		if (dest && ret) {
			fs.writeFileSync(dest, ret)
		}
		return ret
	},



	renderFiles: function(files, options, dest) {

		options = options ? options : {}

		var ret
		var imports = this.parseImports(options.imports)

		if (options.prepend) {

			var blocks = files.map(function(file, index) {
				var header = options.prepend(file)
				var string = fs.readFileSync(file, 'utf8')
				return header.concat(this.render(imports.concat(string), options))
			}.bind(this))

			ret = blocks.join('\n')

		} else {
			var string = imports.concat(this.concat(files))
			ret = this.render(string, options)
		}
		
		if (dest && ret) {
			fs.writeFileSync(dest, ret)
		}
		return ret

	},

	renderModule: function(dir, dest) {

		// if (options.paths == undefined) {
		// 	options.paths = []
		// }

		// options.paths.push(path.join(dir, '../bower_components'))

		// // options.imports = { '(less, reference)' : glob('less/mixins/*.less') }
		// console.log("dir = ", dir);
		// console.log("glob(path.join(dir, 'mixins/*.less')) = ", glob(path.join(dir, 'less/mixins/*.less')));



		var files = glob(path.join(dir, '!(mixins)**/*.less'))
		return this.renderFiles(files, {
				paths: [
					path.join(dir, '../bower_components')
				],
				imports: {
					'(less, reference)' : glob('less/mixins/*.less')
				},
				prepend: function(file) {
					return fmt.obj(headerFile, {name: path.basename(file)} )
				}

		}, dest)
	},


	render: function(string, options) {
		console.log("options = ", options);
		var ret
		options.syncImport = true;
		less.render(string, options, function(e, result) {
			if (e) {
				console.log("e = ", e);
				throw e
			}
			ret = result.css;
		});
		return ret
	},


	renderMultiple: function(files, object) {
		var beforeEach = object.beforeEach ? object.beforeEach : (function(value) { return value })
		var afterEach = object.afterEach ? object.afterEach : (function(value) { return value })
		// var beforeAll = object.beforeAll ? object.beforeAll : (function(value) { return value })
		var afterAll = object.afterAll ? object.afterAll : (function(value) { return value })



		var sources = files.map(function(file) {
			return beforeEach(fs.readFileSync(file, 'utf8'))
		})

		var blocks = sources.map(function(source, index) {
			return afterEach(files[index], this.render(source, {}))
		}.bind(this))



		// console.log("blocks = ", blocks);
	
		return afterAll(blocks.join('\n'))
	},


	doSomething: function(master) {
		var keys = Object.keys(master)


		var css = keys.map(function(key) {
			var object = master[key]

			var beforeEach = object.beforeEach ? object.beforeEach : (function(value) { return value })
			var afterEach = object.afterEach ? object.afterEach : (function(value) { return value })

			var sources = object.files.map(function(file) {
				return beforeEach(fs.readFileSync(file, 'utf8'))
			})

			var blocks = sources.map(function(source, index) {
				return afterEach(object.files[index], this.render(source, {}))
			}.bind(this))

			// console.log("blocks = ", blocks);
			return blocks.join('\n')

		}.bind(this))


		return css.join('\n')

		

	}


}