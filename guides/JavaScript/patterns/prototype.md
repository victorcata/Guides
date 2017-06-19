
# Prototype pattern

- Creates objects based on a template of an existing one through cloning
- It's an easy way to implement inheritance
- Improves performance: The functions are created by reference instead of creating their own copies

## Simple clone

```javascript
var car = {
	brand: "",
	model: "",
	color: ""
};

var cloneCar = Object.create(car);
```

## Complex clone

```javascript
var car = {
	brand: "",
	model: "",
	color: ""
};

var van = {
	volume: "",
	limit: ""
};

var driver = {
	name: "",
	age: "",
	details: function() {
		console.info("The driver is %s", this.name);
	}
}

var myPickup = Object.create(car, {
	"driver": { value: driver },
	"limit": { value: van }
});
```

We can simulate the pattern without using Object.create
```javascript
var carPrototype = {
	init: function(model) { },
	getModel: function() { }
};

function car(model) {
	function F() {};
	F.prototype = carPrototype;
	var f = new F();
	f.init(model);
	return f;
}

var myCar = car("Model");
```
