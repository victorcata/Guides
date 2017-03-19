# Console
### Methods
- **assert:** If the assertion is false the message is written to the console
```javascript
console.assert(condition, message)
```
- **log:** outputs a message to the console
```javascript
console.log(message);
```
- **info:** outpus an informational message to the console
```javascript
console.info(message);
```
- **warn:** outputs a warning message to the console
```javascript
console.warn(message);
```
- **error:** outputs an error message to the console
```javascript
console.error(message);
```
- **clear:** clears the console
```javascript
console.clear()
```
- **dir:** displays a list of the properties of a JavaScript object
```javascript
console.dir(HTML)
```
- **dirxml:** displays a tree of the descendants elements of the specified HTML element
```javascript
console.dirxml(HTML)
```
- **group/groupEnd:** creates a new group of messages in the console
```javascript
console.group([name]) | console.groupEnd()
```
- **groupCollapsed/groupEnd:** like console.group but the group is created collapsed
```javascript
console.groupCollapsed([name]) | console.groupEnd()
```
- **profile/profileEnd:** starts recording a performance profile
```javascript
console.profile([name]) | console.profileEnd([name])
```
- **table:** Display an object as a table in the console
```javascript
console.table([JSON], [column]);
```
- **time:** starts a timer to track how long an operation takes
```javascript
console.time([name]) | console.timeEnd([name]);
```
- **count:** logs the number of times that count() has been called
```javascript
console.count()
```
- **trace:** shows a track trace in the console
```javascript
console.trace()
```
### Console Formating
- %s : String
- %d, %i: Number
- %f: Decimal
- %o: DOM
- %O: Object
- %c: CSS
```javascript
console.log("DOM: %o", document.body)
console.log("Object: %O", { name: 'name1', value: 1 });
console.log('%c Message with style!!', 'background: #2980B9; color: #ECF0F1; font-size: 4em;')
```
### Special characters
- \t: Tabulator
- \': Single quotation mark
- \": Double quotation mark
- \\: \
- \n: Line break

# User interaction
- **alert:** displays an alert dialog with the content and a OK button
```javascript
alert([content]])
```
- **confirm:** a confirmation prompt asks the user to confirm an action
```javascript
var output = confirm([content])
```
- **prompt:** dialog with an input to let the user introduce some text
```javascript
var output = prompt([content])
```
# Strict Mode
- Remove some potential errors
- Execute faster than no strict mode
- Forbid sintax that probably would be define in future versions of the language
```javascript
'use strict';
```
# Data Types
- undefined
- String
- Function
- Symbol
- Object
```javascript
typeof null
typeof ['a','b']
typeof new Date()
typeof {a: 1}
```
- boolean
```javascript
Boolean("String") === true
Boolean("") === false
Boolean(12) === true
Boolean(0) === false
Boolean({'a': 1}) === true
Boolean([1, 2]) === true
Boolean(null) === false
Boolean(undefined) === false
Boolean(NaN) === false
```
- Number
```javascript
typeof 1
typeof 3.14
typeof NaN
typeof Inifinity
```

# Numbers
### Properties
```javascript
Number.MAX_VALUE
Number.MIN_VALUE
Number.NEGATIVE_INFINITY
Number.POSITIVE_INFINITY
Number.NaN
```
### Methods
- **toExponential:** returns a string representing the number in exponential notation
```javascript
num.toExponential([decimals])
```
- **toFixed:** formats a number using fixed-point notation
```javascript
num.toFixed([decimals])
```
- **toLocaleString:** returns a string with a language sensitive representation of the number
```javascript
num.toLocaleString([locale])
```
- **toPrecision:** returns a string representing the number to the specified precision
```javascript
num.toPrecision()
```
- **toString:** returns a string representing the number
```javascript
num.toString([base])
```
- **valueOf:** returns the wrapped primitive value of the number
```javascript
num.valueOf()
```
- **isNan:** determines whether a value is NaN or not
```javascript
Number.isNaN([number])
```
- **parseFloat:** parses a string and returns a floating point number
```javascript
Number.parseFloat([string])
```
- **parseInt:** parses a string and returns an integer of the specified base
```javascript
Number.parseInt([string], [base: 2|8|10|16])
```
- **isFinite:** determines whether the value is a finite value
```javascript
Number.isFinite()
```
- **isInteger:** determines if the value is integer
```javascript
Number.isInteger()
```
- **isSafeInteger:** determines if the value is a safe integer (can be exactly represented as an IEEE-754 and cannot be the result of rounding any other integer to fit the IEEE-754 representation)
```javascript
Number.isSafeInteger()
```
# Math
- **abs:** returns the absolute value of a number
```javascript
Math.abs([number])
```
- **acos/cos/asin/sin/atan/tan:** return the respective geometrical operation of a number
```javascript
Math.cos([number])
Math.sin([number])
Math.tan([number])
```
- **ceil:** returns the smallest integer greater than or equal to the number
```javascript
Math.ceil([number])
```
- **floor:** returns the larges integer less than or equal to a number
```javascript
Math.floor([number])
```
- **sqrt:** returns the positive square root of the number
```javascript
Math.sqrt([number])
```
- **random:** returns a pseudo-random number between 0 and 1
```javascript
Math.random() * (max - min) + min;
```
- **round:** returns the nearest integer of the number
```javascript
Math.round([number])
```
- **min:** returns the smallest of zero or more numbers
```javascript
Math.min([number, ...])
```
- **max:** returns the largest of zero or more numbers
```javascript
Math.max([number, ...])
```
- **trunc:** returns the integral part of the number
```javascript
Math.trunc([number])
```
# Dates
- Constructor
```javascript
new Date()
new Date(3600 * 24 * 1000)
new Date('January 1, 1982')
new Date(1982, 1, 1, 0, 0, 0)
new Date(Date.UTC(2016, 1, 1))
```
- Getters
```javascript
date.getFullYear() | date.getUTCFullYear()
date.getMonth() | date.getUTCMonth()
date.getDay() | date.getUTCDay()
date.getDate() | date.getUTCDate()
date.getHours() | date.getUTCHours()
date.getMinutes() | date.getUTCMinutes()
date.getSeconds() | date.getUTCSeconds()
date.getMilliseconds() | date.getUTCMilliseconds()
date.getTime()
date.getTimezoneOffset()
```
- Setters
```javascript
date.setFullYear() | date.setUTCFullYear()
date.setMonth() | date.setUTCMonth()
date.setDate() | date.setUTCDate()
date.setHours() | date.setUTCHours()
date.setMilliseconds() | date.setUTCMilliseconds() ...
```
- Formatting
```javascript
date.toString()
date.toDateString()
date.toTimeString()
date.toISOString()
date.toUTCString()
date.toLocaleString('de-DE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
```
# String
```javascript
str.length()
str.fromCharCode()
str.charAt() | str.charCodeAt()
str.concat([args...])
str.indexOf(substr) | str.lastIndexOf(substr)
str.split(separator)
str.slice(from, [to]) // [to] is not inclusive. Slice accepts negative values
str.substring(from, [to]) // [to] is not inclusive. Slice doesn't accept negative values
str.substr(from, length)
str.toLowerCase() | str.toLocaleLowerCase()
str.toUpperCase() | str.toLocaleUpperCase()
str.localeCompare(substr)
str.starsWith(substr) | str.endsWith(substr)
str.trim() | str.trimLeft() | str.trimRight()
str.match(regEx)
str.search(regEx)
str.normalize('NFC' | 'NFD' | 'NFKC' | 'NFKD')
str.repeat(count)
str.replace(regEx, substr)
```
# Arrays
- Creation and delete
```javascript
var array = []
var array = [1, 2, 3]
array[2] = 4
delete array[2] | array[2] = undefined
```
- Properties
```javascript
array.length
```
- Methods
```javascript
Array.isArray([obj])
a.toString() | a.toLocaleString()
a.push()
a.pop()
a.shift()
a.unshift()
a.splice(position, length)
a.slice(from, [to])
a.concat(args)
a.join(string)
a.indexOf(item) | a.lastIndexOf(item)
a.sort()
a.reverse()
a.forEach(fn) - fn(element, index, array)
a.map(fn) - fn(element)
a.some(fn) - fn(element, index, array)
a.every(fn) - fn(element, index, array)
a.filter() - fn(element)
a.reduce(fn) - fn(prev, actual, index, array)
a.reduceRight(fn) - fn(prev, actual, index, array)
```
# Objects
```javascript
var obj = {
  prop: value,
  method: function(){ }
}
obj.prop;
obj.method();
```
- Methods generic
```javascript
Object.defineProperties(obj, { 'prop': { value: true, writable: true }})
Object.defineProperty(obj, prop, { enumerable: false, configurable: false, writable: flase, value: 'static'})
Object.getPrototypeOf(obj)
Object.getOwnPropertyDescriptor(obj, 'prop')
Object.getOwnPropertyNames(obj)
Object.seal(obj) | Object.isSealed(obj)
Object.freeze(obj) | Object.isFrozen(obj)
Object.isExtensible(obj)
Object.preventExtensions(obj)
Object.keys(obj)
```
- Methods of instances
```javascript
obj.hasOwnProperty('prop')
obj.propertyIsEnumerable('prop')
obj.toString() | obj.toLocaleString()
obj.isPrototypeOf(obj)
obj.valueOf()
obj.constructor
```
Note: The order is arbitrary and they aren't show in the order it was defined
```javascript
for (var i obj) { obj[i] } // The order is arbitrary
```
# Functions
- Properties
```javascript
fn.caller
fn.length
fn.name
fn.displayName
fn.arguments
fn.prototype.constructor
```
- Methods
```javascript
fn.prototype.apply()
fn.prototype.bind()
fn.prototype.call()
fn.prototype.isGenerator()
fn.prototype.toSource()
fn.prototype.toString()
```
### Function constructor VS Function declarator
Function constructor do not create closures to their creation contexts; they always are created in the global scope.
They will only be able to access their own local variables and global ones, not the ones from the scope in which the Function constructor was called.
```javascript
function constructor (){ }
var declarator = function () { }
```
### Callbacks
```javascript
var fn = function(param, callback) {
  if ((callback) && (typeof callback === 'function') {
    callback();
  }
}
```
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
