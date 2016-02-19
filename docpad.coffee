# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig =
	events:
		generateAfter: (opts, next) ->
			if 'static' in @docpad.getEnvironments()
				@docpad.log('info', 'generateAfter: starting Gulp task')
				safeps = require('safeps');
				rootPath = @docpad.getConfig().rootPath
				command = ['gulp', 'docpad:generateAfter']
				safeps.spawn(command, {cwd: rootPath, output: true}, next)
			else
				return next()

	environments:
		static:
			outPath: 'dist'

	plugins:
		handlebars:
			helpers:
				getBlock: (type, additional...) ->
					additional.pop() # remove the hash object
					@getBlock(type).add(additional).toHTML()
				partial: (content, options) ->
					output = @partial(content, options.hash)

# Export the DocPad Configuration
module.exports = docpadConfig
