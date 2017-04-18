# Facade patterns

- Creates interfaces in a high level
- Very used in libraries
- Hides the complex code
- Uncoupled of external code

```javascript
var moduleRobot = (function(){
    var _private = {
        velocity: 0,
        velocityMax: 20,
        velocityMin: 2
        actualVelocity: function() { };
        adjustVelocity: function(value){ };
        acelerate: function() { };
        decelerate: function() { };
        stop: function() { };
    };

    return {
        facadeAPI: {
            cruiseSpeed: function(value) {
                _private.adjustVelocity(value);
                _private.actualVelocity
            },
            slower: _private.decelerate,
            faster: _private.acelerate,
            stop: _private.stop
        }
    }
})();
```