import axios from 'axios';

const BASE_URL = 'https://studies.cs.helsinki.fi/restcountries/api/';

export const fetchCountries = () => {
  return axios
    .get(`${BASE_URL}all`)
    .then((res) => res.data)
    .catch((error) => {
      console.log('Error fetching countries', error);
    });
};
