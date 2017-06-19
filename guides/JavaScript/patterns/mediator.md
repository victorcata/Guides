# Mediator pattern

- There is a mediator object which communicates between objects
- Reduces the dependency in the communication between objects
- Unique interface
- Every module communicates with the mediator module

```javascript
var mediator = (function(){
    var _themes = {};

    var _suscribe = function(theme, fn) {
        if (!_themes[theme]) {
            _themes[theme] = [];
        }
        _themes[theme].push({ context: this, callback: fn});
        return this;
    };

    var _publish = function(theme) {
        var args;
        if (!_themes[theme]) {
            return false;
        }
        args = Array.prototype.slice.call(arguments, 1);
        for (var i = 0; i < _themes[theme].length; i++) {
            var suscription = _themes[theme][i];
            suscription.callback.apply(suscription.context, args);
        }
        return this;
    };

    return {
        themes: _themes,
        publish: _publish,
        suscribe: _suscribe,
        installOn: function(obj) {
            obj.suscribe = _suscribe;
            obj.publish = _publish;
        }
    }
})();

var module1 = {},
    module2 = {};

mediator.installOn(module1);
mediator.installOn(module2);

module1.suscribe("test", function() { });
module2.suscribe("test2", function() { });
mediator.suscribe("testCentral", function(){ });

module2.publish("testCentral");
module2.publish("test2");
module2.publish("test");
``` 
