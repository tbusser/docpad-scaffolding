/* global global */
var gulp         = require('gulp'),
	autoprefixer = require('gulp-autoprefixer'),
	minifyCSS    = require('gulp-cssnano'),
	rename       = require('gulp-rename'),
	sass         = require('gulp-sass'),
	sourcemaps   = require('gulp-sourcemaps');



/* ========================================================================== *\
	METHODS
\* ========================================================================== */
function runCssDist() {
	'use strict';

	var autoprefixOptions = {
			cascade  : false
		},
		renameOptions = {
			basename : 'site',
			extname  : '.css',
			suffix   : '.min'
		},
		sourceFile = global.getFolder('src', 'css') + 'site.css.scss';

	return gulp.src(sourceFile)
		.pipe(sourcemaps.init())
			.pipe(sass().on('error', sass.logError))
			.pipe(autoprefixer(autoprefixOptions))
			.pipe(minifyCSS())
			.pipe(rename(renameOptions))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(global.getFolder('dist', 'css')));
}



/* ========================================================================== *\
	TASKS
\* ========================================================================== */
gulp.task('css:dist', ['clean-css:dist'], runCssDist);
