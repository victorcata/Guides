# MVC (Model-View-Controller) pattern

Example by Alex Netkachov https://alexatnet.com/articles/model-view-controller-mvc-javascript

## Observer pattern
```javascript
function Event(sender) {
    this._sender = sender;
    this._listener = [];
}

Event.prototype = {
    attach: function(listener) {
        this._listener.push(listener);
    },
    notify: function(args) {
        for (var index = 0; index < this._listener.length; index++) {
            this._listener[index](this._sender, args);
        }
    }
}
```

## Model
```javascript
function ListModel(items) {
    this._items = items;
    this._selectedIndex = -1;

    this.itemAdded = new Event(this);
    this.itemRemoved = new Event(this);
    this.selectedIndexChanged = new Event(this);
}

ListModel.prototype = {
    getItems: function() {
        return [].concat(this._items);
    },
    addItem: function(item) {
        this._items.push(item);
        this.itemAdded.notify({ item: item });
    },
    removeItemAt: function(index) {
        var item = this._items[index];
        this._items.splice(index, 1);
        this.itemRemoved.notify({ item: item });
        if (index === this._selectedIndex) {
            this.setSelectedIndex(-1);
        }
    },
    getSelectedIndex: function() {
        return this._selectedIndex;
    },
    setSelectedIndex: function(index) {
        var previousIndex = this._selectedIndex;
        this._selectedIndex = index;
        this.selectedIndexChanged.notify({ previous: previousIndex });
    }
}
```

## View
```javascript
function ListView(model, elements) {
    this._model = model;
    this._elements = elements;

    this.listModified = new Event(this);
    this.addButtonClicked = new Event(this);
    this.delButtonClicked = new Event(this);

    var _this = this;

    // Attach model listeners
    this._model.itemAdded.attach(function() {
        _this.rebuildList();
    })
    this._model.itemRemoved.attach(function() {
        _this.rebuildList();
    })

    // Attach listeners to HTML controls
    this._elements.list.change(function(e) {
        _this.listModified.notify({ index: e.target.selectedIndex });
    });
    this._elements.addButton.click(function() {
        _this.addButtonClicked.notify();
    });
    this._elements.delButton.click(function() {
        _this.delButtonClicked.notify();
    });
}

ListView.prototype = {
    show: function() {
        this.rebuildList();
    },
    rebuildList: function() {
        var list, items, key;

        list = this._elements.list;
        list.innerHTML = "";

        items = this._model.getItems();
        for (key in items) {
            if (items.hasOwnProperty(key)) {
                list += "<option>" + items[key] + "</option>";
            }
        }
        this._model.setSelectedIndex(-1);
    }
}
```

## Controller
```javascript
function ListController(model, view) {
    this._model = model;
    this._view = view;

    var _this = this;

    this._view.listModified.attach(function(sender, args) {
        _this.updateSelected(args.index);
    });
    this._view.addButtonClicked.attach(function() {
        _this.addItem();
    });
    this._view.delButtonClicked.attach(function() {
        _this.delItem();
    });
}

ListController.prototype = {
    addItem: function() {
        var item = window.prompt("Add item:", "");
        if (item) {
            this._model.addItem(item);
        }
    },
    delItem: function() {
        var index = this._model.getSelectedIndex();
        if (index !== -1) {
            this._model.removeItemAt(this._model.getSelectedIndex());
        }
    },
    updateSelected: function(index) {
        this._model.setSelectedIndex(index);
    }
}
```

## Instance of the classes

```javascript
$(function() {
    var model = new ListModel(["PHP", "JavaScript"]),
        view = new ListView(model, {
            "list": $("#list"),
            "addButton": $("#plusBtn"),
            "delButton": $("#minusBtn")
        }),
        controller = new ListController(model, view);

    view.show();
})
```
```html
<select id="list" size="10"></select>
<button id="plusBtn">+</button>
<button id="minusBtn">-</button>
```