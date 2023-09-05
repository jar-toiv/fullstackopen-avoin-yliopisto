const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
    </div>
  );
};

const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

const Content = ({ parts }) => {
  return (
    <div>
      <ul>
        {parts.map((part) => (
          <li key={part.id}>
            <Part partName={part.name} partExercises={part.exercises} />
          </li>
        ))}
      </ul>
      <TotalExercises allParts={parts} />
    </div>
  );
};

const Part = ({ partName, partExercises }) => {
  return (
    <p>
      {partName}: {partExercises}
    </p>
  );
};

const TotalExercises = ({ allParts }) => {
  const sumOfExercises = allParts.reduce(
    (sum, part) => sum + part.exercises,
    0
  );
  return <h3>Total of {sumOfExercises} exercises.</h3>;
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
      {
        name: 'Test Course Part',
        exercises: 5,
        id: 4,
      },
    ],
  };

  return (
    <div>
      <Course course={course} />
    </div>
  );
};

export default App;
