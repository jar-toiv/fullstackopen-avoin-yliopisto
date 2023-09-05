# Rendering a collection, modules

## Refresh topics

### High-order functions

[H-O Functions](https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84)

### Map

[Array Map](https://www.youtube.com/watch?v=bCqtb-Z5YGQ&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=2)

### Reduce basics

[Array Reduce](https://www.youtube.com/watch?v=Wl98eZpkp-c&t=31s)

### Event Handlers Revisited

[link](https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps#event-handling-revisited)

## Rendering collections with Map

Notes = Array with objects in it.
Every object should contain its own key = note.object.id for the map to function properly.
**Using map with (notes, i) => can cause problems with data**
i = map method generated index, which can mess up data when there is element deleted or added.

Remember curlies => {insert Js code here}
Note: Have note.id inside the <li> and content between <li></li> and data keep in curlies.

```
const App = (props) => {
  const { notes } = props

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note =>

          <li key={note.id}>
            {note.content}
          </li>
        )}
      </ul>
    </div>
  )
}

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    important: true
  }
]


```

## Refactoring modules

Export/ import functions

```
const Note = ({ note }) => {
  return (
    <li>{note.content}</li>
  )
}

export default Note
---

import Note from './components/Note'

const App = ({ notes }) => {
  // ...
}


```

## Broken applications

- Log the props function is receiving

Note: Expand the small functions with return (). Then you can log it
Note: no destructring in arguments

```
const App = (props) => {
    **LOG here**(props object)
  const course = {
    // ...
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}
```
