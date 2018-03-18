<h1>React</h1>

<!-- TOC -->

- [Components](#components)
    - [Basic component](#basic-component)
    - [Using nested components](#using-nested-components)
    - [ES6 Classes Component](#es6-classes-component)
- [React Methods](#react-methods)
- [ReactDOM](#reactdom)
- [JSX](#jsx)
    - [Spread operator](#spread-operator)
- [React Router v4](#react-router-v4)
- [Typechecking with PropTypes](#typechecking-with-proptypes)
- [Iterating](#iterating)
- [State Management](#state-management)
    - [Methods](#methods)
    - [Stateless Functional Component](#stateless-functional-component)
    - [Share state](#share-state)
- [Testing](#testing)
    - [Snapshot test with Jest](#snapshot-test-with-jest)
    - [Shallow test with Enzyme](#shallow-test-with-enzyme)
    - [Coverage report with Jest](#coverage-report-with-jest)
- [Lifecycle](#lifecycle)
- [Ajax](#ajax)
- [References](#references)

<!-- /TOC -->


<!--------------- COMPONENT --------------->
# Components
## Basic component
```js
var myComponent = React.createClass({
  render: function()  {
    return (
      React.DOM.div(null,
        React.DOM.h1(null, "This is my first component!"))
    )
  }
});
```
## Using nested components
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
        React.createElement(myTitle)
      )
    )
  }
})
```
## ES6 Classes Component
```js
// ...
class Name extends React.Component {
  render () {
    return (
      <div>
        <h1>My Component</h1>
      </div>
    )
  }
}
// ...
```
<!--------------- METHODS --------------->
# React Methods
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
        myFactory({title: "my title 2"})           
      )
    )
  }
})
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
```js
ReactDOM.render(Render.createElement(app), document.getElementBy('app'))
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
## Spread operator
Without the spread operator
```js
// ...
const Search = React.createClass({
  render () {
    return (
      <div className='search'>
        {
          preload.shows
          .map((movie) => {
            return (
              <ShowCard key={movie.imdbID} movie={movie} />
            )
          })
        }
      </div>
    )
  }
})
// ...
const ShowCard = React.createClass({
  render () {
    return (
      <div className='show-card'>
        <img src={`/public/img/posters/${this.props.movie.poster}`} />
        <div>
          <h3>{this.props.movie.title}</h3>
          <h4>({this.props.movie.year})</h4>
          <p>{this.props.movie.description}</p>
        </div>
      </div>
    )
  }
})
```
With the spread operator
```js
// ...
const Search = React.createClass({
  render () {
    return (
      <div className='search'>
        {
          preload.shows
          .map((movie) => {
            return (
              <ShowCard key={movie.imdbID} {...movie} />
            )
          })
        }
      </div>
    )
  }
})
// ...
const ShowCard = React.createClass({
  render () {
    let { poster, title, year, description } = this.props
    return (
      <div className='show-card'>
        <img src={`/public/img/posters/${poster}`} />
        <div>
          <h3>{title}</h3>
          <h4>({year})</h4>
          <p>{description}</p>
        </div>
      </div>
    )
  }
})
```

<!--------------- ROUTING --------------->
# React Router v4
Installation
```bash
npm install --save react-router
```

- **\<HashRouter\>**: Encapsulates behavior. Should be used for static websites. Adds the # to the URL.
```js
import { HashRouter } from 'react-router'

const App = React.createClass({
  render: function () {
    return (
      <HashRouter>
        ...
      </HashRouter>
    )
  }
})
```
- **\<BrowserRouter\>**: Should be used when you have a server to handle dynamic requests.
```js
import { BrowserRouter } from 'react-router'

const App = React.createClass({
  render: function () {
    return (
      <BrowserRouter>
        ...
      </BrowserRouter>
    )
  }
})
```
- **\<Match\>**: Contains information about how a Route path matched the URL.match objects.
```js
const App = React.createClass({
  render: function () {
    return (
      <BrowserRouter>
        <div className='app'>
          <Match exactly pattern='/' component={Landing} />
          <Match pattern='/search' component={Search} />
        </div>
      </BrowserRouter>
    )
  }
})
```
- **\<Link\>**: Provides declarative, accessible navigation around the application. Equivalent to a \<a\> tag
```js
<Link to="/about">About</Link>
```
```js
<Link to={{
  pathname: '/list',
  search: '?sort=name',
  hash: '#hash',
  state: { fromDashboard: true }
}}/>
```

<!--------------- PROPERTY TYPES --------------->
# Typechecking with PropTypes

*PropTypes* exports a range of validators that can be used to make sure the data you receive is valid. *propTypes* is only checked in development mode.
```js
import React from 'react'
const { arrayOf, shape, string } = React.PropTypes

const ShowCard = React.createClass({
  propTypes: {
    poster: string,
    title: string,
    year: string,
    description: string,
    shows: arrayOf(shape({
      title: string,
      description: string
    }))
  },
  render () {
    let { poster, title, year, description } = this.props
    return (
      <div className='show-card'>
        <img src={`/public/img/posters/${poster}`} />
        <div>
          <h3>{title}</h3>
          <h4>({year})</h4>
          <p>{description}</p>
        </div>
      </div>
    )
  }
})
```
With ES6 classes. We have to bind *this* because ES6 classes don't do it
```js
class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // ...
    }
  }
  someMethod () {
    this.setState({prop: 'string'})
  }
  render () {
    return (
      // ...
    )
  }
}

const { func, bool, string } = React.PropTypes
Header.propTypes = {
  onChange: func,
  show: bool,
  search: string
}

```

<!--------------- ITERATIONS --------------->
# Iterating
```js
import React from 'react'
import ShowCard from './ShowCard'
import preload from '../public/data.json'

const Search = React.createClass({
  render () {
    return (
      <div className='search'>
        {
          preload.shows
            .map((movie) => {
              return (
                <ShowCard key={movie.imdbID} movie={movie} />
              )
            })
        }
      </div>
    )
  }
})

export default Search
```

<!--------------- STATE MANAGMENT --------------->
# State Management
<!---- METHODS ---->
## Methods
- **getInitialState()**: Returns the initial state.
```js
// ...
const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  render () {
    // ...
  }
})
// ...
```
- **setState()**: Enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state.
```js
// ...
const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  handleSearchTermChange (event) {
    this.setState({searchTerm: event.target.value})
  },
  render () {
    // ...
  }
})
// ...
```
- **forceUpdate():** Forces to render the component. Avoid used it, uses setStates instead.

<!---- STATELESS COMPONENT ---->
## Stateless Functional Component
A static component is a component that don't have state. It's always returning static markup.
The next component:
```js
const Title = React.createClass({
  render () {
    return (
      <h1>Your title</h1>
    )
  } 
})
```
Can be write as the following to keep it simple:
```js
const Title = () => {
  return <h1>Your title</h1>
}
```
And with parameters:
```js
const Title = (props) => {
  return <h1>{props.param.id}</h1>
}
```
<!---- SHARE STATE ---->
## Share state
Describes the way we can pass data from a component to the next one
```js
import data from '../data.json'
// ...
const App = React.createClass({
  render: function () {
    return (
      <BrowserRouter>
        <div className='app'>
          <Match 
            pattern='/next' 
            component={(props) => <Search shows={data.elements} {...props} />} />
        </div>
      </BrowserRouter>
    )
  }
})
// ...
```
The component which receives the properties
```js
// ...
const Component = React.createClass({
  propTypes: {
    elements: arrayOf(shape({
      id: string,
      description: string
    }))
  },
  render () {
    return (
      <div className='my-component'>
        <div>
          {this.props.elements
              .map((show) => <ShowCard key={show.id} {...show} />
          })}
        </div>
      </div>
    )
  }
})
// ...
```
<!--------------- TESTING --------------->
# Testing
## Snapshot test with Jest
```js
import React from 'react'
import Search from './Search'
import renderer from 'react-test-renderer'

test('Search snapshot test', () => {
  let component = renderer.create(<Search/>)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
```
## Shallow test with Enzyme
```js
import React from 'react'
import Search from './Search'
import { shallow } from 'enzyme'
import { shallowToJson} from 'enzyme-to-json'

test('Search snapshot test', () => {
  let component = shallow(<Search />)
  let tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})
```
## Coverage report with Jest
```bash
$ jest --coverage
```
<!--------------- LIFECYCLE --------------->
# Lifecycle
1. **getInitialState** or **constructor** with ES6 classes
2. **componentWillMount**: called before the component gets put into the DOM
3. **componentDidMount**: called after the component gets put into the DOM
4. **componentWillUnmount**: called before leave the DOM

<!--------------- AJAX CALLS --------------->
# Ajax
We usually do the Ajax calls inside *componentDidMount*
```js
// ...
const Details = React.createClass({
  getInitialState () {
    return {
      omdbData: {}
    }
  },
  componentdidMount () {
    axios.get(`http://www.ombdapi.com/?i=${this.props.show.imdbID}`)
         .then((response) => {
           this.setState({ombdbData: response.data})
         })
         .catch((error) => console.error('axios error', error))
  },
  render () {
    const { title, year, description, poster, trailer } = this.props.show
    let rating
    if (this.state.omdbData.imdbRating) {
      rating = <h3>{this.state.omdbData.imdbRating}</h3>
    } else {
      rating = <img src='/public/img/loading.png' alt='' />
    }
    return (
      // ...
    )
  }
})

export default Details
```
<!--------------- REFERENCES --------------->
# References
- [React](https://facebook.github.io/react/)
- [Complete Intro to React v2 (feat. Router v4 and Redux) - Frontend Masters](https://frontendmasters.com/courses/complete-intro-react/)
- [React Router](https://reacttraining.com/react-router/)
- [Component Lifecycle](https://facebook.github.io/react/docs/react-component.html)
