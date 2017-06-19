<h1>GULP</h1>

<!-- TOC -->

- [Initialization](#initialization)
- [Methods](#methods)
- [Grouping tasks](#grouping-tasks)
- [Concating tasks](#concating-tasks)
- [Tasks](#tasks)
    - [Default task](#default-task)
    - [Concat and minified js files](#concat-and-minified-js-files)
    - [SASS](#sass)
    - [PUG templates](#pug-templates)

<!-- /TOC -->




<!-------------------------------------------- INITIALIZATION -------------------------------------------->
## Initialization
- Philosophy of code over configuration
- Base on streams
- It's not necessary temporal files

Global installation
```bash
$ npm install --global gulp
```
Project installation
```bash
$ npm install --save-dev gulp
```



<!-------------------------------------------- METHODS -------------------------------------------->
## Methods
- **gulp.src()**
```js
gulp.src("client/templates/index.jade") // One file
gulp.src(["client/*.js", "!client/b*.js"]) // Mutiple files and exclusion
gulp.src("client/templates/**/*.jade") // Multiple files and folders
```
- **gulp.watch()**: Fires specific tasks when a file changes
```jjs
gulp.watch("js/source/*.js", ["js"]);
```



## Grouping tasks
```javascript
gulp.task("distro-list", ["images", "css", "js"]);
```

## Concating tasks
```javascript
gulp.task("css-step-2", ["css-step-1"], function(){
    console.log("css-step-2 starts when css-step-1 has finished");
});
```

<!-------------------------------------------- TASKS -------------------------------------------->

## Tasks
### Default task
```js
var gulp = require("gulp");

gulp.task("default", function() {
    console.log("Default gulp task");
});
```


### Concat and minified js files
```js
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

### SASS
```js
var gulp = require("gulp"),
    sass = require("gulp-sass"),
    sourcemaps = require("gulp-sourcemaps"),
    bulkSass = require('gulp-sass-bulk-import');

gulp.task("sass", function() {
    return gulp.src("./styles/app.scss")
               .pipe(sourcemaps.init())
               .pipe(bulkSass())
               .pipe(sass().on("error", sass.logError))
               .pipe(sourcemaps.write())
               .pipe(gulp.dest("./styles"));
});
```
SASS watcher
```js
gulp.task("sass:watch", function() {
    gulp.watch("./styles/**/*.scss", ["sass"]);
});
```


### PUG templates
```js
var gulp = require("gulp"),
    pug = require("gulp-pug");

gulp.task("pug", function() {
    return gulp.src("./templates/index.pug")
               .pipe(pug())
               .pipe(gulp.dest("."));
});
```





