import { useState } from 'react';
const Header = ({ header }) => <h1>{header}</h1>;
const Statistics = ({ stats }) => <h2>{stats}: </h2>;

const Button = ({ handleClick, text }) => (
  <div>
    <button onClick={handleClick}>{text}</button>
  </div>
);

/**
 * Docs for button useState, tiggers re-render by taking oldState and pointing it with + 1 for newState with Re-render.
 * setGood((good) => good + 1);
 * https://react.dev/reference/react/useState#setstate
 */

const App = () => {
  const header = 'Give feedback';
  const statistics = 'Statistic';
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const handleBtnGood = () => {
    setGood((good) => good + 1);
    setTotal((total) => total + 1);
  };

  const handleBtnNeutral = () => {
    setNeutral((neutral) => neutral + 1);
    setTotal((total) => total + 1);
  };

  const handleBtnBad = () => {
    setBad((bad) => bad + 1);
    setTotal((total) => total + 1);
  };

  const calculateAverage = total === 0 ? 0 : (good - bad) / total;
  const positiveFeedbackPercentage = total === 0 ? 0 : (good / total) * 100;

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
          <p>All: {total} </p>
          <p>Average: {calculateAverage.toFixed(5)}</p>
          <p>Positive: {positiveFeedbackPercentage.toFixed(2)} %</p>
        </div>
      </div>
    </>
  );
};

export default App;
