# AJAX
## HTTP Codes
- **1xx Informative**
    - 100 Continue
    - 101 Switching Protocols
    - 102 Processing
    - 103 Checkpoint
- **2xx Success**
    - 200 Ok
    - 201 Created
    - 202 Accepted
    - 203 Non-Authoritative Information
    - 204 No content
    - 205 Reset content
    - 206 Partial content
    - 207 Multi-status
    - 208 Already reported
- **3xx Redirections**
    - 300 Multiple choices
    - 301 Moved permanently
    - 302 Found
    - 303 See other
    - 304 Not modified
    - 305 Use proxy
    - 306 Switch proxy
    - 307 Temporary Redirect
    - 308 Permanent redirect
- **4xx Client error**
    - 400 Bad request
    - 401 Unauthorized
    - 402 Payment Required
    - 403 Forbidden
    - 404 Not Found
    - 405 Method not allowed
    - 406 Not acceptable
    - 407 Proxy authentication required
    - 408 Request timeout
    - 409 Conflict
    - 410 Gone
    - 411 Length required
    - 412 Precondition failed
    - 413 Request entity too large
    - 414 Request-URI too long
    - 415 Unsupported media type
    - 416 Requested range not satisfiable
    - 417 Expectation failed
    - 418 I am a teapot
    - 422 Unprocessable entity
    - 423 Locked
    - 424 Failed dependency
    - 425 Unassigned
    - 426 Upgrade required
    - 428 Precondition required
    - 429 Too many requests
    - 431 Request header fields too large
    - 451 Unavailable for legal reasons
- **5xx Server error**
    - 500 Internal server error
    - 501 Not implemented
    - 502 Bad gateway
    - 503 Service Unavailable
    - 504 Gateway timeout
    - 505 HTTP Version not supported
    - 506 Variant also negotiates
    - 507 Insufficient storage
    - 508 Loop detected
    - 509 Bandwidth limit exceeded
    - 510 Not extended
    - 511 Network authentication required
    - 512 Not updated

## Ajax JavaScript
```javascript
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = processAjax;
xhr.open('GET', url, true);
xhr.send();
```

## Ajax output
```JavaScript
function processAjax() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        return JSON.parse(xhr.responseText);
    }
}
```

## readyState
- 0 uninitialized
- 1 loading
- 2 loaded
- 3 interactive
- 4 complete

## .setRequestHeader()
- req.setRequestHeader(header, value)
```javascript
var img = <IMG>;
var xhr = new XMLHttpRequest();
xhr.open('POST', url);
xhr.setRequestHeader('content-type', 'image/png');
xhr.onload = onLoad;
xhr.send(img);
```

## JSON
- JSON.parse(): string -> JSON
- JSON.stringify(): JSON -> string

## JSONP
- Client
```javascript
var url = '<URL>?callback=mycallback'
mycallback = function(data){
    alert(data.foo);
}
```
- Response
```javascript
mycallback({ foo: 'bar' })
```

## CORS
- Allow **access-control-allow-origin** on the server

# Fetch
```javascript
fetch('<URL>').then(onResponse).catch(onError);
```

## Headers
```javascript
var headers = new Headers() | new headers({ header: value, header: value })
headers.append(header, value)
headers.has(header)
headers.get(header)
headers.set(header, value)
headers.delete(header)
```

## Request
- method: GET | POST | PUT | DELETE | HEAD
- url
- headers
- referrer
- mode: cors | no-cors | same-origin
- credentials
- redirect: follow | error | manual
- integrity
- cache: default | reload | no-cache
```javascript
var req = new Request('<URL>', {
    method: 'POST',
    mode: 'cors',
    redirect: 'follow',
    headers: new Headers({ header: value })
});
```

## Response
- type: basic | cors
- url
- useFinalURL
- status
- ok
- statusText
- headers

Methods:
- clone()
- error()
- redirect()
- arrayBuffer()
- blob()
- formData()
- json()
- text()
```javascript
var response = new Response('<RESPONSE>', {
    ok: false,
    status: 404,
    url: '/'
});
```

## Handling output
- JSON
```javascript
fetch('<URL>').then(function(response) {
    return response.json();
}).then(function(output) {
    console.log(output);
});
```
- Text/HTML
```javascript
fetch('<URL>').then(function(response) {
    if (response.status === 200) {
        return response.text();
    }
}).then(function(output) {
    console.log(output);
});
```
- Blob
```javascript
fetch('<URL>').then(function(response) {
    return response.blob();
}).then(function(output) {
    img.src = URL.createObjectURL(output);
});

```
## POST
```javascript
fetch('<URL>', {
    method: 'post',
    body: JSON.stringify({
        prop: value,
        prop: value
    })
});
```
