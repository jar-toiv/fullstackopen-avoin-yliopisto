# Reactin alkeet

# Table of Contents

- [Vitejs](#Vitejs)
- [React-component](#Component-component)
- [JSX](#JSX)
- [Many-components and props](#Many-components-and-props)
- [Don't render object](#Don't-render-object)

# Install [Vitejs](https://vitejs.dev/)

```
install:
npm create vite@latest part1 -- --template react
cd part1
npm install

run vite:
npm run dev

--
Console:
  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help

```

## Vite

Vite is a build tool and development server that aims to provide a faster and leaner development experience for modern web projects. It was created by Evan You, the same person who created the Vue.js framework. The name "Vite" comes from the French word for "quick" or "fast," which is a nod to the tool's main selling point: speed.

## Key Features:

### Fast Development

Extremely fast development startup and reload times thanks to its use of native ES modules in the browser.

### Hot Module Replacement (HMR)

Provides out-of-the-box support for HMR, which allows you to see changes without a full page reload.

### Rich Plugin Architecture

Built on top of Rollup plugins, Vite's plugin system allows you to extend its functionality easily.

### Optimized Builds

Uses Rollup for the final build, giving you a highly optimized and tree-shaken production output.

### Framework Agnostic

While it was initially tailored for Vue.js, Vite is framework-agnostic and has official templates and plugins for React, Svelte, and other popular frameworks.

### TypeScript Support

Provides first-class TypeScript support without requiring additional configuration.

### CSS Pre-Processing

Supports various CSS preprocessors like SCSS, Less, and Stylus.

### Static Asset Handling

Has a special handling mechanism for static assets like images, fonts, etc., allowing you to reference them easily in your code.

## How It Works:

### Development

During development, Vite serves files over native ES modules, allowing the browser to directly import them. This eliminates the need for a bundler during development, resulting in faster load times.

### Production

For production, Vite uses Rollup to bundle the files, benefiting from its advanced tree-shaking and code-splitting capabilities.

# React Component

In React, a component is a reusable piece of code that manages its own content, logic, and rendering.

There are two main types: Functional Components and Class Components. Components receive read-only properties known as "props" and can have mutable state, which triggers re-renders when changed. They can also have lifecycle methods or hooks to manage side-effects like data fetching.

Components serve as the building blocks of a React application, making it easier to develop complex UIs

```
React Component called App

App.jsx

const App = () => (
  <div>
    <p>Hello world</p>

    <div>
      <form>
        <ul>
          <li>unordered list</li>
        </ul>
      </form>
    </div>
  </div>
);

export default App;

main.jsx

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

```

Dynamic Component

```
const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log(now, a + b);

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  );
};
export default App;

```

## Many-components and props

Components communicate with each other using [props](https://react.dev/learn/passing-props-to-a-component). Parent component can pass info to its child.
Props can pass any JS value, including Objects, Arrays and Functions.

Note: **React components start with Capital letter**

```
Two components without props

const Hello = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
    </div>
  );
};

export default App;

```

```
Component App passing two props name and age

const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

const App = () => {
  const name = 'Jack';
  const age = 15;

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name="Jack" age={age} />
    </div>
  );
};

export default App;


```

Rendering with props

```
Without root error will occur
Note: extra div gets generated without use of fragmentation <> </>

div id=root
    div
        h1
        div - Maya
        div - Jack
        div - Footer
    div
div
```

Using fragmentation to render extra div out

```
App.jsx:

return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name="Jack" age={age} />
      <Footer />
    </>
  );

HTML:

div id=root
    h1
    div - Maya
    div - Jack
    div - Footer

```

```
Root can be an array, but not advised.
Warning: Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.

const App = () => {
  return [
    <h1>Greetings</h1>,
    <Hello name="Maya" age={26 + 10} />,
    <Footer />
  ]
}

```

## Don't render object

React does not allow React child rendering as an object.
Instead you should make both name and age as a separate prop and render them.

example from course:

```
Both in same prop:

const App = () => {
  const friends = [
    { name: 'Leevi', age: 4 },
    { name: 'Venla', age: 10 },
  ]

  return (
    <div>
      <p>{friends[0]}</p>
      <p>{friends[1]}</p>
    </div>
  )
}

---
Both separated prop:

const App = () => {
  const friends = [
    { name: 'Leevi', age: 4 },
    { name: 'Venla', age: 10 },
  ]

  return (
    <div>
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
    </div>
  )
}

export default App
```

### React can render String, Number, Object properties, Array, JSX elements, Nested Array(when flattened) and function return value => const getNumber = () => 1; ==> return <div> {getNumber()}</div>

Example from course:

```
const App = () => {
  const friends = [ 'Leevi', 'Venla']

  return (
    <div>
      <p>{friends}</p>
    </div>
  )
}
```
