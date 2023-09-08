import React from 'react';

const Filter = ({ filterContact, handleFilterContact }) => {
  return (
    <div>
      Contact search:{' '}
      <input value={filterContact} onChange={handleFilterContact}></input>
    </div>
  );
};
export default Filter;
