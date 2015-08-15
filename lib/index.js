
var argv = require('minimist')(process.argv.slice(2))



var command = argv._[0]
if (command) {


}


// console.log("__dirname = ", __dirname);
// console.log("process.argv = ", process.argv);

var kitless = require('./less')
var dir = argv.dir


kitless.renderDirectory(path.join(__dirname, 'less/colors'), {
	paths: paths,
	imports: {
		'(less, reference)' : glob('less/mixins/*.less')
	},
	prepend: function(file) {
		return fmt.obj(headerFile, {name: path.basename(file)} )
		// return util.format('/* i am header: %s  */\n', path.basename(file));
	}


}, 'css/kit-colors.css')


// var moduleHeader = argv.

// var paths = [ 
// 	path.join(__dirname, 'bower_components/homeless/dist'), 
// 	path.join(__dirname, 'less/mixins') 
// ]


// var headerFile = fs.readFileSync(path.join(__dirname, 'lib/default-header.less'), 'utf8')

// kitless.renderDirectory(path.join(__dirname, 'less/colors'), {
// 	paths: paths,
// 	imports: {
// 		'(less, reference)' : glob('less/mixins/*.less')
// 	},
// 	prepend: function(file) {
// 		return fmt.obj(headerFile, {name: path.basename(file)} )
// 		// return util.format('/* i am header: %s  */\n', path.basename(file));
// 	}


// }, 'css/kit-colors.css')
