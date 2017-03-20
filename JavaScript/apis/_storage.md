# Web Storage
- [Web Storage types](#web-storage-types)
- [Properties](#properties)
- [Methods](#methods)
- [Events](#events)
- [Event properties](#event-properties)
- [Using JSON](#using-json)
### Web Storage types
- **sessionStorage:** keep the data only during the session
- **localStorage:** the data does not have expiration time
- **globalStorage:** Firefox experimental
### Properties
- **length:** returns the total number of element
```javascript
localStorage.length
```
### Methods
- **key:** returns the name of the nth key in the storage
```javascript
localStorage.key([number])
```
- **setItem:** save the data
```javascript
localStorage.setItem([key], [value])
```
- **getItem:** get the value
```javascript
localStorage.getItem([key])
```
- **removeItem:** removes an item from the storge
```javascript
localStorage.removeItem([key])
```
- **clear:** removes everything in the storage
```javascript
localStorage.clear()
```
### Events
- **storage:** fired when stores an item
```javascript
window.addEventListener("storage", function(event) { })
```
### Event properties
- **key:** key to changed
- **oldValue:** previous value of the key to changed
- **newValue:** new value of the key to changed
- **url:** page where the key has been modified
- **storageArea:** represents a change to a storage area
### Using JSON
```javascript
localStorage.setItem([key], JSON.stringify({ key: value }));
var recoverObj = JSON.parse(localStorage.getItem([key]));
```