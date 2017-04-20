# Gulp

- Philosophy of code over configuration
- Base on streams
- It's not necessary temporal files

## Installation
```
npm install --global gulp
````
Including the dependency in the package.json
```
npm install --save-dev gulp
```
## Default tasks
- Create *gulpfile.js* and add dependencies and the first default task
```javascript
var gulp = require("gulp");

gulp.task("default", function() {
    console.log("Default gulp task");
});
```
Starting the task
```
gulp
```

## Tasks
### Concat and minified js files
```javascript
var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");

gulp.task("concat-ugly", function(){ 
    gulp.src("js/sources/*.js")
        .pipe(concat("app.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"))
});
```
- Install the new dependencies
```
npm install -save gulp-concat && npm install -save gulp-uglify
```
- Starting the task
```
gulp concat-ugly
```

## Grouping tasks
```javascript
gulp.task("distro-list", ["images", "css", "js"]);
```
- Starting the task
```
gulp distro-list
```
## Concating tasks
```javascript
gulp.task("css-step-2", ["css-step-1"], function(){
    console.log("css-step-2 starts when css-step-1 has finished");
});
```

## Methods
- gulp.src() and gulp.dest()
```javascript
gulp.src("client/templates/index.jade") // One file
gulp.src(["client/*.js", "!client/b*.js"]) // Mutiple files and exclusion
gulp.src("client/templates/**/*.jade") // Multiple files and folders
```
- gulp.watch(): Fires specific tasks when a file changes
```javascript
gulp.watch("js/source/*.js", ["js"]);
```