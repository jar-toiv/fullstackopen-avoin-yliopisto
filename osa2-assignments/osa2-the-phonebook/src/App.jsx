import axios from 'axios';
import { useState, useEffect } from 'react';
import Filter from './components/ContactFilter';
import ContactForm from './components/AddContactForm';
import { Contacts } from './components/Contact';
import contactService from './services/phonebook';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterContact, setFindContact] = useState('');

  const fetchContactsFromDB = () => {
    contactService.getAll().then((initialContactList) => {
      setPersons(initialContactList);
    });
  };
  useEffect(fetchContactsFromDB, []);

  const addContact = (e) => {
    e.preventDefault();
    const newContactObject = {
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
      return alert('Please insert a proper name');
    } else {
      contactService.create(newContactObject).then((returnedObject) => {
        setPersons(persons.concat(returnedObject));
      });
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
