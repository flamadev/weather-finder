import './App.css';
import { useState } from 'react';
import Filter from './Components/Filter';
import Country from './Components/Country';
import Countries from './Components/Countries';

function App() {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState('');
  const URL_API_COUNTRIES = 'https://restcountries.com/v3.1';

  function handleInputSearch(e) {
    e.target.value.length > 0
      ? fetch(`${URL_API_COUNTRIES}/all`)
          .then((response) => response.json())
          .then((countries) => setCountries(countries))
      : setCountries([]);
    setSearchCountry(e.target.value);
  }

  let countriesToShow = [];
  for (const country of countries) {
    const name = country.name.common;
    if (name.toUpperCase() === searchCountry.toUpperCase()) {
      countriesToShow = [country];
      break;
    }
    if (name.toUpperCase().includes(searchCountry.toUpperCase()))
      countriesToShow.push(country);
  }

  return (
    <div className="main-container">
      <Filter
        handleInputSearch={handleInputSearch}
        searchInputValue={searchCountry}
      />
      {countriesToShow.length ? (
        <div className="container">
          {countriesToShow.length === 1 ? (
            <Country country={countriesToShow[0]} />
          ) : (
            <Countries
              countries={countriesToShow}
              setSearchCountry={setSearchCountry}
            />
          )}
        </div>
      ) : null}
    </div>
  );
}

export default App;
