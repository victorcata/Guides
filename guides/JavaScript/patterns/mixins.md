# Mixins pattern

Mixins are classes which offer functionality that can be inherited by a sub-class for the purpose of function re-use.

```javascript
function Dog(name) {
    this.name = name || "John Dog";
    this.legs = 4;
    this.eyes = 2;
}

var GuideDog = function() {};
GuideDog.prototype = {
    guide: function() { }
};

var SuperDog = function() {};
SuperDog.prototype = {
    run: function() { },
    find: function() { },
    hide: function() { },
    drive: function() { }
};

function extend(classReceiver, classDonor) {
    if (arguments[2]) {
        for (var i = 2, i < arguments.length, i++) {
            classReceiver.prototype[arguments[i]] = classDonor.prototype[arguments[i]];
        }
    } else {
        for (var name in classDonor.prototype){
            if (!classReceiver.prototype[name]) {
                classReceiver.prototype[name] = classDonor.prototype[name];
            }
        }
    }
}

extend(Dog, GuideDog);
extend(Dog, SuperDog, "drive");

var myDog = new Dog("Max");
```