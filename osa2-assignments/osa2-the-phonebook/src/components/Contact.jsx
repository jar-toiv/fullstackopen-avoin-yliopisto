import React from 'react';

export const Contacts = ({ personsList }) => {
  return (
    <div>
      <ul>
        {personsList.map((person) => (
          <Contact key={person.id} {...person} />
        ))}
      </ul>
    </div>
  );
};

export const Contact = ({ name, number }) => (
  <li>
    {name} - {number}
  </li>
);
