<h1>WEBPACK 2</h1>

<!-- TOC -->

- [Initialization](#initialization)
    - [1. Installation](#1-installation)
    - [2. Update package.json](#2-update-packagejson)
    - [3. Webpack configuration file](#3-webpack-configuration-file)
    - [4. Config validator](#4-config-validator)
- [Minifying the bundle and Source maps](#minifying-the-bundle-and-source-maps)
- [Webpack Dev Server](#webpack-dev-server)
- [Development vs Production](#development-vs-production)
- [Bundling](#bundling)
- [Transpiling](#transpiling)
- [CSS and Style loader](#css-and-style-loader)
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



<!-------------------------------------------- TRANSPILING -------------------------------------------->
## Transpiling
1. Add loaders to the *webpack.config.js* file
```js
// webpack.config.js
//...
modules: {
    loaders: [
        { test: /\.js$/, loaders: ["babel"], exclude: /node_modules/}
    ]
}
//...
```
2. Create a Babel file **.babelrc** 
```js
// .babelrc
{
    "presets": ["es2015", "es2016", "stage-2"]
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



<!-------------------------------------------- CSS LOADER -------------------------------------------->
## CSS and Style loader
1. Add loaders to the *webpack.config.js* file
```js
// webpack.config.js
//...
modules: {
    loaders: [
        //...
        { test: /\.css$/, loaders: ["style", "css"]}
    ]
}
//...
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


<!-------------------------------------------- REFERENCES -------------------------------------------->
## References

- [Webpack Concepts](https://webpack.js.org/concepts)
- [Webpack 2 Deep dive from Frontend Masters](https://frontendmasters.com/courses/webpack/)