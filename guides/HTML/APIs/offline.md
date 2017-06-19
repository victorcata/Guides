# Offline


- [Status of the browser](#status-of-the-browser)
- [Browser properties](#browser-properties)
- [Events](#events)
- [Cache Manifest](#cache-manifest)
  - [Declaration](#declaration)
  - [Manifest example](#manifest-example)
  - [Cache events](#cache-events)
  - [Cache status](#cache-status)
  - [Forcing cache update](#forcing-cache-update)
- [Progressive Web Apps](https://developers.google.com/web/progressive-web-apps/)
### Status of the browser
- **navigator.onLine:** returns a boolean indicating if the browser is online or not
### Browser properties
- navigator.appCodeName
- navigator.appName
- navigator.appVersion
- navigator.cookieEnabled
- navigator.language
- navigator.platform
- navigator.userAgent
### Events
- **offline:** fires when the client goes offline
```javascript
window.addEventListener("offline", function() { })
```
- **online:** fires when the client is online again
```javascript
window.addEventListener("online", function() { })
```
### Cache Manifest
####Declaration
```javascript
<html manifest="m.appcache"></html>
```
####Manifest example
```
CACHE MANIFEST
# versión 1.0
# SI CACHEAR
CACHE:
index.html
offline.html
css/style.css
js/script.js
img1.jpg
img2.jpg
img3.jpg
logo.png
# When something goes wrong
FALLBACK:
offline.html
# No caching
NETWORK:
*
# * everything that is not in the cache
```
#### Cache events
```javascript
var appCache = window.applicationCache;
appCache.addEventListener("cached", [function]);
appCache.addEventListener("checking", [function]);
appCache.addEventListener("downloading", [function]);
appCache.addEventListener("error", [function]);
appCache.addEventListener("nonupdate", [function]);
appCache.addEventListener("obsolete", [function]);
appCache.addEventListener("progress", [function]);
appCache.addEventListener("updateready", [function]);
```
#### Cache status
```javascript
var appCache = window.applicationCache;
switch (appCache.status) {
  case appCache.UNCACHED: console.log("Cache was not initialized correctly"); break;
  case appCache.IDLE: console.log("Cache is not in use"); break;
  case appCache.CHECKING: console.log("The manifest is on reviewing to be updated"); break;
  case appCache.DOWNLOADING: console.log("Downloading content after a manifest update"); break;
  case appCache.UPDATEREADY: console.log("There is a new version of the manifest"); break;
  case appCache.OBSOLETE: console.log("The cache is obsolet"); break;
}
```
#### Forcing cache update
```javascript
var appCache = window.applicationCache;
appCache.update();
if (appCache.status === window.applicationCache.UPDATEREADY) {
  appCache.swapCache();
}
```