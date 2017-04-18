# Chain of responsability pattern

```javascript
var Request = function(quantity){
    this.quantity = quantity;
}
Request.prototype = {
    get: function(value) {
        // ...
        return this;
    }
}

function calculateReturn(quantity) {
    var request = new Request(quantity);

    request.get(500).get(200).get(100).get(50).get(10).get(5).get(1);
}

```