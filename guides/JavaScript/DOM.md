# Document Object Model

## Events

```javascript
document.addEventListener('event', fn, bubbling)
document.removeEventListener()
```

```javascript
event || window.event
event.type
event.bubbles
event.cancelable
event.currentTarget
event.defaultPrevented
event.eventPhase
event.target || event.srcElement
event.timeStamp
event.isTrusted
```

### Event flow

- .preventDefault()
- .stopPropagation()
- .stopImmediatePropagation()

### Custom event

```javascript
var customEvent = new CustomEvent('eventName', obj);
document.body.addEventListener('eventName', fn);
document.body.dispatchEvent(customEvent)
```
