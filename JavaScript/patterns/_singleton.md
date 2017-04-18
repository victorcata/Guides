# Singleton pattern

- Restricts the creation of objects of the same class
- Guarantees that a class only have one instance

```javascript
var singleton = (function(){
    var instance;

    function createInstance() {
        var object = new Object();
        return object;
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();
```