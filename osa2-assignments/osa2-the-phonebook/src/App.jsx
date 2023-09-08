import { useState } from 'react';
import Filter from './components/ContactFilter';
import ContactForm from './components/AddContactForm';
import { Contacts } from './components/Contact';

const App = () => {
  const [persons, setPersons] = useState([
    { key: 1, name: 'Kake Randelin', number: '040-123456', contactID: 1 },
    { key: 2, name: 'Irwin Goodman', number: '39-44-5323523', contactID: 2 },
    { key: 3, name: 'Kirka Saatana', number: '12-43-234345', contactID: 3 },
    { key: 4, name: 'Lemmy Kilmister', number: '39-23-6423122', contactID: 4 },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterContact, setFindContact] = useState('');

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

  const handleFilterContact = (e) => {
    setFindContact(e.target.value);
  };

  const filteredContacts = persons.filter((person) =>
    person.name.toLowerCase().includes(filterContact.toLocaleLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        filterContact={filterContact}
        handleFilterContact={handleFilterContact}
      />
      <h2>Add Contact</h2>
      <ContactForm
        addContact={addContact}
        handleContactChange={handleContactChange}
        handleNumberChange={handleNumberChange}
        newName={newName}
        newNumber={newNumber}
      />
      <h2>Contacts:</h2>
      <Contacts personsList={filteredContacts} />
    </div>
  );
};

export default App;
