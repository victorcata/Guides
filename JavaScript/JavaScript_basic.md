# Javascript

### Console

```
console.log('Message');
console.info('Informative Message');
console.warn('Warning Message');
console.error('Error Message');
console.assert(boolean, "Message")
console.clear()
```
```
console.dir(document.body)
console.dirxml(document.body)
```
```
console.group("Group");
console.groupCollapsed("Group");
console.groupEnd();
```
```
var table = [
  { name: 'row1', value: 1},
  { name: 'row2', value: 2}
];
console.table(table);
console.table(table, 'value');
```
```
console.time('Time measure');
console.timeEnd('Time measure');
```

#### Console Formating
- %s : String

- %d, %i: Number
- %f: Decimal
- %o: DOM
- %O: Object
- %c: CSS

```
console.log("DOM: %o", document.body)
console.log("Object: %O", { name: 'name1', value: 1 });
console.log('%c Message with style!!', 'background: #2980B9; color: #ECF0F1; font-size: 4em;')
```

#### Special characters

- \t: Tabulator
- \': Single quotation mark
- \": Double quotation mark
- \\: \
- \n: Line break

### User interaction

```
alert('Welcome')
var output = confirm('Are you sure?')
var output = prompt('What\'s your name?')
```

### Strict Mode

```
'use strict'
```
- Remove some potential errors
- Execute faster than no strict mode
- Forbid sintax that probably would be define in future versions of the language

### Data Types

- undefined
- Object
```
typeof null
typeof ['a','b']
typeof new Date()
typeof {a: 1}
```
- boolean
```
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
```
typeof 1
typeof 3.14
typeof NaN
typeof Inifinity
```
- String
- Function
- Symbol

### Numbers

```
Number.MAX_VALUE
Number.MIN_VALUE
Number.NEGATIVE_INFINITY
Number.POSITIVE_INFINITY
Number.NaN
```
```
num.toExponential([decimals])
num.toFixed([decimals])
num.toLocaleString('en-US')
num.toPrecision()
num.toString([base])
Number.parseFloat([string])
Number.parseInt([string])
```

### Maths

```
Math.random() * (max - min) + min;
Math.round()
Math.floor()
Math.max()
Math.min()
```

### Dates

```
new Date()
new Date(3600 * 24 * 1000)
new Date('January 1, 1982')
new Date(1982, 1, 1, 0, 0, 0)
new Date(Date.UTC(2016, 1, 1))
```
```
date.getFullYear() | date.getUTCFullYear()
date.getMonth() | date.getUTCMonth()
date.getDay() | date.getUTCDay()
date.getDate() | date.getUTCDate()
date.getHours() | date.getUTCHours()
date.getMinutes() | date.getUTCMinutes()
date.getSeconds() | date.getUTCSeconds()
date.getMilliseconds() | date.getUTCMilliseconds()
date.getTime()
```
```
date.setFullYear() | date.setUTCFullYear()
date.setMonth() | date.setUTCMonth()
date.setDate() | date.setUTCDate()
date.setHours() | date.setUTCHours()
date.setMilliseconds() | date.setUTCMilliseconds()
...
```
```
date.getTimezoneOffset()
date.toString()
date.toDateString()
date.toTimeString()
date.toISOString()
date.toUTCString()
date.toLocaleString('de-DE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
```

### String

```
str.length()
str.fromCharCode()
str.charAt()
str.charCodeAt()
str.concat([args...])
str.indexOf(substr)
str.lastIndexOf(substr)
str.split(separator)
str.slice(from, [to]) // [to] is not inclusive. Slice accepts negative values
str.substring(from, [to]) // [to] is not inclusive. Slice doesn't accept negative values
str.substr(from, length)
str.toLowerCase()
str.toLocaleLowerCase()
str.toUpperCase()
str.toLocaleUpperCase()
str.trim()
```
