import contactService from './services/phonebook';
import { useState, useEffect } from 'react';
import Filter from './components/ContactFilter';
import ContactForm from './components/AddContactForm';
import { Contacts } from './components/Contact';
import Notification from './components/Notification';
import handleServiceError from './utils/errorHandler';
/**
 *
 * contactService acts as a backend com.
 */

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterContact, setFindContact] = useState('');
  const [message, setMessage] = useState({ type: null, contact: null });

  const fetchContactsFromDB = () => {
    contactService.getAll().then((initialContactList) => {
      setPersons(initialContactList);
    });
  };

  useEffect(fetchContactsFromDB, []);

  const determineAddContactOrUpdate = (e) => {
    e.preventDefault();
    const existingContact = persons.find((person) => person.name === newName);

    if (!existingContact) {
      addContact(e);
    } else {
      const contactId = existingContact.id;
      handleUpdate(e, contactId);
    }
  };

  const addContact = (e) => {
    e.preventDefault();

    const newContactObject = {
      name: newName,
      number: newNumber,
    };

    for (const person of [...persons]) {
      if (person.name === newContactObject.name) {
        return setMessage({
          type: 'error',
          content: `Contact ${person.name} is already in phonebook.`,
        });
      }
    }

    if (!newContactObject || newContactObject.name.trim() === '') {
      return setMessage({
        type: 'error',
        content: 'Please insert a proper name',
      });
    } else {
      contactService
        .create(newContactObject)
        .then((returnedContact) => {
          setPersons((prevPersons) => {
            const updatedPersons = prevPersons.concat(returnedContact);
            return updatedPersons;
          });

          setMessage({ type: 'success', content: `Added contact ${newName}` });

          setTimeout(() => {
            setMessage({ type: null, contact: null });
          }, 2000);
        })
        .catch((error) => {
          const errorMessage = handleServiceError(error);
          setMessage({ type: 'error', content: errorMessage });

          setTimeout(() => {
            setMessage({ type: null, content: null });
          }, 3000);
        });

      setNewName('');
      setNewNumber('');
    }
  };

  const handleDelete = (contactId) => {
    const findContact = persons.find((person) => person.id === contactId);
    const filterContact = persons.filter((person) => person.id !== contactId);

    if (window.confirm(`Delete contact ${findContact.name} ?`)) {
      contactService
        .deleteContact(contactId)
        .then(() => {
          setPersons(filterContact);
          setMessage({
            type: 'success',
            content: `Deleted contact`,
          });

          setTimeout(() => {
            setMessage({ type: null, contact: null });
          }, 2000);
        })
        .catch((error) => {
          setMessage({
            type: 'error',
            content: `Contact ${findContact.name} does not exist`,
          });

          setTimeout(() => {
            setMessage({ type: null, content: null });
          }, 3000);

          fetchContactsFromDB();
        });
    }
  };

  const handleUpdate = (e, contactId) => {
    e.preventDefault();

    const findContact = persons.find((person) => person.id === contactId);
    const updateContactDetails = {
      id: contactId,
      name: newName,
      number: newNumber,
    };

    if (
      window.confirm(
        `${findContact.name} is already added to phonebook, replace the old number with a new one ?`
      )
    ) {
      contactService
        .update(contactId, updateContactDetails)
        .then((updatedContact) => {
          setPersons((persons) =>
            persons.map((person) =>
              person.id === contactId ? updatedContact : person
            )
          );
          setMessage({ type: 'success', contact: `Updated contact number` });
        })
        .catch((error) => {
          const errorMessage = handleServiceError(error);

          setMessage({
            type: 'error',
            content: `Error while updating: ${errorMessage}`,
          });

          setTimeout(() => {
            setMessage({ type: null, content: null });
          }, 3000);
        });
      /**
 * contactService
  .create(newContactObject)
  .then((returnedContact) => {
    setPersons((prevPersons) => {
      const updatedPersons = prevPersons.concat(returnedContact);
      return updatedPersons;
    });

    setMessage({ type: 'success', content: `Added contact ${newName}` });

    setTimeout(() => {
      setMessage({ type: null, contact: null });
    }, 2000);
  })
  .catch((error) => {
    const errorMessage = handleServiceError(error);

    setMessage({ type: 'error', content: errorMessage });

    setTimeout(() => {
      setMessage({ type: null, content: null });
    }, 3000);
  });
 */
      setMessage({
        type: 'success',
        content: `Updated ${newName}'s number successfully`,
      });
      setTimeout(() => {
        setMessage({ type: null, content: null });
      }, 2000);
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
    filterContact
      ? person.name.toLowerCase().includes(filterContact.toLowerCase())
      : true
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={message} />
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
        determineAction={determineAddContactOrUpdate}
      />
      <h2>Contacts:</h2>
      <div>
        <Contacts personsList={filteredContacts} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default App;
