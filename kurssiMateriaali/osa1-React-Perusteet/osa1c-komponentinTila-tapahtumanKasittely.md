# Osa 1c Memo

## Component helper function

Extend component to render a birth year.

```
const Hello = (props) => {

  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }

  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>

      <p>So you were probably born {bornYear()}</p>
    </div>
  )
}
```

## One line arrow function and destr

Arrow can be simplified to one liner as it returns only a number in this case.
As App returns name and age, props can be destructured already in Hello = ({name, age}) => {}.
But can be also done as in example. It depends what data object carries and if you want to pass it all in.
Do not clutter the properties..

```
const Hello = (props) => {
  const { name, age } = props;
  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
    <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born {bornYear()}</p>
    </div>
  );
};
const App = () => {
  const nimi = 'Pekka';
  const ika = 10;
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={nimi} age={ika} />
    </div>
```

## Website rerendering

useState and useEffect are React features that allow rendering a component, such as a button, without re-rendering the entire page. This prevents site flickering when using these features.

```
Using setTimeOut ex:

import { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  setTimeout(() => setCounter(counter + 1), 1000);

  return <div>{counter}</div>;
};

----

useState with two buttons:

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => {
    console.log('Counter + 1');
    return setCounter(counter + 1);
  };

  const setToZero = () => setCounter(0);

  return (
    <div>
      <div>{counter}</div>
      <button onClick={increaseByOne}>Plus</button>
      <button onClick={setToZero}>Reset</button>
    </div>
  );
};


```

Could use for button testing
<button onClick={() => console.log('clicked')}></button>

## State sharing between components

Info of state [sharing](https://react.dev/learn/sharing-state-between-components)

```
const Display = ({ counter }) => <div>{counter}</div>;

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);

  return (
    <div>
      <Display counter={counter} />
      <Button handleClick={increaseByOne} text="plus" />
      <Button handleClick={setToZero} text="zero" />
      <Button handleClick={decreaseByOne} text="minus" />
    </div>
  );
};
```
