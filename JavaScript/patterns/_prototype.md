
### Prototypes
In this example we have to create the method everytime the constructor is called
```javascript
function Obj(value) {
  this.prop = value;
  this.method = function() {
    return this.prop;
  };
}
```
It's better to define the methods in the constructor, so the creation will be done once
```javascript
function Obj(value) {
  this.prop = value;
}
Obj.prototype.method = function() {
  return this.prop;
};
```