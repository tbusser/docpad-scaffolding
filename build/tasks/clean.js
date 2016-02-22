/* global global */
var gulp = require('gulp'),
	del = require('del');



/* ========================================================================== *\
	METHODS
\* ========================================================================== */
function removeCssFolderContent(rootFolder) {
	'use strict';

	// Remove all files from the folder and subfolders. Once this is done remove
	// all the empty folders
	del(rootFolder + '**/*');
}


/* ========================================================================== *\
	INTERMEDIATE METHODS
\* ========================================================================== */
function runCleanCssDist() {
	'use strict';

	return removeCssFolderContent(global.getFolder('dist', 'css'));
}



/* ========================================================================== *\
	TASKS
\* ========================================================================== */
gulp.task('clean-css:dist', runCleanCssDist);
