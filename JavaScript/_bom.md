# Browser Object Model

## window.history
- Properties
```javascript
history.length
```
- Methods
```javascript
history.go(-1)
history.back()

history.go(1)
history.forward()
```
## window.navigator
```javascript
navigator.appCodeName
navigator.appCodeName
navigator.appVersion
navigator.platform
navigator.product
navigator.userAgent
navigator.javaEnabled()
navigator.languages
navigator.onLine
navigator.mimeTypes
navigator.plugins
navigator.getBattery().then(function(battery) {
    battery.charging
    battery.chargingTime
    battery.level
    battery.dischargingTime
});
```
## window.screen
```javascript
screen.availTop
screen.availLeft
screen.availHeight
screen.availWidth
screen.colorDepth
screen.pixelDepth
screen.orientation
screen.width
screen.height
screen.top
screen.left
```
## window.location / document.location
- Properties
```javascript
location.href
location.protocol
location.host
location.hostname
location.Properties
location.pathname
location.search
location.hash
location.origin
```
- Methods
```javascript
location.assign(url)
location.reload(forcedReload) - true (Reload without using the cache)
location.replace(url)
location.toString()
```
