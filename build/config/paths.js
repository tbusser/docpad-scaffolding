/* ========================================================================== *\
	PATHS

	This file defines the various paths which can be used in the Gulp tasks.

	IMPORTANT:
	Make sure each speficied path ends with a forward slash and that there is
	no forward slash at the start. The only exception are root paths, these can
	start with a forward slash if needed.
\* ========================================================================== */
/* global global */

// Set the root paths for the three default environments
global.setRoot('dev',  'out/');
global.setRoot('dist', 'dist/');
global.setRoot('src',  'src/');

// Set the paths for the CSS folder
global.setFolder('css', 'static/css/');
global.setFolder('css', 'render/static/css/', 'src');
