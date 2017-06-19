<h1>Drag and Drop</h1>

<!-- TOC -->

- [Draggable content](#draggable-content)
- [Dragging events](#dragging-events)
- [DataTransfer](#datatransfer)
    - [Object](#object)
- [Properties](#properties)
- [Dragging files](#dragging-files)
- [References](#references)

<!-- /TOC -->

## Draggable content

- We have to add the attribute **draggable=true** in the element we want to move
- By default elements with the attribute href are draggables

```html
<div id="content-draggable">
    <div class="element" draggable="true">A</div>
    <div class="element" draggable="true">B</div>
    <div class="element" draggable="true">C</div>
</div>
```

To prevent the text contents of draggable elements from being selectable

```css
[draggable] {
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    /* Required to make elements draggable in old Webkit */
    -khtml-user-drag: element;
    -webkit-user-drag: element;
}
```

## Dragging events

- **dragstart**
```javascript
function handleDragStart(evt) {
    var source = e.target;
    // ...
}

var content = document.getElementById("content-draggable");
content.addEventListener("dragstart", handleDragStart, false);
```

- **dragenter**
```javascript
function handleDragEnter(evt) {
     var source = e.target;
     // ...
}
content.addEventListener("dragenter", handleDragEnter, false);
```

- **dragover**
```javascript
function handleDragOver(evt) {
    evt.preventDefault();
    e.dataTransfer.dropEffect = "move";
    // ...
}
content.addEventListener("dragover", handleDragOver, false);
```

- **dragleave**
```javascript
function handleDragLeave(evt) {
     var source = e.target;
     // ...
}
content.addEventListener("dragleave", handleDragLeave, false);
```

- **drop**
```javascript
function handleDrop(evt) {
    evt.stopPropagation();
    // ...
    return false;
}

content.addEventListener("drop", handleDrop, false);
```

- **dragend**
```javascript
function handleDragEnd(evt) {
     var source = e.target;
     // ...
}
content.addEventListener("dragend", handleDragEnd, false);
```

## DataTransfer

### Object
dataTransfer is set in the dragstart event and it is readed in the drop event.

- **.setData(format, data):** Sets the object's content to the mimetype and data payload passed as arguments.
```javascript
// ...
evt.dataTransfer.setData("text/html", this.innerHTML);
// ...
```
- **.geData(format):** Fetching the drag data by mimetype
```javascript
// ...
this.innerHTML = evt.dataTransfer.getData("text/html");
// ...
```

## Properties
- **dataTransfer.effectAllowed:** Restricts what type of dragging effect the user can perform on the element. Values: *none, copy, copyLink, copyMove, link, linkMove, move, all, uninitialized*
- **dataTransfer.dropEffect:** Controls the feedback that the user is given during the dragenter and dragover events.
- **dataTransfer.setDragImage(imgElement, x, y):** To set a drag icon instead of the browser's default image.


## Dragging files

```javascript
function handleDrop(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    var files = e.dataTransfer.files;
    // ...
}
```

## References

- [Native HTML5 Drag and Drop](https://www.html5rocks.com/en/tutorials/dnd/basics/)