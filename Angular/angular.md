<link href="../styles.css" rel="stylesheet"></style>
<h1 style="background-color: #333; color: white; padding-bottom: 0; text-align: center">ANGULAR 2</h1>

<!-- TOC -->

- [Angular CLI](#angular-cli)
    - [AOT Compilation](#aot-compilation)
- [Modules](#modules)
    - [@NgModule](#ngmodule)
    - [Bootstrapping](#bootstrapping)
- [Components](#components)
    - [Classes and Metadata](#classes-and-metadata)
    - [Lifecycle Hooks](#lifecycle-hooks)
    - [Templates](#templates)
        - [Structural directives](#structural-directives)
        - [Navigation Operator](#navigation-operator)
        - [Data Binding](#data-binding)
            - [Property Binding](#property-binding)
            - [Event Binding](#event-binding)
            - [Two-way Binding](#two-way-binding)
    - [Contracts](#contracts)
- [Directives](#directives)
- [Services](#services)
    - [Exposing a service](#exposing-a-service)
    - [Consuming a service](#consuming-a-service)
- [Routes](#routes)
- [Forms](#forms)
    - [ngModel](#ngmodel)
    - [Form Controls](#form-controls)
    - [State mutations](#state-mutations)
- [Server Communication](#server-communication)
    - [HTTP Module](#http-module)
    - [Observables](#observables)
    - [Headers](#headers)
- [References](#references)

<!-- /TOC -->


<!---------------------------------------------------------- ANGULAR CLI ---------------------------------------------------------->
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

Installation:
```bash
$ npm install -g angular-cli
$ ng new my-app
$ cd my-app
$ ng serve
```

Generating a build:
```bash
ng build
```

Running tests:
```bash
ng test
ng e2e
```

Linting:
```bash
ng lint
```

Deploying the app in GitHub pages:
```bash
ng github-pages:deploy -m "commit message"
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


<!---------------------------------------------------------- MODULES ---------------------------------------------------------->
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


<!---------------------------------------------------------- COMPONENT ---------------------------------------------------------->
## Components

(component.png)

- Components are ES6 classes
- Properties and methods of the component class are available to the template
- Providers are injected in the constructor
- Hook into the component lifecycle with hooks

Generating a component:
```bash
$ ng generate component my-component
$ ng g component my-component       # g is the alias
```

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



### Classes and Metadata

Classes:
- Create the component as an ES6 class
- Properties and method on our component class will be available for binding in our template

Metadata:
- Allows Angular to process a class
- We can attach metadata with TypeScript using decorators (functions)
- The most common decorator is **@Component()**
- Takes a config option with the **selector, templateUrl, styles, styleUrl, animations, etc**

1. Define a class
```javascript
export class ItemComponent {}
```
2. Import the dependencies
```javascript
import { Component } from "@angular/core";
export class ItemComponent {}
```
3. Decorate the class with Angular specific metadata
- **@Component** to decorate the class
- **@Input** and **@Output** are the most common member decorators
```js
import { Component } from "@angular/core";

@Component({
    selector: "app-item",
    templateUrl: "./items.component.html",
    styleUrls: [ "./items.component.css" ]
});

export class ItemComponent {}
``` 
4. Properties and methods
```js

import { Component } from "@angular/core";
import { Item } from "./shared";

@Component({
    selector: "app-item",
    templateUrl: "./items.component.html",
    styleUrls: [ "./items.component.css" ]
});

export class ItemComponent {
    items: Array<Item>;
    selectedItem: Item;

    constructor() {}

    resetItem() {
        let emptyItem: Item = { id: null, name: "", description: "" };
        this.selectedItem = emptyItem;
    }

    selectItem(item: Item) {
        this.selectedItem = item;
    }
}
```
5. Dependency Injection
```js

import { Component } from "@angular/core";
import { ItemService, Item } from "./shared";

@Component({
    selector: "app-item",
    templateUrl: "./items.component.html",
    styleUrls: [ "./items.component.css" ]
});

export class ItemComponent {
    items: Array<Item>;
    selectedItem: Item;

    constructor(private itemsService: ItemService) {}

    ngOnInit(){
        this.itemsService.loadItems()
                         .then(items => this.items = items);
    }
    
    resetItem() {
        let emptyItem: Item = { id: null, name: "", description: "" };
        this.selectedItem = emptyItem;
    }

    selectItem(item: Item) {
        this.selectedItem = item;
    }
}
```



### Lifecycle Hooks

- Allows us to perform custom logic at various stages of a component's life
- Data isn't always available in the constructor
- Implemented as class methods on the component class

Lifecycle calls:
- **ngOnChanges:** when an input or output binding value changes
- **ngOnInit:** afgter the first ngOnChanges
- **ngDoCheck:** handles developer's custom change detection
- **ngAfterContentInit:** after component content initialized
- **ngAfterContentChecked:** after every check of component content
- **ngAfterViewInit:** after component's view are initialized
- **ngAfterViewChecked:** after every check of a component's view
- **ngOnDestroy:** just before the directive is destroyed

```js
import { Component, OnInit } from "@angular/core";
import { ItemService, Item } from "./shared";

@Component({
    selector: "app-item",
    templateUrl: "./items.component.html",
    styleUrls: [ "./items.component.css" ]
});

export class ItemComponent implements OnInit {
    items: Array<Item>;
    selectedItem: Item;

    constructor(private itemsService: ItemService) {}

    ngOnInit(){
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

#### Structural directives 
- A structural directive changes the DOM layout by adding or removing DOM elements
- Asterisk indicate a directive that modifies the HTML
- To avoid having to use templates elements directly

With asterisk
```html
<span [ngSwitch]="toeChoice">
    <span *ngSwitchCase="'A'">A</span>
    <span *ngSwitchCase="'B'">B</span>
    <span *ngSwitchCase="'C'">C</span>
    <span *ngSwitchDefault>other</span>
</span>
```
With templates
```html
<span [ngSwitch]="toeChoice">
    <template [ngSwitchCase]="'A'"><span>A</span></template>
    <template [ngSwitchCase]="'B'"><span>B</span></template>
    <template [ngSwitchCase]="'C'"><span>C</span></template>
    <template [ngSwitchDefault]><span>other</span></template>
</span>
```

#### Navigation Operator
- Denoted by a question mark immediately followed by a period
- If you reference a property in your template that does not exist, you will throwan exception
- Is a guard against null and undefined properties
```html
The null hero's name is {{nullHero?.firstName}}
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

##### Property Binding
- Flows data from the component to an element
- Created with brackets
- The canonical form is **bind-property**
- Binding to specific attributes, clases and styles look like **[attr.property], [class.className] or [style.styleName]**
```html
<span [style.color]="componentStyle">Colored text</span>
```

##### Event Binding
- Flows data from an element to the component
- Created with parentheses
- The canonical form is **on-even**
- Information about the target event is carried in the $event parameter
```html
<button (click)="alerting($event)">Alert</button>
```

##### Two-way Binding
- A combination of property and event binding
- Used in conjunction with **ngModel**
```html
<h1 [style.color]="myColor">Colored text</h1>
<input type="text" [(ngModel)]="myColor" />
{{myColor}}
``` 

### Contracts
- **@Input**
    - Class --> Template
    - Allows data to flow from a parent component to a child component
    - Defined via the *@Input* decorator: *@Input() someValue: String = value*
    - Bind in parent template *<component [someValue]="value"></component>*
    - We can alias inputs: *@Input("alias") someValue: string;*

In the child component
```js
import { Component, Input } from "@angular/core";

@Component({
    selector: "my-component",
    template: `
        <div>Greeting from parent:</div>
        <div>{{greeting}}</div>
    `
})
export class MyComponent {
    @Input() greeting: String = "Default Greeting";
}
```
In the parent component
```js
@Component({
    selector: "app",
    template: `
        <my-component [greeting]="greeting"></my-component>
        <my-component></my-component>
    `
})
export class App {
    greeting: String = "Hello child!";
}
```

- **@Output**
    - Template --> Class 
    - Exposes an *EventEmitter* property that emits events to the parent component
    - Defined via the *@Output* decorator: *@Output() showValue = new EventEmitter();*
    - Bind in parent template: *<cmp (someValue)="handleValue()"></cmp>*

In the child component
```js
import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "my-component",
    template: `<button (click)="greet()">Greet Me</button>`
})
export class MyComponent {
    @Output() greeter = new EventEmitter();

    greet() {
        this.greeter.emit("Child greeting emitted!");
    }
}
```

In the parent component
```js
@Component({
    selector: "app",
    template: `
        <div>
            <h1>{{greeting}}</h1>
            <my-component (greeter)="greet($event)"></my-component>
        </div>
    `
})
export class App {
    private greeting;

    greet(event) {
        this.greeting = event;
    }
}
```

<!---------------------------------------------------------- DIRECTIVES ---------------------------------------------------------->
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


<!---------------------------------------------------------- SERVICES ---------------------------------------------------------->
## Services

- Services are generally a class
- Should only do one specific thing
- Take the burden of business logic out of components
- A best practice is use **@Injectabl** so that metadata is generated correctly
- Consumes the data that it needs and serves to the template

Generating a service:
```bash
ng generate service my-service
ng g service my-service         # g is the alias
```
Example:
```javascript
@Injectable()
export class ItemsService {
    constructor(private http: Http) {}

    loadItems() { }
    loadItem(id) { }
    saveItem(item: Item) { }
}
```

### Exposing a service
```js
@NgModule({
    declarations: [
        AppComponent,
        ItemsComponent,
        ItemsListComponent,
        ItemDetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        Ng2RestAppRoutingModule
    ],
    providers: [ItemsService],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

### Consuming a service
```js
// ...
import { ItemsService, Item } from "../shared";

@Component({
    // ...
})
export classItemsComponent implements OnInit {
    // ...
    constructor(private itemsService: ItemsService) {}
    // ...
}
```



<!---------------------------------------------------------- ROUTES ---------------------------------------------------------->
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



<!---------------------------------------------------------- FORMS ---------------------------------------------------------->
## Forms
```js
import { FormsModule } from "@angular/forms";
```

###  ngModel
- Enables two-way data binding within a form
- Creates a **FormControl** instance from a domain model and binds it to a form element

```html
<input type="text" required [(ngModel)]="title" #myInput="ngModel" />
<pre>{{ myInput.value | json }}</pre>
```

### Form Controls
- **ngControl** binds a DOM element to a FormControl
- **FormControl** is responsible for tracking value and validation status of a single form element
- You can group FormControls together with **FormGroup**
- **ngForm** binds an HTML form to a top-level FormGroup
- **ngModelGroup** creates and binds a FormGroup instance to a DOM element
```html
<form novalidate #myForm="ngForm">
    <input type="text" name="title" required [(ngModel)]="title" />
    <input type="text" name="description" [(ngModel)="description" />
</form>
<pre>{{myForm.value | json}}</pre>
<pre>{{myForm.valid | json}}</pre>
```
```html
<form novalidate #myForm="ngForm">
    <input type="text" name="title" required [(ngModel)]="title" />
    <div ngModelGroup="details">
        <input type="text" name="description" [(ngModel)="description" />
        <input type="text" name="status" [(ngModel)="status" />
    </div>
</form>
<pre>{{myForm.value | json}}</pre>
<pre>{{myForm.valid | json}}</pre>
```

### State mutations
```js
originalName: string;
selectedItem: Item;
@Input() set item(value: Item) {
    if (value) {
        this.originalName = value.name;
    }
    this.selectedItem = Object.assign({}, value);
}
```

<!---------------------------------------------------------- SERVER ---------------------------------------------------------->
## Server Communication

### HTTP Module
- Simplifies usage of the XHR APIs
- Matches RESTful verbs
- Returns an observable

**Methods**<br/>
- *request* Any type of HTTP request
- *get | post | put | delete | patch | head*

```js
import { HttpModule } from "@angular/http";
```
```js
loadItems() {
    return this.http.get(URL)
                    .map(res => res.json())
                    .toPromise();
}
createItem() {
    return this.http.post(URL, JSON.stringify(item), HEADER)
                    .map(res => res.json())
                    .toPromise();
}
updateItem() {
    return this.http.put(`${URL}${item.id}`, JSON.stringify(item), HEADER)
                    .map(res => res.json())
                    .toPromise();
}
deleteItem() {
    return this.http.delete(`${URL}${item.id}`)
                    .map(res => res.json())
                    .toPromise();
}
```

### Observables
- We can chain any HTTP method or any observable with *toPromise*
- We can use *.then* and *.catch* to resolve the promise
```js
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

loadItems() {
    return this.http.get(URL)
                    .map(res => res.json())
                    toPromise();
}
```
```js
constructor(private itemsService: ItemsService){}

ngOnInit() {
    this.itemsService.loadItems()
                     .then(items => this.items = items);
}
```
**Observable.subscribe**<br/>
- We finalize an observable stream by substribing to it
- Accepts three event handlers: **onNext, onError** and **onComplete**
```js
loadItems() {
    return this.http.get(URL)
                    .map(res => res.json())
                    .catch(error => Observable.throw(error.json().error || "Server error"));
}
```
```js
constructor(private itemsService: ItemsService){}

ngOnInit() {
    this.itemsService.loadItems()
                     .subscribe(items => this.items = items);
}
```

### Headers
- HTTP Module methods have an optional second parameter which is a *RequestOptions* object
- **RequestOptions** object has a headers property which is a Headers object
```js
import { Http, Headers, RequestOptions } from "@angular/http";
// ...
const headers = new Headers({ "Content-Type": "application/json"});
const options = new RequestOptions({ headers: headers });
// ...
createItem(item: Item) {
    return this.http.post(URL, JSON.stringify(item), options)
                    .map(res => res.json());
}
```

<!---------------------------------------------------------- REFERENCES ---------------------------------------------------------->
## References

- [Building awesome Web Apps with Angular 2](https://frontendmasters.com/courses/web-apps-angular-2)
- [Ahead-Of-Time compilation](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html)
- [Ahead-of-Time Compilation in Angular](http://blog.mgechev.com/2016/08/14/ahead-of-time-compilation-angular-offline-precompilation/)