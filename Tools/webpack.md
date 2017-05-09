<h1>WEBPACK 2</h1>

<!-- TOC -->

- [Initialization](#initialization)
    - [1. Installation](#1-installation)
    - [2. Update package.json](#2-update-packagejson)
    - [3. Webpack configuration file](#3-webpack-configuration-file)
    - [4. Config validator](#4-config-validator)
- [Webpack Dev Server](#webpack-dev-server)
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
        filename: "bundle.js"
    }
});
```

## Webpack Dev Server
We should specify in webpack.config.js the *output.path* to avoid be cached.
```js
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



## References

- [Webpack Concepts](https://webpack.js.org/concepts)
- [Webpack 2 Deep dive from Frontend Masters](https://frontendmasters.com/courses/webpack/)