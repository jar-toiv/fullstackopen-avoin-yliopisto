import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { contactID: 1, name: 'Kake Randelin' },
  ]);
  const [newName, setNewName] = useState('');

  const addContact = (e) => {
    e.preventDefault();

    const newContactObject = {
      contactID: persons.length + 1,
      name: newName,
    };
    setPersons(persons.concat(newContactObject));
    setNewName('');
  };

  const handleContactChange = (e) => {
    setNewName(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          Name: <input value={newName} onChange={handleContactChange} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Contacts</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.contactID}>{person.name}</li>
        ))}
      </ul>
      <div></div>
    </div>
  );
};

export default App;
