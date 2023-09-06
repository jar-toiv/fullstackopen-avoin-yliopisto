# Forms

```
import { useState } from 'react';
import Note from './components/Note';

const App = (props) => {
const [notes, setNotes] = useState(props.notes);
const [newNote, setNewNote] = useState();
const [showAll, setShowAll] = useState(true);

const addNote = (event) => {
event.preventDefault();

    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };

    setNotes(notes.concat(noteObject));
    setNewNote('');

};

const handleNoteChange = () => {
console.log(event.target.value);
setNewNote(event.target.value);
};

const notesToShow = showAll ? notes : notes.filter((note) => note.important);

return (

<div>
    <h1>Notes</h1>
<div>
    <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? 'important' : 'all'}
    </button>
</div>

    <ul>
        {notesToShow.map((note) => (
        <Note key={note.id} note={note} />
    ))}
    </ul>

    <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">Save</button>
    </form>

</div>
);
};

export default App;
```

- CONTROLLED COMPONENTS: https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable
- <form onSubmit={addNote}>
    <input value={newNote} />
    <button type="submit">Save</button>
  </form>

- taking newNote via input value attribute
- To enable editing of the input element, we have to register an event handler that synchronizes the changes made to the input with the component's state
- Note that we did not need to call the event.preventDefault() method like we did in the onSubmit event handler.
- This is because no default action occurs on an input change, unlike a form submission.

  const addNote = (event) => {
  event.preventDefault();
  const noteObject = {
  content: newNote,
  important: Math.random() < 0.5,
  id: notes.length + 1,
  };

  setNotes(notes.concat(noteObject));
  setNewNote('');
  };

- prevent default form => create note OBJ => remember to increment with 1 => add to NEW Array or object => reset inputField
-
- Filtering Displayed elements
  const [showAll, setShowAll] = useState(true)
  \*\* Note the filter method below is redundant since it checks true of false. remove === true
  const notesToShow = showAll
  ? notes
  : notes.filter(note => note.important === true)
- const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  \*\* Button with textfield ternary operator
  <div>
    <button onClick={() => setShowAll(!showAll)}>
      show {showAll ? 'important' : 'all' }
    </button>
  </div>

- \*/
