import React from 'react';

const SearchField = ({ input, handleFilterCountry }) => {
  return (
    <div>
      <input
        placeholder="Search"
        value={input}
        onChange={handleFilterCountry}
      />
    </div>
  );
};

export default SearchField;
