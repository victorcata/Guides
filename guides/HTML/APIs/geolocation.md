<h1>Geolocation</h1>

- [Geolocation](#geolocation)
    - [Properties](#properties)
    - [Methods](#methods)
    - [Position options](#position-options)
    - [Example](#example)
    - [Error managment](#error-managment)
- [Google Maps](#google-maps)
    - [Reference](#reference)
    - [Static image](#static-image)
    - [Center the map](#center-the-map)
    - [Markers](#markers)
    - [Information window](#information-window)
    
### Properties
- **latitude:** position's latitude in decimal degrees
```javascript
position.coords.latitude
```
- **longitude:** position's longitude in decimal degrees
```javascript
position.coords.longitude
```
- **accuracy:** represents the accuracy of the latitude and longitude
```javascript
position.coords.accuracy
```
- **altitude:** position's altitude in metres relative to sea level
```javascript
position.coords.altitude
```
- **altitudeAccuracy:** represents the accuracy of the altitude expressed in meters
```javascript
position.coords.altitudeAccuracy
```
- **heading:** represents the direction in which the device is traveling
```javascript
position.coords.heading
```
- **speed:** velocity of the device in meters per second
```javascript
position.coord.speed
```
- **timestamp:** date and time of the creation of the position object
```javascript
position.timestamp
```
### Methods
- **getCurrentPosition:** get the current position of the device
```javascript
navigator.geolocation.getCurrentPosition([fnSuccess], [fnError], [options]);
```
- **watchPosition:** function that will be called automatically each time the position of the device changes. Returns a watch ID
```javascript
navigator.geolocation.watchPosition([fnSuccess], [fnError], [options])
```
- **clearWatch:** unregister the location/error monitoring handlers previously called with watchPosition
```javascript
navigator.geolocation.clearWatch([id])
```
### Position options
- **enableHighAccuracy:** boolean that indicates to receive the best possible results.
- **timeout:** long value representing the maximum length of time (ms) the device is allowed to take in order to return a position
- **maximumAge:** long value indicating the maximum age (ms) of a possible cached position
```javascript
var options = {
  enableHighAccuracy: true,
  maximuAge: 1000,
  timeout: 2000
}
```
### Example
```javascript
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log("Latitude: %d Longitude: %d", position.coords.latitude, position.coords.longitude);
  });
} else {
  console.log("Geolocation not supported");
}
```
### Error managment
```javascript
navigator.geolocation.getCurrentPosition(onSuccess, onError);

function onSuccess(position) {
  console.info(position.location.latitude + "," + position.location.longitude);
}

function onError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      console.log("User rejected the petition");
      break;
    case error.POSITION_UNAVAILABLE:
      console.log("Position incorrect");
      break;
    case error.TIMEOUT:
      console.log("Not response in time");
      break;
    case error.UNKNOWN_ERROR:
      console.log("Unknown error");
      break;
  }
}
```
# Google Maps
- [Google Maps Full API](https://developers.google.com/maps/documentation/javascript/3.exp/reference)
- [Google Maps Samples](https://developers.google.com/maps/documentation/javascript/examples)
### Reference
```javascript
<script src="http://maps.googleapis.com/maps/api/js?key=[API_KEY]&sensor=false&extension=.js&output=embed"></script>
```
### Static image
```javascript
var latLong = position.coords.latitude + "," + position.coords.longitude;
var img = "http://maps.googleapis.com/maps/api/staticmap?center=" + latLong + "&zoom=14&size=400x300&sensor=false";
document.body.innerHTML = "<img src='" + img + "' />";
```
### Center the map
```javascript
var map = new google.maps.Map(document.getElementById("map"), {
  zoom: 8,
  center: {lat: [latitude], lng: [longitude]}
});
```
### Markers
```javascript
google.maps.event.addListener(map, "click", function(event){
  var marker = new google.maps.Marker({
    position: event.latLng,
    label: [label],
    map: map,
    icon: image // Custom marker
  });
});
```
### Information window
```javascript
var info = new google.maps.InfoWindow({
  content: [contentString]
});

marker.addListener("click", function() {
  info.open(map, marker);
})
```
