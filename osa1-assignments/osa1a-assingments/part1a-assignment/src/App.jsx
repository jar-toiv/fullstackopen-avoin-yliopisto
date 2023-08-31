const Header = ({ course }) => {
  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  );
};

const Part = ({ course }) => {
  return (
    <div>
      <p>
        {course.name} {course.exercises}
      </p>
    </div>
  );
};

const Content = ({ course }) => {
  return (
    <>
      <Part course={course.parts[0]} />
      <Part course={course.parts[1]} />
      <Part course={course.parts[2]} />
    </>
  );
};

const Total = ({ course }) => {
  const sumOfExercises = course.parts.reduce((acc, part) => {
    return acc + part.exercises;
  }, 0);

  return (
    <div>
      <p>{sumOfExercises}</p>
    </div>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;
