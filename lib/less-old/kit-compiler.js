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


}