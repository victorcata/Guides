# Angular 2

<!-- TOC -->

- [Angular 2](#angular-2)
    - [Angular CLI](#angular-cli)
        - [AOT Compilation](#aot-compilation)
    - [Modules](#modules)
        - [@NgModule](#ngmodule)
        - [Bootstrapping](#bootstrapping)
    - [Routes](#routes)
    - [Components](#components)
        - [Templates](#templates)
        - [Metadata](#metadata)
            - [Data Binding](#data-binding)
        - [Classes](#classes)
    - [Directives](#directives)
    - [Services](#services)
    - [References](#references)

<!-- /TOC -->

## Angular CLI
- Fully functional project generation
- Code generator for components, directives, pipes, enums, classes, modules and services
- Build generator
- Unit test runner
- End-to-end test runner
- App deployment GitHub pages
- Linting
- CSS preprocessor support
- AOT support
- Lazy routes

```bash
$ npm install -g angular-cli
$ ng new my-app
$ cd my-app
$ ng serve
```

### AOT Compilation
- Smaller Angular framework download size
- Fewer async request 
- Faster rendering
- Detect template errors earlier
- Better security

1. Needs to install an specific compiler
```bash
$ npm install @angular/compiler-cli @angular/platform-server --save
```
2. Copy the original *tsconfig.json* to a file called *tsconfig-aot.json* on the project root and modify it as follows:
```json
{
    "compilerOptions": {
        "target": "es5",
        "module": "es2015",
        "moduleResolution": "node",
        "sourceMap": true,
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "lib": [ "es2015", "dom" ],
        "noImplicitAny": true,
        "suppressImplicitAnyIndexErrors": true
    },
    "files": [
        "src/app/app.module.ts",
        "src/main.ts"
    ],
    "angularCompilerOptions": {
        "genDir": "aot",
        "skipMetadataEmit": true
    }
}
``` 
- *genDi* tells the compiler to store the compiled output files in a new aot folder
- *skipMetadataEmit* prevents the compiler from generating metadata files
3. Compiles the application
```bash
$ node_modules/.bin/ngc -p tsconfig-aot.json
```
**Bootstrap**
Instead of bootstrapping **AppModule** you bootstrap the application with the generated module factory **AppModuleNgFactory**

JIT compilation
```js
platformBrowserDynamic().bootstrapModule(AppModule);
```
AOT compilation
```js
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
```

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
- Services are generally a class
- Should only do one specific thing
- Take the burden of business logic out of components
- A best practice is use **@Injectabl** so that metadata is generated correctly
- Consumes the data that it needs and serves to the template

Example:
```javascript
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

const BASE_URL = "http://localhost:3000/items";

@Injectable()
export class ItemsService {
    constructor(private http: Http) {}

    loadItems() {
        return this.http.get(BASE_URL)
                        .map(res => res.json())
                        .toPromise();
    }
}
```

## References

- [Building awesome Web Apps with Angular 2](https://frontendmasters.com/courses/web-apps-angular-2)
- [Ahead-Of-Time compilation](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html)
- [Ahead-of-Time Compilation in Angular](http://blog.mgechev.com/2016/08/14/ahead-of-time-compilation-angular-offline-precompilation/)