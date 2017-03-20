# Web Workers
- [Instance](#instance)
- [Methods](#methods)
- [Communication](#communication)
- [Stoping a web worker](#stoping-a-web-worker)
### Instance
```javascript
var worker = new Worker([JS file])
```
### Methods
- **postMessage:** sends a message to the worker's inner scope
```javascript
worker.postMessage([message], [transferList]);
```
- **terminate:** immediately terminates the worker
```javascript
worker.terminate()
```
### Communication
- From the original file
```javascript
worker.addEventListener("message", function(event) {
  console.log("The worker says %s", event.data);
}, false);
```
- From the web worker
```javascript
self.addEventListener("message", function(event) {
  self.postMessage(event.data);
}, false);
```
### Stoping a web worker
- From the web worker
```javascript
self.close()
```