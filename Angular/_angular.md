# Angular 2

## Modules

- Uses ES6 modules
- Core mechanism for composition
- Export things that other modules can import

Example:
```javascript
import { Component, OnInit } from "@angular/core";
import { ItemsService, Item } from "../shared";

export class ItemsComponent implements OnInit {}
```

### @NgModule

The organizational mechanism used within an Angular application

- **declarations:** define view classes availables to the module
- **imports:** list of modules that the module needs
- **providers:** list of services the module makes available
- **bootstrap:** defines the component that should be bootstrapped

Example:
```javascript
@NgModule({
    declarations: [ 
        AppComponent,
        // ...
    ],
    imports: [
        BrowserModule,
        // ...
     ],
    providers: [ ItemsService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
```

### Bootstrapping

Bootstrapping to a module
```javascript
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode } from "@angular/core";
import { environment } from "./environments/environment";
import { AppModule } from "./app";

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
```



## Routes
Allows to take a component and dinamically load it into the page
- They are defined in a route definition table that contains a path and a component reference
- Components are loaded into the **router-outlet** component
- We can navigate to routes using the **routerLink** directive
- The router uses **history.pushState** which means we need to set a **base-ref** tag to our index.html file

Example:
```javascript
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ItemsComponent } from "./items/items.component";

const routes: Routes = [
    { path: "", component: ItemsComponent },
    { path: "items", component: ItemsComponent },
    { path: "*", component: ItemsComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
    providers: []
});
```

## Components
- Components are ES6 classes
- Properties and methods of the component class are available to the template
- Providers are injected in the constructor
- Hook into the component lifecycle with hooks

Example:
```javascript
export class ItemsComponent implements OnInit {
    items: Array<Item>;
    selectedItem: Item;

    constructor(private itemsService: itemsService) { }

    ngOnInit() {
        this.itemsService.loadItems()
                         .then(items => this.items = items);
    }
}
```

### Templates
- Is HTML that tells Angular how to render a component
- Includes data bindings, other components and directives
- Angular 2 leverages nativeDOM events, properties and shadow DOM

Example:
```javascript
@Component({
    selector: "app-items-list",
    templateUrl: "./items-list.component.html",
    // template: `<div *ngFor... `      // We can also use templating inline
    styleUrls: [ "./items-list.components.css" ]
});

export class ItemsListComponent {
    @Input() items: Item[];
    @Output() selected = new EventEmitter();
    @Output() deleted = new EventEmitter();
}
```


### Metadata
- Allows Angular to process a class
- We can attach metadata with TypeScript using decorators (functions)
- The most common decorator is **@Component()**
- Takes a config option with the **selector, templateUrl, styles, styleUrl, animations, etc**

Example:
```javascript
@Component({
    selector: "app-items",
    templateUrl: "./items.component.html",
    styleUrls: [ "./items.component.css" ]
});

export class ItemsComponent implements OnInit { }
```

#### Data Binding
- Enables data to flow from the component to template and vice-versa
- Includes interpolation, property binding, event binding and two-way binding (property and event combined)

**Data Binding types**
- **{{value}}** template <------ class
- **[property] = "value"** template <------ class
- **(event) = "handler"** template ------> class
- **[(ngModel)] = "property"** template <------> class

Example:
```html
<h1>{{title}}</h1>
<experiment *ngFor="let experiment of experiments" [experiment]="experiment"></experiment>
<input type="text" [(ngModel)]="message" />
<button type="submit" class="btn" (click)="updateMessage(message)">Update Message</button>
```

### Classes


## Directives
- A directive is a class decorate with **@Directive**
- A component is just a directive with added template features
- Built-in directives include structural directives and attribute directives

Example:
```javascript
import { Directive, ElementRef } from "@angular/core";

@Directive({ selector: "[Blinker]"})
export class Blinker {
    constructor(element: ElementRef) {
        // ...
    }
}
```

## Services

## References

- [Building awesome Web Apps with Angular 2](https://frontendmasters.com/courses/web-apps-angular-2)