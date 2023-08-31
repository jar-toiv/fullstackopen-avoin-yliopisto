import { useState } from 'react';

const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

const Footer = (props) => {
  return (
    <div>
      Greetings app footer created by
      <a href="https://www.yle.fi">Yle</a>
    </div>
  );
};

const App = () => {
  const name = 'Jack';
  const age = 15;

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name="Jack" age={age} />
      <Footer />
    </>
  );
};

export default App;
