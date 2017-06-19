# Factory pattern

Provides a generic interface for creating objects, where we can specify the type of factory object we wish to be created.

- The main classes are the creator and the product
- Not using new
- The factory object returns a new object

```javascript
var carOptions = {
    model: "Land Rover",
    age: 35,
    color: "Brown",
    type: "4x4"
}

var vanOptions  = {
    weight: 768,
    volume: 4.5,
    type: "Van"
}

var car = function(options) {
    this.model = options.model;
    this.age = options.age;
    this.color = options.color;
    this.type = options.type;
}

var van = function(options) {
    this.weight = options.weight;
    this.volume = options.volume;
}

function factoryVehicle() {}

factoryVehicle.prototype.vehicleType = car;

factoryVehicle.prototype.createVehicle = function(options) {
    if (options.type === "4x4") {
        this.vehicleType = car;
    } else {
        this.vehicleType = van;
    }
    return new this.vehicleType(options);
}

var factory = new factoryVehicle();

var myVan = factory.createVehicle(vanOptions),
    myCar = factory.createVehicle(carOptions);
```