- [Console](#console)
  - [Methods](#methods)
  - [Console Formating](#console-formating)
  - [Special characters](#special-characters)
- [User interaction](#user-interaction)
- [Strict Mode](#strict-mode)
- [Data Types](#data-types)
- [Numbers](#numbers)
  - [Properties](#properties)
  - [Methods](#methods-1)
- [Strings](#strings)
  - [Properties](#properties-1)
  - [Methods](#methods-2)
- [Objects](#objects)
  - [Creating an object](#creating-an-object)
  - [Deleting a property](#deleting-a-property)
  - [Properties](#properties-2)
  - [Methods](#methods-3)
  - [Object instance Properties](#object-instance-properties)
  - [Object instance Methods](#object-instance-methods)
- [Functions](#functions)
  - [Declaration](#declaration)
  - [Methods](#methods-4)
- [Arrays](#arrays)
  - [Creating an array](#creating-an-array)
  - [Deleting an element](#deleting-an-element)
  - [Properties](#properties-3)
  - [Methods](#methods-5)
  - [Array instance Methods](#array-instance-methods)
- [Math](#math)
- [Dates](#dates)
  - [Constructor](#constructor)
  - [Getters](#getters)
  - [Setters](#setters)
  - [Formatting](#formatting)
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
- Number
- String
- Function
- Symbol
- Object
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
# Numbers
```javascript
typeof 1
typeof 3.14
typeof NaN
typeof Inifinity
```
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
# Strings
### Properties
- **length:** returns the length of the string
```javascript
str.length
```
### Methods
- **fromCharCode:** returns a string created using unicode values
```javascript
str.fromCharCode([number, ...])
```
- **charAt/charCodeAt:** returns the character or their unicode value at the specified index
```javascript
str.charAt([index]) | str.charCodeAt([index])
```
- **concat:** returns a new string that combines the text of one or more strings
```javascript
str.concat([string, ...])
```
- **includes:** determines whether a string cam be found within another string
```javascript
str.include([string])
```
- **indexOf/lastIndexOf:** returns the index of the first ocurrence of the specified valued
```javascript
str.indexOf([string]) | str.lastIndexOf([string])
```
- **split:** splits a string into an array of strings by a separator string
```javascript
str.split([separator])
```
- **slice:** extracts a section of a string and returns a new string. Slice accepts negative values. *[toIndex] is not inclusive*
```javascript
str.slice([fromIndex], [toIndex])
```
- **substring:** returns a subset of a string between one index and another. Substring does not accept negative values *[toIndex] is not inclusive*
```javascript
str.substring([fromIndex], [toIndex])
```
- **substr:** returns the characters in a string beginning at the specified location through a number of characters
```javascript
str.substr([fromIndex], [length])
```
- **toLowerCase/toLocaleLowerCase:** returns the string converted to lower case or returns it according to any local specific
```javascript
str.toLowerCase() | str.toLocaleLowerCase()
```
- **toUpperCase/toLocalUpperCase:** returns the string converted to upper case or returns it according to any local specific
```javascript
str.toUpperCase() | str.toLocaleUpperCase()
```
- **localeCompare:** returns a number indicating whether a reference string comes before or after or is the same in sort order
```javascript
str.localeCompare([substring])
```
- **starsWith/endsWith:** determines whether a string begins/ends with the characters of another string
```javascript
str.starsWith(substr) | str.endsWith(substr)
```
- **trim/trimLeft/trimRight:** trims whitespace from the beginning and end, or left or right side, of the string
```javascript
str.trim() | str.trimLeft() | str.trimRight()
```
- **padEnd/padStart:** pad the current string from the end/start with a given string to create a new string
```javascript
str.padStart([string]) | str.padEnd([string])
```
- **match:** match a regular expression against a string
```javascript
str.match([regEx])
```
- **search:** executes a search for a match between a regular expression and the string
```javascript
str.search([regEx])
```
- **normalize:** returns the unicode normalization form of the string
```javascript
str.normalize([form: 'NFC' | 'NFD' | 'NFKC' | 'NFKD'])
```
- **repeat:** returns a string which contains the number of copies of the strings concatenated
```javascript
str.repeat([count])
```
- **replace:** returns a string with all matches of a pattern replaced by a replacement
```javascript
str.replace([regEx], [string])
```
# Objects
```javascript
typeof null
typeof ['a','b']
typeof new Date()
typeof {a: 1}
```
### Creating an object
```javascript
var obj = {
  prop: value,
  method: function(){ }
}
```
### Deleting a property
```javascript
delete obj.prop;
obj.prop = undefined;
```
### Properties
- **prototype:** allows the addition of properties to all objects of type Object 
```javascript
Object.prototype
```
### Methods
- **keys:** returns an array containing the names of all of the given object's own properties
```javascript
Object.keys(obj)
```
- **entries:** returns an array with the property pairs [key, value]
```javascript
Object.entries(obj)
```
- **defineProperty:** defines a new property on an object or modifies an existing property and returns the object
```javascript
Object.defineProperty(obj, prop, { enumerable: false, configurable: false, writable: flase, value: 'static'})
```
- **defineProperties:** defines new or modifies existing properties on an object
```javascript
Object.defineProperties(obj, { 'prop': { value: true, writable: true }})
```
- **getPrototypeOf:** returns the prototype of the specified object
```javascript
Object.getPrototypeOf(obj)
```
- **getOwnPropertyDescriptor:** returns a property descriptor for an own property
```javascript
Object.getOwnPropertyDescriptor(obj, 'prop')
```
- **getOwnPropertyNames:** returns an array of all properties
```javascript
Object.getOwnPropertyNames(obj)
```
- **seal/isSealed:** prevents other code from deleting properties of an object. isSealed determines if an object is sealed
```javascript
Object.seal(obj) | Object.isSealed(obj)
```
- **freeze/isFrozen:** other code can't delete or change any properties. isFrozen determines if the object is freeze
```javascript
Object.freeze(obj) | Object.isFrozen(obj)
```
- **isExtensible:** determines if extending an object is allowed
```javascript
Object.isExtensible(obj)
```
- **preventExtensions:** prevents any extensions of an object
```javascript
Object.preventExtensions(obj)
```
### Object instance Properties
- **constructor:** specifies the function that creates an object's prototype
```javascript
Object.prototype.constructor
```
- **__proto__:** points to the object which was used as prototype when the object was instantiated
```javascript
Object.prototype.__proto__
```
### Object instance Methods
- **hasOwnProperty:** determines whether an object contains the specified property of the object and not inherited through the prototype
```javascript
obj.hasOwnProperty('prop')
```
- **propertyIsEnumerable:** determines if the enumerable attribute is set
```javascript
obj.propertyIsEnumerable('prop')
```
- **toString/toLocaleString:** strings representation of the object
```javascript
obj.toString() | obj.toLocaleString()
```
- **isPrototypeOf:** determines whether the specified object is in the prototype chain of the object
```javascript
obj.isPrototypeOf(obj)
```
- **valueOf:** returns the primitive value of the specified object
```javascript
obj.valueOf()
```
Note: The order is arbitrary and they aren't show in the order it was defined
```javascript
for (var i obj) { obj[i] }
```
# Functions

### Declaration
**Function constructor VS Function declarator**
Function constructor do not create closures to their creation contexts; they always are created in the global scope.
They will only be able to access their own local variables and global ones, not the ones from the scope in which the Function constructor was called.
```javascript
function constructor (){ }
var declarator = function () { }
```
### Methods
- **apply:** calls a function with a given this value and arguments provides as an array
```javascript
fn.prototype.apply(thisArg, [args, ...])
```
- **call:** calls a function with a given this value and arguments provided individually
```javascript
fn.prototype.call(thisArgs, args, ...)
```
- **bind:** creates a new function that has its this keyword set to the provided value
```javascript
fn.prototype.bind(thisArgs, args, ...)
```
- **isGenerator:** determines whether or not a function is a generator
```javascript
fn.prototype.isGenerator()
```
- **toSource:** returns a string representing the source code of the object
```javascript
fn.prototype.toSource()
```
# Arrays
### Creating an array
```javascript
var array = []
var array = [1, 2, 3]
array[2] = 4
```
### Deleting an element
```javascript
delete array[2];
array[2] = undefined
```
### Properties
- **length:** sets or returns the number of elements in an array
```javascript
array.length
```
### Methods
- **isArray:**  true if a variable is an array
```javascript
Array.isArray([obj])
```
- **from:** creates a new array instance from an array object
```javascript
Array.from([arr]);
```
### Array instance Methods
- **toString/toLocalString:** returns an string representing the array and its elements
```javascript
arr.toString() | arr.toLocaleString()
```
- **shift:** removes the first element from an array and returns that element
```javascript
arr.shift()
```
- **pop:** removes the last element from an array and returns that element
```javascript
arr.pop()
```
- **unshift:** adds one or more element to the front of an array and returns the length of the array
```javascript
arr.unshift([elements])
```
- **push:** adds one or more elements to the end of the array
```javascript
arr.push([elements])
```
- **splice:** changes the contents of an array by removing elements and/or adding new elements. Returns the deleted elements.
```javascript
arr.splice(position, length, [elements])
```
- **slice:** returns a copy of a portion of the array into a new array. The original array will not be modified
```javascript
arr.slice([from], [to])
```
- **concat:** returns a merged array from two or more arrays
```javascript
arr.concat([array])
```
- **join:** joins all elements of an array into a stirng
```javascript
arr.join([string])
```
- **indexOf/lastIndexOf:** returns the first index of an element withing the array or -1 if none is found
```javascript
arr.indexOf([item]) | arr.lastIndexOf([item])
```
- **sort:** sorts the elements of an array in place and returns the array
```javascript
arr.sort()
```
- **reverse:** reverses an array in place
```javascript
arr.reverse()
```
- **forEach:** executes a function once for each element in the array
```javascript
arr.forEach(function(element, index, array))
```
- **map:** creates a new array with the results of calling a provided function on every element in this array
```javascript
arr.map(function(element)) 
```
- **some:** returns true if one element in the array satisfies the testing function
```javascript
arr.some(function(element, index, array))
```
- **every:** true if every element in this array satisfies the testing function
```javascript
arr.every(function(element, index, array)) 
```
- **filter:** creates a new array with the elements which the filtering function returns true
```javascript
arr.filter(function(element)) - 
```
- **reduce:** apply a function against an accumulator and each value of the array from left to right to reduce it to a single value
```javascript
arr.reduce(function(prev, actual, index, array))
```
- **reduceRight:** apply a function against an accumulator and each value of the array from right to left to reduce it to a single value
```javascript
arr.reduceRight(function(prev, actual, index, array))
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
### Constructor
```javascript
new Date()
new Date(3600 * 24 * 1000)
new Date('January 1, 1982')
new Date([year], [month], [date], [hour], [minutes], [seconds], [milliseconds])
new Date(Date.UTC(2016, 1, 1))
```
### Getters
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
### Setters
```javascript
date.setFullYear() | date.setUTCFullYear()
date.setMonth() | date.setUTCMonth()
date.setDate() | date.setUTCDate()
date.setHours() | date.setUTCHours()
date.setSeconds() | date.setUTCSeconds()
date.setMilliseconds() | date.setUTCMilliseconds()
date.setTime() 
```
### Formatting
```javascript
date.toString()
date.toDateString()
date.toTimeString()
date.toISOString()
date.toUTCString()
date.toLocaleString('de-DE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
```