# Namespace pattern

- Avoid collisions with other objects or variables in the global namespace.
- Organize blocks of functionality.
- Reduces the number of global objects.
- Everything is part of a unique object.
- Served in several js files.

## Namespace on an anonimous function
```javascript
var myApp = (function(){
    var privateMethod1 = function() {
        
    };
    var privateMethod2 = function() {
        
    };
    var privateProperty = "prop1";
    return {
        publicMethod1: privateMethod1,
        publicProps: {
            property1: privateProperty,
            property2: "prop2"
        },
        other: {
            publicMethod2: privateMethod2
        }
        // ...
    }
})();
```
## Namespace extension
```javascript
var myApp = myApp || {};
(function(namespace){
    namespace.property1 = "prop1";
    namespace.method1 = function() {
        
    };
})(myApp);
```
## Using namespaces
```javascript
var myApp = myApp || {};

myApp.data = {};

myApp.data = {
    method: function() {
        
    },
    property1: 1,
    property2: 2
}
```
## Extension method basic
```javascript
var myApp = myApp || {};

myApp.createElement = function(name){
    var parts = name.split(".");
    var namespace = myApp;
    for (var i in parts) {
        if (!namespace[i]) {
            namespace[parts[i]] = {};
        }
        namespace = namespace[parts[i]];
    }
}

myApp.createElement("one.two.three.anotherNode.levels");
myApp.one.two.three.anotherNode.levels = "Bottom level";
```
## Extension method complete
Stoyan Stefanov (JavaScript Patterns book) solution updated by Addy Osmani
```javascript
var myApp = myApp || {};

function extend(ns, ns_string) {
    var parts = ns_string.split("."),
        parent = ns,
        pl, i;
    
    if (parts[0] == "myApp") {
        parts = parts.slice(1);
    }
    
    pl = parts.length;
    for (i = 0; i < pl; i++) {
        if (typeof parent[parts[i]] == "undefined") {
            parent[parts[i]] = {};
        }
        
        parent = parent[parts[i]];
    }
    
    return parent;
}

var mod = extend(myApp, "myApp.modules.module2");
extend(myApp, "moduleA.moduleB.moduleC.moduleD");
```