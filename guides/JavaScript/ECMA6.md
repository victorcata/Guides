# ECMAScript 6

<!-- TOC -->

- [ECMAScript 6](#ecmascript-6)
    - [Constants](#constants)
    - [let](#let)
    - [Arrow functions](#arrow-functions)
        - [Variations](#variations)
    - [Parameters](#parameters)
        - [Default values](#default-values)
        - [Additional parameters](#additional-parameters)
        - [Spread operators](#spread-operators)
    - [Destructuring](#destructuring)
        - [Arrays](#arrays)
        - [Objects](#objects)
        - [Function parameters](#function-parameters)
    - [Concise properties and methods](#concise-properties-and-methods)
    - [Computed properties](#computed-properties)
    - [Templates](#templates)
    - [Asign properties in objects](#asign-properties-in-objects)
    - [Search in strings](#search-in-strings)
    - [Numbers](#numbers)
    - [For...of](#forof)
    - [Symbol](#symbol)
        - [Iterator](#iterator)
    - [Generators](#generators)
    - [Maps](#maps)
    - [Classes](#classes)
        - [Extensions](#extensions)
        - [Static methods](#static-methods)
    - [Modules](#modules)
        - [Export](#export)
        - [Imports](#imports)
    - [Resources](#resources)

<!-- /TOC -->

## Constants
Equivalent to *Object.freeze()*
```javascript
const PI = 3.141593;
```
```javascript
const x = 5;

for (let i = 0; i < x; i++) {
    // ...
}
```



## let
```javascript
function foo(x, y) {
    var z = x * y;

    if (x > y) {
        let tmp = x;
        x = y;
        y = tmp;
    }

    for (let i = 0; i < a.length; i++) {
        function bar() {
            console.log(i); // i keeps the context because it's a new one every iteration
        }
    }
}
```



## Arrow functions
- Can't use yield
- They are anonymous
- return is implicit except if it's wrapped inside {}
- this contextual

```javascript
var odd = numbers.map(v => v + 1);
var even = evens.map(v => ({ even: v, odd: v + 1 }));
var others = evens.map((v, i) => v + i);
this.nums.forEach((v) => {
    if (v % 5 === 0) {
        this.fives.push(v);
    }
});
```
**The best places to write an arrow function**
- Take advantage of the this context of the arrow function. In the next example we have to declare a new variable to keep a reference to the object context
```javascript
var obj = {
    id: 4,
    foo: function() {
        var context = this;
        setTimeout(function() {
            console.log(context.id);
        }, 100);
    }
}
obj.foo() // undefined
```
- With an arrow function there is no need to declare previously a variable with the object context
```javascript
var obj = {
    id: 4,
    foo: function() {
        setTimeout(() => console.log(this.id), 100);
    }
}
obj.foo() // 4
```
### Variations
Without parameters
```javascript
=> 2
() => 2
```
With one parameter
```javascript
x => 2
```
With multiple parameters
```javascript
(x, y) => x * y
(...x) => x[0]
```
In a statement
```javascript
x => { return x; }
```
Returning an object. It has to be wrapped in ()
```javascript
x => ({ y: x })
```



## Parameters
### Default values
```javascript
function foo(x) {
    x = x !== undefined : x : 20;
}
// Equivalent to
function foo(x = 20) {   
}
```
```javascript
function fn(x, y = 7, z = 23) {
    return x + y + z;
}
```
Lazy expressions
```javascript
function bar() { }
function foo(x = bar()) {}
foo()   // bar is executed
foo(2)  // bar is not executed
```
```javascript
function required() {
    throw "Parameter required";
}
function foo(x = required()) { }
```
### Additional parameters
```javascript
function foo() {
    var args = [].slice.call(arguments);
    args.unshift(20);
    bar.apply(null, args);
}
// Equivalent to
function foo(...args) {
    bar(20, ...args);
}
```
```javascript
function fn(x, y, ...a) {
    return (x + y) * a.length;
}
```
### Spread operators
```javascript
var x = [1, 2, 3];
var y = [4, 5];
var z = [0].concat(x, y, [6]);
// Equivalent to
var z = [0, ...x, ...y, 6];
```



## Destructuring
### Arrays
Assings properties of an object or elements of an array into their own variables
```javascript
function foo() {
    return [1, 2, 3];
}
var tmp = foo();
var a = tmp[0];
var b = tmp[1];
var c = tmp[2];

// Equivalent to
var [a, b, c] = foo();
```
Default values
```javascript
function foo() {
    return [1];
}
var tmp = foo();
var a = tmp[0];
var b = tmp[1] !== undefined ? tmp[1] : 20;
var c = tmp[2];

// Equivalent to
var [a, b = 20, c] = foo() || [];
```
Swapping elements
```javascript
var x = 10, y = 20;
[x, y] = [y, x];
```
### Objects
```javascript
function foo() {
    return { a: 1, b: 2, c: 3};
}
var tmp = foo();
var a = tmp.a;
var b = tmp.b;
var c = tmp.c;
// Equivalent to
var {
    a,      // Properties name are always on the left
    b: X,   // X is the name of the variable, in this case the names are on the right side
    c
} = foo() || {}; // To prevent if it`s not an object
```
Mixing two objects
```javascript
var defaults = {
    method: "POST",
    callback: function() {},
    headers: {
        "content-type": "text/plain"
    }
}
var config = {
    url: "http://some.url",
    callback: foo,
    headers: {
        "x-request-width": "foo"
    }
}
{
    // Destructuring
    let {
         method = defaults.method,
         url,
         callback = defaults.callback,
         headers: {
             "content-type": contentType = defaults.headers["content-type"],
             "x-request-width": xRequestWidth
         }
    } = config || {};

    // Constructing a new object
    let obj = {
        method, 
        url,
        callback,
        headers: {
            "content-type": contentType,
            "x-request-width": xRequestWidth
        }
    }
}
```
### Function parameters
```javascript
function foo({ a, b, c } = {}) {  // = {} in case the parameter passed to the function is not an object
    console.log(a, b, c);
}
foo({ a: 1, b: 2, c: 3});
```
We can define default value for some properties
```javascript
function({ a, b = 10, c} = {}) {
    console.log(a, b, c);
}
foo({ a: 1, c: 3});
```



## Concise properties and methods
```javascript
var a = 1;

var obj = {
    a: a,
    b: function(){ }
}
// Equivalent to
var obj = {
    a,
    b() {} // Is an anonymous function
}
```



## Computed properties
```javascript
obj = {
    foo: "bar",
    ["prop_" + foo()]: 42
}
```



## Templates
```javascript
var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }

var message = "Hello " + customer.name ",\n" +
              "want to buy " + card.amount + card.product + "for \n" + 
              "a total of " + (card.amount * card.unitprice) + " bucks?";

// Equivalent to 
var message = `Hello ${customer.name},
               want to buy ${card.amount} ${card.product} for
               a total of ${card.amount * card.unitprice} bucks?`
```
We can pass a method to the template string
```javascript
function foo(strings, ...values) {
    var str = "";
    for (let i=0; i < strings.length; i++) {
        // ...
    }
    return str;
}

var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }
var message = foo`Hello ${customer.name},
               want to buy ${card.amount} ${card.product} for
               a total of ${card.amount * card.unitprice} bucks?`
```



## Asign properties in objects
```javascript
var dst  = { quux: 0 }
var src1 = { foo: 1, bar: 2 }
var src2 = { foo: 3, baz: 4 }
Object.assign(dst, src1, src2)
```

## Search in strings
```javascript
"hello".startsWith("ello", 1) // true
"hello".endsWith("hell", 4)   // true
"hello".includes("ell")       // true
"hello".includes("ell", 1)    // true
"hello".includes("ell", 2)    // false
```



## Numbers
- Not numbers and infinite
```javascript
Number.isNaN(42) === false
Number.isNaN(NaN) === true

Number.isFinite(Infinity) === false
Number.isFinite(-Infinity) === false
Number.isFinite(NaN) === false
Number.isFinite(123) === true
```
- Safe integer
```javascript
Number.isSafeInteger(42) === true
Number.isSafeInteger(9007199254740992) === false
```
- Truncate
```javascript
 console.log(Math.trunc(42.7)) // 42
 console.log(Math.trunc( 0.1)) // 0
 console.log(Math.trunc(-0.1)) // -0
```



## For...of
```javascript
let arr = [4, 7, 2];
arr.foo = "hello";

for (let i in arr) {
    console.log(i); // "0", "1", "2", "foo"
}

for (let i of arr) {
    console.log(i); // "4", "7", "2"
}
```



## Symbol
Similar to create a "hidden" property
```javascript
var x = Symbol(),
    y = Symbol("description"); // It can have an optional description

var obj = {
    id: 20,
    [x]: "shhh is secret"
};
console.log(obj);
Object.keys(obj); // [id]
Object.getOwnPropertiesName(obj); // [id]
Object.getOwnPropertySymbol(obj); // [Symbol(description)]
```
### Iterator
Similar to for..of to loop over any iterator
```javascript
var arr = [1, 2, 3];
var it = arr[Symbol.iterator]();

it.next(); // { value: 1, done: false }
it.next(); // { value: 2, done: false }
it.next(); // { value: 3, done: false }
it.next(); // { value: undefined, done: true }
```
Custom iterator
```javascript
var obj = {
    [Symbol.iterator]() {
        var idx = this.from,
            to = this.to;
        
        var it = {
            next: () => {   // arrow fn to avoid mess with this
                if (idx <= to) {
                    var v = this.values[idx];
                    idx++;
                    return { value: v, done: false };
                } else {
                    return { done: true };
                }
            }
        }
    }
    values: [1, 2, 3],
    from: 2, 
    to: 3
}
console.log([...obj])
```
```javascript
var numbers = {
	*[Symbol.iterator]({from = 1, to = 100, step = 1} = {}) {		
		for (var i= from; i <= to; i += step) {
			yield i;
		}
	}
};

// should print 0..100 by 1s
for (let num of numbers) {
	console.log(num);
}

// should print 6..30 by 4s
for (let num of numbers[Symbol.iterator]({ from: 6, to: 30, step: 4})) {
	console.log(num);
}
```
Ranges
```javascript
Number.prototype[Symbol.iterator] = function*() {
    for (var i=0; i <= this; i++) {
        yield i;
    }
}
[...7];
```



## Generators
```javascript
function* generator(name) {
    console.log("Inside the generator");
    yield "Hi " + name + "!";
    yield "Line in the second execution";
    if (name === "John Doe"){
        yield "Only if you are John Doe";
    }
}
var g = generator("Frank");
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
```
```javascript
function* iterator() {
    for(var i=0; i < 5; i++){
        yield i;
    }
}
for (var item of iterator()) {
    console.log(item);
}
```
A generator always waiting to be called
```javascript
function* getId() {
    while(true) {
        yield Math.random();
    }
}
var id = getId();
```
Custom iterator with generators
```javascript
var obj = {
    *[Symbol.iterator]() {
        for(var i=this.from; i <= this.to; i++) {
            yield this.values[i];
        }
    }
    values: [1, 2, 3],
    from: 2, 
    to: 3
}
console.log([...obj])
```


## Maps
```javascript
let miMap = new Map();
let miArray = [];

miMap.set('string', 'Hi!');
miMap.set(miArray, [500, "hi", true, false]);

console.log(miMap.get(miArray)); // [500, "hi", true, false]
console.log(miMap.get('string')); // Hi!

console.log(miMap.size); // 2

miMap.delete('string');

console.log(miMap.size); // 
```



## Classes
```javascript
class car {
    constructor(brand, model, age) {
        this.brand = brand;
        this.model = model;
        this.age = age;
    }
    details() {
        console.log(`Your car is ${this.brand} ${this.model}`);
    }
}
```
### Extensions
```javascript
class dog {
    constructor(name) {
        this.legs = 4;
        this.eyes = 2;
        this.name = name;
    }

    bark() {
        console.log(`${this.name} is barking`);
    }
}

class anotherDog extends dog {
    constructor(name) {
        super('anotherDog');
        this.tongueColor = "black";
        this.eyesColor = "brown";
    }
    information() {
        console.log(`Name: ${this.name}
                     Legs number: ${this.legs}
                     Eyes number: ${this.eyes}
                     Tongue color: ${this.tongueColor}
                     Eyes color: ${this.eyesColor}`);
    }
}

let myDog = new anotherDog("Golden");
myDog.bark();
myDog.information();
```
### Static methods
```javascript
class car {
    static info(age) {
        console.log(`You are ${age} years old.`);    
    }
    constructor(brand, model, age) {
        this.brand = brand;
        this.model = model;
        this.age = age;
    }
    details() {
        console.log(`Your car is ${this.brand} ${this.model}`);
    }
}
car.info(40);
let myCar = new Car("Seat", "Panda", 10);
myCar.details();
```



## Modules
### Export
- Unique
```javascript
let config = {
    token: "secret"
}

export default config;
```
- Mutiple
```javascript
let config = {
    token: "secret"
}

let config_details = {
    details: "data"
}

export config;
export config_details;
```
- Combined
```javascript
let config = {
    token: "secret"
}

let config_details = {
    details: "data"
}

let configs = {config, config_details};

export default configs;
export config;
export config_details;
```
### Imports
- Synchronous
```javascript
import config from "./config.js"; // Unique

import * as config from "./config.js"; // Multiple

import configs from "./config.js"; // Combined
import {config, config_details} from "./config.js";
```
- Asynchronous
```javascript
System.import("module")
      .then(module => { })
      .catch(error => { });
```
- Asynchronous multiple
```javascript
Promise.all(["module1", "module2", "module3"].map(x => System.import(x)))
       .then(([module1, module2, module3]) => { });
```



## Resources
- [Curso JavaScript avanzado](https://github.com/Fictizia/Curso-JS-Avanzado-para-desarrolladores-Front-end_ed1/blob/master/teoria/clase23.md)
- [Frontend masters - ES6: The right parts](https://frontendmasters.com/courses/es6-right-parts)