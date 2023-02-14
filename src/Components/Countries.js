import React from 'react';

const Countries = ({ countries, setSearchCountry }) => {
  return countries.length >= 10 ? (
    'Too many matches, specify another filter'
  ) : (
    <ul className="countries">
      {countries.map((country) => {
        const official = country.name.official;
        const name = country.name.common;
        return (
          <li className="li" key={official}>
            {name}{' '}
            <button
              className="button-countries"
              onClick={() => setSearchCountry(name)}
            >
              <span class="material-symbols-outlined">visibility</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Countries;
