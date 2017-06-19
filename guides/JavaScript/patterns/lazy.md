# Lazy definition

- The functions are created the first time is executed
- Save resources in complex calculus

```javascript
var myApp = {};

myApp.events = {
    add: function(el, type, fn) {
        if (typeof window.addEventListener === 'function') {
            myApp.events.add = function(el, type, fn) {
                el.addEventListener(type, fn, false);
            }
        } else {
            myApp.events.add = function(el, type, fn) {
                el.attachEvent('on' + type, fn);
            }
        }
        myApp.events.add(el, type, fn);
    },
    remove: function(el, type, fn) {
        if (typeof window.addEventListener === 'function') {
            myApp.events.remove = function(el, type, fn) {
                el.removeEventListener(type, fn, false);
            }
        } else {
            myApp.events.remove = function(el, type, fn) {
                el.detachEvent('on' + type, fn);
            }
        }
        myApp.events.remove(el, type, fn);
    }
}
```