# Javascript

## Console

```
console.assert(boolean, "Message")
```
```
console.clear()
```
```
console.dir(document.body)
```
```
console.dirxml(document.body)
```
```
console.group("Group");
  for (var i = 0; i < 20; i++) { console.info("Iteration " + i); }
console.groupEnd();
```
```
console.groupCollapsed("Group");
  for (var i = 0; i < 20; i++) { console.info("Iteration " + i); }
console.groupEnd();
```
```
var table = [
  { name: 'row1', value: 1},
  { name: 'row2', value: 2},
  { name: 'row3', value: 3}
];
console.table(table);
console.table(table, 'value');
```
```
console.time('Time measure');
  for (var i = 0; i < 20; i++) { console.info("Iteration " + i); }
console.timeEnd('Time measure');
```
```
console.log('Message');
console.info('Informative Message');
console.warn('Warning Message');
console.error('Error Message');
```

### Console Formating

- %s : String
- %d, %i: Number
- %f: Decimal
- %o: DOM
- %O: Object
- %c: CSS

```
console.log("DOM: %o", document.body)
```
```
var object = { name: 'name1', value: 1 };
console.log("Object: %O", object);
```
```
console.log('%c Message with style!!', 'background: #2980B9; color: #ECF0F1; font-size: 4em;')
```
