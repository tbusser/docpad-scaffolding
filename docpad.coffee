# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig =
	# We have .md files in the CSS source folder to explain what each folder is
	# for. We don't want these files copied to the destination folder. To
	# prevent this from happening we need this regex to tell Docpad not to copy
	# these files
	ignoreCustomPatterns: ///src\/render\/static\/css\/.*?\/.*.md$///

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

	port:
		1339

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
