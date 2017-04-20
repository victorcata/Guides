# SMACSS
<!-- TOC -->

- [SMACSS](#smacss)
    - [Categorization](#categorization)
        - [Base](#base)
        - [Layout](#layout)
        - [Module](#module)
        - [States](#states)
        - [Themes](#themes)
    - [Naming convention](#naming-convention)
        - [Layout](#layout-1)
        - [Module](#module-1)
        - [States](#states-1)
        - [Themes](#themes-1)
    - [Depth of applicability](#depth-of-applicability)
    - [Folder structure](#folder-structure)
    - [Advises](#advises)
    - [References](#references)

<!-- /TOC -->
## Categorization
- Every style we write serves one of these purposes whether we are aware of it or not
- Isolating code allows for easy reuse, testing and debugging
- Categorizing reveals patterns, easier to identify when things break the pattern

### Base
- Element selectors
- CSS Resets
- Normalize

We have to be careful when we choose base elements. Maybe at the beginning there is only one element of each but every project grows up quickly. Some of these elements are: button, table or input.

### Layout
- Major containing elements
- Grid systems
- Grouping content
- Specify widths and margins

### Module
- Contains content
- The majority of the site
- Each module is an interface that your users have to learn
- Each module is code that has to be written, delivered and maintained
- Isolate modules from each other
- Prevent styles from coming in or out
- Can contain sub-modules or sub-components
- Expands to fill layout
- Every module has to be testeable
- Include media queries with the modules they affect
- Sub-modules: they are module variations. p.e: btn, btn-default, btn-large, etc.
- Sub-components: they are the child elements of a module

### States
- Changes the Look & Feel of a module or layout
- Like a module variation (sub-module) but indicate a JavaScript dependency
- States are !important
- Avoid a state affecting more than one module at a time

### Themes
- Only for on-the-fly style changes
- Usually aren't needed

## Naming convention
- Use classes over IDs to avoid specificity

### Layout
Uses the *layout-* prefix to distinguish layouts between modules 

```css
.layout-header {}
.layout-sidebar {}
.layout-content {} 
```

### Module
Uses the type of module as the name
```css
.tab {}
.listview {}
.btn {}
```
To define sub-modules the module name is added as a prefix 
```css
.btn {}
.btn-large {}
.btn-small {}
.btn-default {}
.btn-search {} 
```
Sub-components are defined in the same way we define sub-modules
```css
.modal {}
.modal-header {}
.modal-body {}
.modal-footer {}
```

### States
- Uses the *is-* prefix to indicate JavaScript dependency or a toggleable style
- If the style is specific to a module must include the module name
```css
.btn {}
.btn-is-active {}
.btn-is-disabled {}
```

### Themes
```css
.theme-header {}
.theme-border {}
.theme-background {}
```

## Depth of applicability
- Use fewer selectors, preferably one
- Use child selector to limit depth

Instead of 
```css
#comments .comment .meta .authorname {}
#comments .comment .meta .commentnumber a {}
```
we should use 
```css
.comment-author {}
.comment-number > a {}
```

## Folder structure
```
/base
    |_ base
    |_ fonts
    |_ icons
/dependencies
    |_ animations
    |_ colors
    |_ global
    |_ mixins
/layout
    |_ grid
    |_ layout
/module
    |_ module_1
    |_ module_2
    |_ ...
    |_ module_n
application
```

## Advises
- Place everything in their own files: base.css, layout.css, grid.css, button.css, carousel.css, modal.css, ...
- Scripts are written for individual modules
- States are modified, not inline styles
- Avoid jQuery methods that add inline styles like .show() and .hide()
- Identify areas to refactor
- Code css for the system, not the page
- Smaller rule sets make it easier on the browser
- Separation of files allows members of the team to work on separate files

## References

- [SMACSS Course Frontend Masters by Jonathan Snook](https://frontendmasters.com/courses/smacss/?u=83c5033cb7d4129b73f4255d154ceb45210e43e2)
