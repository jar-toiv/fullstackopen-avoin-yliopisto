export const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
    </div>
  );
};

export const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

export const Content = ({ parts }) => {
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

export const Part = ({ partName, partExercises }) => {
  return (
    <p>
      {partName}: {partExercises}
    </p>
  );
};

export const TotalExercises = ({ allParts }) => {
  const sumOfExercises = allParts.reduce(
    (sum, part) => sum + part.exercises,
    0
  );
  return <h3>Total of {sumOfExercises} exercises.</h3>;
};
