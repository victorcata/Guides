
### Auto-executing anonymous functions
```javascript
(function(){
  ...
})();
```
If we are going to reference an element from the outside will have a better performance if we pass it as parameter
```javascript
var app = app || {};
(function(w, doc, ns){
  ...
})(window, document, app);
```
