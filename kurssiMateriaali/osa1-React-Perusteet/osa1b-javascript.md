# Javascript

[Ecman linkki](https://www.ecma-international.org/)
[MDN docit javascriptille](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

It is important to not alter original data. That's why [concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) is good method (immutable).
[Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method also won't alter original data, but creates a new array.

### Array

```
concat:

const t = [1, -1, 3]

const t2 = t.concat(5)

console.log(t)  // tulostuu [1, -1, 3]
console.log(t2) // tulostuu [1, -1, 3, 5]


map:

const t = [1, 2, 3]

const m1 = t.map(value => value * 2)
console.log(m1)   // tulostuu [2, 4, 6]

map2:

const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)
// tulostuu [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ]


```

### Object

```
const object1 = {
  name: 'Arto Hellas',
  age: 35,
  education: 'Filosofian tohtori',
}

console.log(object1.name)         // tulostuu Arto Hellas
const fieldName = 'age'
console.log(object1[fieldName])    // tulostuu 35

Adding field into object:

object1.address = 'Tapiola'
object1['secret number'] = 12341


```

### Function

Note: arrow function does not have its on this. word.

Using map to square elements in an array

```
const t = [1, 2, 3]
const tSquared = t.map(p => p * p)
// tSquared on nyt [1, 4, 9]

```

## console.log tip

log the props in Component to get value and type

# Exercise 1.3 Notes.

### Step 1: Define Object Data in App

There is two objects App component: part1 and part2. Each object has properties name and exercises.

### Step 2: Pass Objects to Content

Pass objects to the Content component named as: part1={part1} and part2={part2}.

### Step 3: Access Object Data in Content

Content component receives these objects (part1 and part2) as props. Properties (name and exercises) can be accessed using dot notation.

### Step 4: Pass Object Properties to Part

Within Content component, use Part component to display the data. Pass the name and exercises of each part object to the Part component, setting them as the part and exercises props.

### Step 5: Render Data in Part

The Part component receives the part and exercises props and renders them.

```
const Part = ({ part, exercises }) => {
return (
<div>
<p>
{part}
{exercises}
</p>
</div>
);
};
----
const Content = ({ part1, part2}) => {
return (
<>
<Part part={part1.name} exercises={part1.exercises} />
<Part part={part2.name} exercises={part2.exercises} />
</>
);
};
----
const App = () => {
const part1 = {
name: 'Fundamentals of React',
exercises: 10,
};
const part2 = {
name: 'Using props to pass data',
exercises: 7,
};
return (
<div>
<Content part1={part1} part2={part2} />
</div>
);
};
```

## Exercise 1.5

Last programming exercise of part 1 a.

### Header Component

Takes a course object as a prop and renders the name of the course inside an HTML <h1> tag.

### Part Component

Takes a course object as a prop, but the object here is a "part" of a course. It renders the name of the part and the number of exercises in it.

### Content Component

Also takes a course object as a prop and uses the Part component to display each individual part of the course. Renders three parts of the course using the Part component.

### Total Component

Takes a course object as a prop and calculates the total number of exercises for all parts of the course using the reduce() function.

### App Component

It defines a course object with its name and parts, and then uses the Header, Content, and Total components to render the complete layout.

```
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
      <p>{course.name} {course.exercises}</p>
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
```

## Objects, methods and [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)-keyword

More info:

- [Egghead](https://egghead.io/courses/understand-javascript-s-this-keyword-in-depth)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [UDKJS kirja](https://github.com/getify/You-Dont-Know-JS)
- [Javascript.info](https://javascript.info/)

**Course uses React hooks, so this word is not in the scope.**

Example of this inside an object.

```
const arto = {
  name: 'Arto Hellas',
  age: 35,
  education: 'Filosofian tohtori',
  greet: function() {
    console.log('hello, my name is', this.name)
  },
}

arto.greet()  // tulostuu hello, my name is Arto Hellas
```

Using **bind** to bind **this** into a setTimeout. Now it won't get "lost".

```
setTimeout(arto.greet.bind(arto), 1000)
// sekunnin päästä tulostuu hello, my name is Arto Hellas
```

## Class

Javascript itself does not have a class. Only Number, String, Boolean, Null, Undefined, Symbol, BigInt and Object.
Class has Object body, but it can be extended. If you extend class remember to all super() from parent Class.

```
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  greet() {
    console.log('hello, my name is', this.name)
  }
}

const arto = new Person('Arto Hellas', 35)
arto.greet()

const juha = new Person('Juha Tauriainen', 48)
juha.greet()
```
