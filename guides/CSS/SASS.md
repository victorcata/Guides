<h1>SASS</h1>

<!-- TOC -->

- [Nesting and scoping](#nesting-and-scoping)
    - [Descendant](#descendant)
    - [Direct descendant](#direct-descendant)
    - [Parent selector](#parent-selector)
    - [Parent outside](#parent-outside)
- [Import](#import)
- [Variables](#variables)
    - [Types](#types)
- [String interpolation](#string-interpolation)
- [References](#references)

<!-- /TOC -->

<!--------------- NESTING --------------->
# Nesting and scoping
## Descendant
HTML
```html
<div class="container">
  <div class="child"></div>
  <div class="child"></div>
</div>
```
CSS
```css
.container .child {
  ...
}
```
SASS
```css
.container {
  .child {
    ...
  }
}
```
## Direct descendant
```html
<div class="container">
  <div class="child"></div>
  <div class="children">
    <div class="child"></div>
  </div>
</div>
```
CSS
```css
.container > .child {
  ...
}
```
SASS
```css
.container {
  > .child {
    ...
  }
}
```
## Parent selector
```html
<div class="container aside">
  ...
</div>
```
CSS
```css
.container.aside {
  ...
}
```
SASS
```css
.container {
  &.aside {
    ...
  }
}
```
## Parent outside
CSS
```css
.button {
  ...
}
.theme-dark .button {
  ...
}
```
SASS
```css
.button {
  .theme-dark & {
    ...
  }
}
```

<!--------------- IMPORT --------------->
# Import
Allows to unified in one file different SASS files
```css
@import '_layouts'
@import '_modules'
```

<!--------------- VARIABLES --------------->
# Variables
- The variables stars with **$**
- **!default** allows to define a variable only if it's not defined anywhere else
```css
$error_color: #F00 !default;
```
We can define variables inside a class
```css
.className {
  $text-color: #EEE;
  color: $text-color;
  box-shadow: 0 0 2px $text-color;
}
```
## Types
- **Numbers**: 10, 200px, 50%, 12pt
- **Colors**: #FFF, rgb(255, 255, 0), red
- **Strings**: "image.png", url("image.png")
- **Booleans**: true, false
- **Lists**: List of valued
- **Maps**: Key-value pair

<!--------------- STRING INTERPOLATION --------------->
# String interpolation
We can interpolate a value with **#{...}**
SASS
```css
/* Hue is #{hue(green)} */
```
CSS
```css
/* Hue is 120deg */
```

<!--------------- REFERENCES --------------->
# References
- [SASS](http://sass-lang.com/)
- [SASS Fundamentals - Frontend Masters](https://frontendmasters.com/courses/sass)
