import { useState } from 'react';

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticLine = ({ vote }) => <div>{vote}</div>;

const Statistics = ({ votes, selected }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>
              <StatisticLine vote={votes[selected] || 0} />{' '}
            </td>
            <td>Votes</td>
          </tr>
        </thead>
      </table>
    </div>
  );
};
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.',
  ];

  const [selected, setSelected] = useState(0);
  const [votedAnecdotes, setVotedAnecdotes] = useState([0]);

  const getRandomAnecdote = () => {
    const randomAnecdoteIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomAnecdoteIndex);
  };

  const voteAnecdote = () => {
    setVotedAnecdotes((votedAnecdotes) => {
      const newVotes = [...votedAnecdotes];
      newVotes[selected] = (newVotes[selected] || 0) + 1;
      return newVotes;
    });
  };

  return (
    <>
      <div>
        <Button handleClick={getRandomAnecdote} text={'Anecdote'} />
        <Button handleClick={voteAnecdote} text={'Vote'} />
        <Statistics votes={votedAnecdotes} selected={selected} />
      </div>
      <div>{anecdotes[selected]}</div>
    </>
  );
};

export default App;
