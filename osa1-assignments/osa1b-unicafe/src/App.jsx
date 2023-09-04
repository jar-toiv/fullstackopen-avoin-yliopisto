import { useState } from 'react';
const Header = ({ header }) => <h1>{header}</h1>;
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticLine = ({ text, value }) => {
  return (
    <div>
      {text}: {value}
    </div>
  );
};

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  calcAvg,
  posFeedback,
  checkFeedback,
}) => {
  if (!checkFeedback) {
    return <p>No feedback given</p>;
  }

  return (
    <>
      <div>
        <h2>Statistics:</h2>
        <table border="2px solid black">
          <thead>
            <tr>
              <td>
                <StatisticLine text={'Good'} value={good} />
              </td>
            </tr>
            <tr>
              <td>
                <StatisticLine text={'Neutral'} value={neutral} />
              </td>
            </tr>
            <tr>
              <td>
                <StatisticLine text={'Bad'} value={bad} />
              </td>
            </tr>
            <tr>
              <td>
                <StatisticLine text={'Total'} value={total} />
              </td>
            </tr>
            <tr>
              <td>
                <StatisticLine text={'Average'} value={calcAvg} />
              </td>
            </tr>
            <tr>
              <td>
                <StatisticLine text={'Positive'} value={posFeedback + ' %'} />
              </td>
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
};

/**
 * Docs for button useState, triggers re-render by taking oldState and pointing it with + 1 for newState with Re-render.
 * setGood((good) => good + 1);
 * https://react.dev/reference/react/useState#setstate
 */

const App = () => {
  const header = 'Give feedback';
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
  const checkFeedback = total <= 0 ? false : true;

  return (
    <>
      <div>
        <Header header={header} />
        <div style={{ display: 'flex' }}>
          <Button handleClick={handleBtnGood} text={'good'} />
          <Button handleClick={handleBtnNeutral} text={'neutral'} />
          <Button handleClick={handleBtnBad} text={'bad'} />
        </div>

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          calcAvg={calculateAverage.toFixed(2)}
          posFeedback={positiveFeedbackPercentage.toFixed(2)}
          checkFeedback={checkFeedback}
        />
      </div>
    </>
  );
};

export default App;
