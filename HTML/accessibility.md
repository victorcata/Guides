<h1>Web Accessibility</h1>


<!-- TOC -->

- [Keyboard](#keyboard)
    - [Tabbable Elements](#tabbable-elements)
    - [Tabindex](#tabindex)
    - [Skip navigation](#skip-navigation)
- [References](#references)

<!-- /TOC -->

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

# References

[WebAIM Web Accessibility in mind](http://webaim.org/)
[Skip links](webaim.org/techniques/skipnav)
[Frontend Masters - Web Accessibility by Jon Kuperman](https://frontendmasters.com/courses/web-accessibility/?u=83c5033cb7d4129b73f4255d154ceb45210e43e2)