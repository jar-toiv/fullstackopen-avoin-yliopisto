import { useState } from 'react';
const Header = ({ header }) => <h1>{header}</h1>;
const Statistics = ({ stats }) => <h2>{stats}: </h2>;

const Button = ({ handleClick, text }) => (
  <div>
    <button onClick={handleClick}>{text}</button>
  </div>
);

const App = () => {
  const header = 'Give feedback';
  const statistics = 'statistic';
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleBtnGood = () => {
    console.log('button good pressed');
    setGood(good + 1);
  };

  const handleBtnNeutral = () => {
    console.log('button neutral pressed');
    setNeutral(neutral + 1);
  };

  const handleBtnBad = () => {
    console.log('Button BAD pressed');
    setBad(bad + 1);
  };
  return (
    <>
      <div>
        <Header header={header} />
        <div style={{ display: 'flex' }}>
          <Button handleClick={handleBtnGood} text={'good'} />
          <Button handleClick={handleBtnNeutral} text={'neutral'} />
          <Button handleClick={handleBtnBad} text={'bad'} />
        </div>
        <div>
          <Statistics stats={statistics} />
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
        </div>
      </div>
    </>
  );
};

export default App;
