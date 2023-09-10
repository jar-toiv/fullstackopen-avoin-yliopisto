import React from 'react';
import DeleteContact from './DeleteContact';

export const Contacts = ({ personsList, onDelete }) => {
  return (
    <div>
      <ul>
        {personsList.map((person) => (
          <Contact key={person.id} {...person} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
};

export const Contact = ({ name, number, id, onDelete }) => {
  return (
    <li>
      {name} - {number}
      <DeleteContact contactId={id} deleteContact={onDelete} />
    </li>
  );
};
