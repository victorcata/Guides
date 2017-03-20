# Websockets
- [Websockets](#websockets)
    - [Client/Server communication](#clientserver-communication)
    - [ReadyState constants](#readystate-constants)
    - [Open a connection](#open-a-connection)
    - [Events](#events)
    - [Sending a message](#sending-a-message)
    - [Closing the connection](#closing-the-connection)
    - [Example](#example)
### Client/Server communication
- Client
```
GET /demo HTTP/1.1
Host: example.com
Connection: Upgrade
Sec-WebSocket-Key2: 12998 5 Y3 1 .P00
Sec-WebSocket-Protocol: sample
Upgrade: WebSocket
Sec-WebSocket-Key1: 4 @1 46546xW%0l 1 5
Origin: http://example.com

^n:ds[4U
```
- Server
```
HTTP/1.1 101 WebSocket Protocol Handshake
Upgrade: WebSocket
Connection: Upgrade
Sec-WebSocket-Origin: http://example.com
Sec-WebSocket-Location: ws://example.com/demo
Sec-WebSocket-Protocol: sample

8jKS'y:G*Co,Wxa-
```
### ReadyState constants
- 0 - CONNECTING: the connection is not yet open
- 1 - OPEN: the connection is open and ready to communicate
- 2 - CLOSING: the connection is in the process of closing
- 3 - CLOSED: the connection is closed or couldn't be opened
### Open a connection
```javascript
var ws = new WebSocket("ws://url")
```
### Events
- **onopen:** executes when the WebScoket connection's readyState changes to OPEN
```javascript
ws.onopen = function(event) { }
```
- **onmessage:** executes when a message is received from the server
```javascript
ws.onmessage = function(event) { }
```
- **onclose:** when the WebSocket connection's readyState changes to CLOSED
```javascript
ws.onclose = function(event) { console.log(event.data); }
```
### Sending a message
- **send:** transmits data to the server over the WebSockets connection
```javascript
ws.send([message])
```
### Closing the connection
- **close:** closes the websocket connection
```javascript
ws.close()
```
### Example
```javascript
var ws = new WebSocket("ws://localhost:8080");

ws.onopen = function(event) {
	ws.send("Sending a message to the server");

	ws.onmessage = function(event) {
		console.log("Message %s received", event.data);
	}

	ws.onclose = function(event) {
		console.log("The websocket has been closed");
	}
}
```
# Socket.IO
### Open a connection
```javascript
var ws = io("url")
```
### Reopen a connection
```javascript
ws.connect()
```
### Events
- **connect**
```javascript
ws.on("connect", function() { })
```
- **channel**
```javascript
ws.on("channel", function(data) { })
```
### Sending a message
```javascript
ws.emit("channel", data);
```
### Closing the connection
```javascript
ws.disconnect();
ws.close();
```
### Client Example
```javascript
var ws = new io.Socket("localhost", {
	port: 8080
});
ws.connect();

ws.on("connect", function() {
	console.log("Client has connected to the server");
});

ws.on("message", function(data) { 
	console.log("Message %s received from the server", data);
})

ws.on("disconnect", function() {
	console.log("Client has disconnected");
})
```
### Server Example
```javascript
var http = require("http"),
	io = require("socket.io");

var server = http.createServer(function(req, res){
	res.writeHead(200, { "Content-Type": "text/html" });
	res.end("<h1>Welcome to WebSockets</h1>");
});
server.listen(8080);

var ws = io.listen(server);

ws.on("connection", function(client) {
	client.on("message", function(event) {
		console.log("Message %s received from the client", event);
	});

	client.on("disconnect", function() {
		console.log("Server has disconnected");
	});
});
```