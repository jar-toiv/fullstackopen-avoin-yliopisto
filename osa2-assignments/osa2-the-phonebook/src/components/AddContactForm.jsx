import React from 'react';

const ContactForm = ({
  addContact,
  newName,
  newNumber,
  handleContactChange,
  handleNumberChange,
}) => {
  return (
    <div>
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
    </div>
  );
};

export default ContactForm;
