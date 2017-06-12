<h1>Web Accessibility</h1>


<!-- TOC -->

- [Keyboard](#keyboard)
    - [Tabbable Elements](#tabbable-elements)
    - [Tabindex](#tabindex)
    - [Skip navigation](#skip-navigation)
    - [Tabtrapping](#tabtrapping)
- [Screen Readers](#screen-readers)
    - [Alt text](#alt-text)
    - [Label and ARIA label](#label-and-aria-label)
    - [ARIA Roles](#aria-roles)
- [ARIA (Accessible Rich Internet Applications)](#aria-accessible-rich-internet-applications)
    - [Role](#role)
    - [aria-label](#aria-label)
    - [aria-describedby](#aria-describedby)
    - [ARIA CSS Selectors](#aria-css-selectors)
    - [Live regions](#live-regions)
- [References](#references)

<!-- /TOC -->

<!------------------------------------------- KEYBOARD ------------------------------------------->
# Keyboard

## Tabbable Elements
- a
- button
- input
- select
- textarea
- iframe

## Tabindex
```html
<div tabindex="1">It's tabbable</div>
```
Values
- Negative value: the element should be focusable, but should not be reachable via sequential keyboard navigation
- 0: the element should be focusable and reachable via sequential keyboard navigation and its relative order is defined by the platform
- Positive value: should be focusable and reachable, its relative order is defined by the value of the attribute

## Skip navigation
A link is provided to skip navigation and other page elements that are repeated across web pages
```html
<a href="#mainContent" class="skip-link">
    Skip to main content
</a>
...
<div class="navigation">...</div>
<div id="maincontent" tabindex="-1">...</div>
```
```css
#skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    z-index: 9999;
}

#skip-link:focus {
    top: 0;
}
```

## Tabtrapping
Steps:
1. Select the modal
2. Find and select all focusable children
3. Convert them to an Array
4. Find the first and the last tabbable item inside the modal
5. Listen for keydown event
6. Check to see if it's the tab key and if the shift key is being held down
7. If moving forward and on the last item, focus the first item
8. If moving backward and on the first item, focus the last item
```js
function tabTrap() {
    var previousFocused = document.activeElement,
        focusables = modal.querySelectorAll("a[href], area[href], input:not([disabled]), iframe, object, embed, [tabindex='0'], [contenteditable]");
    
    focusables = Array.prototype.slice.call(focusables);

    var firstItem = focusables[0],
        lastItem = focusables[focusables.length - 1];

    modal.addEventListener("keydown", trap);
}

function trap(event) {
    if (event.keyCode === 9) {
        if (e.shiftKey) {
            if (document.activeElement === firstItem) {
                event.preventDefault();
                lastItem.focus();
            }
        } else {
            if (document.activeElement === lastItem) {
                event.preventDefault();
                firstItem.focus();
            }
        }
    }
}
```

<!------------------------------------------- SCREEN READERS ------------------------------------------->
# Screen Readers

Most popular desktop Screen Readers
- JAWS (Windows)
- ZoomText (Mac and Windows)
- Window-Eyes (Windows)
- NVDA (Windows)
- VoiceOver (Mac)
- ChromeVox (Browser)

Hidding things from screen readers
- display: none
- visibility: hidden
- input hidden

Hide from user but show to screen readers
```css
.screenreader {
    position: absolute;
    left: -10000px;
    width: 1px;
    height: 1px;
    overflow: hidden;
}
```

## Alt text

```html
<img alt="alternate text"/>
```
It's read as: "alternate text, image". <br/>
Tips:
- **alt=""** intentionally skip the element
- **alt="UPPERCASE"** individually reads 

## Label and ARIA label

```html
<label for="username">Name</label>
<input type="text" id="username" />
```
With ARIA label, when label tag is not used.
```html
<div id="name">Name</div>
<input type="text" aria-labelledby="name" />
```

## ARIA Roles
Now it's part of the HTML5 specification. Used to define semantic tags.
```html
<article role="article">Content</article>
```
If the browser doesn't support article tag it's translated to a div but the ARIA rol let us keep the semantic meaning
```html
<div role="article">Content</div>
```


<!------------------------------------------- ARIA ------------------------------------------->
# ARIA (Accessible Rich Internet Applications)

## Role

Define the type of element is described. A Screen Reader parse the element as a button in this example.
```html
<span role="button" tabindex="0" class="button">Click me</span>
```

## aria-label
It's used to define a string that labels the current element. Use it in cases where a text label is not visible on the screen. If there is visible text labeling the element, use **aria-labelledby** instead.

```html
<button aria-label="Close">Click me</button>
```

## aria-describedby
It's used to indicate the IDs of the elements that describe the object.

```html
<button aria-label="Close" aria-describedby="descriptionClose">Click Me</button>
<div id="descriptionClose">Closing this window will discard any information entered and return you back to the main page</div>
```

## ARIA CSS Selectors
```css 
.dropdown[aria-expanded="false"] .icon::after { ... }
.dropdown[aria-expanded="true"] .icon::after { ... }
```

## Live regions

- aria-live: Let the Screen Readers knows that a part of the site has been updated. The values are *off/polite/assertive*
- aria-relevant: Describes what types of changes have ocurred to an *aria-live* region and of which are relevant and should be announced. Values are *additions/removals/text/all*

<!------------------------------------------- REFERENCES ------------------------------------------->
# References

[WebAIM Web Accessibility in mind](http://webaim.org/)
[WebAIM Guidelines](http://webaim.org/standards/wcag/checklist)
[Skip links](webaim.org/techniques/skipnav)
[Frontend Masters - Web Accessibility by Jon Kuperman](https://frontendmasters.com/courses/web-accessibility/?u=83c5033cb7d4129b73f4255d154ceb45210e43e2)