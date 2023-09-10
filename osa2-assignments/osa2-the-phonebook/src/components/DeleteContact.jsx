import React from 'react';

const DeleteContact = ({ deleteContact, contactId }) => {
  return (
    <div style={{ display: 'inline' }}>
      <button onClick={() => deleteContact(contactId)}>Delete</button>
    </div>
  );
};

export default DeleteContact;
