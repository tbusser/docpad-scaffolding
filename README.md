# Docpad scaffolding

## Installation

### Docpad
This project uses [Docpad](http://docpad.org) to generate the static site. You will have to have this installed on your system, to do this you can use the following command:
```
npm install -g docpad
```
See [Docpad's installation instructions](http://docpad.org/docs/install) for more detailed installation instructions.

### Gulp
According to the [Gulp documentation](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) you need to have Gulp-CLI installed as a global package. If you do not yet have Gulp installed as a global package please do so using the following command:
```
npm install --global gulp-cli
```

### Project packages
To install the npm packages required to setup the environment you will have to run the following command from the root of the project folder:
```
npm install
```

## Environment
Docpad can be used to run a development environment and to generate a static version of the website.

### Development
To start the environment you can run the following command from the root of the project folder:
```
docpad run
```
This will start Docpad which will monitor the project for changes and starts a local webserver which can be accessed on `http://127.0.0.1:1339`. The port number can be configured in the `docpad.coffee` file.

When using Docpad during development it will output the website to the `out` folder inside the root folder of the project. This is also the folder from which the website is hosted.

### Static version
You can tell Docpad to create a static version of the website. To generate this static version you can run the following command from the root folder of the project:
```
docpad generate -e static
```
The static version of the website will be written into the `dist` folder. To use a different folder you can change this in the `docpad.coffee` file.

When generating a static version of the website there is an additional step performend which is not done during development. When Docpad has generated the static version of the website it will start a Gulp task named `docpad:generateAfter`. You can use this to take additional steps not covered by Docpad. At the moment it will remove the CSS generated by Docpad and replace it by a version compiled with Gulp which also includes source maps.

## License
This project is [MIT licensed](http://www.opensource.org/licenses/mit-license.php).