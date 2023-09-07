import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { key: 1, name: 'Kake Randelin', number: '040-123456', contactID: 1 },
    { key: 2, name: 'Irwin Goodman', number: '39-44-5323523', contactID: 2 },
    { key: 3, name: 'Kirka Saatana', number: '12-43-234345', contactID: 3 },
    { key: 4, name: 'Lemmy Kilmister', number: '39-23-6423122', contactID: 4 },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const addContact = (e) => {
    e.preventDefault();

    const newContactObject = {
      key: persons.length + 1,
      contactID: persons.length + 1,
      name: newName,
      number: newNumber,
    };

    for (const person of [...persons]) {
      if (person.name === newContactObject.name) {
        return alert(`Contact ${person.name} is already in phonebook`);
      }
    }
    if (
      newContactObject.name === null ||
      newContactObject.name === undefined ||
      newContactObject.name === '' ||
      newContactObject.name === ' '
    ) {
      return alert('Please insert proper name');
    } else {
      setPersons(persons.concat(newContactObject));
    }
    setNewName('');
    setNewNumber('');
  };

  const handleContactChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          Name:
          <input value={newName} onChange={handleContactChange} />
        </div>
        <div>
          Number:
          <input value={newNumber} onChange={handleNumberChange}></input>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Contacts</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.key}>
            {person.name} - {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
