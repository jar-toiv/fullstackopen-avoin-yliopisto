import React from 'react';

const ContactForm = ({
  newName,
  newNumber,
  handleContactChange,
  handleNumberChange,
  determineAction,
}) => {
  return (
    <div>
      <form onSubmit={determineAction}>
        <div>
          Name:
          <input value={newName} onChange={handleContactChange} />
        </div>
        <div>
          Number:
          <input value={newNumber} onChange={handleNumberChange}></input>
        </div>
        <div>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
