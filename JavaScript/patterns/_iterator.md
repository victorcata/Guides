# Iterator pattern

- Access to the elements of an object without exposing its internal structure
- Secuencial access to the elements or properties of an object

## Iterator pattern in an array
```javascript
var iterator = (function(){
    var index = 0,
        data = [1, 2, 3, 4, 5, 6, 7],
        total = data.length;

    return {
        next: function() {
            var element;
            if (!this.hasNext()) {
                return null;
            }
            element = data[index];
            index++;
            return element;
        },
        hasNext: function() {
            return index < total;
        },
        rewind: function() {
            index = 0;
            return data[index];
        },
        actual: function() {
            return data[index];
        }
    }
})();
```

## Iterator pattern in an object
```javascript
var iterator = (function(){
    var index = 0,
        data = { first: 1, second: 2, third: 3},
        keys = Object.keys(data),
        total = data.length;

    return {
        next: function() {
            var element;
            if (!this.hasNext()) {
                return null;
            }
            element = data[keys[index];
            index++;
            return element;
        },
        hasNext: function() {
            return index < total;
        },
        rewind: function() {
            index = 0;
            return data[keys[index]];
        },
        actual: function() {
            return data[keys[index]];
        }
    }
})();
```