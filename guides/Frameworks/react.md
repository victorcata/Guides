<h1>React</h1>

<!-- TOC -->

- [My First Component](#my-first-component)
- [ReactDOM](#reactdom)
- [Methods](#methods)
- [JSX](#jsx)
- [Routing](#routing)
- [State Management](#state-management)
- [Iterating](#iterating)
- [Props](#props)
- [JSX -> Spread Operators](#jsx---spread-operators)
- [References](#references)

<!-- /TOC -->

<!--------------- FIRST COMPONENT --------------->
# My First Component
- Basic component
```js
var myComponent = React.createClass({
  render: function()  {
    return (
      React.DOM.div(null,
        React.DOM.h1(null, "This is my first component!"))
    )
  }
});

ReactDOM.render(React.createElement(myFirstComponent), document.getElementById("app"));
```
- Using nested components
```js
var myTitle = React.createClass({
  render: function(){
    return (
      React.DOM.div(null, 
        React.DOM.h1(null, "Component title")
      )
    )
  }
});

var myFirstComponent = React.createClass({
  render: function() {
    return (
      React.DOM.div(null,
        React.createElement(myTitle),
        React.createElement(myTitle),
        React.createElement(myTitle),
        React.createElement(myTitle)
      )
    )
  }
})
```
- Using a Factory and properties in the components
```js
var myTitle = React.createClass({
  render: function(){
    return (
      React.DOM.div(null, 
        React.DOM.h1({ style: { color: this.props.color, fontWeight: "bold"}}, this.props.title)
      )
    )
  }
});

var myFactory = React.createFactory(myTitle);

var myFirstComponent = React.createClass({
  render: function() {
    return (
      React.DOM.div(null,
        myFactory({title: "my title 1", color: "red"}),
        myFactory({title: "my title 2"}),
        myFactory({title: "my title 3"}),
        myFactory({title: "my title 4"})                
      )
    )
  }
})

ReactDOM.render(React.createElement(myFirstComponent), document.getElementById("app"));
```

<!--------------- REACT DOM --------------->
# ReactDOM
ReactDOM can be loaded by a <script> tag, ES6 with npm (import ReactDOM from 'react-dom') or with ES5 node.js (var ReactDOM = require('react-dom')).

- **render**: Render a React element into the DOM in the supplied container and return a reference to the component
```js
ReactDOM.render(
    element,
    container,
    [callback]
)
```
Without JSX
```js
ReactDOM.render(Render.createElement(app), document.getElementBy('app'))
```
With JSX
```js
ReactDOM.render(<App />, document.getElementBy('app'))
```

<!--------------- METHODS --------------->
# Methods
- **createClass**: Create a component class.
```js
const app = React.createClass({
    render() {
        return (
            <div></div>
        )
    }
})
```
- **createElement**: Create and return a new React element of the given type (a tag name or a React component type).
```js
React.createElement(
    type,
    [properties],
    [...children]
)
```
- **createFactory**: Return a function that produces React elements of a given type (a tag name or a React component type).
```js
React.createFactory(type)
```

<!--------------- JSX --------------->
# JSX
JSX element is just syntactic sugar for calling *React.createElement(...)*
- Without JSX
```js
var app = React.createClass({
  render: function (){
    return (
      React.DOM.div(null, 
        React.DOM.h1({ style: { color: this.props.color, fontWeight: 'bold'}}, this.props.title)
      )
    )
  }
})
```
- With JSX
```js
var app = React.createClass({
  render: function () {
    let style = {color: this.props.color, fontWeight: 'bold'};
    return (
      <div>
        <h1 style={style}>
          {this.props.title}
        </h1>
      </div>
    )
  }
})
```

<!--------------- ROUTING --------------->
# Routing
- HashRouter: encapsulates behavior
- Match
- BrowserRouter
- Link

# State Management
- getInitialState()
- setState()
- forceUpdate(): know it but not used it

# Iterating

# Props

# JSX -> Spread Operators

<!--------------- REFERENCES --------------->
# References
- [React](https://facebook.github.io/react/)
- [Complete Intro to React v2 (feat. Router v4 and Redux) - Frontend Masters](https://frontendmasters.com/courses/complete-intro-react/)
