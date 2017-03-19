# Object oriented programming


- Constructor
```javascript
function Person() { }
```
- Properties
```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}
```
- Methods
```javascript
function Person(name, age) {
    this.name = name;
    this.walk = function() {
        console.log(this.name + ' is walking...');
    }
}
```
- Method extension
```javascript
Person.prototype.talk = function() {
    console.log(this.name + ' is talking...');
}
```
- Inheritance
```javascript
function Vehicle(type) {
    this.type = type;
}

function Car(tires) {
    this.tires = tires;
}

var car = new Car(4);
car.prototype = new Vehicle('private');
```
- Inheritance (Simplified)
```javascript

function Vehicle(type) {
    this.type = type;
}

function Car(tires) {
    this.tires = tires;
}

Car.prototype = new Vehicle('private');
```
- Public and private
```javascript
function Vehicle(brand, color, type) {
    // Public
    this.brand = brand;
    this.color = color;
    this.type = type;

    // private
    var showDetails = true;
    var hasOwner = false;

    // Public
    this.startEngine = function() { }

    // private
    function calculateGasConsumed() { }
}
```
- Opcional data
```javascript
function Vehicle(brand, color, tires) {
    this.brand = brand || 'BMW';
    this.color = color || 'White';
    this.tires = tires || 4;
}
```
- Native objects extension
```javascript
Array.prototype.coincidences = function(word) { }
```
- this === Window
```javascript
// Functions
function test() {
    console.log(this === window);
}
test();

// Objects
var obj = {
    name: 'John',
    lastName: 'Doe',
    complete: this.name + ' ' + this.lastName
};
```
- this !== Window
```javascript
// Functions
function Test() {
    console.log(this === window);
}
new Test();

// Objects
var obj = {
    name: 'John',
    lastName: 'Doe',
    complete: function() {
        return this.name + ' ' + this.lastName;
    }
}
```
- this context lost
```javascript
// Error
var obj = {
    value: 0;
    increase: function(increment) {
        function anotherFunction(val) {
            this.valor += val;
        }
        anotherFunction();
    }
}

// Correct
var obj = {
    value: 0;
    increase: function(increment) {
        var that = this;
        function anotherFunction(val) {
            that.valor += val;
        }
        anotherFunction();
    }
}
```
- .call() vs .apply() vs .bind()
```javascript
var obj = {
    value: 10,
    sum: function(num1, num2) {
        return (num1 + num2) * this.value;
    }
}

var obj2 = {
    value: 20
}

// .call()
obj.sum.call(obj2, 5, 5);

// .apply()
obj.sum.apply(obj, [5, 5]);

// .bind()
var newSum = obj.sum.bind(obj2);
newSum(5, 5);
```
- Clone an object
```javascript
var obj = {
    prop: 'value'
};

var clone = Object.create(obj);
```
