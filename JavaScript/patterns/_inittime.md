# Init-time branching pattern

- When there is no change during the execution
- It is loaded at the begining and return functions according to the condition

```javascript
var myApp = {};

myApp.events = {
    add: null,
    remove: null
}

if (typeof window.addEventListener === 'function') {
    myApp.events.add = function(el, type, fn) {
        el.addEventListener(type, fn, false);
    };
    myApp.events.remove = function(el, type, fn) {
        el.removeEventListener(type, fn, false);
    };
} else {
    myApp.events.add = function(el, type, fn) {
        el.attachEvent('on' + type, fn);
    };
    myApp.events.remove = function(el, type, fn) {
        el.detachEvent('on' + type, fn);
    };
}
```