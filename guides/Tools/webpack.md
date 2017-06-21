<h1>WEBPACK 2</h1>

<!-- TOC -->

- [Initialization](#initialization)
  - [1. Installation](#1-installation)
  - [2. Update package.json](#2-update-packagejson)
  - [3. Webpack configuration file](#3-webpack-configuration-file)
  - [4. Config validator](#4-config-validator)
- [Resolve extensions](#resolve-extensions)
- [Minifying the bundle and Source maps](#minifying-the-bundle-and-source-maps)
- [Webpack Dev Server](#webpack-dev-server)
- [Development vs Production](#development-vs-production)
- [Bundling](#bundling)
- [Loaders](#loaders)
  - [Babel](#babel)
  - [ESLint](#eslint)
  - [JSON](#json)
  - [CSS](#css)
  - [Karma](#karma)
- [Code coverage](#code-coverage)
- [Code splitting](#code-splitting)
- [Chunking code](#chunking-code)
- [Extract CSS](#extract-css)
- [Offline with Service Workers](#offline-with-service-workers)
- [Deployment to Surge.sh](#deployment-to-surgesh)
- [References](#references)

<!-- /TOC -->

<!-------------------------------------------- INITIALIZATION -------------------------------------------->
## Initialization

### 1. Installation
```bash
$ npm install --save-dev webpack
```
```bash
$ npm install --save-dev webpack@<VERSION>
```
    
### 2. Update package.json
```js
// ...
"scripts": {
    "build:dev": "webpack"
}
// ...
```
If there is a *webpack.config.js* file defined
```js
// ...
"scripts": {
    "start": "webpack --config webpack.config.js"
}
// ...
```

### 3. Webpack configuration file
Usually created with the **webpack.config.js** name. If instead of using Node module.exports we want to use ES6 export module we should name the config file like **webpack.config.babel.js** to transpilate to ES5.
- *output* property tells where to bundle the application and how to treat bundled code.
    - *output.filename*: specifies the name of each output file on disk.
    - *output.path*: indicates the output directory. It must be an absolute path.
```js
const path = require("path").resolve;

module.exports = {
    output: {
        filename: "bundle.js",
        path: path("dist"),
        publicPath: "/dist/"
    }
}
```
- *context* indicates the base directory for resolving entry points and loaders. It must be an absolute path. We can use module *path* to resolve the absolute path.
```js
const path = require("path").resolve;

module.exports = {
    context: path("src"),
    output: {
        filename: "bundle.js",
        path: path("dist"),
        publicPath: "/dist/"
    }
}
```
- *entry* properties tells where to start and follow the graph of dependencies to know what to bundle. It must be a relative path.
```js
const path = require("path").resolve;

module.exports = {
    context: path("src"),
    entry: "./bootstrap",
    output: {
        filename: "bundle.js",
        path: path("dist"),
        publicPath: "/dist/"
    }
}
```

### 4. Config validator
Validates the config file generating more friendly error messages on the output.
```js
//...
"devDependencies": {
    "webpack": "version",
    "webpack-validator": "version"
}
//...
```
```js
const wpValidator = require("webpack-validator"),
      path = require("path").resolve;

module.exports = wpValidator({
    context: path("src"),
    entry: "./bootstrap",
    output: {
        filename: "bundle.js",
        path: path("dist"),
        publicPath: "/dist/"
    }
});
```

## Resolve extensions
If I don't specified the extension of a file in the import/export section it's going to find the files with the extensions defined in the resolve property.
```js
const path = require("path");

module.exports = {
    context: __dirname,
    entry: "./bootstrap",
    output: {
        path: path.join(__dirname, '/public'),
        filename: "bundle.js"
    },
    devTool: "eval",
    resolve: {
        extensions: ['.js', '.json']
    }
}
```

## Minifying the bundle and Source maps
**Minification** <br/>
With the flag **-p** we can specify that It's gonna be for production so It has to be minified.
```js
// package.json
//...
"scripts": {
    "build": "webpack -p"
}
//...
```
**Source maps** <br/>
With the property **devTool** we are adding a source map to the bundle. Some values are:
- **eval**: Not valid for Production. Generates the code
- **source-map**: Valid for Production: 
```js
// webpack.config.js
const path = require("path").resolve;

module.exports = {
    context: path("src"),
    entry: "./bootstrap",
    output: {
        filename: "bundle.js",
        path: path("dist"),
        publicPath: "/dist/"
    },
    devTool: "eval"
}
```


<!-------------------------------------------- DEV SERVER -------------------------------------------->
## Webpack Dev Server
We should specify in webpack.config.js the *output.path* to avoid be cached.
```js
// package.json
//...
"devDependencies": {
    "webpack": "version",
    "webpack-dev-server": "version"
},
"scripts": {
    "dev": "webpack-dev-server",
    "start": "start"
}
//...
```

<!-------------------------------------------- DEV VS PROD -------------------------------------------->
## Development vs Production
```js
// package.json
//...
"scripts": {
    "build": "webpack -p --env.prod",
    "dev": "webpack-dev-server --env.dev",
    "build:dev": "webpack --env.dev"
}
//...
```
```js
// webpack.config.js
const path = require("path").resolve;

module.exports = (env) => {
    return wpValidator({
        context: path("src"),
        entry: "./bootstrap",
        output: {
            filename: "bundle.js",
            path: path("dist"),
            publicPath: "/dist/"
        },
        devTool: env.prod ? "source-map" : "eval"
    })
}
```

<!-------------------------------------------- BUNDLING -------------------------------------------->
## Bundling
In the entry point file we should reference the rest of files.
```js
(function(){
    //...
    require("./app");
    require("./helpers");
    //...
})();
```
*pathInfo* tells webpack to include a comment indicating with module is being referenced
```js
// webpack.config.js
//...
output: {
    filename: "bundle.js",
    path: path("dist"),
    publicPath: "/dist/",
    pathInfo: true
},
//...
```


<!--------------- LOADERS --------------->
## Loaders
<!--------------- BABEL --------------->
### Babel
1. Add loaders to the *webpack.config.js* file
```js
modules: {
    loaders: [
        { test: /\.js$/, loaders: ["babel"], exclude: /node_modules/}
    ]
}
```
```js
module: {
	rules: [
		{
			include: path.resolve(__dirname, 'js'),
			test: /\.js$/,
			loader: 'babel-loader'
		},
	]
}
```
2. Create a Babel file **.babelrc** 
```js
// .babelrc
{
    "presets": ["es2015", "es2016", "stage-2"]
}
```
For example, we can avoid to transpile modules in ES6
```js
{
  "presets": [
    ["es2015", {"modules": false} ],
    "es2016", 
    "stage-2"
  ]
}
```
3. Add dependencies to *package.json*
```json
// package.json
//...
"devDependencies": {
  "babel-core": "version",
  "babel-loader": "version", 
  "babel-preset-es2015": "version",
  "babel-preset-es2016": "version",
  "babel-preset-stage-2": "version",
  //...
}
//...
```

<!--------------- ESLINT --------------->
### ESLint
```js
module: {
	rules: [
		{
			enforce: 'pre',
			test: /\.js$/,
			loader: 'eslint-loader',
			exclude: /node_modules/
		}
	]
}
```

<!--------------- JSON --------------->
### JSON
```js
module: {
  rules: [
    {
      test: /\.json$/,
      loader: 'json-loader'
    }
  ]
}
```

<!--------------- CSS --------------->
### CSS
1. Add loaders to the *webpack.config.js* file
```js
modules: {
  loaders: [
    { 
      test: /\.css$/, 
      loaders: ["style", "css"]
    }
  ]
}
```
Another way
```js
module: {
	rules: [
		{
			test: /\.css$/,
			use: [
				'style-loader',
				{
					loader: 'css-loader',
					options: {
						url: false // Don't import images
					}
				}
			]
		}
	]
}
```
2. Remove the link tag with the css file reference
3. Add require to the entry point file
```js
(function(){
  require("styles/index.css")
  //...
  require("./app");
  require("./helpers");
  //...
})();
``` 

<!--------------- KARMA--------------->
### Karma
Adding Karma testing in Webpack
1. Add dependencies and scripts
```js
// package.json
"devDependencies": {
    //...
    "karma": "",
    "karma-chrome-launcher": "",
    "karma-mocha": "",
    "mocha": ""
    //...
},
"scripts": {
    //...
    "test": "karma test",
    "test:watch": "npm test -- --auto-watch --no-single-run",
    //...
}
```
2. Add the *karma.conf.js* file
```js
module.exports = config => {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'chai'],
        files: [
        'src/**/*.test.js',
        ],
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['Chrome'],
        singleRun: true,
        concurrency: Infinity
    })
}
```
3. Add tests
```js
describe("test", () => {
    //...
});
```
4. Integrate Webpack in Karma
```js
// package.json
"devDependencies": {
    //...
    "karma-webpack": "",
    //...
},
```
```js
// karma.conf.js
const webpackConfig = require("./webpack.config.babel")({env: "test"});
const fileGlob = "src/**/*.test.js";

module.exports = config => {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'chai'],
        files: [
            fileGlob,
        ],
        preprocessors: {
            [fileGlob]: ["webpack"]
        },
        webpack: webpackConfig,
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['Chrome'],
        singleRun: true,
        concurrency: Infinity
    })
}
```

<!-------------------------------------------- CODE COVERAGE -------------------------------------------->
## Code coverage
When testing gives data about the code lines
1. Add dependencies
```js
"devDependencies": {
    //...
    "babel-plugin-__coverage__": "",
    "karma-coverage": "",
    //...
}
```
2. Modify *.babelrc* file
```js
{
    "presets": ["es2015", "es2016", "stage-2"],
    "env": {
        "test": {
            "plugins": [
                ["__coverage__", {"ignore": "*.+(test|stub).*"}] // This avoid to take in consideration the tests
            ]
        }
    }
}
```
3. Modify *karma.conf.js* to add the following lines
```js
process.env.BABEL_ENV = "test";
//...
webpackMiddleware: {noInfo: true},
reporters: ['progress', 'coverage'],
converageReporter: {
    reporters: [
        { type: "lcov", dir: "coverage/", subdir: "." },
        { type: "json", dir: "coverage/", subdir: "." },
        { type: "text-summary" }
    ]
}
```
4. To add every file we should modify karma.conf.js
```js
const testGlob = "src/**/*.test.js",
      srcGlob = "src/**/!(*.test|*.stub).js";

module.exports = config => {
    config.set({
        //...
        files: [ testGlob, srcGlob ],
        exclude: ["src/bootstrap.js"],
        preprocessors: {
            [testGlob]: ["webpack"],
            [srcGlob]: ["webpack"]
        },
        //...
    })
}
```



<!-------------------------------------------- CODE SPLITTING -------------------------------------------->
## Code splitting
Loads the code in the moment it's needed
1. Remove imports that we are not going to need right now
```js
import myCriticalFunction from '../criticalfile'
//import myFunction from './file'
```
2. Substitute the function call for **System.import()**
```js
function ImportCode(param) {
  System.import("./file").then(({ default: myFunction}) => {
    myFunction(param);
  });
}
```



<!-------------------------------------------- CHUNKING CODE -------------------------------------------->
## Chunking code
Allows to cache files that does not change often
```js
//package.json
// This plugins allow us to generate the html with the script references
"devDependencies": {
    "html-webpack-plugin": ""
}
```
```js
//webpack.config.js
const webpack = require("webpack");
const htmlWebpackPugin = require("html-webpack-plugin");
//...
entry: {
    app: "./bootstrap.js",
    vendor: [ "vendor-file.js", "vendor-styles.css" ]
},
output: {
    filename: "bundle[name][chunkhash].js"
    //...
}
// The tests can fail so this must be loaded only in Prod mode
plugins: [
    new ProgressBarPlugin(),
    env.prod ? new webpack.optimize.CommonsChunkPlugin({
        name: "vendor"
    }) : undefined,
    new htmlWebpackPlugin({
        template: "./index.html",
        inject: "head"  // Indicates where to inject the scripts
    })
]
//...
```



<!-------------------------------------------- EXTRACT CSS -------------------------------------------->
## Extract CSS
1. Install dependencies
```js
"devDependencies": {
    "extract-text-webpack-plugin": ""
}
```
2. Modify the *webpack.config.js* file
```js
const extractTextPlugin = require("extract-text-webpack-plugin");
//...
module: {
    loaders: [
        {
            test: /\.css$/,
            loader: extractTextPlugin.extract({
                fallbackLoader: "style",
                loader: "css"
            })
        }
    ]
},
plugins: [
    new extractTextPlugin(env.prod ? "styles.[name].[chunkhash].css" : "styles.[name].css"),
    //...
]
```


<!-------------------------------------------- OFFLINE -------------------------------------------->
## Offline with Service Workers
1. Install dependencies
```js
"devDependencies": {
    "offline-plugin": ""
}
```
2. Modify the *webpack.config.js* file
```js
const OfflinePlugin = require("offline-plugin");
//...
plugins: {
    //...
    new OfflinePlugin(),
    new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: env.prod ? "production" : "development"
        }
    })
}
```
3. In the bootstrap file
```js
if (process.env.NODE_ENV === "production") {
    offlineInstall();
}
```



<!-------------------------------------------- DEPLOYMENT -------------------------------------------->
## Deployment to Surge.sh
1. Install dependencies and add scripts
```js
// package.json
"devDependencies": {
    "surge": ""
},
"scripts": {
    "predeploy": "npm run build", 
    "deploy": "./scripts/deploy"
}
```
2. Create a deploy file
```bash
export SURGE_LOGIN=<email>
export SURGE_TOKEN=<token>
node_modules/.bin/surge --project dist --domain https://APP-<name>.surge.sh
```


<!-------------------------------------------- REFERENCES -------------------------------------------->
## References

- [Webpack Concepts](https://webpack.js.org/concepts)
- [Webpack 2 Deep dive from Frontend Masters](https://frontendmasters.com/courses/webpack/)
- [Awesome Webpack](https://github.com/webpack-contrib/awesome-webpack)
- [Webpack 2 with PUG and SASS](https://webcodr.de/2017/01/webpack-2-with-pug-and-sass/)
