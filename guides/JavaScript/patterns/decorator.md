# Decorator pattern

- Extends objects
- Overwrites methods dynamically
- Avoids create successives classes to inherit from the first one

```javascript
function carConstructor(color) {
    this.brand = "";
    this.model = "";
    this.color = color || "";
};

var carRed = new carConstructor("Red");

// Decorators
carRed.getDetails = function() { };

carRed.defineColor = function(newColor) {
    this.color = newColor;
}
```

## Multiple decorators
```javascript
function NewObject() {
    this.prop = "";
    this.method = function() { }
}

function extendedMethod1(obj) { }
function extendedMethod2(obj) { }

var obj = new NewObject();
extendedMethod1(obj);
extendedMethod2(obj);
```
