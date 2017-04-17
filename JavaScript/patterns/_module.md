# Module patterns

- Uses IIFEs
- Encapsules the logic
- Only a part is public

```javascript
var math = math || {};

math.operations = (function() {
    var total = 0;
    
    return {
        add: function(a, b) { },
        substract: function(a, b) { },
        total: function() { }
    }
})();

math.operations.add(2, 3);
math.operations.substract(10, 4);
```

## Revealing module pattern

- Includes private methods in the return

```javascript
var object = function() {
    this.prop = "prop";
    this.prop2 = "prop2";
    
    var _propPrivate = "publ";

    function _privateMethod() { }
    function _privateMethod2() { }
    
    return {
        publicMethod1: _privateMethod,
        publicMethod2: _privateMethod2
    }
}

```