# Observer pattern

- Defines a dependency one-to-many between objects
- Used when an element wants to be aware of another object
- Key of the MVC pattern

```javascript
var mainObject = {
    observers = [],
    suscription: function(f) {
        this.observers.push(f);
    },
    removeSuscription: function(f) {
        this.observers = this.observers.filter(function(observer){
            if (observer !== f) {
                return observer;
            }
        })
    },
    message: function(o, object) {
        var scope = object || window;
        this.observers.forEach(function(observer){
            observer.call(scope, o);
        });
    }
}

var anotherFunction1 = function(item) { };

mainObject.message("message 1");

mainObject.suscription(anotherFunction1);
mainObject.message("message 2");

mainObject.removeSuscription(anotherFunction1);
mainObject.message("message 2");
```
