import React from 'react';
import { useState, useEffect } from 'react';
import SearchField from './components/SearchField';
import CountryInfo from './components/CountryInfo';
import CountryList from './components/CountryList';
import { fetchCountries } from './services/api';

function App() {
  const [countries, setCountries] = useState([]);
  const [filterCountry, setFilterCountry] = useState('');

  useEffect(() => {
    fetchCountries().then((data) => setCountries(data));
  }, []);

  const handleFilterCountry = (e) => {
    setFilterCountry(e.target.value);
  };

  const filterCountries = (countryName) => {
    return countries.filter((country) =>
      country.name.common.toLowerCase().includes(countryName.toLowerCase())
    );
  };

  const filteredCountries = filterCountries(filterCountry);

  const renderContent = () => {
    if (filterCountry === '') {
      return null;
    } else if (filteredCountries.length > 10) {
      return <p>Too many results</p>;
    } else if (filteredCountries.length === 1) {
      return <CountryInfo country={filteredCountries[0]} />;
    } else {
      return <CountryList countries={filteredCountries} />;
    }
  };

  return (
    <div>
      <h1>Country Search</h1>
      <SearchField
        input={filterCountry}
        handleFilterCountry={handleFilterCountry}
      />
      {renderContent()}
    </div>
  );
}

export default App;

/**
 * https://studies.cs.helsinki.fi/restcountries/
 * https://studies.cs.helsinki.fi/restcountries/api/all   /api/all
 * https://studies.cs.helsinki.fi/restcountries/api/name/finland   // /api/name/{name}
 */
