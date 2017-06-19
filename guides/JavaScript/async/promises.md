# Promises

A promise represents the result of an asynchronous operation

States:
- Fulfilled: the action in relation to the promise was obtained
- Rejected: the action failed
- Pending: the action has not finish o rejected yet
- Settled: the action has been resolved (succeded or rejeced)

```javascript
var errorMode = false,
    promiseCounter = 0,
    numnPromiseActual = ++promiseCounter;

var myPromise = new Promise(
    function(resolve, reject) {
        if (errorMode) {
            reject(numPromiseActual)
        } else {
            window.setTimeout(function() {
                resolve(numPromiseActual);
            }, Math.random() * 2000 + 1000);
        }
    }
});

myPromise.then(function(val) {
    // ...
}).catch(function(val) {
    // ...
});
```
- **.race():**
```javascript
var p1 = new Promise(function(resolve, reject)) { };
var p2 = new Promise(function(resolve, reject)) { };

Promise.race([p1, p2]).then(function(value) { });
```

- **.all():**
```javascript
var p1 = new Promise(function(resolve, reject)) { };
var p2 = new Promise(function(resolve, reject)) { };
var p3 = new Promise(function(resolve, reject)) { };

Promise.all([p1, p2, p3]).then(function(value) { }, function(reason) { });
```