/* global global */
/* eslint-disable no-console */
var options = {};

/**
 * Get the root of a specific type of folder
 * @param  {String} type The type, usually src/dest
 * @return {String}      The root path in question
 */
global.getRoot = function getRoot(type) {
	'use strict';

	if(options[type].root == null) {
		console.error('No root set for ' + type);
		return '';

	}

	return options[type].root;
};

/**
 * Set the root of a specific type of folder
 * @param {String} type The type, usually src/dest
 * @param {String} path The path to set as root
 * @return {String}     The root specified
 */
global.setRoot = function setRoot(type, path) {
	'use strict';

	if(!options[type]) {
		options[type] = {};
	}

	options[type].root = path;

	return options[type].root;
};


/**
 * Get the path for a certain type of resource on a specific environment
 *
 * @param  {String} environment The environment for which the resource path
 *                              should be returned
 * @param  {String} name        The kind of resource whose path to return
 *
 * @return {String}             The full path for the resource, including the
 *                              root path
 */
global.getFolder = function(environment, name) {
	'use strict';

	var environmentData = options[environment];
	// Make sure the request environment exists before we try to read keys
	// from it
	if (environmentData == null) {
		console.log('Unable to return folder for "', name, '" in environment "', environment, '". No such environment exists');
		return '';
	}

	// 1: Get the root folder for the enviroment
	// 2: Get the path for the requested resource. When the environment doesn't
	//    have a path specified we will return the generic path
	var root = environmentData.root,
		path = environmentData[name] || options.generic[name];

	// Concat the root and path and return this as the result of the method
	return root + path;
};

/**
 * Set the path for a certain type of resource. The path can be set for a
 * specific environment or for all environments
 *
 * @param  {String} name        The name of the resource
 * @param  {String} path        The path for the resource, relative to the root
 *                              path
 * @param  {String} environment The environment the path is for. When this param
 *                              is not provided the path for the resource will
 *                              be considered a path for the resource on all
 *                              environments

 */
global.setFolder = function(name, path, environment) {
	'use strict';

	// When the environment param is not provided we will set the resource path
	// for the generic environment which acts as a fallback in case an
	// environment has no path set
	if (environment == null) {
		environment = 'generic';
	}

	// If the enviroment has not yet been initialized we will create it now. We
	// need an object so we can store key/value pairs
	if (!options[environment]) {
		options[environment] = {};
	}

	// Set the path for the resource on the specified environment
	options[environment][name] = path;
};
