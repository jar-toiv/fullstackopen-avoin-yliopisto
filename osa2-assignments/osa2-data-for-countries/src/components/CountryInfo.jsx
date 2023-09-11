import React from 'react';

const CountryInfo = ({ country }) => {
  const languagesArray = Object.values(country.languages);

  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital}</p>
      <p>Population:{country.population}</p>

      <h3>Languages:</h3>

      <ul>
        {languagesArray.map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>

      <img src={country.flags.png} alt={country.flags.alt} />
    </div>
  );
};

export default CountryInfo;
