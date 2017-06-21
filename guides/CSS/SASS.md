<h1>SASS</h1>

<!-- TOC -->

- [Nesting and scoping](#nesting-and-scoping)
  - [Descendant](#descendant)
  - [Direct descendant](#direct-descendant)
  - [Parent selector](#parent-selector)
  - [Parent outside](#parent-outside)
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

# References
- [SASS](http://sass-lang.com/)
- [SASS Fundamentals - Frontend Masters](https://frontendmasters.com/courses/sass)
