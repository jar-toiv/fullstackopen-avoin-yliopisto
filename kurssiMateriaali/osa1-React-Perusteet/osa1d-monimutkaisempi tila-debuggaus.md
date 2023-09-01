# Osa 1d Memo

## More complex state

Choosing the state [structure](https://react.dev/learn/choosing-the-state-structure)

**Note**: Always make a copy from the last state {...clicks, left: clicks.left + 1}

### Shared state

```
const App = () => {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });

  const handleLeftClick = () => {
    setClicks({ ...clicks, left: clicks.left + 1 });
  };

  const handleRightClick = () => {
    setClicks({ ...clicks, right: clicks.right + 1 });
  };
  return (
    <>
      <div>
        <div>
          {clicks.left}
          <button onClick={handleLeftClick}>Left</button>
          <button onClick={handleRightClick}>Right</button>
          {clicks.right}
        </div>
      </div>
    </>
  );
};
```

### State and Array

**Concat:** Combines two or more arrays. This method returns a new array without modifying any existing arrays.
**Push:** Adds an element into a existing array. AVOID! can cause some nasty bugs.

```
const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'));
    setLeft(left + 1);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat('R'));
    setRight(right + 1);
  };

  return (
    <div>
      <div>
        {left}
        <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        {right}
        <p>{allClicks.join(' ')}</p>
      </div>
    </div>
  );
};
```

## React is asynchronous

If we want to count total amount of presses happened. By setting new state and keeping the code base same total is one count behind
compared to the btn left or right counter. Reason is that React renders then async. Explain more about the process here

Code where right click creates an new array and adds R letter into it with rest of the elements from referenced array.
React only updates the state **right**, but not total and reason is Reacts performance features and asynchronous compile.

Left click creates also new array and saves the state **left**, but now the left + 1 is added into a new variable which is send to both setLeft and setTotal.
This makes React to render both values.

```
const App = () => {
const [left, setLeft] = useState(0);
const [right, setRight] = useState(0);
const [allClicks, setAll] = useState([]);
const [total, setTotal] = useState(0);

const handleLeftClick = () => {
setAll(allClicks.concat('L'));
const updatedLeft = left + 1;
setLeft(updatedLeft);
setTotal(updatedLeft + right);
};

const handleRightClick = () => {
setAll(allClicks.concat('R'));
console.log('Righty BEFORE', left);

    setRight(right + 1);
    setTotal(right + left);

};

return (
<div>
<div>
{left}
<button onClick={handleLeftClick}>left</button>
<button onClick={handleRightClick}>right</button>
{right}
<p>{allClicks.join(' ')}</p>
<p>Total: {total}</p>
</div>
</div>
);
};
`
```

### Refactoring the code

````
const History = (props) => {
  if (props.allClicks.length === 0)
    return <div>The app is used by pressing buttons</div>;

  return <div> button press history: {props.allClicks.join(' ')}</div>;
};

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'));
    const updatedLeft = left + 1;
    setLeft(updatedLeft);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat('R'));
    const updatedRight = right + 1;
    setRight(updatedRight);
  };

  return (
    <>
      <div>
        <div>
          {left}
          <Button handleClick={handleLeftClick} text="left" />
          <Button handleClick={handleRightClick} text="right" />
          {right}
          <p>{allClicks.join(' ')}</p>
          <History allClicks={allClicks} />
        </div>
        ```
````

## Old React

Before 2019 React did not have state [hooks](https://react.dev/learn/state-a-components-memory)

[Class](https://react.dev/reference/react/Component)

```
class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```

## React debugging

React Deb [Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

### My golden rules

- Understand the context: When, reproduciple?, Who/what it is effecting to
- Understand the flow: log, debugger, comment out other code
- Leave trail: Take a notes what you did and avoid repeating same debug processes.

## Rules of React hooks

```
const App = (props) => {
  // nämä ovat ok
  const [age, setAge] = useState(0)
  const [name, setName] = useState('Juha Tauriainen')

  if ( age > 10 ) {
    // ei ehtolauseessa
    const [foobar, setFoobar] = useState(null)
  }

  for ( let i = 0; i < age; i++ ) {
    // eikä myöskään loopissa
    const [rightWay, setRightWay] = useState(false)
  }

  const notGood = () => {
    // ei muiden kuin komponentin määrittelevän funktion sisällä
    const [x, setX] = useState(-1000)
  }

  return (
    //...
  )
}
```

## Returning function from inside of a function

```
const App = (props) => {
  const [value, setValue] = useState(10)

  const hello = () => {
    const handler = () => console.log('hello world')
    return handler
  }

  return (
    <div>
      {value}
      <button onClick={hello()}>button</button>
    </div>
  )
}

OR:

const App = (props) => {
  const [value, setValue] = useState(10)

  const hello = (who) => {
    const handler = () => {
      console.log('hello', who)
    }
    return handler
  }

  return (
    <div>
      {value}
      <button onClick={hello('world')}>button</button>
      <button onClick={hello('react')}>button</button>
      <button onClick={hello('function')}>button</button>
    </div>
  )
}
```
