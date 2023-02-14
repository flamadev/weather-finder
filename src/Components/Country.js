import Weather from './Weather';

const Country = ({ country }) => {
  const languages = Object.values(country.languages);
  const countryName = country.name.common;
  const capital = country.capital[0];
  const population = country.population;
  const imrUrl = country.flags.png;

  return (
    <>
      <h2 className="title-country">{countryName}</h2>
      <div>
        <div className="info">
          <div className="info-text">
            <div>
              <h4>Capital: </h4>
              <p>{capital}</p>
            </div>
            <div>
              <h4>Population: </h4>
              <p>{population}</p>
            </div>
            <div>
              <h4>Languages</h4>
              <ul>
                {languages.map((language) => {
                  return (
                    <li className="li-languages" key={language}>
                      {language}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="info-image">
            <img className="flag" src={imrUrl} alt="flag" />
          </div>
          <Weather country={countryName} />
        </div>
      </div>
    </>
  );
};

export default Country;
