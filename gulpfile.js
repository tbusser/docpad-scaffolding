var requireDir = require('require-dir');

// Require all configurations and methods from the config dir
requireDir('./build/config');

 // Require all tasks from the tasks dir
requireDir('./build/tasks');
